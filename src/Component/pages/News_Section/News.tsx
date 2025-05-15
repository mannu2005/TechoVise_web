import { Typography,Box,Grid } from "@mui/material";
import "./News.css";
import img from "../../../assets/News_img/Screenshot_2024-05-17_151413-removebg-preview 1.png"
import img2 from "../../../assets/News_img/Screenshot_2024-05-17_151440-removebg-preview 1.png"
import img3 from "../../../assets/News_img/image-removebg-preview (22) 1.png"
import img4 from "../../../assets/News_img/Screenshot_2024-05-17_154351-removebg-preview 1.png"
import img5 from "../../../assets/News_img/Screenshot_2024-06-24_195955-removebg-preview 1.png"
import img6 from "../../../assets/News_img/image-removebg-preview (45) 1.png"

function News() {
  return (
    <>
    <Box sx={{
      padding: {
        xl: "0px 200px",
        lg: "0px 100px",
        md: "0px 40px",
        sm: "0px 50px",
        xs: "0px 20px 0px 30px",
      },
    }} >
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", // Ensures text is centered
      }}>
      <Typography component="div" className="News_h">
        News, Media & Recognition
      </Typography>
      <Typography component="div" className="News_h4">
        Our Achievements and Accolades
      </Typography>
      <Typography component="div" className="News_P" sx={{textAlign:{lg:"center",md:"center", sm:"center",xs:"justify"}}}>
        Techovise has been recognized by various media outlets and industry
        bodies for our innovative approach to recruitment and retention.
      </Typography>
      </Box>
      <Box className="News_img_Box" >
      <Grid container spacing={3}
            justifyContent="center"
            alignItems="center" paddingTop="40px" >
            <Grid item lg={3} md={4} sm={4} xs={6} container
            justifyContent="center"
            alignItems="center" >
                <img src={img} alt=""  />
            </Grid>
            <Grid item lg={3} md={4} sm={4} xs={6} container
            justifyContent="center"
            alignItems="center" >
                <img src={img2} alt="" />
            </Grid>
            <Grid item lg={3} md={4} sm={4} xs={6} container
            justifyContent="center"
            alignItems="center" >
                <img src={img3} alt="" />
            </Grid>
            <Grid item lg={3} md={4} sm={4} xs={6} container
            justifyContent="center"
            alignItems="center" >
                <img src={img4} id="News_img1" alt="" />
            </Grid>
            <Grid item lg={6} md={4} sm={4} xs={6} container
            justifyContent="center"
            alignItems="center" >
                <img src={img5} className="News_img" alt="" />
            </Grid>
            <Grid item lg={6} md={4} sm={4} xs={6} container
            justifyContent="center"
            alignItems="center" >
                <img src={img6} alt="" />
            </Grid>
      </Grid>
      </Box>
      </Box>
    </>
  );
}

export default News;
