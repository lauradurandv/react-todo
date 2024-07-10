import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Navbar = () => {
    return(
        <div className={styles.navBar}>
            <div className={styles.tab}>
                <Link to="/">Home</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}
export default Navbar;
