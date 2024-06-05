import React from "react";
import styles from "../../style";

const Quote = () => {
  return (
    <div className="w-[100%] flex flex-col lg:max-w-[1500px]  bg- my-5 rounded-[20px] md:mr-3 md:space-x- bg-primary">
      <div className=" mx-10 text-secondary mt-5 md:text-center">
        <span className="text-3xl lg:text-3xl font-bold tracking-wider ">
          A word from the{" "}
          <span className={`${styles.merri} text-4xl`}>Founder </span>
        </span>
      </div>
      <div className="mx-10 my-5">
        <div
          className={`${styles.merri} text-7xl text-orange float-left bg- h-[28px] w-[40px] mt-[15px]`}
        >
          "
        </div>
        <br />
        <div className="bg- rounded-lg">
          <span
            className={`text-md md:text-lg tracking-tight ml-[50px] text-gr`}
          >
            Driven by a deep-rooted passion for mental health advocacy, I
            embarked on a journey fueled by personal experience and professional
            expertise. With a degree in psychology and a background as an
            instructor therapist for individuals with Autism Spectrum Disorder,
            I've witnessed firsthand the challenges of accessing mental health
            support. As an immigrant in Canada, navigating my own mental health
            journey highlighted the stark reality of limited resources and
            sky-high costs. It became evident: mental well-being shouldn't be a
            luxury but a fundamental right for all. And that way, Evexia was
            born—a vision to break down barriers and make mental health
            resources accessible and affordable for everyone, everywhere.
            <br />
            <span
              className={`${styles.merri} text-7xl float-right text-orange h-[28px] w-[40px] mt-[-15px]`}
            >
              "
            </span>
          </span>
        </div>
        <div
          className={`justify-center text-end mt-5 ${styles.merri} text-secondary text-xl`}
        >
          - Navya Goel
        </div>
      </div>
    </div>
  );
};

export default Quote;
