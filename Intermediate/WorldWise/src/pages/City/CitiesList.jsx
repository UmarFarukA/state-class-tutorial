/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import Message from "../../components/Message";
import Loading from "../../components/Loading";

export default function CitiesList({ cities, isLoading }) {
  if (!cities.length)
    return <Message message="👏 click on the Map to add new city" />;

  if (isLoading) return <Loading />;

  return cities.map((city) => <CityItem city={city} key={city.id} />);
}
