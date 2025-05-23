import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBookmarksStore = create(
  persist((set) => ({
    bookmarks: [],
    addBookmarks: (task) =>
      set((state) => ({
        bookmarks: [
          ...state.bookmarks,
          { id: nanoid(), title: task.title, url: task.text },
        ],
      })),
    editBookmarks: (id, editedBookmarks) =>
      set((state) => ({
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === id
            ? {
                ...bookmark,
                title: editedBookmarks.title,
                url: editedBookmarks.text,
              }
            : bookmark
        ),
      })),
    deleteBookmarks: (id) =>
      set((state) => ({
        bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== id),
      })),
  }))
);
