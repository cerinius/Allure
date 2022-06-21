import { Grid } from "@mui/material";
import styles from "./Header.module.css";
import Image from "next/image";
import Navigation from "./navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Header() {
  const router = useRouter();
  const [headerShrinked, setHeaderShrinked] = useState(false);
  useEffect(() => {
    function resizeHeaderOnScroll() {
      const distanceY = document.documentElement.scrollTop;
      const shrinkOn = 50;

      if (distanceY >= shrinkOn) {
        setHeaderShrinked(true);
      } else {
        setHeaderShrinked(false);
      }
    }

    window.addEventListener("scroll", resizeHeaderOnScroll);
  }, []);
  return (
    <div
      className={`${styles.header} ${headerShrinked ? styles.shrinked : ""}`}
    >
      <Grid className={styles.main} container>
        <Grid
          className={styles.container}
          item
          xs={3}
          sm={2}
          onClick={() => router.push(`/`)}
        >
          <div
            className={`${styles.headerBrand} ${
              headerShrinked ? styles.shrinked : ""
            }`}
          >
            <div className={styles.logoWrapper}>
              <Image
                className={styles.logo}
                alt={"logo"}
                layout={"fill"}
                src={`/Logo.jpeg`}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={9} sm={10} className={styles.navigation}>
          <Navigation />
        </Grid>
      </Grid>
    </div>
  );
}
