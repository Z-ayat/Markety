import styles from "./styles.module.css";
import Link from "next/link";
import Container from "@/app/components/Container/Container";
import { HiMenuAlt1 } from "react-icons/hi";
import { TbHeart, TbRepeat, TbShoppingCart } from "react-icons/tb";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Container withBorder>
        <div className={styles.mainNav}>
          <ul>
            <li>
              <Link href="#">+20 102 3433 322</Link>
            </li>
            <li>
              <Link href="#">alielzayat1197@icloud.com</Link>
            </li>
          </ul>
          <ul>
            <li>Store Locator</li>
            <li>Track Your Order</li>
            <li>Dollar (US)</li>
            <li>Register or Sign in</li>
          </ul>
        </div>
      </Container>
      <Container withBorder>
        <div className={styles.searchNav}>
          <div className={styles.logo}>
            <HiMenuAlt1 size={25} />
            <h1 className={styles.navBrand}>
              Markety<span>.</span>
            </h1>
          </div>
          <form>
            <input type="search" name="search" id="search" />
          </form>
          <ul>
            <li>Home</li>
            <li>Pendrives</li>
            <li>Cameras</li>
          </ul>
          <ul className={styles.shoppingMenu}>
            <li>
              <span>
                <TbRepeat size={25} />
              </span>
            </li>
            <li>
              <span>
                <TbHeart size={25} />
              </span>
            </li>
            <li>
              <span>
                <TbShoppingCart size={25} />
                <h4>$1785.00</h4>
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
