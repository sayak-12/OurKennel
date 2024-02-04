import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {useLogout} from "../../hooks/useLogout"
const Dashboard = () => {
    const logout = useLogout();
    const {user} = useAuthContext();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const loggout = ()=>{
        logout();
    }
    useEffect(() => {
        if (!isLoading) {
            if (!user) {
                navigate("/login");
            }
        }
        console.log(user);
    }, [user, isLoading, navigate]);
    useEffect(() => {
        setIsLoading(false);
    }, [user]);
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