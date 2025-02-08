import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const NewsCard = (props = {}) => {
    const { news } = props || {};
    const { title, author, thumbnail_url, details, rating, total_view, _id } = news;
    console.log(news);
    return (
        <div className="card bg-white border-1 border-gray-200  ">
            {/* Author Info & Actions */}
            <div className="flex justify-between items-center bg-[#F3F3F3] p-4">
                {/* Author */}
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full border"
                    />
                    <div>
                        <h3 className="font-semibold text-sm">{author.name}</h3>
                        <p className="text-xs text-gray-500">{author.published_date?.split(" ")[0]}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 text-gray-600 cursor-pointer">
                    <FaBookmark size={18} />
                    <FaShareAlt size={18} />
                </div>
            </div>

            <div className="p-4">
                {/* Title */}
                <h2 className="text-xl font-bold my-4">{title}</h2>

                {/* Image */}
                <div className="">
                    <img src={thumbnail_url} alt={title} className="w-full rounded-none mb-3" />
                </div>

                {/* Description */}
                <p className="text-sm text-[#706F6F] mb-4 mt-8">
                    {details.length > 150 ? `${details.slice(0, 150)}...` : details}{" "}
                    <Link to={`/news/${_id}`} className="text-[#FF8C47] font-semibold cursor-pointer">Read More</Link>
                </p>
                <hr className="text-gray-200" />
                {/* Footer: Rating & Views */}
                <div className="flex justify-between items-center text-gray-600 text-sm my-3">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <ReactStars
                            count={5}
                            value={rating.number}
                            size={20}
                            edit={false}
                            color2={"#FF8C47"} // Orange color
                        />
                        <span className="text-[#706F6F] font-medium">{rating.number}</span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2">
                        <FaEye className="text-[#706F6F]"/>
                        <span className="text-[#706F6F] font-medium">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;