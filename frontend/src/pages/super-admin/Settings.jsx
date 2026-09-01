import React from "react";
import SuperAdminLayout from "../../layouts/SuperAdminLayout";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";

export default function Settings() {
  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / SETTINGS"
        title="Global Platform Settings"
        subtitle="System configuration, branding, default fees, and notifications."
      />

      <div className="panel max-w-2xl space-y-4">
        <h3 className="font-bold text-[#25213a] text-base border-b border-gray-100 pb-2">
          Institution Branding & Information
        </h3>

        <div className="grid grid-cols-1 gap-3 text-xs">
          <div>
            <label className="font-semibold block mb-1 text-gray-700">Platform Name</label>
            <input
              type="text"
              defaultValue="AI Scholars Education Network"
              className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1 text-gray-700">Support Contact Email</label>
            <input
              type="email"
              defaultValue="admin@aischolars.in"
              className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1 text-gray-700">Default Royalty Share (%)</label>
            <input
              type="number"
              defaultValue="20"
              className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button onClick={() => alert("Settings saved successfully!")}>
            Save Configuration
          </Button>
        </div>
      </div>
    </SuperAdminLayout>
  );
}

