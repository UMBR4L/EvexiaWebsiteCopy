import React from "react";

// Import images
import navyaGoel from "../../assets/members/navyaGoel--2.png";
import baaniSingh from "../../assets/members/baaniSingh.png";
import saAdatAzamSaniat from "../../assets/members/saAdatAzamSaniat--2.png";
import aaryamanRattan from "../../assets/members/aaryamanRattan--2.png";
import taylorSabbag from "../../assets/members/taylorSabbag.png";
import ulyLi from "../../assets/members/ulyLi.png";
import ishaUmaima from "../../assets/members/ishaUmaima--2.png";
import zahraAlvanda from "../../assets/members/zahraAlvanda.png";
import taraCorovic from "../../assets/members/taraCorovic.png";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bgColor: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Navya Goel",
    title: "CEO • Founder",
    image: navyaGoel,
    bgColor: "", 
  },
  {
    name: "Baani Singh",
    title: "Head of Product",
    image: baaniSingh,
    bgColor: "", 
  },
  {
    name: "Sa Adat Azam Saniat",
    title: "Senior Software Developer",
    image: saAdatAzamSaniat,
    bgColor: "", 
  },
  {
    name: "Aaryaman Rattan",
    title: "Senior Software Developer",
    image: aaryamanRattan,
    bgColor: "", 
  },
  {
    name: "Taylor Sabbag",
    title: "Junior Software Developer",
    image: taylorSabbag,
    bgColor: "", 
  },
  {
    name: "Uly Li",
    title: "Junior Software Developer",
    image: ulyLi,
    bgColor: "", 
  },
  {
    name: "Isha Umaima",
    title: "Lead Product Designer",
    image: ishaUmaima,
    bgColor: "", 
  },
  {
    name: "Zahra Alvanda",
    title: "UX/UI Designer",
    image: zahraAlvanda,
    bgColor: "", 
  },
  {
    name: "Tara Corovic",
    title: "UX/UI Designer",
    image: taraCorovic,
    bgColor: "", 
  },
];

const MeetOurTeam: React.FC = () => {
  return (
    <div className="flex flex-col bg-primary items-center px-56 pb-72">
      <h2 className="text-5xl font-bold mb-12">Meet Our Team</h2>
      <div className="text-primaryColors-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 ${member.bgColor}`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-2xl w-full h-[275px]"
            />
            <h3 className="text-3xl font-semibold leading-comfy my-4">{member.name}</h3>
            <p className="text-2xl font-medium leading-loose ">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
