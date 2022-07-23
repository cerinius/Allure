import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Items from "./items";
export default function Pricing() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <span />
      </Grid>
      <Grid item xs={12}>
        <Typography align={"center"} variant={"h3"}>
          Pricing
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Grid
            spacing={2}
            item
            xs={12}
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid
              item
              xs={12}
              style={{
                backgroundColor: "#EEE4DB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              <Items />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
