import { type PrintTemplate } from "../../config/mapConfig";

function Print({ printTemplate }: { printTemplate: PrintTemplate }) {
  const logoUrl = printTemplate.logoImg;
  const logoAlt = printTemplate.logoAlt;

  // TODO: FINISH THE PRINT TOOL!!!!!
  return (
    <div className="flex flex-col w-full p-4">
      <h1 className="font-bold text-3xl text-center">
        Print Preview
      </h1>
      <p className="text-center">Print tool coming soon.</p>
      {/* Logo */}
      <div className="grid grid-cols-12 hidden">
        <img
          src={logoUrl}
          alt={logoAlt}
          className=""
        />
        <p className="">
          {logoAlt}
        </p>
      </div>
    </div>
  );
}

export default Print