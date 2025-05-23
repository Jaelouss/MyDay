import { useBookmarksStore } from "./bookmarksStore";

export const useBookmarks = () => useBookmarksStore((state) => state.bookmarks);
export const useAddBookmark = () =>
  useBookmarksStore((state) => state.addBookmarks);
export const useDeleteBookmark = () =>
  useBookmarksStore((state) => state.deleteBookmarks);
export const useEditBookmark = () =>
  useBookmarksStore((state) => state.editBookmarks);
