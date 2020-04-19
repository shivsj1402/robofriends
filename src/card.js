import React from "react";
import 'tachyons';

function Card({id,name, email}) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src={`https://robohash.org/${id}?200*200`} alt='Robot_image'></img>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
  );
}

export default Card;