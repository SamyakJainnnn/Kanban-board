import React from 'react';
import './StatusCard.css'

const PriorityCard = (props) => {
//   console.log({props})

  return (
    <div className="card" style={{ borderColor: 'grey' }}>
      <div className="card-header">
        <span className="card-id">{props.data.id}</span>
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </div>
        
      <div className="card-body">
        <h3 className="card-title">{props.data.title}</h3>
        <div className="tags">
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

export default PriorityCard;