import React from "react";



class NewsCards extends React.Component {

  constructor(props) {
    super(props);
    this.classes = ["news-bloc", "buzz-out-on-hover","news-bloc-"+this.props.data.category_key];
    
  }
  

  render() {
    return (
      <div className={this.classes.join(" ")}>
        <div className="news-bloc-title">{this.props.data.title}</div>
        <p>{this.props.data.text}</p>
      </div>
      );
        }
}
export default NewsCards;


