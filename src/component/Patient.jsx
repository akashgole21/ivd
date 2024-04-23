import React from "react";
import "../custom.css";
import Nav from "./Nav";
import Footer from "./footer";

import { Container, Grid, Box, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import {Link} from "react-router-dom";


export default function Patient() {
  return (
    <>
      <div className="gradient-bg">
      <Nav />
      </div>

      <Grid className="welcome-section p-tb-60 bg-dark">
        <Grid className="">
          <Container>
            <Grid lg={12}>
              <h2 style={{ marginBottom: "10px" }}>Patient Details</h2>

              <Grid container spacing={4}>
                <Grid item lg={12} xs={12} style={{marginTop: "60px"}}>
                  <Grid container spacing={4}>
                    <Grid item lg={6} xs={6}>
                      <Box
                        className="box-style"
                        style={{ backgroundColor: "#4DBEE7" }}
                      >
                        <IconButton sx={{ padding: "0px", fontSize: "20px" }}>
                          <PersonIcon
                            sx={{ color: "#fff", fontSize: "50px" }}
                          ></PersonIcon>
                        </IconButton>
                        <h6 style={{ marginTop: "60px" }}>Patient 1</h6>
                        <p style={{ margin: "10px 60px 0 0" }}>
                          Loreum Ipsum is a Dummy <br></br>
                          Text used by Designers
                        </p>
                        <span className="box-btn">
                        <Link to="/patientform">
                          <IconButton
                            sx={{ background: "#fff", padding: "0px" }}
                          >
                            <KeyboardArrowRightIcon
                              sx={{ color: "#4DBEE7" }}
                            ></KeyboardArrowRightIcon>
                          </IconButton>
                          </Link>
                        </span>
                      </Box>
                    </Grid>
                    <Grid item lg={6} xs={6}>
                      <Box
                        className="box-style"
                        style={{ backgroundColor: "#FB85C1" }}
                      >
                        <IconButton sx={{ padding: "0px", fontSize: "20px" }}>
                          <PersonIcon
                            sx={{ color: "#fff", fontSize: "50px" }}
                          ></PersonIcon>
                        </IconButton>
                        <h6 style={{ marginTop: "60px" }}>Patient 2</h6>
                        <p style={{ margin: "10px 60px 0 0" }}>
                          Loreum Ipsum is a Dummy <br></br>
                          Text used by Designers
                        </p>
                        <span className="box-btn">
                          <IconButton
                            sx={{ background: "#fff", padding: "0px" }}
                          >
                            <KeyboardArrowRightIcon
                              sx={{ color: "#FB85C1" }}
                            ></KeyboardArrowRightIcon>
                          </IconButton>
                        </span>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>

          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
