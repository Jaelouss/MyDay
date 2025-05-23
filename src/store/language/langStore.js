import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLangStore = create(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang) => set(() => ({ lang })),
    }),
    {
      name: "lang-store",
    }
  )
);
