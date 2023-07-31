import { create } from 'zustand'
import { TodoItemProps } from "../components/Content/Content";
import { loadState, saveState } from '../local-storage';

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
  addTodo: (todo: TodoItemProps) => {
    set((state: GlobalStore) => ({ todoList: [...state.todoList, todo] }));
    saveState({...loadState(), todoList: [...loadState().todoList, todo]})
  },
  checkTodo: (todo: TodoItemProps) => {
    set((state: GlobalStore) => ({ todoList: [...state.todoList.filter((item) => item !== todo)] }));
    set((state: GlobalStore) => ({ finishedList: [...state.finishedList, todo] }));
    saveState({...loadState(), todoList: [...loadState().todoList.filter((item:TodoItemProps) => item !== todo)]})
  },
  addFinished: (todo: TodoItemProps) =>
    set((state:GlobalStore) => ({ finishedList: [...state.finishedList, todo] })),
  addDeleted: (todo: TodoItemProps) =>
    set((state:GlobalStore) => ({ deletedList: [...state.deletedList, todo] })),
}))

export default useGlobalStore;
