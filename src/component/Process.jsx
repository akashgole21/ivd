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
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';


function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "", alignItems: "center" }}>
      <Box>
        <Typography className="counterText">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
      <Box marginBottom={"20px"}>
        <span className="f-white">Processing</span>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          className="progressbar"
          {...props}
        />
      </Box>
    </Box>
  );
}

export default function Process() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="gradient-bg">
        <Nav />
      </div>

      <Grid className="welcome-section p-tb-60 bg-dark">
        <Container>
          <Grid className="">
            <Grid container marginTop={3}>
              <Grid item lg={12} xs={12} spacing={3} className="">
                <Grid container spacing={4}>
                  <Grid item lg={6} xs={6} spacing={3}>
                    <img
                      src={require("../assets/images/test-tube.gif")}
                      alt="Process"
                      style={{width:'100%', borderRadius:'20px'}}
                    />
                  </Grid>

                  <Grid item lg={6} xs={6} spacing={3}>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgressWithLabel value={progress} />
                    </Box>

                    <Button href="/report" style={{marginTop:'60px', background:'#fff', borderRadius:'50px', padding:'10px 20px', color:'#F860AE'}}>
                      Submit
                    </Button>
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
