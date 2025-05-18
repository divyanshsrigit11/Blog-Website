import { Box, styled, Typography, Link } from '@mui/material'; 
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    border-radius: 0 0 20px 20px;
`;

const Wrapper = styled(Box)`
    padding: 30px 20px;
    max-width: 900px;
    margin: auto;
    & > h3 {
        font-weight: bold;
        margin-bottom: 20px;
    }
    & > h5 {
        margin-top: 30px;
        line-height: 1.8;
    }
`;

const Text = styled(Typography)`
    color: #555;
`;

const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Divyansh Srivastava</Typography>
                <Text variant="h5">
                    I'm a Software Engineer based in India. I specialize in building responsive and scalable web applications using the{' '}
                    <strong>MERN Stack</strong> and <strong>.NET technologies</strong>.
                    <br /><br />
                    Check out some of my favorite projects on{' '}
                    <Link href="https://github.com/divyanshsrigit11?tab=repositories" color="inherit" target="_blank">
                        <GitHub sx={{ verticalAlign: 'middle', mr: 0.5 }} /> GitHub
                    </Link>.
                </Text>

                <Text variant="h5">
                    Need something built or just want to connect? Find me on{' '}
                    <Link href="https://www.linkedin.com/in/divyansh-srivastava-34894b219/" color="inherit" target="_blank">
                        <LinkedIn sx={{ verticalAlign: 'middle', mr: 0.5 }} /> LinkedIn
                    </Link>{' '}
                    or feel free to send me an email at{' '}
                    <Link href="mailto:divyanshsri1101@gmail.com?Subject=Let's Connect" color="inherit" target="_blank">
                        <Email sx={{ verticalAlign: 'middle', mr: 0.5 }} /> divyanshsri1101@gmail.com
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
};

export default About;