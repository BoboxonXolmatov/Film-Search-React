import { FcLike } from "react-icons/fc";
import { useFetch } from "../hook/useFetch";
import { toast } from "react-toastify";

function Card() {
    const { data, isPending } = useFetch(
        "https://www.omdbapi.com/?s=wednesday&apikey=836fe114"
    );
    // console.log(data);
    const handleLike = function () {
        toast.dark('You Like')
    };

    if(!isPending){
        <h1>Loading...</h1>
    }


    return (
        <div className="flex justify-between gap-y-10 flex-wrap">
            {data &&
                data.Search.map((item) => {
                    return (
                        <div
                            key={item}
                            className="card w-80 h-96 bg-base-200 shadow-xl "
                        >
                            <figure className="px-10 pt-10 w-full object-cover">
                                <img
                                    src={item.Poster}
                                    alt="Shoes"
                                    className="rounded-xl w-full "
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.Title}</h2>
                                <p>Year: {item.Year}</p>
                                <div className="card-actions relative ">
                                    <FcLike onClick={handleLike} className="w-10 h-6 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Card;
