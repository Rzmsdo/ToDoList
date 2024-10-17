import { useEffect, useState } from "react";
import "./Semaforo.css";

function Semaforo({ data }) {
  const dataToShow = getSortedDisplayOrder(data);
  const dataInOrder = getSortedLightOrder(data);

  const [lightsInDisplayOrder, setLightsInDisplayOrder] = useState(data);
  const [lightsInOrder, setLightsInOrder] = useState(dataInOrder);

  const [activeLight, setActiveLight] = useState(dataInOrder[0]);

  function getSortedDisplayOrder(randomOrder) {
    return randomOrder.toSorted(function (a, b) {
      return a.displayOrder - b.displayOrder;
    });
  }

  function getSortedLightOrder(randomOrder) {
    return randomOrder.toSorted(function (a, b) {
      return a.order - b.order;
    });
  }
  useEffect(() => {
    console.log(`La luz activa es: ${activeLight.color}`);
  }, [activeLight]);

  // Función para alternar la luz al hacer clic
  const toggleLight = () => {
    const currentLightIndex = lightsInOrder.findIndex(
      (l) => l.color === activeLight.color
    );
    const nextLightIndex =
      (currentLightIndex + 1) % lightsInDisplayOrder.length;
    setActiveLight(lightsInOrder[nextLightIndex]);
  };

  return (
    <div id="semaforo">
      {lightsInDisplayOrder.map((light) => {
        return (
          <Light
            key={light.color}
            color={light.color}
            activeColor={activeLight.color}
          />
        );
      })}
      <button onClick={toggleLight} className="btn btn-light">
        Cambiar luz
      </button>
    </div>
  );
}

const Light = ({ color, activeColor }) => {
  const opacity = color === activeColor ? 1 : 0.2;
  return <div style={{ backgroundColor: color, opacity }} className="light" />;
};

export default Semaforo;