import { Container, Grid, TextField } from "@mui/material";

export default function Inquiry() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField name={"type"}/>
        </Grid>
      </Grid>
    </Container>
  );
}
