import { useAuthContext } from "../../hooks/useAuthContext";
import {useLogout} from "../../hooks/useLogout"
const Dashboard = () => {
    const logout = useLogout();
    const {user} = useAuthContext();
    const loggout = ()=>{
        logout();
    }
    return ( 
        <>
        {user &&
        
        (<>
        <h2 className="feedhead">Welcome {user.user.username}</h2>
        <button onClick={loggout}>Log Out</button>
        </>
        )}
        
        </>
     );
}
 
export default Dashboard;