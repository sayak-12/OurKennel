import { useDarkMode } from "../../hooks/DarkmodeProvider.jsx";
import "./Home.scss";
const Homepage = () => {
    const { darkmode} = useDarkMode();
    return ( 
        <section className={`home ${darkmode? "dark":""}`}>
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