import React from "react";
import logo_animated from "../../assets/logos/hero-animation.gif";
import san from "../../assets/members_100/Saniat.png";
import navya from "../../assets/members_100/Navya.png";
import aarya from "../../assets/members_100/Aaryaman.png";
import tristan from "../../assets/members_100/Tristan.png";
import taylor from "../../assets/members_100/Taylor.png";
import isha from "../../assets/members_100/Isha.png";
import def from "../../assets/members_100/Default.png";
import styles from "../../style";

interface TeamMember {
  name: string;
  position: string;
  pic: string;
}

interface Members {
  [key: string]: TeamMember;
}

const members: Members = {
  1: {
    name: "Navya Goel",
    position: "CEO • Founder",
    pic: navya,
  },
  2: {
    name: "Sa Adat Azam Saniat",
    position: "Senior Software Developer",
    pic: san,
  },
  3: {
    name: "Aaryaman Rattan",
    position: "Senior Software Developer",
    pic: aarya,
  },
  4: {
    name: "Tristan Samuk",
    position: "Junior Software Developer",
    pic: tristan,
  },
  5: {
    name: "Taylor Sabbag",
    position: "Junior Software Developer",
    pic: taylor,
  },
  6: {
    name: "Isha Umaima",
    position: "Product Designer",
    pic: isha,
  },
  7: {
    name: "Baani Sing",
    position: "Head of Product",
    pic: def,
  },
};

interface CardProps {
  name: string;
  position: string;
  pic: string;
}

const Card: React.FC<CardProps> = ({ name, position, pic }) => {
  return (
    <div className="xs:w-[250px] w-full bg- items-center justify-center drop-shadow-md">
      <div className="flex flex-row xs:flex-col m-5 xs:items-center">
        <div className="bg-lightOrange xs:to-dimPrimary xs:w-full xs:h-[80px] w-[120px] h-[120px]  xs:mt-0 flex  xs:rounded-b-[20px] items-center  justify-center border-dimPrimary rounded-l-[20px] ">
          <img
            src={pic}
            className={`xs:h-[100px] h-[70px] rounded-full ${styles.pop_sm} border-[8px] border-tree shadow-lg`}
          />
        </div>

        {/* <div className="hidden xs:flex h-[40px] w-[40px] bg-tree rounded-full mt-3 mb-1"></div> */}

        <div className=" bg-transparent  h-[120px] xs:w-full w-[250px] flex flex-col justify-center  text-center border-lightOrange border-b-2  border-r-2 xs:border-b-2 xs:rounded-br-[20px] p-2 xs:my-4">
          <div className="text-gr xs:text-xl tracking-wider">{name}</div>
          <div className="text-orange">{position}</div>
        </div>
      </div>
      {/* <div className="flex xs:hidden w-[75%] h-[1px] bg-secondary mt-[-30px]"></div> */}
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="w-[100%] flex flex-col lg:max-w-[1500px]  bg- my-5 rounded-[20px] md:mr-3 md:space-x- bg-primary">
      <div className=" mx-10 text-secondary mt-5  bg-red- md:text-center">
        <span className="text-3xl lg:text-3xl font-bold tracking-wider ">
          The <span className={`${styles.merri} text-4xl`}>Team</span>
        </span>
      </div>

      <div className="flex flex-wrap xs:justify-center xs:mx-7 xs:my-9 my-4 xs:p-5 bg- rounded-lg bg-transparent border-dimPrimary border-2 space-y-[-30px] xs:space-y-[0px] h-[500px] overflow-scroll py-5 shadow ">
        {Object.keys(members).map((k) => (
          <div className="bg- rounded-3xl w-full xs:w-[250px]">
            <Card
              key={k}
              name={members[k].name}
              position={members[k].position}
              pic={members[k].pic}
            />
          </div>
        ))}
      </div>
      <div className="xs:mt-[-85px] mt-[-68px]  flex xs:mx-7 bg-gradient-to-t from-dimPrimary to-transparent h-[50px] z-200 rounded-b-lg backdrop-blur-sm"></div>
    </div>
  );
};

export default Team;
