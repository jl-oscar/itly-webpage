import react, { FC } from "react";
import { DividerDiv } from "../../Components/Divider";

const StartParagraph: FC<{
  title: string;
  text: string;
  noDivider?: boolean;
}> = ({ title, text, noDivider }) => {
  return (
    <div className="flex flex-col justify-center items-center my-12 md:my-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-10 md:mb-20 text-center">
        {title}
      </h2>
      <p className="text-xl text-center leading-relaxed mb-12">{text}</p>
      {!noDivider && <DividerDiv px={120} />}
    </div>
  );
};

export const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      {/* Upp, upp och iväg */}
      <div className="flex flex-col justify-center items-center my-20 md:max-w-2xl sm:max-w-xl text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-12">
          Upp, upp och iväg!
        </h2>
        <p className="text-2xl md:text-3xl text-center font-light leading-relaxed">
          Itly är ett Umeåbaserat konsultbolag med expertis inom BI- och
          mjukvaruutveckling. Med gedigen erfarenhet inom vårt arbete, och med
          lokala såväl som internationella kunder, kastar vi ett brett nät i
          syfte att hjälpa er på bästa sätt.
        </p>
      </div>

      <div className="md:max-w-xl">
        {/* Hela stacken */}
        <StartParagraph
          title="Hela stacken."
          text="Som fullstackutvecklare arbetar vi högt och lågt med populära
            ramverk och tekniker. Vi utvecklar och underhåller allt från
            webbplatformar, API-gränssnitt och molntjänster."
        />
        {/* Moln & infrastruktur. */}
        <StartParagraph
          title="Moln & infrastruktur."
          text="Vi sätter upp och förvaltar dina miljöer i molnet eller on-premise.
          Med hjälp av populära verktyg sköter vi drift, uppskalning och
          CI/CD."
        />
        {/* BI-utveckling. */}
        <StartParagraph
          title="BI-utveckling."
          text="Vi jobbar datadrivet med och hjälper dig fatta insiktsfulla,
          affärskritiska beslut."
          noDivider
        />
      </div>
    </div>
  );
};
