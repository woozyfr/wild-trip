import React from "react";
import NewsCards from './NewsCards';
import data from '../../../data/news.json';



class News extends React.Component {

  getNewsData() {
    return data;
  }

  render() {
          return (
            <div>
                    {this.getNewsData().map(newDetails => (
                      <NewsCards data={newDetails} key={newDetails.title}/>
                    ))}
                </div>
          );
        }
}
export default News;

