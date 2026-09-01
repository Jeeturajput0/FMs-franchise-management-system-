import React from "react";
import Icon from "./Icon";
import Button from "./Button";

export default function EmptyState({
  title = "No data found",
  message = "There are no items matching your criteria.",
  icon = "folder",
  actionText,
  onAction,
}) {
  return (
    <section className="empty-page border border-dashed border-[#dcd7e7] rounded-xl p-8 min-h-[280px] flex flex-col items-center justify-center text-center bg-white">
      <div className="empty-icon bg-[#efeaff] text-[#7356d8] rounded-2xl p-4 mb-3">
        <Icon name={icon} size={28} />
      </div>

      <h2 className="text-base font-bold text-[#25213a] mb-1">{title}</h2>
      <p className="text-xs text-[#858092] max-w-sm mb-4">{message}</p>

      {actionText && (
        <Button icon="plus" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </section>
  );
}

