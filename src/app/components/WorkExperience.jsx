import WorkCard from "./WorkExperienceInput";
import useEmblaCarousel from 'embla-carousel-react';

const WorkExperience = () => {
//   return (
//     <div className="wrapper">
//       <div className="flex gap-4 flex-wrap">
       
//         <WorkCard 
//         company="Mitsubishi Electric" 
//         position="Technical Support Engineer" 
//         start="July 2023" 
//         end="June 2024" 
//         logoUrl="./images/logos/mitsu.jpg"/>
//         <WorkCard company="Astor Sp. z o. o." position="Intership in Robotics" start="July 2022" end="August 2022"  />

//       </div>
//     </div>
//   );
// };

const [emblaRef] = useEmblaCarousel({ loop: false });
const cardsData = [
  { company:"Mitsubishi Electric",
    position:"Technical Support Engineer", 
    start:"July 2023" ,
    end:"June 2024", 
    logoUrl:"./images/logos/mitsu.jpg"},

  { company:"Astor Sp. z o. o." ,
  position:"Intership in Robotics" ,
  start:"July 2022" ,
  end:"August 2022",
  logoUrl:"./images/logos/astor.png" },

  { company:"Lear Corporation Poland Sp. z o.o" ,
  position:"Production Line Operator" ,
  start:"July 2021" ,
  end:"August 2021",
  logoUrl:"./images/logos/lear.jpg" },

  { company:"Froneri Polska Sp. z o.o." ,
  position:"Warehouse Worker" ,
  start:"July 2020" ,
  end:"September 2020",
  logoUrl:"./images/logos/froneri.png" },

  { company:"Basco 2 Sp. z o.o." ,
  position:"Warehouse Worker" ,
  start:"June 2019" ,
  end:"September 2019",
  logoUrl:"./images/logos/basco2.png" },
  // Add more cards as needed
];

return (
  <div className="embla" ref={emblaRef}>
    <div className="embla__container">
      {cardsData.map((card, index) => (
        <div className="embla__slide" key={index}>
          <WorkCard {...card} />
        </div>
      ))}
    </div>
  </div>
);
};

export default WorkExperience;