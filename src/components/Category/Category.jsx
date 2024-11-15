import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
    const {data:news} = useLoaderData();
    console.log(news)
    return (
        <div>
            <h1>{news.length} number of category is heare</h1>

            <div>
                {
                    news.map(news=><NewsCard key={news.category_id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Category;