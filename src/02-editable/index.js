const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

import { ReactComponent as Logo } from "../bv-logo.svg";
import logoWhiteURL from "../bv-logo-white.svg";

registerBlockType("gbb/editable", {
  title: __("Custom Title", "gbb"),
  icon: { src: Logo },
  category: "gbb",
  attributes: {
    epsiodeTitle: {
      type: "string",
      source: "html",
      selector: ".gbb-title"
    }
  },

  edit: props => {
    // Props parameter holds all the info.
    console.info(props);

    // Lift info from props and populate various constants.
    const {
      attributes: { epsiodeTitle },
      className,
      setAttributes
    } = props;

    const onChangeEpisodeTitle = newEpisodeTitle => {
      setAttributes({ epsiodeTitle: newEpisodeTitle});
    };

    return (
      <div className={`${className} gbb-block gbb-editable`}>
        <figure className="gbb-logo">
          <img src={logoWhiteURL} alt="logo" />
        </figure>
        <div className="gbb-info">
          <div className="gbb-nameplate">
            {__("The Binaryville Podcast", "gbb")}
          </div>
          <h3 className="gbb-title">
            <RichText 
              placeholder={__("Podcast episode title", "gbb")}
              value={epsiodeTitle}
              onChange={onChangeEpisodeTitle}
            />
          </h3>
          <div className="gbb-cta">
            <a href="#">{__("Like & Subscribe!", "gbb")}</a>
          </div>
        </div>
      </div>
    );
  },
  save: props => {
    return (
      <div className="gbb-block gbb-static">
        <figure className="gbb-logo">
          <img src={logoWhiteURL} alt="logo" />
        </figure>
        <div className="gbb-info">
          <div className="gbb-nameplate">
            {__("The Binaryville Podcast", "gbb")}
          </div>
          <h3 className="gbb-title">
            <RichText.Content value={props.attributes.epsiodeTitle} />
          </h3>
          <div className="gbb-cta">
            <a href="/subscribe">{__("Like & Subscribe!", "gbb")}</a>
          </div>
        </div>
      </div>
    );
  }
});
