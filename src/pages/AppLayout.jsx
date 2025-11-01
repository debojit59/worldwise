import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div>
      <AppNav />
      <p className={styles.app}>App</p>
    </div>
  );
}
