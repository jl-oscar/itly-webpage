import react, { FC, useState } from "react";
import styled from "styled-components";
import { IsMobileDevice } from "../../Utils/utils";
import {
  HamburgerMenu,
  HeaderButton,
  HeaderButtonsContainer,
  HeaderFooterProps,
} from "./HeaderButtons";
import { motion } from "framer-motion";
import { Footer } from "./Footer";

export const HeaderFooter: FC<HeaderFooterProps> = ({ children }) => {
  const isMobile = IsMobileDevice();
  const [isOpen, setIsOpen] = useState(false);

  const expandHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container mx-auto flex flex-col h-full min-h-screen p-4 md:p-12 w-full">
        <div className="flex justify-between h-20">
          <a href="/">
            <img
              className="text-2xl h-full"
              src="https://images.squarespace-cdn.com/content/v1/62e45351ae57ad11885910bd/fae09bca-0d47-4bf9-bc8e-ef8acbcd1267/itly_pos%403x.png?format=1500w"
            />
          </a>
          {isMobile ? (
            <HamburgerMenu isOpen={isOpen} onClick={expandHamburger} />
          ) : (
            <HeaderButtonsContainer>
              <HeaderButton href="/consultants">Våra Konsulter</HeaderButton>
              <HeaderButton href="/about">Om oss</HeaderButton>
              <HeaderButton href="/contact" inverted>
                Kontakta oss
              </HeaderButton>
            </HeaderButtonsContainer>
          )}
        </div>

        {((!isOpen && isMobile) || !isMobile) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {children}
          </motion.div>
        )}
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col mx-auto mt-8"
          >
            <HeaderButton href="/consultants">Våra Konsulter</HeaderButton>
            <HeaderButton href="/about">Om oss</HeaderButton>
            <HeaderButton href="/contact" inverted>
              Kontakta oss
            </HeaderButton>
          </motion.div>
        )}
      </div>
      {!isOpen && <Footer></Footer>}
    </>
  );
};
