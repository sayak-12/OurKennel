import { useDarkMode } from "../../hooks/DarkmodeProvider";
import "./Contact.scss";
const Contact = () => {
  const { darkmode } = useDarkMode();
  return (
    <section className={`contact ${darkmode ? "dark" : ""}`}>
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
