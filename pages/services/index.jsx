import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function services() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <span />
        </Grid>
        <Grid item xs={12}>
          <Typography align={"center"} variant={"h5"}>
            <b>Our approach is very simple</b>
          </Typography>
          <Typography align={"center"} variant={"h5"}>
            We know it’s the day you’ve been dreaming about your entire life.
          </Typography>
          <Typography align={"center"} variant={"h5"}>
            We know you deserve to be pampered.
          </Typography>
          <Typography align={"center"} variant={"h5"}>
            We’ll help you face your wedding day relaxed, poised and confident.
          </Typography>
          <Typography align={"center"} variant={"h5"}>
            Be inspired. Be elegant. Be beautiful. Be alluring.
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={5}>
          <Grid item xs={12}>
            <Typography align={"center"} variant={"h3"}>
              Our Services
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant={"h5"}>Bridal hair</Typography>
            <List
              style={{
                "& .MuiListItem-root": {
                  justifyContent: "center",
                  color: "red",
                },
              }}
            >
              <ListItem>pre-wedding hair consultation</ListItem>
              <ListItem>hair health care tips</ListItem>
              <ListItem>hair style establishment</ListItem>
              <ListItem>veil placement</ListItem>
              <ListItem>custom-made hair extensions</ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant={"h5"}>Bridal makeup</Typography>
            <List>
              <ListItem>pre-wedding makeup consultation</ListItem>
              <ListItem>skin care tips</ListItem>
              <ListItem>airbrush makeup</ListItem>
              <ListItem>temporary false eyelashes</ListItem>
              <ListItem>allure brand makeup</ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
