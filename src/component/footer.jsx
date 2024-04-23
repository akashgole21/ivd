import React from "react";
import "../custom.css";
import { Container, Grid, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <Grid className="footer-section">
        <Container>
          <Grid container alignItems={"center"}>
            <Grid
              lg={6}
              xs={6}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link to="/">
                <IconButton>
                  <HomeIcon
                    sx={{ color: "#00B7F8", fontSize: "50px" }}
                  ></HomeIcon>
                </IconButton>
              </Link>
            </Grid>

            <Grid lg={6} xs={6} style={{ textAlign: "right" }}>
              <IconButton
                sx={{ background: "#00B7F8" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                <KeyboardBackspaceIcon
                  sx={{ color: "#fff" }}
                ></KeyboardBackspaceIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
