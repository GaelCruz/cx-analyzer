import React, { useState, useEffect } from "react";
import AppSidebar from "../components/AppSidebar";
import TasksList from "../components/TasksList";
import AddNewTask from "../components/AddNewTask";
import Button from "../components/Button";
import { useTasks } from "../components/TasksContext";

export default function DashboardPage() {

  const {data, loading} = useTasks()
  
  const [addNewTaskIsActive, setAddNewTaskIsActive] = useState(false);

  
  if (loading) return <p>Loading...</p>;

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
              <Button children={"New +"} />
            </div>
          </div>
          <TasksList data={data} />
        </div>
      </div>
      <AddNewTask
        setAddNewTaskIsActive={setAddNewTaskIsActive}
        addNewTaskIsActive={addNewTaskIsActive}
      />
    </div>
  );
}
