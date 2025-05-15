import { Typography, Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import img from "../../../assets/Service_img/Screenshot 2024-08-26 135111 1.png";
import img1 from "../../../assets/Service_img/Screenshot 2024-08-26 135651 1.png";
import img2 from "../../../assets/Service_img/Screenshot 2024-08-26 140031 1.png";
import img3 from "../../../assets/Service_img/Screenshot_2024-08-26_140208-removebg-preview 1.png";
import img4 from "../../../assets/Service_img/Screenshot_2024-08-26_140746-removebg-preview 1.png";
import "./Service.css";

function Sevice() {
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        fontWeight="bold"
        paddingTop="50px"
        paddingBottom="20px"
      >
        Our Services
      </Typography>
      <Box sx={{ padding: { lg: "0px 80px", md: "0px 20px 0px 30px",sm: "0px 10px 0px 30px",xs: "0px 30px", xl: "0px 120px" }, backgroundColor: "#e3fff9" }} >
          <Typography
            variant="body2"
            component="div"
            sx={{
              textAlign:{lg:"center",md:"center",sm:"center",xs:"justify"},
              fontSize: "20px",
              padding: { xl: "10px 40px", sm: "10px" },
            }}
          >
            InternNexus offers a range of services including website
            development, application development, and digital marketing, aimed
            at providing comprehensive solutions for businesses and individuals
            looking to enhance their online presence and reach.
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", paddingBottom: "70px" }}
          >
            <Grid lg={4} md={4} xs={12} sm={6}>
              <Card sx={{margin:{lg:'70px 40px 0px 40px',xl:'70px 80px 0px 80px',md:'70px 10px 0px 10px',sm: "50px 25px 0px 25px",xs:"70px 30px 0px 30px"}  }}>
                <CardActionArea>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    height="194px"
                  >
                    <img src={img} alt="" />
                  </Box>
                  <div
                    className=""
                    style={{
                      border: "2px solid #45a38f",
                      width: "100%",
                      padding: "0px",
                    }}
                  ></div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      className="Website"
                      variant="h5"
                      component="div"
                      textAlign="center"
                      fontSize={{lg:"24px",md:"20px",sm:"19px"}}
                      fontWeight="bold"
                      lineHeight={{
                        lg: "30px",
                        md: "20px",
                        sm: "30px",
                        xs: "30px",
                      }}
                    >
                      Website Development
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Website_P"
                      sx={{ padding: "0  5px", fontSize: "18px",height: { lg: '160px', md: '190px', sm: '190px', xs: '160px' },}}
                    >
                      Website Development is the process of creating, designing,
                      and maintaining websites, ensuring they are functional,
                      user-friendly, and visually appealing.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div
                  className=""
                  style={{
                    border: "2px solid #45a38f",
                    width: "100%",
                    padding: "0px",
                  }}
                ></div>
              </Card>
            </Grid>
            <Grid lg={4} md={4} xs={12} sm={6}>
              <Card sx={{margin:{lg:'70px 40px 0px 40px',xl:'70px 75px 0px 75px',md:'70px 10px 0px 10px',sm: "50px 25px 0px 25px",xs:"50px 30px 0px 30px"} }}>
                <CardActionArea>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                  >
                    <img src={img1} alt="" />
                  </Box>
                  <div
                    className=""
                    style={{
                      border: "2px solid #45a38f",
                      width: "100%",
                      padding: "0px",
                    }}
                  ></div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      className="Website"
                      variant="h5"
                      component="div"
                      textAlign="center"
                      fontSize={{lg:"24px",md:"20px",sm:"19px"}}
                      fontWeight="bold"
                      lineHeight={{
                        lg: "30px",
                        md: "20px",
                        sm: "30px",
                        xs: "30px",
                      }}
                    >
                      App Development
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Website_P"
                      sx={{ padding: "0 5px", fontSize: "18px",height: { lg: '160px', md: '190px', sm: '190px', xs: '200px' } }}
                    >
                      App Development is the process of creating software
                      applications for mobile devices or desktops, focusing on
                      functionality, user experience, and performance
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div
                  className=""
                  style={{
                    border: "2px solid #45a38f",
                    width: "100%",
                    padding: "0px",
                  }}
                ></div>
              </Card>
            </Grid>
            <Grid lg={4} md={4} xs={12} sm={6}>
              <Card sx={{margin:{lg:'70px 40px 0px 40px',xl:'70px 65px 0px 68px',md:'70px 20px 0px 20px',sm: "50px 25px 0px 25px",xs:"50px 30px 0px 30px"} }}>
                <CardActionArea>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    height="194px"
                  >
                    <img src={img2} alt="" />
                  </Box>
                  <div
                    className=""
                    style={{
                      border: "2px solid #45a38f",
                      width: "100%",
                      padding: "0px",
                    }}
                  ></div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      className="Website"
                      variant="h5"
                      component="div"
                      textAlign="center"
                      fontSize={{lg:"24px",md:"20px",sm:"19px"}}
                      fontWeight="bold"
                      lineHeight={{
                        lg: "30px",
                        md: "20px",
                        sm: "50px",
                        xs: "30px",
                      }}
                    >
                      Cyber Security
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Website_P"
                      sx={{ padding: "0 5px", fontSize: "18px",height: { lg: '160px', md: '190px', sm: '190px', xs: '200px' }  }}
                    >
                      Cybersecurity involves protecting systems, networks, and
                      data from digital attacks, unauthorized access, and damage
                      by implementing various security measures and protocols.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div
                  className=""
                  style={{
                    border: "2px solid #45a38f",
                    width: "100%",
                    padding: "0px",
                  }}
                ></div>
              </Card>
            </Grid>
            <Grid lg={4} md={4} xs={12} sm={6}>
              <Card sx={{margin:{lg:'70px 40px 0px 40px',xl:'70px 80px 0px 80px',md:'70px 20px 0px 20px',sm: "50px 25px 0px 25px",xs:"50px 30px 0px 30px"}  }}>
                <CardActionArea>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    height="194px"
                  >
                    <img src={img3} alt="" />
                  </Box>
                  <div
                    className=""
                    style={{
                      border: "2px solid #45a38f",
                      width: "100%",
                      padding: "0px",
                    }}
                  ></div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      className="Website"
                      variant="h5"
                      component="div"
                      textAlign="center"
                      fontSize={{lg:"24px",md:"22px",sm:"19px"}}
                      fontWeight="bold"
                      lineHeight={{
                        lg: "30px",
                        md: "20px",
                        sm: "25px",
                        xs: "30px",
                      }}
                    >
                      Cloud and Infra
                      <br />
                      Management
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Website_P"
                      sx={{ padding: "0 5px",fontSize: "18px",height: { lg: '100px', md: '90px', sm: '190px', xs: '160px' } }}
                    >
                      Cloud and Infra Management ensures efficient, secure, and
                      scalable operation of cloud services and IT
                      infrastructure.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div
                  className=""
                  style={{
                    border: "2px solid #45a38f",
                    width: "100%",
                    padding: "0px",
                  }}
                ></div>
              </Card>
            </Grid>
            <Grid lg={4} md={4} xs={12} sm={6}>
              <Card sx={{margin:{lg:'70px 40px 0px 40px',xl:'70px 80px 0px 80px',md:'70px 20px 0px 20px',sm: "50px 25px 0px 25px",xs:"50px 30px 0px 30px"}  }}>
                <CardActionArea>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    height="194px"
                  >
                    <img src={img4} alt="" />
                  </Box>
                  <div
                    className=""
                    style={{
                      border: "2px solid #45a38f",
                      width: "100%",
                      padding: "0px",
                    }}
                  ></div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      className="Website"
                      variant="h5"
                      component="div"
                      textAlign="center"
                      fontSize={{lg:"24px",md:"22px",sm:"19px"}}
                      fontWeight="bold"
                      lineHeight={{
                        lg: "30px",
                        md: "20px",
                        sm: "25px",
                        xs: "30px",
                      }}
                    >
                      Digital Marketing & <br />
                      Graphic Designing
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Website_P"
                      sx={{ padding: "0 5px", fontSize: "18px",height: { lg: '100px', md: '90px', sm: '80px', xs: '100px' } }}
                    >
                       Digital Marketing promotes online, while Graphic Designing
                       crafts visual content
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div
                  className=""
                  style={{
                    border: "2px solid #45a38f",
                    width: "100%",
                    padding: "0px",
                  }}
                ></div>
              </Card>
            </Grid>
          
          </Grid>
      </Box>
    </>
  );
}

export default Sevice;
