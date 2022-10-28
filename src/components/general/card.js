import * as React from 'react';

import "../static/style.css";

const BasicCard = (props) => {
  return (
    <div className='custom-card'>
      <div>
        <img alt={props.alt} src={props.src} />
        <br /><br />
        {props.content}
      </div>
    </div>
  );
}

export default BasicCard;
