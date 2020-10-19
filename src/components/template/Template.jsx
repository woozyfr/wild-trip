import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../elements/Breadcrumb';
import Slider from '../elements/Slider';
import FixyButton from '../elements/FixyButton';

class Template extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Slider conf={this.props.slider}/>
        <main className="container main">
          <Breadcrumb conf={this.props.breadcrumb}/>
          {this.props.children}
        </main>
        <Footer />
        <FixyButton/>
      </div>
    );
    }
}

export default Template;