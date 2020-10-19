import React from "react";
import { Link } from 'react-router-dom';






class PaysCards extends React.Component {
  // Route
  constructor(props) {
    super(props);
    this.classes_main = ["article-bloc", "article-bloc-" + props.data.category.key];
    this.classes_tags = ["tags", "tags-" + props.data.category.key];
    

  }
  
  /**
   *
   *
   * @return {*} 
   * @memberof PaysCards
   */
  getRoute() {
    return /pays/ + this.props.data.slug;
  } 


  /**
   *
   * render
   * @return {*} 
   * @memberof PaysCards
   */
  render() {
          return (
            <div className={this.classes_main.join(" ")} data-filter-block={this.props.data.category.key}>
  <div>
    <img src={this.props.data.picture} alt=""/>
  </div>
  <div>
    <h2>{this.props.data.name}<span className={this.classes_tags.join(" ")}>{this.props.data.category.name}</span></h2>
    <p>{this.props.data.text}</p><div className="right"><Link to={this.getRoute()} className="btn btn-default">En voir plus</Link>
  </div>
  </div>
</div>
          );
        }
}
export default PaysCards;




