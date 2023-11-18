import React from 'react';
import './StatusCard.css'

const NameCard = (props) => {
//   console.log({props})

let priorityImage = <i className="fa fa-ellipsis-h picon" aria-hidden="true"></i>;

  if(props.data.priority === 1) {
    priorityImage = <i className="fa fa-exclamation picon" aria-hidden="true"></i>
  } else if(props.data.priority === 2) {
    priorityImage = <i className="fa fa-signal picon" aria-hidden="true"></i>
  } else if(props.data.priority === 3) {
    priorityImage = <i className="fa fa-signal picon" aria-hidden="true"></i>
  } else if(props.data.priority === 4) {
    priorityImage = <i className="fa fa-signal picon" aria-hidden="true"></i>
  }

  return (
    <div className="card" style={{ borderColor: 'grey' }}>
      <div className="card-header">
        <span className="card-id">{props.data.id}</span>
      </div>
        
      <div className="card-body">
        <h3 className="card-title">{props.data.title}</h3>
        <div className="tags">
          {priorityImage}
          {props.data.tag.map((t, index) => (
            <span key={index} className="tag">
              <i class="fa fa-circle" aria-hidden="true"></i>{t}
            </span>
          ))}
        </div>
      </div>
      
    </div>

  );
};

export default NameCard;