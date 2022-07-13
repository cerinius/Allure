import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import InquiryField from "../../components/inquiry/inquiryField";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

export default function Inquiry() {
  const defaultEntry = {
    id: nanoid(),
    type: "",
    hair: false,
    makeUp: false,
    total: 0
  }
  const [entries, setEntries] = useState([defaultEntry]);
  const [fieldsCounter, setFieldsCounter] = useState(1);
  useEffect(()=>{
    if(entries.length<fieldsCounter){
    setEntries((entries)=>([...entries, defaultEntry]))
    }
  },[fieldsCounter])
  return (
    <Container>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography align={"center"} variant={"h3"}>
              Submit an Inquiry
            </Typography>
          </Grid>
            {
              entries && entries.map((entry,index)=>
                <Grid key={entry.id} item xs={12} style={{
                  display:"flex",
                }}>
                  <InquiryField key={entry.id} entry={entry} onChange={(entry)=> {
                    console.log(entry)
                  }}/>
                  {
                    entries.length>1 && <Button variant={"contained"} color={"primary"} style={{
                      marginLeft:'20px'
                    }}>
                    Remove
                    </Button>
                  }
                </Grid>)
            }
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
