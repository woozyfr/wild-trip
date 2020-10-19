import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="slider" style={{ background: 'url('+this.props.conf.backgroundImage+')', backgroundSize: "cover", backgroundPosition: this.props.conf.backgroundPosition  }}>
        <div className="slider-container hidden-mobile fadeIn">
          <div className="miniplan"><img src={'/images/miniplansolo.png'} alt=""/></div>
            <div className="encard-index">
              <div className="encard-title">{this.props.conf.title}</div>
              <div className="encard-subtitle">{this.props.conf.subtitle}</div>
              <p>{this.props.conf.text}</p>
            </div>
        </div>
      </div>
    );
    }
}

export default Slider;