import React from "react";
import "../custom.css";
// import "../custom.js";
import Nav from "./Nav";
import Footer from "./footer";

import {Link} from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  InputBase,
  IconButton,
  styled,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";

export default function Sample() {
  return (
    <>
      <div className="gradient-bg">
        <Nav />
      </div>

      <Grid className="welcome-section p-tb-60 bg-dark">
        <Container>
          <Grid className="">
            <Grid container marginTop={3}>
              <Grid item lg={12} xs={12} spacing={3} className="selectform">
                <Grid container spacing={0}>
                  <span className="box-btn-3">
                  <Link to="/process">
                    <IconButton sx={{ background: "#fff", padding: "0px" }}>
                      <KeyboardArrowRightIcon
                        sx={{ color: "#4DBEE7", fontSize: "50px" }}
                      ></KeyboardArrowRightIcon>
                    </IconButton>
                    </Link>
                  </span>

                  <Grid
                    item
                    lg={12}
                    xs={12}
                    spacing={3}
                    style={{ marginRight: "100px" }}
                    className="p-tb-100"
                  >
                    <Grid container spacing={5}>
                      <Grid item lg={6} xs={6}>
                        <div className="samplebox">
                          <div className="f-white">ETDA Sample</div>
                          <div className="samplebox-inner">
                          <InputBase
                            className="input-box"
                            type="text"
                            placeholder="Name"
                          />
                          <div className="img-right">
                            <img
                              src={require("../assets/images/patient-details/qr-code.png")}
                              alt="QR"
                              width={'45px'}
                            />
                          </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item lg={6} xs={6}>
                        <div className="samplebox">
                          <div className="f-white">SST Sample</div>
                          <div className="samplebox-inner">
                          <InputBase
                            className="input-box"
                            type="text"
                            placeholder="Name"
                          />
                          <div className="img-right">
                            <img
                              src={require("../assets/images/patient-details/qr-code.png")}
                              alt="QR"
                              width={'45px'}
                            />
                          </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Grid>
    </>
  );
}
