import { Grid, IconButton, Typography } from "@mui/material";

export default function Items() {
  const pricing = [
    {
      type: "Bride",
      pricing: [
        { hair: true, amount: 100 },
        { makeUp: true, amount: 80 },
        { hair: true, makeUp: true, amount: 140 },
      ],
    },
    {
      type: "Attendants",
      pricing: [
        { hair: true, amount: 80 },
        { makeUp: true, amount: 40 },
        { hair: true, makeUp: true, amount: 120 },
      ],
    },
    {
      type: "Flower Girl",
      pricing: [
        { hair: true, amount: 70 },
        { makeUp: true, amount: 30 },
        { hair: true, makeUp: true, amount: 80 },
      ],
    },
  ];
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <span />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography variant={"h5"} align={"center"}>
            Type
          </Typography>
        </Grid>
        <Grid item xs={8} container>
          <Grid item xs={4}>
            <Typography variant={"h5"} align={"center"}>
              Hair
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"h5"} align={"center"}>
              Make Up
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"h5"} align={"center"}>
              Total
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div
          style={{
            border: "1px solid #E6D0CA",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        />
      </Grid>
      {pricing.length > 0 &&
        pricing.map((prices, index) => (
          <Grid
            item
            xs={12}
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              item
              xs={4}
            >
              <Typography>{prices.type}</Typography>
            </Grid>
            <Grid item xs={8}>
              {prices.pricing.map((price) => (
                <Grid item container xs={12}>
                  <Grid
                    item
                    xs={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton disabled={true}>
                      {price.hair ? (
                        <img
                          width={"20px"}
                          height={"auto"}
                          src={`/tickMark.png`}
                          alt={"tick mark"}
                        />
                      ) : (
                        <span />
                      )}
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton disabled={true}>
                      {price.makeUp ? (
                        <img
                          width={"20px"}
                          height={"auto"}
                          src={`/tickMark.png`}
                          alt={"tick mark"}
                        />
                      ) : (
                        <span />
                      )}
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>{price.amount}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            {pricing.length !== index + 1 ? (
              <Grid item xs={12}>
                <div
                  style={{
                    border: "1px solid #E6D0CA",
                    marginTop: "2%",
                    marginBottom: "2%",
                  }}
                />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <div
                  style={{
                    marginTop: "2%",
                    marginBottom: "2%",
                  }}
                />
              </Grid>
            )}
          </Grid>
        ))}
    </Grid>
  );
}
