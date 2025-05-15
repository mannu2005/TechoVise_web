import { Button, Typography, Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import DoneIcon from "@mui/icons-material/Done";
import "./Subscription.css";

function Subscription() {
  return (
    <>
      <Box
        sx={{
          padding: {
            lg: "0px 30px 0px 50px",
            md: "0px 10px 0px 20px",
            sm: "0px 10px 0px 30px",
            xs: "0px 10px 0px 20px",
            xl: "0px 60px",
          },
          // backgroundColor: "#e3fff9",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          textAlign="center"
          fontWeight="bold"
          paddingTop="50px"
          paddingBottom="20px"
        >
          Subscription Plans For IT Services
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", paddingBottom: "70px" }}
        >
          <Grid lg={4} md={4} xs={12} sm={6} sx={{ justifyContent: "center" }}>
            <Card
              className="Subscription_Card"
              sx={{
                margin: {
                  lg: "70px 30px 0px 30px",
                  xl: "70px 60px 0px 60px",
                  md: "70px 10px 0px 10px",
                  sm: "50px 25px 0px 25px",
                  xs: "70px 30px 0px 30px",
                },
              }}
            >
              <CardActionArea>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#138f74",
                    fontWeight: "700",
                    fontSize: { lg: "20px", md: "16px",sm: "16px",xs: "20px" },
                    padding: {
                      lg: "10px 40px",
                      md: "10px 40px",
                      xs: "10px 20px",
                    },
                  }}
                >
                  Basic Plan <br />
                  (3 Months)
                </Button>
                <CardContent>
                  <Box className="CardContent">
                    <Typography
                      className="Subscription_Typography"
                      variant="body2"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        6 Images in a Month
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        0 Video in a Month
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        1000 INR for one pager website
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        2500 INR for 1 Year Hosting Plan
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        10 AM to 6 PM Support on Email.
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        Mon Fri Tech Support in a week
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        1000 INR for each additional
                        <br />
                        <span style={{ padding: "0px 25px" }}>
                          static webpages.
                        </span>
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <Box
                sx={{
                  padding: "5px 20px",
                  backgroundColor: "#138f74", // Green background
                  borderRadius: "8px",
                  border: "2px solid #138f74",
                  margin: "20px",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6} lg={6}>
                    {/* Original Price */}
                    <Typography
                      variant="body1"
                      sx={{
                        textDecoration: "line-through #ffc107",
                        color: "#fff",
                        marginRight: "30px",
                        fontSize: "30px",
                      }}
                    >
                      9000
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    {/* Discounted Price */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                        textAlign: "end",
                        paddingTop: "20px",
                      }}
                    >
                      4500/-
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
          <Grid lg={4} md={4} xs={12} sm={6} sx={{ justifyContent: "center" }}>
            <Card
              className="Subscription_Card"
              sx={{
                margin: {
                  lg: "70px 30px 0px 30px",
                  xl: "70px 60px 0px 60px",
                  md: "70px 10px 0px 10px",
                  sm: "50px 25px 0px 25px",
                  xs: "70px 30px 0px 30px",
                },
              }}
            >
              <CardActionArea>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#138f74",
                    fontWeight: "700",
                    fontSize: { lg: "20px", md: "16px",sm: "16px",xs: "20px" },
                    padding: {
                      lg: "10px 40px",
                      md: "10px 40px",
                      xs: "10px 20px",
                    },
                  }}
                >
                  Intermediate Plan <br />
                  (6 Months)
                </Button>
                <CardContent>
                  <Box className="CardContent">
                    <Typography
                      className="Subscription_Typography"
                      variant="body2"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        12 Images in a Month
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        1 Video in a Month
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        500 INR for one pager website
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        2000 INR for 1 Year Hosting Plan
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        10 AM to 6 PM Support on Email.
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        Mon Fri Tech Support in a week
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        800 INR for each additional
                        <br />
                        <span style={{ padding: "0px 25px" }}>
                          static webpages.
                        </span>
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <Box
                sx={{
                  padding: "5px 20px",
                  backgroundColor: "#138f74", // Green background
                  borderRadius: "8px",
                  border: "2px solid #138f74",
                  margin: "20px",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6} lg={6}>
                    {/* Original Price */}
                    <Typography
                      variant="body1"
                      sx={{
                        textDecoration: "line-through #ffc107",
                        color: "#fff",
                        marginRight: "30px",
                        fontSize: "30px",
                      }}
                    >
                      24000
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    {/* Discounted Price */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                        textAlign: "end",
                        paddingTop: "20px",
                      }}
                    >
                      12000/-
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
          <Grid lg={4} md={4} xs={12} sm={6} sx={{ justifyContent: "center" }}>
            <Card
              className="Subscription_Card"
              sx={{
                margin: {
                  lg: "70px 30px 0px 30px",
                  xl: "70px 60px 0px 60px",
                  md: "70px 10px 0px 10px",
                  sm: "50px 25px 0px 25px",
                  xs: "70px 30px 0px 30px",
                },
              }}
            >
              <CardActionArea>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#138f74",
                    fontWeight: "700",
                    fontSize: { lg: "20px", md: "16px",sm: "16px",xs: "20px" },
                    padding: {
                      lg: "10px 40px",
                      md: "10px 40px",
                      xs: "10px 20px",
                    },
                  }}
                >
                  Advance Plan <br />
                  (12 Months)
                </Button>
                <CardContent>
                  <Box className="CardContent">
                    <Typography
                      className="Subscription_Typography"
                      variant="body2"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        24 Images in a Month
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        2 Video in a Month
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        Free for one pager website
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        1500 INR for 1 Year Hosting Plan
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        10 AM to 6 PM Support on Email.
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        Mon Fri Tech Support in a week
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="Subscription_Typography"
                    >
                      <DoneIcon className="Subscription_DoneIcon"></DoneIcon>
                      <span className="Subscription_Span">
                        500 INR for each additional
                        <br />
                        <span style={{ padding: "0px 25px" }}>
                          static webpages.
                        </span>
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <Box
                sx={{
                  padding: "5px 20px",
                  backgroundColor: "#138f74", // Green background
                  borderRadius: "8px",
                  border: "2px solid #138f74",
                  margin: "20px",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6} lg={6}>
                    {/* Original Price */}
                    <Typography
                      variant="body1"
                      sx={{
                        textDecoration: "line-through #ffc107",
                        color: "#fff",
                        marginRight: "30px",
                        fontSize: "30px",
                      }}
                    >
                      30000
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    {/* Discounted Price */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                        textAlign: "end",
                        paddingTop: "20px",
                      }}
                    >
                      25000/-
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Subscription;
