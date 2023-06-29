import cn from "classnames";
import styles from "./AboutUsMini.module.css";
import { ABOUT_US_COPY } from "./AboutUsMini.utils";

/**
 * A simplified grid view displaying accordians with basic information about Fenix XL.
 *
 * @author  johnrobertmcc
 * @since   06/27/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {Array}   props.copy       The copy to pass into a checkered seection.
 * @returns  {Element}                 The AboutUsMini component.
 */
export default function AboutUsMini({ copy }) {
  if (!copy) {
    return null;
  }
  return (
    <section className={styles.aboutUsMini}>
      {copy?.map((section, i) => {
        const { title = null, copy = null } = section;

        if (!title || !copy) {
          return null;
        }
        return (
          <div
            className={cn(styles.copyWrapper, {
              [styles.flopped]: i % 2 === 0,
            })}
            key={i}
          >
            <h1 className={styles.heading}>{title}</h1>
            <p className={styles.copy}>{copy}</p>
          </div>
        );
      })}
    </section>
  );
}

AboutUsMini.defaultProps = {
  copy: ABOUT_US_COPY,
};
