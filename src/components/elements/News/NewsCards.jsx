import React from "react";

const NewsCards = (props) => {
  let classes = ["news-bloc", "buzz-out-on-hover","news-bloc-"+props.data.category_key];
  return (
  <div className={classes.join(" ")}>
    <div className="news-bloc-title">{props.data.title}</div>
    <p>{props.data.text}</p>
  </div>
  );
}
export default NewsCards;



