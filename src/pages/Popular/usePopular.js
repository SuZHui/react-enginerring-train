import API from "@/api";

export default function usePopular(type) {
  const { data, error, size, setSize, reload, isValidating } =
    API.getList(type);
  const loadMore = () => {
    if (isValidating) return;
    setSize(size + 1);
  };

  return {
    isLoading:
      (!data && !error) ||
      !!(size > 0 && data && typeof data[size - 1] === "undefined"),
    isError: !!error,
    list: data,
    loadMore,
    reload,
  };
}
