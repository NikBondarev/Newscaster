import useFetch from '../../ConApi/ConAPI'
import NewsItem from "../NewsItem/NewsItem";
import './NewsList.scss'
import PageTitle from '../PageTitle/PageTitle';


const NewsList = (props) => {
    const result = useFetch();
    return(
        <div className="NewsList container">
            <ul>

               {    
                    result ? result.map((item, index) => {
                        let dayArr = [],
                            monthArr = [];
                        if( item.publishedAt.length > 5){
                            let date = item.publishedAt.split('');
                            dayArr.push(date[8], date[9]);
                            monthArr.push(date[5], date[6]);
                            dayArr = dayArr.join('');
                            monthArr = monthArr.join('');
                        }            
                        if(index + 1 > props.numbersPost) {
                            return null
                        } else {
                            return(                                    
                                <NewsItem
                                    key = {index}
                                    title = {item.title}
                                    source = {item.source.name}
                                    day = {dayArr}
                                    month = {monthArr}
                                    
                                />                                      
                            ) 
                        }  
                    }) : null
                }

            </ul>
            
        </div>
    )
}

export default NewsList;
