import React from "react";
import { Link } from 'react-router-dom';
const PaysCards = (props) => {
  let classes_main = ["article-bloc", "article-bloc-" + props.data.category.key];
  let classes_tags = ["tags", "tags-" + props.data.category.key];
  let route = /pays/ + props.data.slug;
  return (
<div className={classes_main.join(" ")} data-filter-block={props.data.category.key}>
  <div>
    <img src={props.data.picture} alt=""/>
  </div>
  <div>
    <h2>{props.data.name}<span className={classes_tags.join(" ")}>{props.data.category.name}</span></h2>
    <p>{props.data.text}</p><div className="right"><Link to={route} className="btn btn-default">En voir plus</Link>
  </div>
  </div>
</div>

  );
}
export default PaysCards;