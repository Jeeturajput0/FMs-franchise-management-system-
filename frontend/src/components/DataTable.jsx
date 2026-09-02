import React, { useState } from "react";
import { Search, Eye, Edit3, Trash2, ChevronLeft, ChevronRight, Plus, Filter } from "lucide-react";
import Badge from "./Badge";
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
  const itemsPerPage = 6;

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
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
        <div>
          {title && <h3 className="text-base font-bold text-slate-900">{title}</h3>}
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search records..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-800"
            />
          </div>

          {filterOptions.length > 0 && (
            <div className="relative">
              <select
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                  setCurrentPage(1);
                }}
                className="text-xs px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 text-slate-700 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="all">All Roles / Status</option>
                {filterOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {actionButtonLabel && (
            <button
              type="button"
              onClick={onActionButtonClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{actionButtonLabel}</span>
            </button>
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
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-bold uppercase border-b border-slate-200/80 text-[10px] tracking-wider">
                {columns.map((col, idx) => (
                  <th key={idx} className="p-3.5">
                    {col.header}
                  </th>
                ))}
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedData.map((row, rIdx) => (
                <tr key={row.id || rIdx} className="hover:bg-amber-50/20 transition-colors">
                  {columns.map((col, cIdx) => (
                    <td key={cIdx} className="p-3.5 text-slate-800">
                      {col.render ? (
                        col.render(row)
                      ) : col.isBadge ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {row[col.accessor]}
                        </span>
                      ) : (
                        <span className="font-semibold">{row[col.accessor]}</span>
                      )}
                    </td>
                  ))}
                  <td className="p-3 text-right">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredData.length > itemsPerPage && (
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
          </span>
          <div className="flex items-center gap-1.5">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-600"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-2 font-bold text-slate-800">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-600"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
