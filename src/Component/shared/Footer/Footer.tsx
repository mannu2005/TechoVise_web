import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import img from "../../../assets/Footer_img/TechoviseWhiteLogo.png";
import "./Footer.css"

function Footer() {
  return (
    <>
    <Box className="Footer_Path">
    </Box>
      <Box
        sx={{
          backgroundColor: "#138f74",
          color: "#fff",
          padding: {
            xl: "0px 60px",
            lg: "0px 60px",
            md: "0px 30px",
            sm: "0px 60px",
            xs: "0px 30px 0px 20px",
          },
        }}
      >
        <Grid container spacing={4}>
          {/* Logo and Description Section */}
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
            <Box
              padding={{lg:"20px"}}
              component="img"
              src={img}
              alt="Techovise Logo"
              justifyContent="center"
              alignItems="center"
              display="flex"
              flexDirection="column"
              width="250px"
              marginTop="-50px"
            />
            <Typography variant="body2" className="Footer_p">
              TechoVise is dedicated to transforming the recruitment landscape
              by providing companies with skilled resources that match their
              technical requirements and retain them for the long term.
            </Typography>
          </Grid>

          {/* Panels Section */}
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={4} xs={4}>
            <Typography variant="h6" className="Footer_h6" >
              Panels
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }} className="Footer_p1">
              User
            </Typography>
            <Typography variant="body2" className="Footer_p1" >Guide</Typography>
          </Grid>

          {/* Terms of Use Section */}
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={4} xs={4}>
            <Typography variant="h6" className="Footer_h6">
              Terms of Use
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }} className="Footer_p1">
              Privacy Policy
            </Typography>
            <Typography variant="body2" className="Footer_p1">Terms & Conditions</Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xl={2} lg={2} md={2} sm={4} xs={4}>
            <Typography variant="h6" className="Footer_h6">
              QUICK LINKS
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}className="Footer_p1" >
              Home
            </Typography>
            <Typography variant="body2"className="Footer_p1" >About Us</Typography>
            <Typography variant="body2" className="Footer_p1" >Services</Typography>
            <Typography variant="body2" className="Footer_p1" >Contacts</Typography>
            <Typography variant="body2" className="Footer_p1" >Blogs</Typography>
          </Grid>

          {/* Social Media & Address Section */}
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              SOCIAL MEDIA & ADDRESS
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <IconButton sx={{ color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Typography variant="body2"  className="Footer_p2">
              Head Office: L-9/826, 4th Floor Mehrauli, South Delhi - 110030
            </Typography>
            <Typography variant="body2" className="Footer_p2">
            <IconButton sx={{ color: "#fff" }}>
                <WifiCalling3Icon /> &nbsp; 9205-9191-24
              </IconButton>
            </Typography>
            <Typography variant="body2" className="Footer_p2">
              Branch Office: Near SBI ATM, Block Road, Refugee Colony, Saharsa,
              Bihar - 852201
            </Typography>
            <Typography variant="body2" className="Footer_p2">
            <IconButton sx={{ color: "#fff" }}>
                <WifiCalling3Icon /> &nbsp; 9205-9191-25
              </IconButton>
            </Typography>
            <Box className="Footer_p2">
              <a
                href="https://wa.me/9205919124"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", padding: "8px 12px",backgroundColor: "#25D366",
                    color: "#fff",
                    borderRadius: "5px",
                    display: "inline-block", }}
              >
                <Grid container spacing={3}>
                    <Grid item xl={2} lg={2} md={2} sm={2}  >
                    <Box >
                  <WhatsAppIcon />
                </Box>
                    </Grid>
                    <Grid item xl={10} lg={10} md={10} sm={10}  >
                        <Typography fontSize="18px" fontWeight= "bold" color="#fff">
                        Chat On WhatsApp
                        </Typography>
                    </Grid>

                </Grid>
              </a>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          sx={{
            marginTop: "30px",
            textAlign: "center",
            borderTop: "2px solid #fff",
            paddingTop: "10px",
          }}
        >
          <Typography variant="body2" fontSize="20px" padding="20px 0px 80px 0px" >
            © 2024 TechIntelliVerse Private Limited. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
