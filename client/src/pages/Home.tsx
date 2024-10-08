// import styles from "../style";
// import mountains from "../assets/art/mountains.png";
// import book from "../assets/art/research.png";
// import screen from "../assets/screens/news.png";
// import logo_animated from "../assets/logos/hero-animation.gif";
import { Link } from "react-router-dom";
import Hero from "../components/Home/Hero";
import Card from "../components/Home/Card";
import PersonalizedTherapySessions from "../components/Home/PersonalizedTherapySessions";
import ComprehensivePrograms from "../components/Home/ComprehensivePrograms";
import SelfGuidedToolkits from "../components/Home/SelfGuidedToolkits";
import FAQ from "../components/Home/FAQ";
import AnytimeAnywhere from "../components/Home/AnytimeAnywhere";
import Footer from "../components/Footer/Footer";

import empowerYourMindIcon from "../assets/icons/empowerYourMindIcon.png";
import holisticWellBeingIcon from "../assets/icons/holisticWellBeingIcon.png";
import balanceYourLifeIcon from "../assets/icons/balanceYourLifeIcon.png";
import accessibleCareIcon from "../assets/icons/accessibleCareIcon.png";

const Home: React.FC = () => {
  return (
    <div className=" w-full font-inter ">
      {/* Main Grid System */}
      <div className="w-full text-neutralColors-100 bg-dimPrimary pt-6xl px-mobile-padding lg:px-desktop-padding md:grid md:grid-cols-6 lg:grid-cols-12 md:gap-gutter  ">
        {/* Hero Section */}
        <div className="w-full md:col-span-full">
          <Hero />
        </div>

        {/* Why Choose Evexia Section */}
        <section className="w-full md:col-span-full mb-20xl px-base">
          <h2 className="text-3xl font-extraBold text-left leading-roomy mb-2xl">
            Why Choose Evexia?
          </h2>

          {/* Mobile Carousel */}
          <div className="md:hidden flex overflow-x-auto space-x-xl px-base">
            <Card
              icon={empowerYourMindIcon}
              title="Empower Your Mind"
              description="Unlock your potential with tools and resources designed to enhance mental strength."
            />
            <Card
              icon={holisticWellBeingIcon}
              title="Holistic Well-Being"
              description="Supporting every aspect of your mental health journey for a balanced and fulfilling life."
            />
            <Card
              icon={balanceYourLifeIcon}
              title="Balance Your Life"
              description="Explore the comprehensive support to help you achieve and maintain a balanced, fulfilling life."
            />
            <Card
              icon={accessibleCareIcon}
              title="Accessible Care"
              description="Ensuring mental health resources are within reach for everyone, everywhere."
            />
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-6 lg:grid-cols-12 gap-gutter">
            <Card
              icon={empowerYourMindIcon}
              title="Empower Your Mind"
              description="Unlock your potential with tools and resources designed to enhance mental strength."
            />
            <Card
              icon={holisticWellBeingIcon}
              title="Holistic Well-Being"
              description="Supporting every aspect of your mental health journey for a balanced and fulfilling life."
            />
            <Card
              icon={balanceYourLifeIcon}
              title="Balance Your Life"
              description="Explore the comprehensive support to help you achieve and maintain a balanced, fulfilling life."
            />
            <Card
              icon={accessibleCareIcon}
              title="Accessible Care"
              description="Ensuring mental health resources are within reach for everyone, everywhere."
            />
          </div>
        </section>

        {/* Other Sections */}
        {/* Personalized Therapy Sessions Section */}
        <div className="w-full md:col-span-full">
          <PersonalizedTherapySessions />
        </div>

        {/* Comprehensive Programs Section */}
        <div className="w-full md:col-span-full">
          <ComprehensivePrograms />
        </div>

        {/* Self-Guided Toolkits Section */}
        <div className="w-full md:col-span-full">
          <SelfGuidedToolkits />
        </div>

        {/* FAQ Section */}
        <div className="w-full md:col-span-full">
          <FAQ />
        </div>

        {/* Anytime, Anywhere Section */}
        <div className="w-full md:col-span-full">
          <AnytimeAnywhere />
        </div>

      </div>
   

        {/* Footer Section */}
        <div className="w-full md:col-span-full">
          <Footer />
        </div>


      {/* OLD HOME PAGE */}
      {/* <div className="w-[100%] lg:max-w-[1500px] h-[600px] bg-primary my-5 rounded-[20px] md:mr-3 flex md:flex-row justify-center md:space-x-">
          <div className="md:max-w-[75%] mx-7 my-0 flex flex-col md:flex-row md:space-x-[50px] space-y-[50px] md:space-y-[0px] text-primary justify-center items-center md:items-left bg- max-w-full">
            <div className="bg-none w-[50%] flex justify-center">
              <img
                className="w-[250px] sm:w-[350px] md:w-[300px]"
                src={logo_animated}
              />
            </div>
            <div className="flex flex-col space-y-3 text-secondary mt-5 md:w-[400px]">
              <span className="text-xl lg:text-2xl font-bold tracking-wider">
                Increase organization productivity, one individual at a time
              </span>
              <div className="hidden md:flex"></div>
              <div className="text-base font-light text-black">
                <span className={`text-base`}>Achievment </span>
                is a step-by-step process and is best shared. Let us help you
                and your team strive for greatness.
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:max-w-[1500px] h-[850px] bg-primary my-5 rounded-[20px] md:mr-3 flex md:flex-row justify-center md:space-x-">
          <div className="md:max-w-[75%] mx-7 my-0 flex flex-col md:flex-row md:space-x-[50px] space-y-[50px] md:space-y-[0px] text-primary justify-center items-center md:items-left bg- max-w-full">
            <div className="bg-none w-[100%] md:w-[50%] flex  justify-center">
              <img
                className="w-[450px] sm:w-[350px] md:w-[500px]"
                src={screen}
              />
            </div>
            <div className="flex flex-col space-y-3 text-secondary mt-5 md:w-[400px]">
              <span className="text-xl lg:text-2xl font-bold tracking-wider">
                Stay in touch with your organization
              </span>
              <div className="hidden md:flex"></div>
              <div className="text-base font-light text-black">
                The Evexia app makes it easier to connect with your
                organization's latest resources and events on mental wellbeing.
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-full h-[600px] bg-[#82adbc] my-5 rounded-3xl md:rounded-r-3xl md:rounded-l-none drop-shadow-lg shadow-navBarSecondary border-2 border-dimPrimary">
          <div className="mx-7 my-10 flex flex-col space-y-10 text-primary justify-around items-center md:items-left">
            <img
              className="w-[250px] ss:w-[050px] sm:w-[350px] md:w-[400px] lg:w-[250px] "
              src={book}
            />

            <Link
              to="/resources"
              className={`bg-tree text-primary px-5 py-2 rounded-xl`}
            >
              Resources
            </Link>
          </div>
        </div> 
        <div className="max-w-full h-[600px] bg-secondary my-5 rounded-3xl md:rounded-l-3xl md:rounded-r-none md:mr-3 drop-shadow-lg border-2 border-dimPrimary shadow-navBarSecondary">
          <div className="mx-7 my-10 flex flex-col space-y-10 text-primary justify-around items-center md:items-left">
            <div className="text-5xl text-primary font-light">
              Your mind is <span className={`${styles.merri}`}>your </span>mind
            </div>

            <div className="text-xl font-light md:text-lg">
              Connecting you to your organization's mental health resources and
              much more. Accesibility is everything, and we are here to enrich
              that.
            </div>

            <img
              className="w-[300px] ss:w-[350px] sm:w-[400px] md:w-[450px] lg:w-[300px]"
              src={mountains}
            />
          </div>
        </div> */}

    </div>
  );
};

export default Home;
