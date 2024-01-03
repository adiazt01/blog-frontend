import { LinksNav } from "./LinksNav";
import { SearchBar } from "./SearchBar";
import { useParams } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import { links } from "../../constants/navbar";

export const Navbar = () => {
  const params = useParams();
  const isBlogPost = params.id !== undefined;
  return (
    <>
      <header className="flex sticky top-0 items-center justify-between py-3 px-8 z-40 bg-white gap-2 shadow-md">
        <div className="flex items-center gap-2">
          <LinksNav links={links}/>
        </div>
        <SearchBar />
      </header>
      {isBlogPost && <ProgressBar />}
    </>
  );
};
