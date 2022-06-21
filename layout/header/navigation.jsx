import { Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Navigation() {
  return (
    <Stack
      spacing={2}
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Link href={`/`}>Home</Link>
      <Link href={`/aboutUs`}>About Us</Link>
      <Link href={`/contactUs`}>Contact</Link>
      <Link href={`/inquiry`}>Inquiry</Link>
    </Stack>
  );
}
