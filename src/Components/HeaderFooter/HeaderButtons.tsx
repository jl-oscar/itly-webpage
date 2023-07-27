import react, { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

export interface HeaderFooterProps {
  children?: ReactNode;
}

export const HeaderButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export interface ButtonProps {
  inverted?: boolean;
}

export const HeaderButton = styled.a<ButtonProps>`
  text-align: center;
  padding: ${(props) => (props.inverted ? "20px 35px" : "20px 0px")};
  font-size: 22px;
  font-weight: ${(props) => (props.inverted ? "600" : "normal")};
  color: ${(props) => (props.inverted ? "white" : "black")};
  background-color: ${(props) =>
    props.inverted ? "black" : "rgba(0, 0, 0, 0)"};
  pointer-events: pointer;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HamburgerMenu: FC<{ isOpen: boolean; onClick: () => void }> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      {isOpen ? (
        <BsXLg className="text-4xl" />
      ) : (
        <BsList className="text-4xl" />
      )}
    </button>
  );
};
