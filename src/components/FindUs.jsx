import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join join-vertical flex  *:bg-base-100">
                <button className="btn join- justify-start">
                    <FaFacebook /> Facebook
                </button>
                <button className="btn join- justify-start">
                <FaXTwitter /> Twitter
                </button>
                <button className="btn join- justify-start">
                <FaInstagram /> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;