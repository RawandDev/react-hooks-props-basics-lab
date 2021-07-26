import React from "react";

function Links(props) {
  return (
    <div>
      <div>
        <h3>Links</h3>
        <a href={props.github} >{props.github}</a>
        <a href={props.linkedin} >{props.linkedin}</a>
      </div>
    </div>
  );
}

export default Links;