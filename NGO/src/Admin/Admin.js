import { items } from "./sideBarItems";
import OutlineNoSide from "../shared/OutlineNoSide";
import { navBarItems } from "./navBarItems";
import Navbar from "./Navbar";

function Admin() {
	return <OutlineNoSide items={items} navBarItems={navBarItems}/>;
    // return <Navbar />

}

export default Admin;