import React from "react";
import News from '../elements/News/News';
import Template from '../template/Template.jsx';


const SliderConfig = () => {
  return {
    title: "Choix déstination",
    subtitle: "Embarcation immédiate.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus impedit soluta quam distinctio",
    backgroundImage:"images/defaultslider.jpg",
    backgroundPosition:"center 50%"
  }
}


const Home = () => {
  
  return (
<Template slider={SliderConfig()}>
    
    <section class="index-bloc">
      <div>
        <h1>Bienvenue sur WildTrip</h1>
        <p><b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
            impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
            laudantium magni velit consequuntur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
            impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
            laudantium magni velit consequuntur.
          </b></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
        </p>

        <h3>Pourquoi utiliser Wild Trip ?</h3>


        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
        </p><br/><br/>


        <h3>Voyage sans soucis</h3><br/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus
          impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam
          laudantium magni velit consequuntur.
        </p>

      </div>
      <div>
          <h2>News</h2>
          

          <div class="news-section">
<News/>


          </div>
      </div>
    </section>
            </Template>
  );
}


export default Home;