import { create } from 'zustand'
import { TodoItemProps } from "../components/Content/Content";
import { loadState } from "../local-storage";

export interface GlobalStore {
  todoList: TodoItemProps[]
  finishedList: TodoItemProps[]
  deletedList: TodoItemProps[]
  addTodo: (todo: TodoItemProps) => void
  addFinished: (todo: TodoItemProps) => void
  addDeleted: (todo: TodoItemProps) => void
}
const useGlobalStore = create((set) => ({
  todoList: loadState().todoList || [],
  finishedList: loadState().finishedList || [],
  deletedList: loadState().finishedList || [],
  addTodo: (todo: string) => {
    set((state: GlobalStore) => ({ todoList: [...state.todoList, todo] }));

  },
  addFinished: (todo: string) =>
    set((state:GlobalStore) => ({ finishedList: [...state.finishedList, todo] })),
  addDeleted: (todo: string) =>
    set((state:GlobalStore) => ({ deletedList: [...state.deletedList, todo] })),
}))

export default useGlobalStore;
