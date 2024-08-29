import oscar from "../../Images/oscar.jpg";
import daniel from "../../Images/Daniel.jpg";
import alex from "../../Images/alex.jpg";
import david from "../../Images/david.jpg";

interface Consultant {
  name: string;
  title: string;
  image: string;
  infoText: string;
  contact: {
    email: string;
    phone: string;
    linkedIn: string;
  }
}

export const Consultants = () => {
  return (
    <div className="container mx-auto py-8 min-h-screen flex flex-col">
      <div className="text-center text-3xl font-bold mb-8 mt-20">
        Våra konsulter
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
        {consultants.map(consultant => {
          return (
            <div key={consultant.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={consultant.image}
                alt="Placeholder"
                className="w-full h-80 object-cover object-top"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">{consultant.name}</h2>
                <p className="text-gray-700">{consultant.title}</p>
              </div>
              <div className="p-6 pt-4">
                <p className="text-gray-700">{consultant.infoText}</p>
              </div>
              <div className="p-6 mt-auto">
                <p className="text-gray-700">{consultant.contact.email}</p>
                <p className="text-gray-700">{consultant.contact.phone}</p>
                <a href={consultant.contact.linkedIn} className="text-blue-700">LinkedIn</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const consultants: Consultant[] = [
  {
    name: "Alexander Sundin",
    title: "Software Developer",
    image: alex,
    infoText: "Senior systemutvecklare med flera års erfarenhet av hela stacken. Har till störst del arbetat med tekniker som React, NodeJS, Angular, Typescript, Docker samt PostgreSQL, men har även kunskaper inom AWS, Python, Java och .NET(C#). Van att leda och arbeta enligt agila arbetssätt och tar stort personligt ansvar i sitt arbete.",
    contact: {
      email: "alexander.sundin@itly.se",
      phone: "(+46) 72 448 55 55",
      linkedIn: "https://www.linkedin.com/in/alexander-sundin-1234567/"
    }
  },
  {
    name: "David Engelmark",
    title: "Software Developer",
    image: david,
    infoText: "Senior systemutvecklare med mångårig erfarenhet inom webb- och serverutveckling. Har till störst del arbetat med tekniker som React, NodeJS, Typescript, PostgreSQL, Azure SQL, Powershell och C#, men även utvecklat DevOps-lösningar i Docker, Azure och AWS ekosystem.",
    contact: {
      email: "david.engelmark@itly.se",
      phone: "(+46) 73 880 62 42",
      linkedIn: "https://www.linkedin.com/in/alexander-sundin-1234567/"
    }
  },
  {
    name: "Daniel Markgren",
    title: "BI-Consultant",
    image: daniel,
    infoText: "Senior BI/DW-utvecklare som brinner för att skapa hållbara dataflöden och insiktsfulla dashboards i Power BI eller Qlik Sense. Arbetar främst i Microsoft BI-stacken och trivs med att skriva avancerade stored procedures och vyer i T-SQL, smarta integrationer med SSIS och att överträffa kundens förväntningar med snygga dashboards.",
    contact: {
      email: "daniel.markgren@itly.se",
      phone: "(+46) 73 087 24 69",
      linkedIn: "https://www.linkedin.com/in/alexander-sundin-1234567/"
    }
  },
  {
    name: "Oscar Jonasson Lundberg",
    title: "Software Developer",
    image: oscar,
    infoText: "Systemutvecklare med erfarenhet i spannet mellan senior och junior. Har främst arbetat med ramverk och tekniker som ReactJS, Node, Typescript, PostgreSQL och Docker. Har även kunskap inom C, Java, C#, Python och AWS. Gillar att ta ansvar samt komma på och implementera kreativa lösningar.",
    contact: {
      email: "oscar.jl@itly.se",
      phone: "(+46) 70 104 54 28",
      linkedIn: "https://www.linkedin.com/in/alexander-sundin-1234567/"
    }
  },
];
