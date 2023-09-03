import { ItlyFlex, ItlyText } from "..";
import react, { FC } from "react";

interface Props {}

export const Footer: FC<Props> = (_props) => {
  return (
    <div className="w-full bg-gray-400">
      <div className="container mx-auto flex flex-col p-4 md:p-12 w-full">
        <div>
          <ItlyText className="text-2xl mb-8">Itly AB</ItlyText>
          <ItlyText>Västra Kyrkogatan 1</ItlyText>
          <ItlyText>Umeå, 903 29</ItlyText>
          <ItlyText>Sverige</ItlyText>
          <ItlyText>(+46) 10 750 08 88</ItlyText>
          <a href="mailto:info@itly.se">
            <ItlyText>info@itly.se</ItlyText>
          </a>
        </div>
        <ItlyFlex className="mt-8" justify={"space-between"}>
          <ItlyText>© 2023 Itly AB</ItlyText>
          <ItlyFlex>asd</ItlyFlex>
        </ItlyFlex>
      </div>
    </div>
  );
};
