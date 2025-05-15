import { Container, Typography, Box } from "@mui/material";
import './Process.css'

function Process() {
  return (
    <>
      <Container>
        <Typography
          variant="h5"
          component="div"
          textAlign="center"
          fontWeight="bold"
          paddingTop="100px"
          paddingBottom="50px"
        >
          Our Process
        </Typography>
        {/* <Box sx={{display:"flex",justifyContent:'space-between'}} >
        <Box className="Process_Box"  >
          <Typography variant="h6" className="Process_Step" >Step-1</Typography>
        </Box>
        <Box className="Process_card" >
          <Box className="Process_card_in" ></Box>
        </Box>
      </Box> */}

      </Container>
    </>
  );
}

export default Process;
