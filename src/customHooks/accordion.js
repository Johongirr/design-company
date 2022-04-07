import React, { useState, useRef } from "react";

function useAccordion() {
  const [selected, setSelected] = useState(null);
  const vals = Array.of(1, 2, 3, 4);
  const handleClick = (index, i) => {
    console.log(index);
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return { selected, vals, handleClick };
}

export { useAccordion };
