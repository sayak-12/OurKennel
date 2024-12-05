import { useDarkMode } from "../../hooks/DarkmodeProvider.jsx";
import "./Contact.scss";
import catss from "../assets/catss.webp"
import dogss from "../assets/dogss.png"
const Contact = () => {
  const { darkmode } = useDarkMode();
  return (
    <section className={`contact ${darkmode ? "dark" : ""}`} style={{
      backgroundImage: `url(${darkmode ? dogss : catss})`,
      backgroundPosition: `${darkmode ? "90% 100%" : "50% 50%"}`,
      backgroundSize: "cover",
    }}>
      <div className="cover">
                <h1>
                    Need to talk?
                </h1>
                <p>contact us through mail or raise a ticket. we are always ready to help.</p>
                <button style={{background:`${darkmode? "chartreuse":"purple"}`, color: `${darkmode? "black":"white"}`}}>Contact Us</button>
            </div>
    </section>
  );
};

export default Contact;
