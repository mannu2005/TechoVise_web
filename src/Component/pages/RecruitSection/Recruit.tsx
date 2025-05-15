import { Box, Button, Grid, Typography } from "@mui/material";
import Login from "../../shared/Loginpage/Login";
import "./Recruit.css";

function Recruit() {
  return (
    <>
      <div style={{ backgroundColor: "#e3fff9", paddingBottom: "100px" }}>
        <Box
          sx={{ padding: { lg: "0px 40px", md: "0px 50px",sm: "2px 50px",xs: "20px 20px", xl: "0px 120px" } }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center" 
          >
            {/* Text Section */}
            <Grid item lg={6} md={6} sm={12}>
              <Typography
                component="div"
                className="Recruit_Smart"
                sx={{
                  fontWeight: "bold",
                //   lineHeight: {
                //     xl:"3rem",
                //     lg: "4rem",
                //     sm: "4rem",
                //     md: "3rem",
                //     xs: "2.5rem",
                //   },
                  fontSize:"36px"
                }}
              >
                Recruit Smart & Retain Strong
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#138f74",
                  fontSize: "25px",
                  fontWeight: "bold",
                  padding: "20px 0px",
                }}
              >
                Techovise - Your Partner in Smart Recruitment and Strong
                Retention:
              </Typography>
              <Typography variant="body2" component="div" className="Recruit_P">
                Recruit the best, retain the best. At Techovise, we understand
                the importance of having skilled resources who fit your
                technical needs perfectly and stay with you for the long haul.
                Let's transform your recruitment process and build a robust team
                together.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#138f74",
                  padding: {
                    lg: "10px 40px",
                    md: "10px 40px",
                    sm: "10px 40px",
                    xs: "10px 20px",
                  },
                }}
              >
                Enquiry Now
              </Button>
            </Grid>

            {/* Login Section */}
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%", // Ensures full height of the Grid item
              }}
            >
              <Login />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Recruit;
