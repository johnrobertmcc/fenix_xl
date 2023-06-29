import cn from "classnames";
import ContactUs from "components/ContactUs/ContactUs";
import PropTypes from "prop-types";
import styles from "./Rates.module.css";

/**
 * Page used to display Fenix's basic rates.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}  props           The component destructured as props.
 * @param   {?string} props.className The name of the className derived from Pages.
 * @return  {Element}                 The Rates component.
 */
export default function Rates({ className }) {
  return (
    <article className={cn(styles.ratesPage, className && className)}>
      <section className={styles.ratesSectionTop}>
        <h1>Rates</h1>
        <p>
          Driver price list approved by New York City Taxi and limousine
          Commision.
        </p>
        <p>
          Fenix XL Car & Limo Service Corp. is like a facility agency that
          provides car service transportation through the phone and mobile App
          software.
        </p>
        <p>
          Driver and car provide their own insurance, law, city rules, state,
          TLC.
        </p>
      </section>
      <section className={styles.specialRatesSection}>
        <figure>
          <figcaption> Special prices</figcaption>
          <ul>
            <li>Regular car local call: $8</li>
            <li>Deliveries: $5 additional to the regular price.</li>
            <li>Extra package delivery (driver options).</li>
            <li>
              Waiting time: the first 10 minutes of waiting time without charge.
              After 10 minutes, $5 additional rate per each 10 additional
              minutes.
            </li>
          </ul>
        </figure>
        <figure>
          <figcaption>Rent Price Per Hour</figcaption>
          <ul>
            <li>Inside the area: $40 minivan, $50 SUV</li>
            <li>Outside the area: $55 minivan suv $65</li>
            <li>minivan local call: $12 extra</li>
            <li>
              charge for minivans 50% Additional, cargo agreement between the
              driver and the customer.
            </li>
          </ul>
        </figure>
        <figure>
          <figcaption>Airport Fees</figcaption>
          <ul>
            <li>Newark: $100 con toll minivan suv $150 con toll</li>
            <li>J.F.K.: $35 minivan suv $48-$53</li>
            <li>
              La Guardia: $30 minivan suv $45 (extra stops within the same route
              $3.00)
            </li>
          </ul>
        </figure>
        <p>
          We deal between customer and driver price list*. Extra stops
          out-of-route, deliveries, package luggage, waiting time, tolls,
          pick-ups, parking fees, and special services (such as use of driver’s
          cell phone, etc.) are prices in addition to the regular price in
          agreement between customer and the driver.
        </p>
        <i>*price list is in TLC records.</i>
        <ContactUs />
      </section>
    </article>
  );
}
Rates.propTypes = {
  className: PropTypes.string,
};
Rates.defaultProps = {
  className: null,
};
