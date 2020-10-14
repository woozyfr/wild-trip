import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Template = () => {
  return (
    <div>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}



// Template.propTypes = {
//   name: PropTypes.string.isRequired,
//   avatar : PropTypes.string.isRequired
// };

export default Template;