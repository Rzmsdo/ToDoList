import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Semaforo.css";

function Semaforo({ data }) {
  const dataToShow = getSortedDisplayOrder(data);
  const dataInOrder = getSortedLightOrder(data);

  const [lightsInDisplayOrder, setLightsInDisplayOrder] = useState(dataToShow);
  const [lightsInOrder, setLightsInOrder] = useState(dataInOrder);
  const [activeLight, setActiveLight] = useState(dataInOrder[0]);

  function getSortedDisplayOrder(randomOrder) {
    return randomOrder.toSorted((a, b) => a.displayOrder - b.displayOrder);
  }

  function getSortedLightOrder(randomOrder) {
    return randomOrder.toSorted((a, b) => a.order - b.order);
  }

  useEffect(() => {
    console.log(`La luz activa es: ${activeLight.color}`);
  }, [activeLight]);

  // Función para alternar la luz al hacer clic en el botón
  const toggleLight = () => {
    const currentLightIndex = lightsInOrder.findIndex(
      (l) => l.color === activeLight.color
    );
    const nextLightIndex = (currentLightIndex + 1) % lightsInOrder.length;
    setActiveLight(lightsInOrder[nextLightIndex]);
  };

  // Función para cambiar el color de la luz del semáforo al hacer clic en una luz específica
  const handleLightClick = (color) => {
    const selectedLight = lightsInOrder.find((light) => light.color === color);
    setActiveLight(selectedLight);
  };

  return (
    <div id="semaforo">
      {lightsInDisplayOrder.map((light) => (
        <Light
          key={light.color}
          color={light.color}
          activeColor={activeLight.color}
          onClick={() => handleLightClick(light.color)}
        />
      ))}
      <button onClick={toggleLight} className="btn btn-light">
        Cambiar luz
      </button>
    </div>
  );
}

const Light = ({ color, activeColor, onClick }) => {
  const opacity = color === activeColor ? 1 : 0.2;
  return (
    <div
      style={{ backgroundColor: color, opacity }}
      className="light"
      onClick={onClick}
    />
  );
};

Semaforo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      displayOrder: PropTypes.number.isRequired,
      order: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Light.propTypes = {
  color: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Semaforo;
