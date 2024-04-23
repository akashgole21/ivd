import React from "react";
import "../custom.css";
import { Container, Grid, IconButton } from "@mui/material";
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom";

export default function Nav() {
  
  return (
    <>
      <Grid className="nav-section">
        <Container>
          <Grid container alignItems={"center"}>
            <Grid lg={6} xs={6} style={{display:'flex', alignItems:'center'}}>
              <Link to="/">
              <img
                src={require("../assets/images/myivd-logo.png")}
                alt="Logo"
              />
              </Link>
            </Grid>

            <Grid lg={6} xs={6} style={{textAlign: 'right'}}>
              <IconButton>
                <WifiIcon sx={{ color: "#fff" }}></WifiIcon>
              </IconButton>
              <IconButton>
                <SignalCellularAltIcon sx={{ color: "#fff" }}></SignalCellularAltIcon>
              </IconButton>
              <IconButton>
                <BatteryCharging80Icon sx={{ color: "#fff" }}></BatteryCharging80Icon>
              </IconButton>
              <IconButton>
                <PersonIcon sx={{ color: "#fff" }}></PersonIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Grid>

    </>
  );
}
