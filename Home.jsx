import React from "react";
import "../custom.css";
import { Container, Grid, Box, InputBase, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {Link} from "react-router-dom";
import Nav from "./Nav";

export default function Home() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Nav />

      <Grid>
        <Container>
          <Grid lg={12} className="login-section p-100">
            <span className="home-box-btn">
            <Link to="/welcome">
              <img
                src={require("../assets/images/Login-button.png")}
                alt="Login Button"
                className="btn"
                width={"60px"}
              />
              </Link>
            </span>

            <span className="f-white">Select Profile</span>
            <Grid container>
              <Grid item xs={4} className="user-profile">
                <Box className="d-inline-block profile-box">
                  <img
                    src={require("../assets/images/user.png")}
                    width={"40px"}
                    alt="User"
                  />
                  <p className="f-white">User</p>
                </Box>

                <Box className="d-inline-block profile-box">
                  <img
                    src={require("../assets/images/admin.png")}
                    width={"40px"}
                    alt="Admin"
                  />
                  <p className="f-white">Admin</p>
                </Box>

                <Box className="d-inline-block profile-box">
                  <img
                    src={require("../assets/images/guest.png")}
                    width={"40px"}
                    alt="Guest"
                  />
                  <p className="f-white">Guest</p>
                </Box>
              </Grid>
            </Grid>

            <Grid container marginTop={3}>
              <Grid item lg={6} xs={6} spacing={3} className="form-section">
                <Grid container spacing={0}>
                  <Grid item lg={12} xs={12}>
                    <InputBase
                      className="input-box"
                      fullWidth
                      type="text"
                      placeholder="Login ID"
                      id="input-with-icon-adornment"
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <InputBase
                      className="input-box"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      placeholder="Password"
                      name="password"
                      id="input-with-icon-adornment"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
