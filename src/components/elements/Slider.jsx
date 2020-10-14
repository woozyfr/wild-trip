import React from "react";

const Slider = (props) => {
  if (!props.length) {
    return (<div></div>)
  }
  return (

    <div className="slider" style={{ background: 'url('+props.conf.backgroundImage+')', backgroundSize: "cover", backgroundPosition: props.conf.backgroundPosition  }}>
      <div className="slider-container hidden-mobile fadeIn">
        <div className="miniplan"><img src={'/images/miniplansolo.png'} alt=""/></div>
          <div className="encard-index">
            <div className="encard-title">{props.conf.title}</div>
            <div className="encard-subtitle">{props.conf.subtitle}</div>
            <p>{props.conf.text}</p>
          </div>
      </div>
    </div>
  );
}
export default Slider;

//, backgroundPosition: props.conf.backgroundPosition, background: 'url('+ process.env.PUBLIC_URL + props.conf.backgroundImage+')' 