
import { FaRegHeart, FaRegCommentDots, FaShareAlt } from 'react-icons/fa';
import { AiFillStar, AiOutlineEye } from 'react-icons/ai';

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-md mb-4 rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="mr-4 rounded-full w-10 h-10"
        />
        <div>
          <p className="font-semibold text-sm">{news.author.name}</p>
          <p className="text-gray-500 text-xs">{new Date(news.author.published_date).toLocaleDateString()}</p>
        </div>
        <div className="flex space-x-2 ml-auto">
          <FaRegHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
          <FaRegCommentDots className="text-gray-400 hover:text-blue-500 cursor-pointer" />
          <FaShareAlt className="text-gray-400 hover:text-green-500 cursor-pointer" />
        </div>
      </div>
      <img
        src={news.thumbnail_url}
        alt={news.title}
        className="w-full h-64 object-contain"
      />
      <div className="p-4">
        <h2 className="mb-2 font-bold text-lg">{news.title}</h2>
        <p className="mb-4 text-gray-600 text-sm">{news.details}</p>
        <a href="#" className="font-semibold text-blue-500">Read More</a>
        <div className="flex items-center mt-4">
          <div className="flex items-center mr-4">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <span className="ml-2 text-sm">{news.rating.number}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <AiOutlineEye className="mr-1" />
            <span className="text-sm">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
