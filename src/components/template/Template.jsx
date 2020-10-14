import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../elements/Breadcrumb';
import Slider from '../elements/Slider';
const Template = (props) => {
  return (
    <div>
      <Header />
      <Slider conf={props.slider}/>
      <main className="container main">
        <Breadcrumb/>
        {props.children}
      </main>
      <Footer/>
    </div>
  );
}



// Template.propTypes = {
//   name: PropTypes.string.isRequired,
//   avatar : PropTypes.string.isRequired
// };

export default Template;