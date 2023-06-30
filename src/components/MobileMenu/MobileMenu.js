import cn from "classnames";
import { Facebook, Instagram } from "components/icons";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { MOBILE_MENU_ID, ROUTES } from "utils";
import styles from "./MobileMenu.module.css";

/**
 * An aside used in the main container as the mobile menu.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}   props          The component destructured as props.
 * @param   {Function} props          Function used to close the menu on location change.
 * @returns  {Element}                 The MobileMenu component.
 */
export default function MobileMenu({ changeRoute }) {
  const { pathname } = useLocation();
  return (
    <aside className={styles.mobileMenu} id={MOBILE_MENU_ID}>
      <nav>
        <ul className={styles.navList}>
          {ROUTES?.map((route, i) => (
            <li
              key={i}
              className={cn(styles.navItem, {
                [styles.current]: pathname === route?.path,
              })}
            >
              <Link
                to={route?.path}
                onClick={changeRoute}
                className={styles.anchor}
              >
                {route?.title}
              </Link>
            </li>
          ))}
          <hr />
          <li className={cn(styles.navItem, styles.socialWrapper)}>
            <Facebook className={styles.facebook} />
            <Instagram className={styles.instagram} />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
MobileMenu.propTypes = {
  setMenuIsOpen: PropTypes.func,
};
MobileMenu.defaultProps = {
  setMenuIsOpen: () => {},
};
