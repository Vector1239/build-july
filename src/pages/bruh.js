import Search from './Search'
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';

const Page = () => (
    <Box
        component="main"
        sx={{
            flexGrow: 1,
            py: 8
        }}
    >
        <Container maxWidth="lg">
            <Stack spacing={3}>
                <div>
                    <Typography variant="h4">
                        Account
                    </Typography>
                </div>
                <div>
                    <Grid
                        container
                        spacing={10}
                    >
                        <Grid
                            xs={12}
                            md={6}
                            lg={4}
                        >
                            <Search />
                        </Grid>
                    </Grid>
                </div>
            </Stack>
        </Container>
    </Box>
);

export default Page