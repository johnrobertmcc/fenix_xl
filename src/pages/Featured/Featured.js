import cn from "classnames";
import Article from "components/Article";
import YoutubeEmbed from "components/YoutubeEmbed";
import TextSection from "components/layout/TextSection";
import PropTypes from "prop-types";
import styles from "./Featured.module.css";
import {
  ARTICLE_CARDS,
  FEAUTURED_IN_HEADING,
  VIDEO_EMBEDS,
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
          <figcaption>Videos</figcaption>
          <ul className={styles.videoList}>
            {VIDEO_EMBEDS?.map((video, i) => (
              <li key={i}>
                <YoutubeEmbed embedId={video} />
              </li>
            ))}
          </ul>
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
