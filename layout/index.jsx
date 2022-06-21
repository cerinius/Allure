import { Container, Divider, Stack } from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import styles from "./Layout.module.css";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  return (
    <Stack
      className={styles.page}
      spacing={2}
      direction={"column"}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Header className={styles.header} />
      <Stack className={styles.main}>
        <Container>{children}</Container>
      </Stack>
      <Footer />
    </Stack>
  );
}
