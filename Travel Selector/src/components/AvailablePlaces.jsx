import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { fetchAvailablePlaces } from "../http.js";
import { sortPlacesByDistance } from "../loc.js";
import useFetchEffect from "../../hooks/useFetch";
import { useEffect, useState } from "react";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace, userSelectedPlaces }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const {
    isFetching,
    error,
    fetchData: userPlaces
  } = useFetchEffect(fetchSortedPlaces, []);

  useEffect(() => {
    if (userPlaces && userSelectedPlaces.length > 0) {
      var placesIds = userSelectedPlaces.map(i => i.id);
      setAvailablePlaces(userPlaces.filter(i => !placesIds.includes(i.id)));
    } else if (userPlaces && userSelectedPlaces.length == 0) {
      setAvailablePlaces(userPlaces);
    }
  }, [userPlaces, userSelectedPlaces]);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces ?? []}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
