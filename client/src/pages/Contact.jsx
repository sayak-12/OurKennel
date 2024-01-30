import { useDarkMode } from "../../hooks/DarkmodeProvider";
import "./Contact.scss";
const Contact = () => {
  const { darkmode } = useDarkMode();
  return (
    <section className={`contact ${darkmode ? "dark" : ""}`}>
      
    </section>
  );
};

export default Contact;
