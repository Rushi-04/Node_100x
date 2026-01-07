import prisma from "@/lib/prisma";
import Todobar from "./Todobar";

interface TodoLook {
    title: string,
    description?: string,
    done?: boolean,
    userId: number
}

async function addTodo({title, userId}: TodoLook){
    const Todo = await prisma.todo.create({
        data: {
            title: title,
            description: "same description",
            userId: 5
        }
        })
}
/*
    id: number;
    title: string;
    description: string;
    done: boolean;
    userId: number;
*/

export default async function Main() {
    return (
        <div className="flex justify-center items-center h-screen">

      <div className="bg-neutral-200 h-160 w-370 rounded-xl grid grid-rows-8">
        <div className="m-2 rounded-xl row-span-1 content-center ">
          <h1 className="text-black font-serif text-3xl text-center pt-5">
            To do List
          </h1>
        </div>
        <div className="bg-neutral-300 mx-4 mb-2 rounded-xl row-span-6 shadow-xl border border-emerald-800 ">
          <Todobar />
        </div>
        <div className="m-2 rounded-xl row-span-1">

          <input
            type="text"
            placeholder="Input To do here..."
            className="border focus:outline-none border-black m-2 p-3 shadow-xl rounded-2xl w-7xl text-black font-serif" />

          <button
            className="bg-blue-700 p-2 rounded-xl shadow-2xl  mr-0 w-40 h-12 hover:translate-y-1"
          >Add Todo</button>
        </div>
      </div>
    </div>
    )
}