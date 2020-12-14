import React from "react";

function Card(props) {
  //   return (
  //     <div className="cards">
  //       <div className="card">
  //         <img src={props.imgsrc} alt="myPic" />
  //         <div className="card__info">
  //           <span className="card__category">Current Condition: {props.cc}</span>
  //           <h3 className="class__title">{props.aname}</h3>
  //           <a href={props.link} target="_blank">
  //             <button type="button" class="btn btn-dark">
  //               Watch Now
  //             </button>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <>
      <div className="card">
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.aname}</h5>
          <p className="card-text">Anime Status: {props.cc}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="linker">
              Watch Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
