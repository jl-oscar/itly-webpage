import react, { FC } from "react";
import styled from "styled-components";

interface DividerProps {
  px?: number;
}

export const DividerDiv = styled.div<DividerProps>`
  background-color: black;
  height: 1px;
  width: ${(props) => (props.px ? `calc(100% - ${props.px}px)` : "100%")};
`;
