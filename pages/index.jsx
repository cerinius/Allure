import { Container, Grid, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import AllServices from "../components/services/allServices";
export default function Home() {
  return (
    <Grid container justifyContent={"center"} direction={"row"} spacing={4}>
      <Grid item xs={12}>
        <span />
      </Grid>
      <Grid
        item
        xs={12}
        className={styles.image}
        style={{
          width: "100%",
          height: "450px",
          position: "relative",
        }}
      ></Grid>
      <Grid item xs={10} md={8} style={{ marginTop: "5%" }}>
        <Typography
          variant={"h4"}
          align={"center"}
          style={{ fontWeight: "bold", marginBottom: "2%" }}
        >
          Our approach is pretty simple
        </Typography>
        <Typography
          variant={"body1"}
          align={"center"}
          style={{ lineHeight: "30px" }}
        >
          We know it’s the day you’ve been dreaming about your entire life.
          <br />
          We know you deserve to be pampered.
          <br />
          We’ll help you face your wedding day relaxed, poised and confident.
          <br />
          Be inspired. Be elegant. Be beautiful. Be alluring.
          <br />
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "5%", marginBottom: "5%" }}>
        <Container>
          <Grid item xs={12} container spacing={5}>
            <Grid item xs={12}>
              <Grid container spacing={5} className={styles.owner}>
                <Grid item xs={12}>
                  <Typography align={"center"}>ASHTON DONER</Typography>
                  <Typography align={"center"}>OWNER & ARTIST</Typography>
                  <Typography align={"center"}>
                    Makeup has been a lifetime passion for Ashton. As a little
                    girl, you could often find her brightly painting the faces
                    of her mother and grandmother with the iconic shades of the
                    80s and early 90s. Today, that love of beauty has blossomed
                    into a successful career!
                    <br />
                    Following her dreams, Ashton pursed her love for makeup and
                    graduated from the Cosmetic Techniques & Management Program
                    at Sheridan College. Throughout her 13 year career, Ashton's
                    worked with Benefit Canada as a Brow Ambassador, developed
                    looks for a national John Frieda ad campaign and volunteered
                    with Look Good Feel Better. Ashton was also a mentor at the
                    2018 Young Women's Conference in Niagara Falls where she got
                    to share her story of becoming a female entrepreneur. Ashton
                    worked as the Head Makeup Artist with Beyoutiful Brides
                    before becoming the Owner in September 2017.
                    <br />
                    Her greatest achievement is her part in each and every one
                    of her bride's special day. Ashton knows how important it is
                    to feel beyoutiful on your wedding day and works closely
                    with each bride to ensure her vision is fully realized, so
                    she looks and feels her most beyoutiful self!
                    <br />
                    Ashton lives in Niagara Falls with her husband and pup
                    penny. She enjoys travelling the world when she's not
                    glamming brides for their big day!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AllServices />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
