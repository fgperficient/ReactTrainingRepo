import { useEffect, useState } from "react";

const useFetchEffect = (fetchFn, initialValue) => {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        debugger;
        const data = await fetchFn();

        setFetchedData(data ?? []);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetchFn]);
  return {
    isFetching,
    error,
    fetchData,
    setFetchedData
  };
};

export default useFetchEffect;
