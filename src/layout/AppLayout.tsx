import styles from "./AppLayout.module.scss"
import { Outlet } from "react-router";
import Header from "../components/Header/header";


const AppLayout = () => {
	return (
		<div className={styles.appLayout}>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			
		</div>
	);
};

export default AppLayout;
