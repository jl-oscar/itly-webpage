import { FC, ReactNode } from "react";
import styled from "styled-components";

interface HeaderFooterProps {
  children?: ReactNode;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  padding: 40px;
`;

const Footer = styled.div`
  height: 200px;
`;

export const HeaderFooter: FC<HeaderFooterProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <Header>
        <img
          className="text-2xl h-full"
          src="https://images.squarespace-cdn.com/content/v1/62e45351ae57ad11885910bd/fae09bca-0d47-4bf9-bc8e-ef8acbcd1267/itly_pos%403x.png?format=1500w"
        />
      </Header>
      <div className="flex-1">{children}</div>
      <Footer>Some sample text</Footer>
    </div>
  );
};
