import "../styles/globals.css";
import PropTypes from "prop-types";
import Layout from "../layout/layout";
import { StylesProvider, ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout Component={Component}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
