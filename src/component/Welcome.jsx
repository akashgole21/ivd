import React from "react";
import "../custom.css";
import Nav from "./Nav";

import { Container, Grid, Box, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {Link} from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <Nav />

      <Grid className="welcome-section p-tb-60 bg-dark">
        <Grid className="welcome-layout">
          <Container>
            <Grid lg={12}>
              <h2 style={{ marginBottom: "10px" }}>Welcome</h2>

              <Grid container spacing={4}>
                <Grid item lg={8} xs={8}>
                  <Grid container spacing={4}>
                    <Grid item lg={6} xs={6}>
                      <Box
                        className="box-style"
                        style={{ backgroundColor: "#4DBEE7" }}
                      >
                        <img
                          src={require("../assets/images/welcome/Empty-Test-Tube.png")}
                          width={"40px"}
                          alt="User"
                        />
                        <h6 style={{ marginTop: "20px" }}>Take Test</h6>
                        <p style={{ margin: "10px 60px 0 0" }}>
                          Loreum Ipsum is a Dummy Text used by Designers.
                        </p>
                        <span className="box-btn">
                        <Link to="/patient">
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
                        <img
                          src={require("../assets/images/welcome/TimeMachine.png")}
                          width={"40px"}
                          alt="User"
                        />
                        <h6 style={{ marginTop: "20px" }}>History</h6>
                        <p style={{ margin: "10px 60px 0 0" }}>
                          Loreum Ipsum is a Dummy Text used by Designers.
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

                <Grid item lg={8} xs={8}>
                  <Grid container spacing={4}>
                    <Grid item lg={6} xs={6}>
                      <Box
                        className="box-style"
                        style={{ backgroundColor: "#FA91A0" }}
                      >
                        <img
                          src={require("../assets/images/welcome/ShoppingCart.png")}
                          width={"40px"}
                          alt="User"
                        />
                        <h6 style={{ marginTop: "20px" }}>Shop</h6>
                        <p style={{ margin: "10px 60px 0 0" }}>
                          Loreum Ipsum is a Dummy Text used by Designers.
                        </p>
                        <span className="box-btn">
                          <IconButton
                            sx={{ background: "#fff", padding: "0px" }}
                          >
                            <KeyboardArrowRightIcon
                              sx={{ color: "#FA91A0" }}
                            ></KeyboardArrowRightIcon>
                          </IconButton>
                        </span>
                      </Box>
                    </Grid>
                    <Grid item lg={6} xs={6}>
                      <Box
                        className="box-style"
                        style={{ backgroundColor: "#2D60B8" }}
                      >
                        <img
                          src={require("../assets/images/welcome/Settings.png")}
                          width={"40px"}
                          alt="User"
                        />
                        <h6 style={{ marginTop: "20px" }}>Settings</h6>
                        <p style={{ margin: "10px 60px 0 0" }}>
                          Loreum Ipsum is a Dummy Text used by Designers.
                        </p>
                        <span className="box-btn">
                          <IconButton
                            sx={{ background: "#fff", padding: "0px" }}
                          >
                            <KeyboardArrowRightIcon
                              sx={{ color: "#2D60B8" }}
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

          <Grid className="welcome-right-img">
            <img
              src={require("../assets/images/welcome/welcome-bg-1.png")}
              width={"400px"}
              alt="bg"
              className=""
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
