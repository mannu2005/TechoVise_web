import React from "react";
import { Typography, Grid, Box, Card, TextField, Button } from "@mui/material";
import "./CallForm.css";
import Section from "../Section/Section";

function CallForm() {
  return (
    <>
      <Box>
        <Typography component="div" className="CallForm_h">
          Connect with Our Expert to Start Recruiting
        </Typography>
      </Box>
      <Box
        sx={{
          margin: {
            xl: "0px 80px 100px 80px",
            lg: "0px 60px 100px 60px",
            md: "0px 20px 100px 20px",
            sm: "0px 50px 100px 20px",
            xs: "0px 10px 100px 20px",
          },
          padding: {
            xl: "0px 80px",
            lg: "0px 60px",
            md: "0px 20px",
            sm: "0px 60px",
            xs: "0px 10px 20px 20px",
          },
          backgroundColor: "#e3fff9",
          borderRadius: "15px",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            container
            justifyContent="center"
          >
            <Typography variant="body2" component="div" className="CallForm_p">
              Get Started with Techovise Today!
            </Typography>
            <Box>
              <Card
                sx={{
                  padding: "15px 25px",
                  marginBottom: "40px",
                  borderRadius: "25px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  className="CallForm_div"
                >
                  Fill out the form below to connect with our recruitment
                  experts and kickstart your journey to finding the perfect
                  skilled resources for your company.
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Typography
                      variant="body2"
                      component="div"
                      className="CallForm_Text"
                    >
                      Name
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-textarea"
                      label="Name"
                      placeholder="Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Typography
                      variant="body2"
                      component="div"
                      className="CallForm_Text"
                    >
                      Company Name
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-textarea"
                      label="Company Name"
                      placeholder="Company Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Typography
                      variant="body2"
                      component="div"
                      className="CallForm_Text"
                    >
                      Company Email
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-textarea"
                      label="ex.rohan.mrith@gmail.com"
                      placeholder="ex.rohan.mrith@gmail.com"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Typography
                      variant="body2"
                      component="div"
                      className="CallForm_Text"
                    >
                      Phone No.
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-textarea"
                      label="Phone No."
                      placeholder="Phone No."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Typography
                      variant="body2"
                      component="div"
                      className="CallForm_Text"
                    >
                      Linked In
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-textarea"
                      label="Linked In"
                      placeholder="Linked In"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                    <Typography
                      variant="body2"
                      component="div"
                      className="CallForm_Text"
                    >
                      Recruitment For
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-textarea"
                      label="Recruitment For"
                      placeholder="Recruitment For"
                    />
                  </Grid>
                </Grid>
                <Box justifyContent="center" textAlign="center">
                  <Button
                    variant="contained"
                    className="Button"
                    sx={{
                      backgroundColor: "#138f74",
                      fontSize: "18px",
                      margin: "40px 0px 10px 0px",
                      padding:{lg:"7px 70px",xs:"7px 20px"},
                    }}
                  >
                    Schedule Call
                  </Button>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
            marginTop="50px"
          >
            <Section />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CallForm;
