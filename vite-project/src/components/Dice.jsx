import React from "react";
import PropTypes from "prop-types";
import "./Dice.css";

const Dice = ({ value, onClick }) => {
  const renderDots = () => {
    const dotPositions = {
      1: [[1]], // Центр
      2: [[0, 2]], // Верхний левый и нижний правый
      3: [[0, 2], [1]], // Верхний левый, центр и нижний правый
      4: [[0, 2], [0, 2]], // Верхний левый, верхний правый, нижний левый, нижний правый
      5: [[0, 2], [1], [0, 2]], // Верхний левый, центр, нижний правый
      6: [[0, 1, 2], [0, 1, 2]], // Верхний левый, верхний центр, верхний правый и нижний
    };

    const positions = dotPositions[value];

    return positions.map((row, rowIndex) =>
      row.map((columnIndex, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className="dot"
          style={{
            top: `${(rowIndex * 2 + 1) * 16}%`, // Центрируем по вертикали
            left: `${(columnIndex * 2 + 1) * 16}%`, // Центрируем по горизонтали
          }}
        ></div>
      ))
    );
  };

  return (
    <div className="dice" onClick={onClick}>
      {renderDots()}
    </div>
  );
};

Dice.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Dice;
