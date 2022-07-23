import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function allServices() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <span />
      </Grid>
      <Grid item xs={12}>
        <Typography align={"center"} variant={"h3"}>
          Our Services
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={5}>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // overflow: "hidden",
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
              Bridal hair
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography align={"center"}>
                      pre-wedding hair consultation
                    </Typography>
                  }
                />
              </ListItem>
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>*/}
              {/*        hair health care tips*/}
              {/*      </Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>*/}
              {/*        hair style establishment*/}
              {/*      </Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>veil placement</Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>*/}
              {/*        custom-made hair extensions*/}
              {/*      </Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
            </List>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // overflow: "hidden",
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
              Bridal makeup
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography align={"center"}>
                      pre-wedding makeup consultation
                    </Typography>
                  }
                />
              </ListItem>
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>skin care tips</Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>airbrush makeup</Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>*/}
              {/*        temporary false eyelashes*/}
              {/*      </Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>allure brand makeup</Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
            </List>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // overflow: "hidden",
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
              Salon
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography align={"center"}>
                      pre-wedding makeup consultation
                    </Typography>
                  }
                />
              </ListItem>
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={<Typography align={"center"}>skin care tips</Typography>}*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>airbrush makeup</Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>*/}
              {/*        temporary false eyelashes*/}
              {/*      </Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
              {/*<ListItem>*/}
              {/*  <ListItemText*/}
              {/*    primary={*/}
              {/*      <Typography align={"center"}>allure brand makeup</Typography>*/}
              {/*    }*/}
              {/*  />*/}
              {/*</ListItem>*/}
            </List>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
