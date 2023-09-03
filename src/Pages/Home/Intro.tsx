export const Intro = () => {
  return (
    <div className="max-w-[100%] md:max-w-[50%] mt-20 md:mt-48">
      <h1 className="text-4xl md:text-7xl font-semibold">
        Kom i mål med dina digitala åtaganden.
      </h1>
      <p className="mt-6 text-2xl">
        Vi på Itly hjälper våra kunder till hållbara digitala lösningar.
      </p>
      <a>
        {/* TODO: Replace with mantine button when "variant=filled" works */}
        <button className="mt-10 p-4 md:p-6 text-l md:text-xl font-medium bg-black text-white">
          När, var och hur?
        </button>
      </a>
    </div>
  );
};
