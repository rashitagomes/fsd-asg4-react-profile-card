import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const profile = {
    name: "Rashita Gomes",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    description: "MCA student interested in Full Stack Development, AI and Machine Learning."
  };

  return (
    <main className="page">
      <h1>React Profile Card</h1>
      <ProfileCard
        name={profile.name}
        imageUrl={profile.imageUrl}
        description={profile.description}
      />
    </main>
  );
}

export default App;
