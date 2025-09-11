import React from "react";

export default function Task({item}) {
  return (
    <li key={item.id} className="bg-zinc-800 p-2 rounded-md shadow-md hover:shadow-md">
      <strong>Text:</strong> {item.task}
      <br />
      <strong>Description:</strong> {item.description}
      <br />
      <small>Created At: {new Date(item.created_at).toLocaleString()}</small>
    </li>
  );
}
