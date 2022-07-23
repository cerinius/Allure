import styles from "./Layout.module.css";
import { Grid, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.bannerOuter}>
        <div className={`${styles.bannerInner} ${styles.responsiveWrapper}`}>
          <p>
            <a href="/inquiry"> Book now for your 2023 wedding!</a>
          </p>
        </div>
      </div>
      <div className={styles.headerOuter}>
        <div className={`${styles.headerInner} ${styles.responsiveWrapper}`}>
          <div className={styles.headerLogo}>
            <img src="https://assets.codepen.io/285131/acme-2.svg" />
          </div>
          <nav className={styles.headerNavigation}>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/inquiry">Inquiry</a>
            <a href="contactUs">Contact Us</a>
            <button>Menu</button>
          </nav>
        </div>
      </div>
      <div className={styles.body}>{children}</div>
      <div
        style={{
          marginTop: "5%",
        }}
      >
        <Grid
          item
          xs={12}
          container
          justifyContent={"space-evenly"}
          alignItems={"center"}
          direction={"row"}
        >
          <Grid item xs={2}>
            <a
              target={"_blank"}
              href={
                "http://www.nytimes.com/2011/10/30/fashion/weddings/caissie-levy-david-reiser-weddings.html?_r=0"
              }
            >
              <img
                width={"100%"}
                height={"auto"}
                alt={"the new york times logo"}
                src={"/theNewYorkTimes.jpeg"}
              />
            </a>
          </Grid>
          <Grid item xs={2}>
            <a
              href={"http://www.people.com/people/article/0,,20545046,00.html"}
              target={"_blank"}
            >
              <img
                width={"100%"}
                height={"auto"}
                alt={"the style me pretty logo"}
                src={"/styleMePretty.png"}
              />
            </a>
          </Grid>
          <Grid item xs={2}>
            <a
              target={"_blank"}
              href={"http://www.people.com/people/article/0,,20545046,00.html"}
            >
              <img
                width={"100%"}
                height={"auto"}
                alt={"the people dot com image"}
                src={"/peopleDotCom.gif"}
              />
            </a>
          </Grid>
          <Grid item xs={2}>
            <a
              href={"http://www.vineyardbride.ca/allure-hair-and-makeup"}
              target={"_blank"}
            >
              <img
                width={"100%"}
                height={"auto"}
                alt={"the vine yard bride logo"}
                src={"/vineyard_bride.png"}
              />
            </a>
          </Grid>
          <Grid item xs={2}>
            <a
              target={"_blank"}
              href={"https://www.elegantwedding.ca/dark-moody-winter-wedding/"}
            >
              <img
                width={"100%"}
                height={"auto"}
                alt={"the elegant wedding logo"}
                src={"/elegantWedding.png"}
              />
            </a>
          </Grid>
        </Grid>
        <Grid
          className={styles.footer}
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            item
            xs={10}
            container
            spacing={5}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <List>
                <ListItem>
                  <Link href={`/`}>Menu</Link>
                </ListItem>
                <ListItem>
                  <Link href={`/`}>The Team</Link>
                </ListItem>
                <ListItem>
                  <Link href={`/`}>Services</Link>
                </ListItem>
                <ListItem>
                  <Link href={`/`}>Shop</Link>
                </ListItem>
                <ListItem>
                  <Link href={`/`}>Portfolio</Link>
                </ListItem>
                <ListItem>
                  <Link href={`/`}>Contact</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              container
              justifyContent={"space-evenly"}
              xs={6}
              style={{ display: "flex" }}
            >
              <Grid item>
                <img src={`/footerImage1.jpg`} />
              </Grid>
              <Grid item>
                <img src={`/footerImage2.jpg`} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <List>
                <ListItem>
                  <Link href={`/`}>Account</Link>
                </ListItem>
                <ListItem>
                  <Link href={`/`}>Follow</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography align={"center"}>
                @2022 ALLURE HAIR AND MAKEUP
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
