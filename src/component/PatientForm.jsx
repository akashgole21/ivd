import React from "react";
import "../custom.css";
import Nav from "./Nav";
import Footer from "./footer";

import { Container, Grid, Box, InputBase, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {Link} from "react-router-dom";
// import PersonIcon from "@mui/icons-material/Person";

export default function PatientForm() {
  return (
    <>
      <div className="gradient-bg">
        <Nav />
      </div>

      <Grid className="welcome-section p-tb-60 bg-dark">
        <Grid className="">
          <Container>
            <Grid lg={12}>
              <Grid container spacing={4}>
                <Grid item lg={12} xs={12} style={{ marginTop: "60px" }}>
                  <Grid container spacing={4}>
                    <Grid item lg={7} xs={7}>
                      <Box
                        className="box-style"
                        style={{ backgroundColor: "#4DBEE7" }}
                      >
                        <div
                          className="form-section-2"
                          style={{ width: "50%" }}
                        >
                          <h6 style={{ marginTop: "" }}>Patient Details</h6>

                          <InputBase
                            className="input-box"
                            fullWidth
                            type="text"
                            placeholder="Name"
                          />

                          <InputBase
                            className="input-box"
                            fullWidth
                            type="text"
                            placeholder="Age"
                          />

                          <InputBase
                            className="input-box"
                            fullWidth
                            type="email"
                            placeholder="Email"
                          />

                          <InputBase
                            className="input-box"
                            fullWidth
                            type="tel"
                            placeholder="Mobile Number"
                          />
                        </div>

                        <span className="f-white">Select Gender</span>
                        <Grid container>
                          <Grid item xs={4} className="">
                            <Box
                              className="d-inline-block profile-box"
                              style={{ textAlign: "center" }}
                            >
                              <img
                                src={require("../assets/images/patient-details/male.png")}
                                width={"40px"}
                                alt="User"
                              />
                              <p className="f-white">Male</p>
                            </Box>

                            <Box
                              className="d-inline-block profile-box"
                              style={{
                                marginLeft: "20px",
                                textAlign: "center",
                              }}
                            >
                              <img
                                src={require("../assets/images/patient-details/female.png")}
                                width={"40px"}
                                alt="Admin"
                              />
                              <p className="f-white">Female</p>
                            </Box>

                            <Box
                              className="d-inline-block profile-box"
                              style={{
                                marginLeft: "20px",
                                textAlign: "center",
                              }}
                            >
                              <img
                                src={require("../assets/images/patient-details/other.png")}
                                width={"40px"}
                                alt="Guest"
                              />
                              <p className="f-white">Other</p>
                            </Box>
                          </Grid>
                        </Grid>

                        <span className="box-btn-2">
                        <Link to="/SelectForm">
                          <IconButton
                            sx={{ background: "#fff", padding: "0px" }}
                          >
                            <KeyboardArrowRightIcon
                              sx={{
                                color: "#4DBEE7",
                                width: "40px",
                                height: "40px",
                              }}
                            ></KeyboardArrowRightIcon>
                          </IconButton>
                          </Link>
                        </span>
                      </Box>
                    </Grid>

                    <Grid item lg={5} xs={5} style={{textAlign:"center", alignItems:"center"}}>
                      <div>
                        <img
                          src={require("../assets/images/patient-details/qr-code.png")}
                          alt="QR"
                        />
                        <p style={{margin: "20px 0 0"}}>Scan if already registered</p>
                      </div>
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
