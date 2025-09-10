import React from "react";
import AppSidebar from "../components/AppSidebar";

export default function SettingsPage() {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="w-full">
        <p className="text-center">Settings</p>
      </div>
    </div>
  );
}
