import React, { useState, useEffect } from "react";
import Robot from "../components/Robot";
import { supabase } from "../data/supabaseClient";
import AppSidebar from "../components/AppSidebar";
import DataFetcher from "../components/TasksList";
import TasksList from "../components/TasksList";
import AddNewTask from "../components/AddNewTask";
import Button from "../components/Button";
import { add } from "three/tsl";

export default function DashboardPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addNewTaskIsActive, setAddNewTaskIsActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: items, error } = await supabase
          .from("tasks")
          .select("id, task, description, created_at");

        setData(items);
      } catch {
        throw new Error("error fetching data from supabase");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
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
