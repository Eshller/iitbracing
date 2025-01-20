import ButtonGradient from "../assets/svg/ButtonGradient";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import OurAchievements from "./OurAchievements";
import { OurCars } from "./OurCars";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import Services from "./Services";

const HomePage = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero />
                <OurMission />
                {/* <Benefits /> */}
                <OurTeam />
                <Features />
                {/* <Collaboration /> */}
                <Services />
                <OurAchievements />
                <OurCars />
                {/* <Pricing />
        <Roadmap /> */}
                <Footer />
            </div>

            <ButtonGradient />
        </>
    );
};

export default HomePage;
