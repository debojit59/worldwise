import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export default function CityList({ isloading, cities, HandleDelete }) {
  if (isloading) return <Spinner />;
  if (!cities.length)
    return <Message message="Let's add first city by clicking on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem
          city={city}
          isloading={isloading}
          key={city.id}
          HandleDelete={HandleDelete}
        />
      ))}
    </ul>
  );
}
