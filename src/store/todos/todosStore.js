import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist((set) => ({
    todos: [],
    addTodo: (task) =>
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            title: task.title,
            text: task.text,
            complete: false,
          },
        ],
      })),
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, complete: !todo.complete } : todo
        ),
      })),
    editTodo: (id, editedTodo) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id
            ? { ...todo, title: editedTodo.title, text: editedTodo.text }
            : todo
        ),
      })),
    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  }))
);
