import React from "react";
import NewsList from "../NewsList/NewsList";
import PageTitle from "../PageTitle/PageTitle";

const NewsPage = () => {
    return(
        <div>
            <PageTitle 
                text = {'Be aware of'}
                span = {' events'}
            />
            <NewsList/>
        </div>
    )
}

export default NewsPage;