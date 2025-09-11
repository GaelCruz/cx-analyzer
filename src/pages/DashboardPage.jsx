import React, { useState } from "react";
import Robot from "../components/Robot";
import AppSidebar from "../components/AppSidebar";
import DataFetcher from "../components/TasksList";
import TasksList from "../components/TasksList";
import AddNewTask from "../components/AddNewTask";
import Button from "../components/Button";
import { add } from "three/tsl";

export default function DashboardPage() {
  const [addNewTaskIsActive, setAddNewTaskIsActive] = useState(false);
  return (
    <div className="flex relative">
      <AppSidebar />
      <div className="flex justify-center w-full">
        <div className="w-[80vw]">
          <div
            className="flex justify-between items-center my-5"
            style={{ border: "0 0 1 0", borderBlockColor: "white" }}
          >
            <h1 className="text-6xl font-bold">Dashboard</h1>
            <div onClick={() => setAddNewTaskIsActive(true)}>
              <Button
                children={"New +"}
              />
            </div>
          </div>
          <TasksList />
        </div>
      </div>
      <AddNewTask
        setAddNewTaskIsActive={setAddNewTaskIsActive}
        addNewTaskIsActive={addNewTaskIsActive}
      />
    </div>
  );
}
