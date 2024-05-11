import { items } from "./sidebarItems";
import Outline from "../shared/Outline";
import { navBarItems } from "./navBarItems";

function Organization() {
	// Dummy data for demonstration
	const dummyNotifications = [
		{ id: 1, sender: "John Doe", content: "fulfilled donation post of Clothes" },
		{ id: 2, sender: "Jane Smith", content: "fulfilled donation post of School Supplies" },
		{ id: 3, sender: "Pro Bono Teacher", content: "fulfilled a donation post" },
		// Add more dummy notifications here
	];
	return <Outline items={items} navBarItems={navBarItems} notifications={dummyNotifications}/>;
}

export default Organization;