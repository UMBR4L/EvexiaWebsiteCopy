import styles from "../style";
import mountains from "../assets/art/mountains.png";
import book from "../assets/art/research.png";
import screen from "../assets/screens/news.png";
import logo_animated from "../assets/logos/hero-animation.gif";
import { Link } from "react-router-dom";
import Hero from "../components/Home/Hero";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col font-inter z-0 absolute  w-full bg-gradient bg-gradient-to-b from-secondary to-tree">
      <div className="mt-[103px] md:mt-[0px] w-full">
        <Hero />
      </div>
      <div className="flex flex-col mx-10  md:mt-0 bg-none">
        <div className="w-full h-[600px] bg-primary my-5 rounded-[20px] md:mr-3 flex md:flex-row justify-center md:space-x-">
          <div className="md:max-w-[75%] mx-7 my-0 flex flex-col md:flex-row md:space-x-[50px] space-y-[50px] md:space-y-[0px] text-primary justify-center items-center md:items-left bg- w-full">
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

        <div className="w-full h-[850px] bg-primary my-5 rounded-[20px] md:mr-3 flex md:flex-row justify-center md:space-x-">
          <div className="md:max-w-[75%] mx-7 my-0 flex flex-col md:flex-row md:space-x-[50px] space-y-[50px] md:space-y-[0px] text-primary justify-center items-center md:items-left bg- w-full">
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

        {/* <div className="w-full h-[600px] bg-[#82adbc] my-5 rounded-3xl md:rounded-r-3xl md:rounded-l-none drop-shadow-lg shadow-navBarSecondary border-2 border-dimPrimary">
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
        </div> */}
        {/* <div className="w-full h-[600px] bg-secondary my-5 rounded-3xl md:rounded-l-3xl md:rounded-r-none md:mr-3 drop-shadow-lg border-2 border-dimPrimary shadow-navBarSecondary">
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
    </div>
  );
};

export default Home;
