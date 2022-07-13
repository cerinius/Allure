import { Button, Container, Grid, Typography } from "@mui/material";
import InquiryField from "../../components/inquiry/inquiryField";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Inquiry() {
  const calculateTotal = (hair, makeUp, type) => {
    let total = 0;
    if (type) {
      if (type === "bride") {
        if (hair && makeUp) {
          total = 150;
        } else if (makeUp) {
          total = 80;
        } else if (hair) {
          total = 100;
        }
      } else if (type === "bridesmaid") {
        if (hair && makeUp) {
          total = 120;
        } else if (makeUp) {
          total = 60;
        } else if (hair) {
          total = 90;
        }
      } else {
        if (hair && makeUp) {
          total = 100;
        } else if (makeUp) {
          total = 50;
        } else if (hair) {
          total = 70;
        }
      }
    }
    return total;
  };

  const defaultEntry = {
    id: nanoid(),
    type: "",
    hair: false,
    makeUp: false,
    get total() {
      return calculateTotal(this.hair, this.makeUp, this.type);
    },
  };

  const [entries, setEntries] = useState([defaultEntry]);
  const [fieldsCounter, setFieldsCounter] = useState(1);
  useEffect(() => {
    if (entries.length < fieldsCounter) {
      setEntries((entries) => [...entries, defaultEntry]);
    }
  }, [fieldsCounter]);

  return (
    <Container>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography align={"center"} variant={"h3"}>
              Submit an Inquiry
            </Typography>
          </Grid>
          {entries &&
            entries.map((entry, index) => (
              <Grid
                key={entry.id}
                item
                xs={12}
                style={{
                  display: "flex",
                }}
              >
                <InquiryField
                  key={entry.id}
                  entry={entry}
                  onChange={(name, value) => {
                    entry[name] = value;
                    setEntries((entries) => [...entries]);
                  }}
                />
                {entries.length > 1 && (
                  <Button
                    variant={"contained"}
                    color={"primary"}
                    style={{
                      marginLeft: "20px",
                    }}
                    onClick={() => {
                      let newEntries = entries.filter((f) => f.id !== entry.id);
                      setEntries([...newEntries]);
                    }}
                  >
                    Remove
                  </Button>
                )}
              </Grid>
            ))}
          <Grid item xs={12}>
            <Button
              onClick={() =>
                setFieldsCounter((fieldsCounter) => fieldsCounter + 1)
              }
            >
              Add Entry
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
