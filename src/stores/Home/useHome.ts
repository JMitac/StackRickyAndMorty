import localforage from "localforage";
import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { State } from "../../types";
import { initialState } from "./initialState";
import { customStorage } from "../../utils";

localforage.config({
    driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
  });

export const useHomeStore = create<State>()(
    persist(
        subscribeWithSelector(() => ({
            ...initialState,
        })),
        {
            name: "home",
            skipHydration: true,
            getStorage: () => customStorage
        }
    )
)