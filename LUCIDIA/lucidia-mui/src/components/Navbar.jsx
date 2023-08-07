import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Vector from "../assets/Vector.svg";
import bar from "../assets/bars.svg";
import Subtract from "../assets/Subtract.png";
import React from "react";

const Navbar = () => {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : { xs: 280, sm: 500 },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List p={3}>
        {["About", "WhitePaper", "Roadmap", "Our term"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          display="flex"
          sx={{
            justifyContent: {
              md: "space-between",
              sm: "space-between",
              xs: "space-between",
            },
          }}
          alignItems="center"
          // pt={2}
        >
          <Box component="img" src={Vector} alt="vector" width={100} mt={3} />
          <Box
            mt={3}
            sx={{
              display: {
                md: "flex",
                sm: "none",
                xs: "none",
                textTransform: "uppercase",
              },
            }}
            gap={3}
          >
            <Typography
              sx={{ cursor: "pointer", color: "white", fontFamily: "Light" }}
            >
              {" "}
              About{" "}
            </Typography>
            <Typography
              sx={{ cursor: "pointer", color: "white", fontFamily: "Light" }}
            >
              {" "}
              Whitepaper{" "}
            </Typography>
            <Typography
              sx={{ cursor: "pointer", color: "white", fontFamily: "Light" }}
            >
              {" "}
              Roadmap{" "}
            </Typography>
            <Typography
              sx={{ cursor: "pointer", color: "white", fontFamily: "Light" }}
            >
              {" "}
              Our team{" "}
            </Typography>
          </Box>
          <Box
            display="flex"
            gap={3}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              component="img"
              src={bar}
              alt="bars"
              sx={{
                display: { md: "flex", sm: "none", xs: "none" },
                cursor: "pointer",
                mt: 3,
              }}
            />

            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                  <Box
                    onClick={toggleDrawer(anchor, true)}
                    component="img"
                    src={bar}
                    alt="bars"
                    sx={{
                      cursor: "pointer",

                      mt: 3,
                      display: { md: "none", sm: "flex", xs: "flex" },
                    }}
                  />
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>

            <Box
              mt={3}
              className="styleFrame"
              // width="257px"
              height="64px"
              sx={{
                display: { md: "flex", sm: "none", xs: "none" },
                cursor: "pointer",
                width: "257px",
                background: "#0ED4FF",
                clipPath:
                  "polygon(7% 0, 27% 0, 100% 0, 100% 78%, 92% 99%, 2% 100%, 0 92%, 0 20%)",
              }}
            >
              <Box
                className="styleFrameInner"
                //  width="251px"
                height="58px"
                sx={{
                  width: { md: "251px", sm: "99%", xs: "99%" },
                  background: "#6641C0",
                  clipPath:
                    "polygon(7% 0, 27% 0, 100% 0, 100% 78%, 92% 99%, 2% 100%, 0 92%, 0 20%)",
                }}
              >
                <Box
                  // px={2}
                  // py={0.5}
                  height="60px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ color: "#0ED4FF" }}
                >
                  Token Allocation
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        mt={1}
        component="img"
        src={Subtract}
        width="100%"
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
        }}
      />
    </Box>
  );
};

export default Navbar;
