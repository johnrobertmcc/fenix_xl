import cn from "classnames";
import Article from "components/Article";
import ContactUs from "components/ContactUs/ContactUs";
import YoutubeEmbed from "components/YoutubeEmbed";
import { HeritageRadioNetwork, Spectrum } from "components/icons";
import TextSection from "components/layout/TextSection";
import PropTypes from "prop-types";
import styles from "./Featured.module.css";
import {
  ARTICLE_CARDS,
  FEAUTURED_IN_HEADING,
  VIDEO_EMBEDS,
  VOLUNTEER_FORM,
} from "./Featured.utils";

/**
 * Page used to display where Fenix has been featured.
 *
 * @author  johnrobertmcc
 * @since   06/26/2023
 * @version 1.0.0
 * @param   {object}  props            The component destructured as props.
 * @param   {?string} props.className  Optional classname derived from Pages.
 * @returns  {Element}                  The Featured component.
 */
export default function Featured({ className }) {
  return (
    <article className={cn(styles.featuredPage, className && className)}>
      <TextSection {...FEAUTURED_IN_HEADING} className={styles.featured} />

      <section className={styles.giveAndTake}>
        <iframe
          src="https://player.vimeo.com/video/581611513?h=93e083b4c8"
          width="1920"
          height="1080"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{ height: "100%", width: "100%" }}
          data-scale="59"
        />
      </section>
      <section className={styles.asFeaturedIn}>
        <figure className={styles.featuredInFigure}>
          <figcaption className={styles.figCaption}>
            As Featured In...
          </figcaption>
          <div className={styles.featuredInGrid}>
            <Spectrum className={cn(styles.spectrum, styles.asset)} />
            <img
              src="assets/BKReader.png"
              alt=""
              className={cn(styles.bkReader, styles.asset)}
            />
            <img
              src="assets/gooddocs.png"
              alt=""
              className={cn(styles.gooddocs, styles.asset)}
            />
            <HeritageRadioNetwork className={cn(styles.HRN, styles.asset)} />
          </div>
        </figure>
      </section>
      <section className={cn(styles.featuredSection)}>
        <figure className={cn(styles.featuredFigure, styles.articles)}>
          <figcaption>Articles</figcaption>
          <ul className={styles.articleList}>
            {ARTICLE_CARDS?.map((article, i) => (
              <Article {...article} key={i} />
            ))}
          </ul>
        </figure>
      </section>

      <section className={cn(styles.featuredSection, styles.videoSection)}>
        <figure className={cn(styles.featuredFigure, styles.videos)}>
          <figcaption>More Videos</figcaption>
          <ul className={styles.videoList}>
            {VIDEO_EMBEDS?.map((video, i) => (
              <li key={i} className={styles.videoListItem}>
                <YoutubeEmbed embedId={video} />
              </li>
            ))}
          </ul>
        </figure>
      </section>

      <section className={styles.volunteer}>
        <figure>
          <figcaption className={styles.figCaption}>
            <a
              href={VOLUNTEER_FORM}
              className={styles.anchor}
              target="_blank"
              rel="noreferrer"
            >
              Join the Fenix Community -- Donate or Volunteer today!
            </a>
          </figcaption>
          <ContactUs />
        </figure>
      </section>
    </article>
  );
}
Featured.propTypes = {
  className: PropTypes.string,
};
Featured.defaultProps = {
  className: null,
};
