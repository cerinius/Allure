import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#EEE4DB",
    },
    secondary: {
      main: "#A8A8AC",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: [
        "Poppins",
        "Open Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: [
        "Poppins",
        "Open Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h3: {
      fontFamily: [
        "Poppins",
        "Open Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontFamily: [
        "Poppins",
        "Open Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: "1.3rem",
      fontWeight: 600,
    },
    h5: {
      fontFamily: [
        "Poppins",
        "Open Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: "1.20rem",
      fontWeight: 600,
    },
    h6: {
      fontFamily: [
        "Poppins",
        "Open Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: "1rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: [
        "Poppins",
        "Open Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontWeight: "550",
    },
    subtitle2: {
      fontFamily: [
        "Poppins",
        "Open Sans",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontWeight: "600",
    },
  },
});
theme = responsiveFontSizes(theme);

// theme.overrides = {
//   MuiCssBaseline: {
//     "@global": {
//       body: {
//         // overflow: "auto !important",
//         // paddingRight: "0 !important",
//         color: theme.palette.primary.main,
//       },
//       a: {
//         color: theme.palette.primary.main,
//         textDecoration: "none",
//
//         "&:hover": {
//           textDecoration: "underline",
//         },
//       },
//       "#freshworks-container": {
//         // zIndex: '1098 !important',
//         "& iframe": {
//           zIndex: "1098 !important",
//           width: "120px",
//         },
//       },
//       "#fc_frame": {
//         // zIndex: '1098 !important',
//         "& iframe": {
//           zIndex: "1098 !important",
//           width: "120px",
//         },
//       },
//       ".content-wrapper": {
//         overflowX: "none",
//       },
//       fieldset: {
//         border: "none",
//         margin: 0,
//         padding: 0,
//       },
//       ".grecaptcha-badge": {
//         zIndex: 999,
//       },
//       ".braintree-hosted-fields-focused + fieldset": {
//         borderColor: "#2b2b2b",
//         borderWidth: "2px",
//       },
//       ".gpay-button": {
//         margin: 0,
//       },
//       ".add-to-cart-notification-body": {
//         paddingTop: "40px!important",
//       },
//       ".add-to-cart-notification-progress": {
//         background: `${theme.palette.success.main}!important`,
//       },
//       ".Toastify__toast": {
//         minHeight: "48px !important",
//       },
//     },
//   },
//   MuiTextField: {
//     root: {
//       "& .MuiOutlinedInput-root.Mui-focused:not(.MuiInputBase-colorSecondary) fieldset":
//         {
//           borderColor: "#2b2b2b",
//         },
//       "& .MuiFormLabel-root.Mui-focused:not(.MuiFormLabel-colorSecondary)": {
//         color: "#2b2b2b",
//       },
//     },
//   },
//   MuiListItem: {
//     root: {
//       "&$selected": {
//         backgroundColor: theme.palette.primary.main,
//         color: theme.palette.primary.contrastText,
//       },
//       "&:hover": {
//         color: theme.palette.primary.dark,
//       },
//     },
//   },
//   MuiButton: {
//     root: {
//       fontWeight: 600,
//       fontSize: "12px",
//       textTransform: "none",
//     },
//   },
// };

export default theme;
