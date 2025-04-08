import { Button, Container, Grid, Typography, styled } from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import Photo from "../../../../assets/images/Image.jpeg";



const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src={Photo} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary" variant="h1" textAlign="center">Euler Fernandes</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">I a m Full Stack </Typography>

                            <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <ArrowDownwardIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon />
                                        Contact me
                                    </Button>
                                </Grid>
                            </Grid>



                        </Grid>
                    </Grid>
                </Container>

            </StyledHero >
        </>
    );
};

export default Hero;
