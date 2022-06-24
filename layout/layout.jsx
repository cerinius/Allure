import styles from "./Layout.module.css";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";

export default function Layout({ children }) {
  return (<>
    <div className={styles.bannerOuter}>
      <div className={`${styles.bannerInner} ${styles.responsiveWrapper}`}>
        <p>Save up to 70% on selected merch. <a href="#">Go to sale</a></p>
      </div>
    </div>
    <div className={styles.headerOuter}>
      <div className={`${styles.headerInner} ${styles.responsiveWrapper}`}>
        <div className={styles.headerLogo}>
          <img src="https://assets.codepen.io/285131/acme-2.svg" />
        </div>
        <nav className={styles.headerNavigation}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
          <button>Menu</button>
        </nav>
      </div>
    </div>
    <div className={styles.body}>
      {children}
    </div>
    <div>
      <Grid className={styles.footer} container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={10} container spacing={5} justifyContent={"space-evenly"} alignItems={"center"}
              direction={"row"}>
          <Grid item xs={3} style={{
            display: "flex",
            justifyContent: "flex-end"
          }}>
            <List>
              <ListItem>
                Menu
              </ListItem>
              <ListItem>
                The Team
              </ListItem>
              <ListItem>
                Services
              </ListItem>
              <ListItem>
                Shop
              </ListItem>
              <ListItem>
                Portfolio
              </ListItem>
              <ListItem>
                Contact
              </ListItem>
            </List>
          </Grid>
          <Grid item container justifyContent={"space-evenly"} xs={6} style={{ display: "flex" }}>
            <Grid item>
              <img src={`/footerImage1.jpg`} />
            </Grid>
            <Grid item>
              <img src={`/footerImage2.jpg`} />
            </Grid>
          </Grid>
          <Grid item xs={3} style={{
            display: "flex",
            justifyContent: "flex-start"
          }}>
            <List>
              <ListItem>
                Account
              </ListItem>
              <ListItem>
                Follow
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
  </>);
}