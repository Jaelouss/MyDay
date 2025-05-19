import { useTodoStore } from "./todosStore";

export const useTodos = () => useTodoStore((state) => state.todos);
export const useAddTodos = () => useTodoStore((state) => state.addTodo);
export const useToggleTodos = () => useTodoStore((state) => state.toggleTodo);
export const useDeleteTodos = () => useTodoStore((state) => state.deleteTodo);
export const useEditTodos = () => useTodoStore((state) => state.editTodo);
