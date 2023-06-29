import cn from "classnames";
import { FenixXL } from "components/icons";
import { Link, useLocation } from "react-router-dom";
import { MOBILE_MENU_ID, ROUTES } from "utils/index";
import styles from "./Header.module.css";
/**
 * The semantic header to contain nav elements.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param {Function} props.toggle Function used to toggle mobile menu.
 * @param   {Boolean} props.isOpen   Used to define if the menu is open for aria dom.
 * @return  {Element}         The Header component.
 */
export default function Header({ toggle, isOpen }) {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <FenixXL className={styles.imgWrapper} />
      <nav>
        <ul className={styles.navList}>
          {ROUTES?.map((route, i) => (
            <li
              key={i}
              className={cn(styles.navItem, {
                [styles.current]: pathname === route?.path,
              })}
            >
              <Link to={route?.path}>{route?.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={styles.mobileMenuToggle}
        onClick={toggle}
        aria-controls={MOBILE_MENU_ID}
        aria-expanded={isOpen}
      >
        <span className={styles.hamburgerMenu} />
      </button>
    </header>
  );
}
