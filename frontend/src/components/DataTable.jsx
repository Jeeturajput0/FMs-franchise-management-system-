import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Badge from "./Badge";
import Button from "./Button";
import Icon from "./Icon";
import EmptyState from "./EmptyState";

export default function DataTable({
  title,
  subtitle,
  columns = [],
  data = [],
  searchKey = "name",
  actionButtonLabel,
  onActionButtonClick,
  filterOptions = [],
  renderActions,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = data.filter((row) => {
    const term = searchTerm.toLowerCase();
    const searchMatch = Object.values(row).some(
      (val) => val && val.toString().toLowerCase().includes(term)
    );

    const filterMatch =
      filterValue === "all" ||
      (row.role && row.role === filterValue) ||
      (row.status && row.status.toLowerCase().includes(filterValue.toLowerCase()));

    return searchMatch && filterMatch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="panel bg-white border border-[#ededf3] rounded-xl p-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-gray-100">
        <div>
          {title && <h3 className="text-base font-bold text-[#25213a]">{title}</h3>}
          {subtitle && <p className="text-xs text-[#858091] mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <SearchInput
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search records..."
            className="w-full sm:w-60"
          />

          {filterOptions.length > 0 && (
            <select
              value={filterValue}
              onChange={(e) => {
                setFilterValue(e.target.value);
                setCurrentPage(1);
              }}
              className="text-xs px-3 py-2 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#7154db]"
            >
              <option value="all">All Roles / Status</option>
              {filterOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          {actionButtonLabel && (
            <Button icon="plus" size="sm" onClick={onActionButtonClick}>
              {actionButtonLabel}
            </Button>
          )}
        </div>
      </div>

      {paginatedData.length === 0 ? (
        <EmptyState
          title="No records found"
          message="No data matching your search query or active filter."
          actionText={actionButtonLabel}
          onAction={onActionButtonClick}
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#faf9fc] text-[#6c687b] font-bold uppercase border-b border-[#e7e5ed] text-[11px]">
                {columns.map((col, idx) => (
                  <th key={idx} className="p-3">
                    {col.header}
                  </th>
                ))}
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0eff4]">
              {paginatedData.map((row, rIdx) => (
                <tr key={row.id || rIdx} className="hover:bg-[#fcfbfe] transition-colors">
                  {columns.map((col, cIdx) => (
                    <td key={cIdx} className="p-3 text-[#25213a]">
                      {col.render ? (
                        col.render(row)
                      ) : col.isBadge ? (
                        <Badge>{row[col.accessor]}</Badge>
                      ) : (
                        <span className="font-medium">{row[col.accessor]}</span>
                      )}
                    </td>
                  ))}
                  <td className="p-3 text-right">
                    {renderActions ? (
                      <div className="flex items-center justify-end gap-1">{renderActions(row)}</div>
                    ) : (
                      <div className="flex items-center justify-end gap-1">
                        <button
                          title="View Details"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-[#7154db] hover:bg-[#f0ebff] transition-colors"
                        >
                          <Icon name="eye" size={15} />
                        </button>
                        <button
                          title="Edit"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-[#7154db] hover:bg-[#f0ebff] transition-colors"
                        >
                          <Icon name="edit" size={15} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredData.length > itemsPerPage && (
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
          </span>
          <div className="flex items-center gap-1">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-2.5 py-1 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="px-2 font-semibold text-[#25213a]">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-2.5 py-1 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

