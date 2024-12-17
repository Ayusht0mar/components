"use client"

import { MutableRefObject, useRef, useState } from "react";
// Install Checkbox from shadcn Ui
import { Checkbox } from "@/components/ui/checkbox";
import { Reorder, useDragControls } from "framer-motion";

type List = {
    id: number;
    label: string;
    completed: boolean;
  };

const listData: List[] = [
    {
      id: 1,
      label: "Learn Next.js",
      completed: true,
    },
    {
      id: 2,
      label: "Learn Tailwind",
      completed: true,
    },
    {
      id: 3,
      label: "Learn Framer Motion",
      completed: false,
    },
    {
      id: 4,
      label: "Make $1M dollars",
      completed: false,
    },
  ];


const SortableList = () => {
    const container = useRef(null);

    const [tasks, setTasks] = useState(listData);

    const toggleTask = (id: number) => {
        const newTasks = [...tasks];
        const idx = tasks.findIndex((val) => val.id === id);
            if (idx != -1) {
        newTasks[idx].completed = !tasks[idx].completed;
        }
        setTasks(newTasks);
    };

    return ( 
        <div className="flex items-center justify-center min-h-screen p-8">
        <div className="flex flex-col gap-8 w-2/5 min-w-72 border-neutral-100 border-2 rounded-xl p-8 shadow-xl">
          <h1 className="text-4xl font-semibold">Tasks</h1>
          <Reorder.Group className="space-y-1" values={tasks} onReorder={setTasks} ref={container}>
            {tasks.map((t) => (
              <TaskItem
                task={t}
                key={t.id}
                toggleTaskComplete={() => toggleTask(t.id)}
                container={container}
              />
            ))}
          </Reorder.Group>
        </div>
      </div>
     );
}


 
const TaskItem = ({
  task,
  toggleTaskComplete,
  container
}: {
  task: List;
  container: MutableRefObject<null>
  toggleTaskComplete: () => void;
}) => {

    const controls = useDragControls()
  return (
    <Reorder.Item 
        value={task} 
        className="flex items-center gap-2 px-3 py-2 bg-white border rounded"
        dragListener={false}
        dragControls={controls}
        dragConstraints={container}
        dragElastic={0.1}
        whileDrag={{               
          backgroundColor: "#000",
          color:"#fff"
        }}
        >
      <Checkbox
        id={`task-${task.id}`}
        checked={task.completed}
        onCheckedChange={toggleTaskComplete}
      />
      <div className="flex-1" onPointerDown={(e) => controls.start(e)}>
        <label
          htmlFor={`task-${task.id}`}
          className={`font-normal select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            task.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {task.label}
        </label>
      </div>
    </Reorder.Item>
  );
};

export default SortableList;