import react, { FC, ReactNode } from "react";
import styled from "styled-components";

interface HeaderFooterProps {
  children?: ReactNode;
}

const HeaderButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface ButtonProps {
  inverted?: boolean;
}

const HeaderButton = styled.a<ButtonProps>`
  text-align: center;
  padding: 20px 35px;
  font-size: 22px;
  font-weight: ${(props) => (props.inverted ? "600" : "normal")};
  color: ${(props) => (props.inverted ? "white" : "black")};
  background-color: ${(props) =>
    props.inverted ? "black" : "rgba(0, 0, 0, 0)"};
  pointer-events: pointer;
`;

const Footer = styled.div`
  height: 200px;
`;

export const HeaderFooter: FC<HeaderFooterProps> = ({ children }) => {
  return (
    <div className="container mx-auto flex flex-col h-full min-h-screen">
      <div className="flex justify-between h-20 mt-14">
        <a href="/">
          <img
            className="text-2xl h-full"
            src="https://images.squarespace-cdn.com/content/v1/62e45351ae57ad11885910bd/fae09bca-0d47-4bf9-bc8e-ef8acbcd1267/itly_pos%403x.png?format=1500w"
          />
        </a>
        <HeaderButtonsContainer>
          <HeaderButton href="/consultants">Våra Konsulter</HeaderButton>
          <HeaderButton href="/about">Om oss</HeaderButton>
          <HeaderButton href="/contact" inverted>
            Kontakta oss
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
      <div className="flex-1">{children}</div>
      <Footer>Footer to be</Footer>
    </div>
  );
};
