import "./About.css";
import image from "../About/about.jpg";

const About = () => {
  return (
    <div>

      <div className="titulo-us">
        <h1>CHOCOCAT-COFFEE</h1>
      </div>
      
      <div className="About-text">
        <h4> About us: </h4>
        <p>En ChocoCat Coffee, nos apasiona la fusión del delicioso sabor del chocolate 
          y la experiencia de disfrutar una buena taza de café. Somos un lugar donde 
          los amantes de las bebidas y alimentos de alta calidad se reúnen para crear 
          momentos inolvidables.

          nuestra cafetería es un oasis acogedor para aquellos que buscan un refugio de
          la rutina diaria. En cada taza de café que servimos, encontrarás la mezcla 
          perfecta de ingredientes selectos y el compromiso de brindarte una experiencia
          culinaria única.</p>
      </div>
      
      <div className="About-products">
         <h4> About us products: </h4>
         <p>En nuestro menú encontrarás una amplia variedad de bebidas y alimentos elaborados
         con ingredientes frescos y de la más alta calidad. Desde exquisitos cafés y tés, 
         hasta decadentes chocolates calientes, ofrecemos algo para satisfacer todos los
          gustos. ¿Tienes hambre? ¡No te preocupes! Nuestra selección de bocadillos y
         postres complementará perfectamente tu bebida.</p>
      </div>

      <div className="invitacion">
        <h2>Te invitamos a visitar ChocoCat Coffee y a formar parte de nuestra comunidad
           de amantes del café y el chocolate. Nuestro equipo amigable y atento está aquí 
           para hacerte sentir como en casa. Ya sea que busques un lugar para relajarte, 
           trabajar o simplemente disfrutar de una taza de felicidad, estamos aquí para ti.

         ¡Esperamos verte pronto en ChocoCat Coffee!</h2>
      </div>

      <div className="image-about">
        <img src={image} alt="about image" className="imagen-final-about"/>
      </div>
      



    </div>
  )
}

export default About