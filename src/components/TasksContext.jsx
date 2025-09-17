import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../data/supabaseClient";
import { useUser } from "@clerk/clerk-react";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    try {
      fetchData();
    } catch {
      throw new Error("Error with UseEffect");
    }
  }, []);

  const value = {
    data,
    loading,
    fetchData,
  };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
export const useTasks = () => {
  return useContext(TasksContext);
};
