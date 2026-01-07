
import axios from "axios";

export default async function Todobar() {
  const data = await axios.get("http://localhost:3000/api/v1/todo");
  const todos = data.data.data;

  interface TodoFrame {
    id: number,
    title: string,
    description: string,
    done: boolean
  }
  return (
    <div>

      {todos.map((todo: TodoFrame) => (
        <div className=
          "h-15 bg-slate-600 shadow-emerald-950 flex justify-between items-center text-xl rounded-xl m-3 pl-4 text-white font-serif ">
          <div>
            <h2 className="flex justify-start font-mono" key={todo.id} >{todo.title}</h2>
            {/* <p className="flex justify-start font-extralight text-sm" key={Math.random()}>{todo.description}</p> */}
          </div>

          <div className="">
            <button className=
              "bg-teal-600 text-white p-2 m-2 rounded-lg hover:translate-y-1">
              Update
            </button>
            <button className=
              "bg-red-500 text-white p-2 m-2 rounded-lg hover:translate-y-1">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}