/* Images */
import puneet from "../assets/team/puneet.png";
import deepak from "../assets/team/deepak.png";
import bijendra from "../assets/team/bijendra.png";
import surendra from "../assets/team/surendra.png";
import sanjay from "../assets/team/sanjay.png";
import kishor from "../assets/team/kishor.png";

const TEAM = [
  {
    img: puneet,
    role: "CEO",
    name: "Puneet Khanna",
  },
  {
    img: deepak,
    role: "General Manager",
    name: "Deepak Farswan",
  },
  {
    img: bijendra,
    role: "Technical Head",
    name: "Bijendra Bohra",
  },
  {
    img: surendra,
    role: "Plant Head",
    name: "Surendra Singh",
  },
  {
    img: sanjay,
    role: "Accounts Manager",
    name: "Sanjay Jain",
  },
  {
    img: kishor,
    role: "Production Manager",
    name: "Kishor Bhanudas Moze",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-32">
      {/* Heading */}
      <h2 className="text-center text-sm tracking-widest text-gray-700 mb-20">
        MEET THE TEAM
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-24 px-6">
        {TEAM.map((member, index) => (
          <div key={index} className="text-center">
            {/* Image Card */}
            <div className="bg-gray-100 p-6">
              <img
                src={member.img}
                alt={member.name}
                className="w-full object-cover"
              />
            </div>

            {/* Text */}
            <p className="text-xs text-gray-600 mt-6">{member.role}</p>
            <p className="text-sm mt-1">{member.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
