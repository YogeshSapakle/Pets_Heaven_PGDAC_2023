import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div>

      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Typography variant='h6' display="block" gutterBottom>
          <h1>About Us</h1>
        </Typography>
        <br></br>
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 1700 }} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="450"
                  image="/images/team.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    display="block"
                    component="div"
                    gutterBottom
                  >
                    <h1>Who We Are ?</h1>
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Pet Paradise Foundation is India’s only registered NGO
                    dedicated to promote awareness about the amazing benefits of
                    the human-animal relationship and the miraculous healing
                    effects of animals on humans. We are a team of therapists
                    from various mental/medical health professions and
                    volunteers from various other fields. We train family pets
                    to be ‘Therapy Animals’ who work with us as our
                    co-therapists or volunteer with their owners on visiting
                    various people in need. We all share a common belief of
                    ‘Animals for Human Wellness’
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Grid container spacing={20}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 450 }} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="450"
                  image="/images/pethavenOne.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    display="block"
                    component="div"
                    gutterBottom
                  >
                    <h1>Our Aim</h1>
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    We at Animal Angels aim at involving more and more
                    professionals and like-minded people for the cause
                    beneficial to both humans and animals. The goal of the
                    therapy is to enhance the quality of human life through
                    interaction with animals.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <br></br>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 450 }} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="450"
                  image="/images/team0.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    display="block"
                    component="div"
                    gutterBottom
                  >
                    <h1>Mission</h1>
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Our mission is to reach out to as many people in India who
                    can be benefited from Animal Assisted Therapy and to create
                    awareness about Animal Assisted Therapy and the mutual
                    benefits of the healing effect of Animals on Humans.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Grid container spacing={20}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 450 }} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="450"
                  image="/images/team2.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    display="block"
                    component="div"
                    gutterBottom
                  >
                    <h1>Our Work</h1>
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                  Our platform offers a user-friendly interface for both potential 
                  adopters and shelter administrators. It enables users to browse 
                  detailed animal profiles, submit adoption applications, and track
                   the status of their applications. Through this system, we aim to 
                   streamline the adoption process, promote responsible pet ownership,
                    and contribute to the welfare of animals by creating meaningful 
                    connections between animals and their new families.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <br></br>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 450 }} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="450"
                  image="/images/team5.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    display="block"
                    component="div"
                    gutterBottom
                  >
                    <h1>Pet Therapy</h1>
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Animal Angels has been a pioneer in creating the field of
                    Animal Assisted Therapy in India.Right from our first
                    project of implementing AAT for mentally challenged children
                    in 2003 to introducing AAT in hospitals in India. Animal
                    Angels has been active in implementing AAT in different
                    areas of mental and medical health as well as social and
                    academic sector.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <br></br>
      <br></br>

      <br></br>
      <Button onClick={() => navigate(-1)} color="primary" variant="contained" size="large">
        Back
      </Button>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default AboutUs;
