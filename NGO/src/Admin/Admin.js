import { items } from "./sideBarItems";
import OutlineNoSide from "../shared/OutlineNoSide";
import { navBarItems } from "./navBarItems";


function Admin() {
	return <OutlineNoSide items={items} navBarItems={navBarItems}/>;
    // return <Navbar />

}

export default Admin;