import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideBer = () => {
    const [categorey,setCategory] = useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(resposne=> resposne.json())
        .then(data=> setCategory(data.data.news_category))
    },[])


    return (
        <div>
            <h1>All Caterogy ({categorey.length})</h1>
            <div className="flex flex-col gap-3 mt-7">
                {
                    categorey.map(btn => <NavLink to={`/category/${btn.category_id}`} className="bg-white shadow-lg border-none text-lg btn" key={btn.category_id}>{btn.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideBer;