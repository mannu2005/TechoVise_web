import {
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./Virtual.css";
import img from "../../../assets/Virtual_CTO_img/image.png";

function Virtual() {
  return (
    <>
      <Typography component="div" className="Virtual_h">
        Virtual CTO
      </Typography>
      <Box
        sx={{
          padding: {
            xl: "0px 200px",
            lg: "0px 150px",
            md: "0px 90px",
            sm: "0px 120px",
            xs: "0px 10px 0px 20px",
          },
          backgroundColor: "#e3fff9",
          marginTop: "30px",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
          >
            <div className="" style={{ justifyContent: "center" }}>
              <img src={img} alt="Virtual CTO" className="Virtual_img" />
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={{paddingBottom:{sm:"50px",xs:"50px"}}}>
              <FormControl
                fullWidth
                sx={{ marginTop: "50px", backgroundColor: "#fff" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Who is a CTO ?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Who is a CTO?"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                sx={{ marginTop: "16px", backgroundColor: "#fff" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Why do companies need a CTO?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Who is a CTO?"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                sx={{ marginTop: "16px", backgroundColor: "#fff" }}
              >
                <InputLabel id="demo-simple-select-label">
                  {" "}
                  Why Startups Should Consider Virtual CTOs ?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Who is a CTO?"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                sx={{ marginTop: "16px", backgroundColor: "#fff" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Why Choose a Virtual CTO from TechoVise ?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Who is a CTO?"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Virtual;
