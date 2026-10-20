import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "@/components/atoms/button";

export default function Home() {
  return (
    <Stack component="main" spacing={4} sx={{ p: 8, maxWidth: 640 }}>
      <Typography variant="h4" component="h1">
        Template SEMpoL Kel 7
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Stack>
  );
}
