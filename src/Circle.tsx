import styled from "styled-components";
import React, { useState } from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Continer = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [counter, setCounter] = useState(1);
  setCounter("2");
  return (
    <Continer bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Continer>
  );
}

export default Circle;
