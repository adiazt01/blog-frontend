import { linksCMS } from "../../constants/navbar";
import { LinksNav } from "./LinksNav";
export const NavbarCMS = () => {

  return (
    <>
      <header className="flex sticky top-0 items-center justify-between py-3 px-8 z-40 bg-white gap-2 shadow-md">
        <div className="flex items-center gap-2">
          <LinksNav links={linksCMS}/>
        </div>
      </header>
    </>
  );
};
