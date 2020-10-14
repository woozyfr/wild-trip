import React from "react";
import NewsCards from './NewsCards';
import data from '../../../data/news.json';


function getNewsData() {
  return data;
}

const News = () => {
  return (
    <div>
        {getNewsData().map(newDetails => (
          <NewsCards data={newDetails}/>
        ))}
    </div>
  );
}
export default News;