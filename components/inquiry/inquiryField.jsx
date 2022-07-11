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
  total,
  loading,
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
        onChange={onChange}
        onBlur={onBlur}
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
        control={<Checkbox checked={true} />}
        label={<Typography variant={"h6"}> Hair</Typography>}
      />
      <FormControlLabel
        control={<Checkbox checked={true} />}
        label={<Typography variant={"h6"}> Make Up</Typography>}
      />
      {loading ? (
        <Skeleton width={"100px"} height={"50px"} />
      ) : (
        <TextField>{total}</TextField>
      )}
    </div>
  );
}