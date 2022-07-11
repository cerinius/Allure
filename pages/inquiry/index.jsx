import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import InquiryField from "../../components/inquiry/inquiryField";
import { useRef, useState } from "react";

export default function Inquiry() {
  const [entries, setEntries] = useState([]);
  const [fieldsCounter, setFieldsCounter] = useState(1);
  return (
    <Container>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography align={"center"} variant={"h3"}>
              Submit an Inquiry
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() =>
                setFieldsCounter((fieldsCounter) => fieldsCounter + 1)
              }
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
