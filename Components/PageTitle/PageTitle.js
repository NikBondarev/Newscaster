import React from "react";

const PageTitle = props => {
    return(
        <div style = {{paddingLeft: 15, paddingRight:15, marginTop: 50, marginBottom: 50}}>
            <h1>
                {props.text}
                <span style={{color:'blue'}}>
                    {props.span}
                </span>
            </h1>
        </div>
    )
}
export default PageTitle;