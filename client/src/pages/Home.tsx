import styles from "../style";
import mountains from "../assets/art/mountains.png";
import book from "../assets/art/research.png";
import logo_animated from "../assets/logos/hero-animation.gif";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="bg-primary w-full  font-inter z-0 absolute h-full">
      <div className="flex flex-col mx-10 md:flex-row mt-[125px] md:mt-0">
        <div className="w-full h-[600px] bg-secondary my-5 rounded-3xl md:rounded-l-3xl md:rounded-r-none md:mr-3 drop-shadow-lg border-2 border-dimPrimary shadow-navBarSecondary">
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
        </div>

        <div className="w-full h-[600px] bg-[#438ea8] my-5 rounded-3xl md:rounded-none md:mr-3 drop-shadow-lg border-2 border-dimPrimary shadow-navBarSecondary">
          <div className="mx-7 my-10 flex flex-col space-y-10 text-primary justify-around items-center md:items-left">
            <div className="text-lg text-primary font-light">
              <span className={`${styles.merri} text-2xl`}>Achievment </span>is
              a step-by-step process and is best shared. Let us help you and
              your team strive for greatness.
            </div>

            <img
              className="w-[250px] ss:w-[050px] sm:w-[350px] md:w-[400px] lg:w-[250px]"
              src={logo_animated}
            />
            <Link
              to="/contact"
              className={`bg-tree text-primary px-5 py-2 rounded-xl`}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="w-full h-[600px] bg-[#82adbc] my-5 rounded-3xl md:rounded-r-3xl md:rounded-l-none drop-shadow-lg shadow-navBarSecondary border-2 border-dimPrimary">
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
      </div>
    </div>
  );
};

export default Home;
