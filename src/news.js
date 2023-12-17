
   export default function News(props)
{
    console.log(props)
    return (
        <div className="news">
            
            <div className="news_image">
                <img src={props.articles.urlToImage} alt="" />
            </div>
            <h1>{props.articles.title}</h1>
            <p>{props.articles.description?.substring(1,100).concat("...")} <a href={props.articles.url}target="blank">read more</a></p>
            
            <div className="source">
                <p>{props.articles.author}</p>
                <p> {props.articles.source.name}</p>
            </div>

        </div>

    )
}