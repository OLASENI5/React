import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/card";
import Welcome from "./components/Welcome";

function App() {
  // Sample data for profile cards
  const data = [
    {
      id: 1,
      age: 35,
      disable: false,
      description:
        "Software Engineer with a passion for building scalable web applications.",
      position: "Software Engineer",
      company: "TechCorp",
      name: "Alice Johnson",
      image:
        "https://res.cloudinary.com/dq3rnkwf0/image/upload/v1694701382/folder/imggg_ou59ny.jpg",
    },
    {
      id: 2,
      age: 50,
      disable: false,
      description:
        "Marketing Specialist with expertise in digital marketing strategies.",
      position: "Marketing Specialist",
      company: "Marketing Pro",
      name: "Bob Smith",
      image:
        "https://res.cloudinary.com/dq3rnkwf0/image/upload/v1694701384/folder/iimmggss_ycj1f5.jpg",
    },
    {
      id: 3,
      age: 45,
      disable: false,
      description:
        "Experienced Project Manager skilled in leading cross-functional teams.",
      position: "Project Manager",
      company: "Project Solutions Inc.",
      name: "Carol Davis",
      image:
        "https://res.cloudinary.com/dq3rnkwf0/image/upload/v1694701374/folder/imgggss_wlfm3e.jpg",
    },
    {
      id: 4,
      age: 40,
      disable: false,
      description:
        "Creative Graphic Designer known for delivering stunning visuals.",
      position: "Graphic Designer",
      company: "DesignMasters",
      name: "David Brown",
      image:
        "https://res.cloudinary.com/dq3rnkwf0/image/upload/v1694701370/folder/imgss_o914lf.jpg",
    },
  ];

  return (
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar />
      {/* Main heading */}
      <h1 className="text-3xl font-bold italic p-[25px] text-[#1B4965] ml-5">
        Explore a set of custom profile cards, each spotlighting different aspects of your online identity and interactions on the platform.
      </h1>
      <div className="flex ml-7">
        {/* Loop through the data array and render a Card component for each item */}
        {data.map((item) => (
          <Card
            key={item.id}
            age={item.age}
            disable={item.disable}
            description={item.description}
            position={item.position}
            names={item.name}
            company={item.company}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
