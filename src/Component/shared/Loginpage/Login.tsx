import {
  Card,
  Typography,
  Container,
  TextField,
  Box,
  Button,
  Grid,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "./Login.css";
import img from "../../../assets/Login_img/login_img.png";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <form action="">
        <Container>
          <Box
            className="Box_img"
            sx={{
              marginTop: { lg: "130px", md: "130px", sm: "50px", xs: "50px" },
            }}
          >
            <img src={img} alt="" />
          </Box>
          <Card
            className="Card_Login"
            sx={{
              borderRadius: "25px",
            }}
          >
            <Typography className="Login_h" component="div">
              Login To Your Account
            </Typography>
            <Box
              sx={{
                maxWidth: "100%",
                justifyContent: "center",
                margin: "20px 40px",
              }}
            >
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontSize: "20px",
                  paddingBottom: "10px",
                }}
              >
                Email id
              </Typography>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Email"
                placeholder="ex.rohan.mrith@gmail.com"
              />
              <Grid container spacing={3} sx={{ padding: "30px 0 10px 10px" }}>
                <Grid lg={6} md={6} sm={6} xs={5}>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      fontSize: "20px",
                      paddingTop: "20px",
                    }}
                  >
                    &nbsp; Password
                  </Typography>
                </Grid>
                <Grid
                  lg={6}
                  md={6}
                  sm={6}
                  xs={7}
                  className="Login_a"
                  sx={{
                    paddingTop: {
                      xs: "40px",
                      xl: "30px",
                      lg: "30px",
                      md: "30px",
                      sm: "30px",
                    },
                  }}
                >
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#138f74",
                      textAlign: "end",
                    }}
                  >
                    Forgot Password ?
                  </a>
                </Grid>
              </Grid>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <LockIcon></LockIcon>
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <NavLink to={"/Login"} >
              <Button
                variant="contained"
                fullWidth
                sx={{
                  margin: "30px 0px",
                  fontSize: "20px,",
                  backgroundColor: "#138f74",
                }}
              >
                Login
              </Button>
              </NavLink>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  padding: "0px 0px 30px 0px",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Don’t have an account?
                <a
                  href="#"
                  style={{ color: "#138f74", textDecoration: "none" }}
                >
                  Register
                </a>
              </Typography>
            </Box>
          </Card>
        </Container>
      </form>
    </>
  );
}

export default Login;
