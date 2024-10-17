import Semaforo from "./Semaforo";
import "./App.css";

const TrafficLights = [
  {
    color: "red",
    time: 4000, //4 segundos
    order: 2,
    displayOrder: 1,
  },
  {
    color: "yellow",
    time: 1000, // 1 segundo
    order: 3,
    displayOrder: 2,
  },
  {
    color: "green",
    time: 2000, //2 segundos
    order: 1,
    displayOrder: 3,
  },
];

const App = () => {
  return (
    <div>
      <Semaforo data={TrafficLights} />
    </div>
  );
};

export default App;