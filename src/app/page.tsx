import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar/>
      <div>
        <h1>Navbar</h1>
        <h1>Search and cart Bar</h1>
      </div>
      <div>
        <h1>list of categories</h1>
        <h1>landing Swiper</h1>
      </div>
      <div>
        <h1>Deals of the day swiper</h1>
      </div>
      <div>adbanner</div>
      <div>
        <h1>Popular Categories</h1>
        <h1>Categories List</h1>
        <h1>sale banner</h1>
        <h1>Grid of Populars</h1>
      </div>
      <div>
        <h1>Banner1</h1>
        <h1>Banner2</h1>
      </div>
      <div>
        <h1>By Categoriy Grid</h1>
      </div>
      <div>Recommended Grid 2 rows</div>
      <div>
        <h1>Banner 1 </h1>
        <h1>Banner 2 </h1>
      </div>
      <div>list of supporters</div>
      <div>
        <div>Featured Prods</div>
        <div>OnSale Prods</div>
        <div>TopRated Prod</div>
        <div>Banner Of Ad</div>
      </div>
      <div>Newsletter</div>
      <footer></footer>
    </main>
  );
}
