import styles from "./AppLayout.module.scss"
import { Outlet } from "react-router";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";


const AppLayout = () => {
	return (
		<div className={styles.appLayout}>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
			
		</div>
	);
};

export default AppLayout;
