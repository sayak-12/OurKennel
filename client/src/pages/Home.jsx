import { useDarkMode } from "../../hooks/DarkmodeProvider.jsx";
import "./Home.scss";
import cat from "../assets/cat.webp";
import dog from "../assets/dog.webp";
const Homepage = () => {
    const { darkmode} = useDarkMode();
    return ( 
        
        <section className={`home ${darkmode? "dark":""}`} style={{backgroundImage: `url(${darkmode ? dog : cat})`,
            backgroundPosition: `${darkmode ? "50% 80%" : "60% 100%"}`,backgroundSize: "cover"}}>
            <div className="cover">
                <h1>
                    You can&apos;t buy <span className={`span`}>happiness</span>. But you can <span className="span">adopt it</span>.
                </h1>
                <button style={{background:`${darkmode? "chartreuse":"purple"}`, color: `${darkmode? "black":"white"}`}}>Explore Pets</button>
            </div>
        </section>
        
     );
}
 
export default Homepage;