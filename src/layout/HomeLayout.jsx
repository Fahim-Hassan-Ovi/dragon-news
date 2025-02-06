import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar />
            </nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;