import { useDarkMode } from "../../hooks/DarkmodeProvider";
import "./About.scss";
import pic1 from "../assets/jonas-vincent-xulIYVIbYIc-unsplash.webp"
import pic2 from "../assets/mel-elias-2_KjpNXFl5M-unsplash.webp"
import pic3 from "../assets/roberto-nickson-_JGVVEfbTVQ-unsplash.webp"
const AboutPage = () => {
  const { darkmode } = useDarkMode();
  return (
    <section className={`about ${darkmode ? "dark" : ""} container-fluid flex-column flex-md-row`}>
      <div className="leftsidecontent col-12 col-md-6 ">
        <div className={`heading ${darkmode ? "dark" : ""}`}>
          <span className="aboutspan">about</span>
          <h2 className="span">OurKennel</h2>
        </div>
        <p className="text-justify">
          OurKennel is a pet adoption, buying and social media that only targets people who have a furry friend or any kind of pets. We at OurKennel prioritise the improvement of the pet adoption system. Be it a non profit pet welfare organisation or a local pet mom. We highly encourage adopting a street animal. They deserve love too, and we promote adopting them. Also, in the feed section, you will get the like-minded pet moms and dads and tales of their fur/scale/feathery babies. This company was founded by Sayak Raha, student of UEM, Kolkata. So what are you waiting for, go register and adopt your new comfort zone!
        </p>
        <button style={{background:`${darkmode? "chartreuse":"purple"}`, color: `${darkmode? "black":"white"}`}}>Scroll Petfeed</button>
      </div>
      <div className="rightsidecontent col-12 col-md-6 ">
        <div className="imgcontainer">
        <img src={pic1} className="pic1" alt="" width="200"/>
        <img src={pic2} className="pic2" alt="" width="300"/>
        <img src={pic3}  className="pic3" alt="" width="200"/></div>
      </div>
    </section>
  );
};

export default AboutPage;
