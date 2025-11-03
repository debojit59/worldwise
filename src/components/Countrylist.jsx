import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export default function CountryList({ isloading, cities }) {
  if (isloading) return <Spinner />;
  if (!cities.length)
    return <Message message="Let's add first city by clicking on the map" />;

  const Countries = cities.reduce(
    (arr, cur) => {
      if (!arr.map((country) => country.country).includes(cur.country))
        return [...arr, { country: cur.country, emoji: cur.emoji }];
      else return arr;
    },

    []
  );

  return (
    <ul className={styles.countryList}>
      {Countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
