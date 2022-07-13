import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";

export default function InquiryField({
  onChange,
  onBlur,
  error,
  touched,
  loading,
  entry,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <TextField
        style={{
          width: "50%",
        }}
        select={true}
        name={"type"}
        id={"type"}
        onChange={(event) => onChange(event.target.name, event.target.value)}
        onBlur={onBlur}
        value={entry.name}
        placeholder={"Select Type"}
        label={"Select type"}
        helperText={error && touched ? error : ""}
        error={error && touched}
      >
        <MenuItem value={"bride"}>Bride</MenuItem>
        <MenuItem value={"bridesmaid"}>Bridesmaid</MenuItem>
        <MenuItem value={"flowerGirl"}>Flower girl</MenuItem>
      </TextField>
      <FormControlLabel
        control={
          <Checkbox
            name={"hair"}
            onChange={(event) => onChange(event.target.name, !entry.hair)}
            checked={entry.hair}
          />
        }
        label={<Typography variant={"h6"}> Hair</Typography>}
      />
      <FormControlLabel
        control={
          <Checkbox
            name={"makeUp"}
            onChange={(event) => {
              onChange(event.target.name, !entry.makeUp);
            }}
            checked={entry.makeUp}
          />
        }
        label={<Typography variant={"h6"}> Make Up</Typography>}
      />
      {loading ? (
        <Skeleton width={"100px"} height={"50px"} />
      ) : (
        <TextField variant={"filled"} disabled={true} value={entry.total} />
      )}
    </div>
  );
}
