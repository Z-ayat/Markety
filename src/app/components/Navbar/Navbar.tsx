import styles from './styles.module.css'
import Link from "next/link";
import Container from "@/app/components/Container/Container";
const Navbar = () => {
  return (
      <nav>
          <Container>
              <div className={styles.mainNav}>
                  <ul>
                      <li><Link href='#'>+20 102 3433 322</Link></li>
                      <li><Link href='#'>alielzayat1197@icloud.com</Link></li>
                  </ul>
                  <ul>
                      <li>Store Locator</li>
                      <li>Track Your Order</li>
                      <li>Dollar (US)</li>
                      <li>Register or Sign in</li>
                  </ul>
              </div>
          </Container>
      </nav>
  )
}
export default Navbar