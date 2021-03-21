import styles from './Header.module.scss';
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.link} to="/">Homepage</Link>
        <Link className={styles.link} to="/counter">Counter</Link>
        <Link className={styles.link} to="/anotherCounter">Another Counter</Link>
        <Link className={styles.link} to="/main">Main</Link>
        <Link className={styles.link} to="/contact">Contact</Link>
      </header>
    </>
  )
}