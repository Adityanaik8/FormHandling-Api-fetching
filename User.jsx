import React, {useEffect, useState} from 'react';
import ListManage from "./ListManage.jsx";

const User=()=> {
    const [User,setUser]=useState([]);
    const [isloading,setIsloading]=useState(false);
    useEffect(()=>{
        async function fetchUser(){
            setIsloading(true);
           const res =await fetch("https://api.github.com/users")
            const data = await res.json();
          setUser(data);
          setIsloading(false);
        }
        fetchUser();
    },[]);
    if(isloading){
        return <div>Loading...</div>;
    }
    return <section>
        <div style={{
            display:"flex",
           flexDirection:"column",
            width:"200%",
            height:"200%",
            padding:"10px",
            margin:"10",
            borderRadius:"10px",
            border:"1px solid black",
        }}>
        {User.map((User)=>(<ListManage key={User.id} avatar_url={User.avatar_url} login={User.login}/>))}
                       </div>
    </section>;
};

export default User;