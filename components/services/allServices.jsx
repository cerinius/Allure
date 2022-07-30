import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function allServices() {
  return (
    <Grid
      container
      spacing={2}
      style={{
        minHeight: "500px",
        marginTop: "5%",
        overflow: "hidden",
      }}
    >
      <Grid item xs={12} container spacing={5}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            alt={"background Image"}
            src={"/bride1.jpg"}
            width={"100%"}
            height={"100%"}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              // maxHeight: "350px",
            }}
          />
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "baseline",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                opacity: 0.6,
                position: "absolute",
                backgroundColor: "#dbcac3",
                width: "100%",
                height: "100%",
              }}
            />
            <Typography
              style={{
                padding: "20px 10px 20px 10px",
                position: "relative",
              }}
              variant={"h5"}
            >
              SERVICES
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            alt={"background Image"}
            src={"/image1.jpg"}
            width={"100%"}
            height={"auto"}
            style={{
              opacity: 0.3,
              position: "absolute",
              left: 0,
              top: 0,
            }}
          />
          <div
            style={{
              position: "relative",
            }}
          >
            <Typography align={"center"} variant={"h5"}>
              CHATEAU B SALON
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
