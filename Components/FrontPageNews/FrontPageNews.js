import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsList from '../NewsList/NewsList';
import PageTitle from '../PageTitle/PageTitle';



const FrontPageNews = () => {
    return (
        <div className=''>
            <PageTitle 
                text = {'Always latest'}
                span = {' news'}
            />
            <NewsList
                numbersPost={6}
            />
            <NavLink exact to='/NewsPage' style={{color: 'blue', fontSize: 20, textDecoration: 'none'}}>
                Be aware of events
            </NavLink>
        </div>
    )
        
}
export default FrontPageNews;

