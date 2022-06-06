import { content } from "./content";
import "./App.css";
import Banner from "./components/Banner";
import TravelCard from "./components/TravelCard";

function App() {
  const cards = content.map((travel) => {
    return <TravelCard key={travel.id} travel={travel} />;
  });

  return (
    <div className="App">
      <Banner text={"My Travel Journal"} />
      <main>{cards}</main>
      <Banner text={"The End"} />
    </div>
  );
}

export default App;
