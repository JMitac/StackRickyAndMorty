import { useHomeStore } from "./useHome";

export const setName = (name: string) => useHomeStore.setState({ name });

export const setCount = (count: number) => useHomeStore.setState({ count });

export const setPage = (page: number) => useHomeStore.setState({ page });

export const setTotalPage = (totalPage: number) => useHomeStore.setState({ totalPage });