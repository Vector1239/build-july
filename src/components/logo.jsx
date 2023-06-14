import { Link, Box, Typography } from '@mui/material';

export const Logo = () => {
  const white = "#FFFFFF"
  return (
    <Link href="/" underline="none">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <Box sx={{ mt: -1 }}>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 160" width="50" height="50">
            <ellipse style={{fill:white }} cx="79.67" cy="118.87" rx="16.97" ry="16.56"/>
            <path style={{fill: white}} d="M106,41.1c5.42,4.53,8.61,10.24,12.4,15.93,10.82,16.55,21.49,33.3,31.4,50.35a19.75,19.75,0,0,1-7.22,27c-10.72,6.38-25.1.75-28.73-11.14-5.9-18.82-11.07-38-16-57.14-1.64-6.63-3.7-12.84-3.4-19.9A7.06,7.06,0,0,1,106,41.1Z"/>
          </svg>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', ml: 3, color: white }}>
            Admyre
          </Typography>
          <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', ml: 13.6, mt: '-10px', color: white }}>
            .club
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
