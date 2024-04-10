import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{

        console.log('hello');
        
        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        })
    
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        });

        console.log('online status');

    },[])

    return onlineStatus;
}

export default useOnlineStatus;