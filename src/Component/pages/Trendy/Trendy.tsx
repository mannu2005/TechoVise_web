import { Button, Typography, Box, Grid } from "@mui/material";

function Trendy() {
  return (
    <>
      <Box sx={{ padding: { lg: "0px 100px", md: "0px 100px",sm: "0px 60px",xs: "0px 10px 0px 20px ", xl: "0px 200px" } }} >
        <Typography
          variant="h5"
          component="div"
          textAlign="center"
          paddingTop="50px"
          fontWeight="600"
          paddingBottom="50px"
        >
          Top Trendy Technologies
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              REACT
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              MONGODB
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              NODEJS
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              EXPRESS
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              ANGULAR
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              AWS
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              JAVASCRIPT 
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              GITHUB
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              PYTHON
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%"
              }}
            >
              C, C++
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                width:"90%",
                height:"100%" 
              }}
            >
              CHATGPT
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Button
              className="Button"
              variant="contained"
              size="medium"
              sx={{
                padding: "10px",
                backgroundColor: "#e3fff9",
                color: "#000",
                fontSize: "20px",
                borderRadius: "25px",
                 width:"90%",
                height:"100%"
              }}
            >
             CORE JAVA
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Trendy;
