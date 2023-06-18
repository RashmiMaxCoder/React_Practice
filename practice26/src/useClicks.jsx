import { useEffect } from "react";
function useClicks(clicks){
    
     useEffect(() =>{
        document.title = `useClick is working now ${clicks} times`;
    },[clicks]);
    
}
export default useClicks;