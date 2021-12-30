import React from "react";
import useFetch from "../../ConApi/ConAPI";
import './PostPage.scss'

const PostPage = props => {
    let result = useFetch();
    let title = props.match.params.title;
    

    const getSelectedNews = () =>{
        if(!result?.length) return;
        return result.filter(item => item.title === title)  
    }
    let selectedNews = getSelectedNews();
    if(!selectedNews?.length){
        return null
    }
    
    selectedNews = selectedNews[0];
    
    let month=[],
        day=[];
    let date = selectedNews.publishedAt.split('');
    day.push(date[8], date[9]);
    month.push(date[5], date[6]);
    day = day.join('');
    month = month.join('');
    
    return (
        <section className="post-page">
            <div className="post-right">
                <h2>
                    {title}
                </h2>
                <div className="news-info">
                <p>
                
                    {selectedNews.source.name}
                
                </p>
                <div className="news-date">
                    <span>
                        {day}
                    </span>
                    <span>
                        /
                    </span>
                    <span>
                        {month}
                    </span>
                </div>
            </div>
            </div>
            <div className="post-left">
                <img src={selectedNews.urlToImage} alt="there should have been a photo"/>
                <p>
                    {selectedNews.description}
                </p>
                <p>
                    {selectedNews.content}
                </p>
            </div>
        </section> 
    );
}
export default PostPage;