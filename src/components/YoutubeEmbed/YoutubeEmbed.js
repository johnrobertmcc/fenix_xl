import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./YoutubeEmbed.module.css";

/**
 * Simple function used to stylize youtube videos.
 *
 * @see https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
 * @since   06/28/2023
 * @version 1.0.0
 * @param   {object}  props            The component destructured as props.
 * @param   {string}  props.embedId    The YouTube embed id of the video to display.
 * @param   {?string} props.className  Optional classname for further styling.
 * @return  {Element}                  The YoutubeEmbed component.
 */
export default function YoutubeEmbed({ embedId, className }) {
  return (
    <div className={cn(styles.responsiveVideo, className && className)}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding;"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  className: null,
};
