import React, { useEffect, useState } from "react";
import { supabase } from "../data/supabaseClient";
import Task from "./Task";

export default function TasksList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
  //   if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <ul className="flex flex-wrap">
        {data.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
