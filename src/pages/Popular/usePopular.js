import { useRef } from "react";
import API from "@/api";

export default function usePopular(type) {
  const list = useRef([]);
  const { data, error, size, setSize, mutate } = API.getList(type);

  const loadMore = () => setSize(size + 1);
  list.current = data
    ? data.reduce((a, c = {}) => {
        const { items = [] } = c;
        a.push(...items);
        return a;
      }, [])
    : [];

  return {
    isLoading:
      (!data && !error) ||
      !!(size > 0 && data && typeof data[size - 1] === "undefined"),
    isError: !!error,
    list: list.current,
    loadMore,
    reload: () => mutate(data),
  };
}
