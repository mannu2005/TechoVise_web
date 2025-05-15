import { Box, Typography, Button, Grid } from "@mui/material";

function Advantage() {
  return (
    <>
        <Box sx={{border:"3px solid #138f74",padding:"25px",borderRadius:"10px",margin:"0px 50px"}}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontSize: "24px",fontWeight:"bold", padding: "20px 0px" }}
          >
            Experience the Techovise Advantage -
          </Typography>
          <Typography variant="body2" component="div" sx={{ fontSize: "18px" }}>
            99% Resource Retain Accuracy
            <br />
            Free for Early Users for a Limited Time
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={9} md={9} sm={12}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#138f74",
                  fontWeight: "bold",
                  padding: "10px 0px",
                }}
              >
                Hurry up! Recruit smart & retain strong with Techovise.
              </Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={6}>
              <Button variant="contained"sx={{backgroundColor:"#138f74",fontSize:"18px"}} >Explore More</Button>
            </Grid>
          </Grid>
        </Box>
    </>
  );
}

export default Advantage;
