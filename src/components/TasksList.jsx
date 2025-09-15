import Task from "./Task";

export default function TasksList({data}) {
 
  //   if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <ul className="flex flex-wrap justify-evenly">
        {data.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
