import { useState, useEffect } from "react";
import { Dialog } from "@mui/material";
import Welcome from "./Welcome";

const ShowWelcome = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
  console.log(isLoading, "loading");

  return (
    <Dialog
      open={isLoading}
      maxWidth="xs"
      sx={{
        ".MuiDialog-paper": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <Welcome setIsLoading={setIsLoading} />
    </Dialog>
  );
};

export default ShowWelcome;
