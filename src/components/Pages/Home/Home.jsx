import CardUser from "../../CardUser/CardUser";
import "./Home.css";
import image from "../Home/welcome.png"

const Home = () => {

  return (
    <div>

      <div className="welcome">
         <img  src={image} alt="welcome" />
      </div>

    
      <div className="UserSection">
        <CardUser
          name="chocoCat-Coffe"
          date="Se unio en el 2023"
          description="Welcome to ChocoCat-Coffe"
          img="https://i.pinimg.com/originals/6d/3e/2d/6d3e2db09b92eae597d5e00e329f1f1b.jpg"
        />
      </div>
     
       

        
    </div>
  )
}

export default Home