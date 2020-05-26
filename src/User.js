import React from "react";


export default function TotalData(props) {
  if(props.instagram.profile_pic_url_hd){
    return <img src={props.instagram.profile_pic_url_hd} alt="insta_photo"/>
  }
  else {
    return <div>Henüz bir kullanıcı aratılmadı!</div>
  }
  return ( 
    <div>
        
    </div>

    
  )};