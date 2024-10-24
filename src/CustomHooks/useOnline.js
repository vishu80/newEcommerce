import React,{useState,useEffect} from "react";
const useOnline = () => {
    const [isOnline, setIsOnline] = useState(false);
    useEffect(()=>{

        window.addEventListener("offline", (e) => {
            setIsOnline(true);
        });
          window.addEventListener("online", (e) => {
            setIsOnline(false);
          });

        return () => {
            window.removeEventListener("offline", null);
            window.removeEventListener("online", null);
        }

      
    },[])

    return isOnline;

}
export default useOnline;