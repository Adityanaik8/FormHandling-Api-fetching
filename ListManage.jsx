import React from 'react';

const ListManage=({avatar_url,login})=>{
    return (
        <div style={{display:"flex",
        margin:"auto",
        width:"300%",
        padding:"10px",
        height:"300%",
        flexDirection:"column",
        justifyContent:"space-between",
        }}>
            <img style={{width:"100px"}} src={avatar_url} alt={login}/>
            <p style={{fontSize:"20px"}}>{login}</p>
        </div>
    );
}

export default ListManage;