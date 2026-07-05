import type { ReactNode } from "react";

type HeaderProps = {
  h1Text: string;
  navButton?: ReactNode;
};

function Header({ h1Text, navButton }: HeaderProps) {
  return (
    <div className="flex justify-center items-center h-20 md:h-48">
      <h1 className="mr-2 md:mr-10 text-4xl md:text-8xl header-text">
        {h1Text}
      </h1>
      <img className='h-full' src="/colour-conjuror-cat.png" alt="A Cat Conjuror"/>
      {navButton}
    </div>
  )
}

export default Header