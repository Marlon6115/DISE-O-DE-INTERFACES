import { Products } from "@/containers/containerProducts/products";
import NavContainer from "@/containers/navContainer/navContainer";
import { NavMobileContainer } from "@/containers/navContainer/navMobileContainer";
import { Portrait } from "@/containers/portrait/portrait";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <div className={styles.containerColumn}>
      <NavContainer />
      <NavMobileContainer />
      <Portrait />
      <Products />
    </div>
  );
}
