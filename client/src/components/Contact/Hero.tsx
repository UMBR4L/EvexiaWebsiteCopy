import styles from "../../style";

import question from "../../assets/art/question.svg";

const Hero = () => {
  return (
    <div className="">
      <div className="px-3 justify-center flex items-center text-left md:text pt-[125px] md:pt-[200px] bg-primary  rounded-b-[2%] xs:rounded-b-[10%] relative pb-[80px]  border-b-[10px] border-b-secondary">
        <div className="relative  md:max-w-[80%] px-10">
          <div className=" text-secondary relative z-10  ">
            <div className="text-3xl sm:text-5xl font-semibold">
              Reach out to <span className={`${styles.merri}`}>us</span>
            </div>
            <br />

            {/* <div className="hidden md:flex"></div> */}

            <div className="text-2xl sm:text-3xl flex font-meds  text-left ">
              We're here to help you bridge the gap to better mental health
              resources.
            </div>
            <div className=" md:flex">
              <br />
            </div>

            <div className="text-md">
              Whether you're seeking general information or have specific
              inquiries about our services, we invite you to reach out. Our team
              at Evexia is dedicated to supporting you every step of the way.
              Fill out the form below with your name, email, and message—we look
              forward to hearing from you!
            </div>
          </div>
          {/* <div className="absolute bottom-0 right-8 w-[40%] overflow-hidden ss:max-w-[25%] sm:max-w-[25%] md:w-[12%] xl:max-w-[9%] z-0 rounded-br-[24%] animate-slide-left">
            <img src={question} className={`w-full h-full object`} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
