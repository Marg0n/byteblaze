import Hero from "../components/Hero";
import wave from '../assets/wave.svg';



const Home = () => {
    return (
        <div className="relative  min-h-[calc(100vh-142px)] flex justify-center items-center">
            <Hero/>
            <img className="absolute bottom-0 w-full" src={wave} alt="Wave" />
        </div>
    );
};

export default Home;