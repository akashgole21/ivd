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

export default function SelectForm() {
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
                  <Link to="/sample">
                    <IconButton sx={{ background: "#fff", padding: "0px" }}>
                      <KeyboardArrowRightIcon
                        sx={{ color: "#4DBEE7", fontSize:'50px' }}
                      ></KeyboardArrowRightIcon>
                    </IconButton>
                    </Link>
                  </span>
                  <Grid item lg={12} xs={12} spacing={3} style={{paddingBottom:'20px', borderBottom:'1px solid #fff', marginRight:"60px"}}>
                    <Grid container spacing={5}>
                      <Grid item lg={3} xs={3}>
                        <span style={{color:'#fff'}}>Select Test</span>
                        <div className="checkbox-style" id="checkbox_lbl" style={{marginTop:"10px"}}>
                          <input
                            type="checkbox"
                            id="CBC"
                            name="CBC"
                            value="CBC"
                          />
                          <label for="CBC">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">CBC</span>
                        </div>
                      </Grid>
                      <Grid item lg={9} xs={9} style={{ textAlign: "right" }}>
                        <div className="searchbox">
                          <input
                            type="text"
                            placeholder="Search here.."
                            name="search"
                          />
                          <button type="submit">
                            <IconButton>
                              <SearchIcon sx={{ color: "#fff " }} />
                            </IconButton>
                          </button>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={12} xs={12} spacing={3} style={{padding:'20px 0px 20px', borderBottom:'1px solid #fff', marginRight:"60px"}}>
                  <div style={{color:'#fff', marginBottom:'10px'}}>Select any 4</div>
                    <Grid container spacing={5}>
                      <Grid item lg={3} xs={3}>
                        <div className="checkbox-style" id="checkbox_lbl">
                          <input
                            type="checkbox"
                            id="ALB"
                            name="ALB"
                            value="ALB"
                          />
                          <label for="ALB">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">ALB</span>
                        </div>
                      </Grid>
                      <Grid item lg={3} xs={3}>
                        <div className="checkbox-style" id="checkbox_lbl">
                          <input
                            type="checkbox"
                            id="ALP"
                            name="ALP"
                            value="ALP"
                          />
                          <label for="ALP">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">ALP</span>
                        </div>
                      </Grid>
                      <Grid item lg={3} xs={3}>
                        <div className="checkbox-style" id="checkbox_lbl">
                          <input
                            type="checkbox"
                            id="AMY"
                            name="AMY"
                            value="AMY"
                          />
                          <label for="AMY">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">AMY</span>
                        </div>
                      </Grid>
                      <Grid item lg={3} xs={3}>
                        <div className="checkbox-style" id="checkbox_lbl">
                          <input
                            type="checkbox"
                            id="BIL-D"
                            name="BIL-D"
                            value="BIL-D"
                          />
                          <label for="BIL-D">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">BIL-D</span>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={12} xs={12} spacing={3} style={{padding:'20px 0px 0px', marginRight:"60px"}}>
                  <div style={{color:'#fff', marginBottom:'10px'}}>Select any 3</div>
                    <Grid container spacing={5}>
                      <Grid item lg={3} xs={3}>
                        <div className="checkbox-style" id="checkbox_lbl">
                          <input
                            type="checkbox"
                            id="HbA1c"
                            name="HbA1c"
                            value="HbA1c"
                          />
                          <label for="HbA1c">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">HbA1c</span>
                        </div>
                      </Grid>
                      <Grid item lg={3} xs={3}>
                        <div className="checkbox-style" id="checkbox_lbl">
                          <input
                            type="checkbox"
                            id="T3"
                            name="T3"
                            value="T3"
                          />
                          <label for="T3">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">T3</span>
                        </div>
                      </Grid>
                      <Grid item lg={3} xs={3}>
                        <div className="checkbox-style" id="checkbox_lbl">
                          <input
                            type="checkbox"
                            id="T4"
                            name="T4"
                            value="T4"
                          />
                          <label for="T4">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">T4</span>
                        </div>
                      </Grid>
                      <Grid item lg={3} xs={3}>
                        <div className="checkbox-style" id="checkbox_lbl">
                          <input
                            type="checkbox"
                            id="TSH"
                            name="TSH"
                            value="TSH"
                          />
                          <label for="TSH">
                            <span className="mark"></span>
                          </label>
                          <span className="checkbox-title">TSH</span>
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
