import type { ReactNode } from "react";

type HeaderProps = {
  h1Text: string;
  navButton?: ReactNode;
};

function Header({ h1Text, navButton }: HeaderProps) {
  return (
    <div className="grid grid-cols-5 items-center m-2 md:m-5">
      <div className="md:col-start-2 col-span-3 flex md:justify-center items-center h-20 md:h-35">
        <h1 className="mr-2 md:mr-10 text-4xl md:text-8xl header-text">
          {h1Text}
        </h1>
      </div>
      <div className="col-start-5 justify-self-end">
        {navButton}
      </div>
    </div>
  )
}

export default Header