import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";

export default function FranchiseRevenue() {
  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / REVENUE"
        title="Gross & Net Operating Income"
        subtitle="Detailed financial breakdowns of student fees, royalty deductions, and profitability."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Gross Center Billing" value="₹24.8 L" change="+18.4%" icon="wallet" tone="green" />
        <StatCard label="Net Operating Profit" value="₹19.23 L" change="+21.2%" icon="chart" tone="violet" />
        <StatCard label="Profit Margin" value="77.5%" change="+3.2%" icon="award" tone="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Monthly Profit & Loss"
          subtitle="Monthly net profit trajectory"
          bars={[55, 68, 75, 82, 90, 96]}
          labels={["Apr", "May", "Jun", "Jul", "Aug", "Sep"]}
        />
        <ChartCard
          title="Revenue by AI Course"
          subtitle="Python AI Pro vs Data Science vs Full Stack"
          bars={[88, 62, 45, 78, 55, 60]}
          labels={["Py AI", "DS", "FS AI", "GenAI", "Robo", "MLOps"]}
        />
      </div>
    </div>
  );
}
