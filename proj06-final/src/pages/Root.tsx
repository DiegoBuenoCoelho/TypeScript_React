import { Outlet } from "react-router-dom";
import Header from "./Header";
import ClassesContextProvider from "../store/classSession-contex";

export default function Root() {
	return (
		<ClassesContextProvider>
			<Header />
			<Outlet />
		</ClassesContextProvider>
	);
}
