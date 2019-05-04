import React from 'react';


function Course(props) {
    return (
      <div className="card">
        <img className="card-img-top" src={props.image} alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.des}</p>
          <a href={props.link} className="btn btn-primary">Learn more</a>
        </div>
      </div>
      
    );
}

export default Course;