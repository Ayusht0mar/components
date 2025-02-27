export type Task = {
    id: number;
    label: string;
    completed: boolean;
  };
  
  export const taskData: Task[] = [
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