import PropTypes from "prop-types";
import { useRef } from "react";
import { CONTACT_METHODS } from "utils";
import styles from "./ContactUs.module.css";
import { ICON_MAP, PHYSICAL_ADDRESS } from "./ContactUs.utils";

/**
 * Detailed contact us information to display throughout the site.
 *
 * @author  johnrobertmcc
 * @since   06/27/2023
 * @version 1.0.0
 * @returns  {Element}                 The ContactUs component.
 */
export default function ContactUs() {
  return (
    <section className={styles.contactUs}>
      <figure className={styles.contactUsCardWrapper}>
        <figcaption>{PHYSICAL_ADDRESS}</figcaption>
        <ul className={styles.contactUsList}>
          {CONTACT_METHODS?.map((card, i) => (
            <ContactUsCard card={card} key={i} />
          ))}
        </ul>
      </figure>
    </section>
  );
}

/**
 * Individual styled card.
 *
 * @author  johnrobertmcc
 * @since   06/27/2023
 * @version 1.0.0
 * @param {object} props The component desctructured.
 * @param {object} props.card The card as defined in ContactUs.utils.
 * @param {string} props.card.type  The type of card to look up appropriate icon..
 * @param {string} props.card.address The address per type of card (email vs phone).
 * @param {string} props.card.href The physical attributes to define where to point the attached anchor.
 * @param {?string} props.card.description Optional description of the card.
 * @returns  {Element}     The ContactUsCard component.
 */
function ContactUsCard({ card }) {
  const cardRef = useRef();
  return (
    <li
      className={styles.card}
      onClick={() => cardRef.current.click()}
      tabIndex={0}
    >
      {ICON_MAP?.[card?.type]}
      <a ref={cardRef} href={card?.href} tabIndex={-1}>
        {card?.address}
      </a>
      {card?.description && <p>{card.description}</p>}
    </li>
  );
}

ContactUsCard.propTypes = {
  card: PropTypes.shape({
    address: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
  }),
};
