import React from "react";

function Child(props){
      return(
        <div>
            <h1>Hello World</h1>
            <button onClick={()=>props.data()}>Call Data Function</button>
        </div>
      )
}

export default Child;