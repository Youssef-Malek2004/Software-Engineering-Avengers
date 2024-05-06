import { items } from "./sideBarItems";
import Outline from "../shared/Outline";
import { navBarItems } from "./navBarItems";
import Navbar from "./Navbar";

function Admin() {
	return <Outline items={items} navBarItems={navBarItems}/>;
    // return <Navbar />

}

export default Admin;