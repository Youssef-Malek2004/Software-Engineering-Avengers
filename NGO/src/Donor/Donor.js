import { items } from "./sidebarItems";
import Outline from "../shared/Outline";
import { navBarItems } from "./navBarItems";

function DonorBase() {
  return (
    <>
      <Outline items={items} navBarItems={navBarItems} />
    </>
  );
}

export default DonorBase;
