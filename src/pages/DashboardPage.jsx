import React from "react";
import Robot from "../components/Robot";
import AppSidebar from "../components/AppSidebar";

export default function DashboardPage() {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="w-full">
        <p className="text-center">Dashboard</p>
      </div>
    </div>
  );
}
