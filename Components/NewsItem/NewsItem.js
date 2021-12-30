import React from "react";
import { withRouter } from "react-router-dom";

const NewsItem = props => {
    return(
        <li onClick={()=>{
            props.history.push('/NewsPage/' + props.title)
            }} className="NewsItem">
            <h3>
                {props.title}
            </h3>
            <div className="news-info">
                <p>
                
                    {props.source}
                
                </p>
                <div className="news-date">
                    <span>
                        {props.day}
                    </span>
                    <span>
                        /
                    </span>
                    <span>
                        {props.month}
                    </span>
                </div>
            </div>
            
        </li>
    )
}

export default withRouter(NewsItem);