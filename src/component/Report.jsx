import React from "react";
import "../custom.css";
// import "../custom.js";
import Nav from "./Nav";
import Footer from "./footer";

import { Link } from "react-router-dom";

import {
  Container,
  Grid,
  Box,
  InputBase,
  IconButton,
  styled,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Report() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="gradient-bg">
        <Nav />
      </div>

      <Grid className="welcome-section p-tb-60 bg-dark">
        <Container>
          <Grid className="">
            <Grid container marginTop={3}>
              <Grid item lg={12} xs={12} spacing={3} className="report-section">
                <Grid container spacing={0}>
                  <Box sx={{ width: "100%" }}>
                    <Box>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        className="tabbox"
                      >
                        <Tab
                          className="tabtitle"
                          icon={
                            <RadioButtonUncheckedIcon
                              sx={{ fontSize: "16px" }}
                            />
                          }
                          iconPosition="start"
                          label="Person One"
                          {...a11yProps(0)}
                        />
                        <Tab
                          className="tabtitle"
                          icon={
                            <RadioButtonUncheckedIcon
                              sx={{ fontSize: "16px" }}
                            />
                          }
                          iconPosition="start"
                          label="Person Two"
                          {...a11yProps(1)}
                        />
                      </Tabs>
                    </Box>

                    <CustomTabPanel value={value} index={0}>
                      <Grid lg={12} xs={12} spacing={3} className="tabcontent">
                        <Grid container spacing={0}>
                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>CBC</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">700 UL</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 UL</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 UL</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container spacing={0}>
                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 UL</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 nmol/L</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 nmol/L</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                      <Grid lg={12} xs={12} spacing={3} className="tabcontent">
                        <Grid container spacing={0}>
                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>CBC</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">700 UL</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#E84747", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 UL</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 UL</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container spacing={0}>
                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 UL</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 nmol/L</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>

                          <Grid item lg={3} xs={3} className="tabcontent-box">
                            <div className="tabboxcontent">
                              <div className="">
                                <h5 className="f-black">36.2 nmol/L</h5>
                              </div>
                              <div style={{ marginTop: "40px" }}>
                                <span>Test Name</span>
                                <br />
                                <span>30-40</span>
                              </div>
                              <span className="signal-btn">
                                <IconButton sx={{ padding: "0px" }}>
                                  <CircleIcon
                                    sx={{ color: "#51B955", fontSize: "40px" }}
                                  ></CircleIcon>
                                </IconButton>
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CustomTabPanel>
                  </Box>
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
