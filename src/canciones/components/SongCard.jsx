import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const SongCard = ({
    id,
    ritmo,
    title,
    linkCantado,
    linkInstrumental,
    letra,
}) => {

    return (
        <Grid item xs={12} sm={3} p={3}>
            <Card sx={{ backgroundColor: "#cb9bde" }}>
                <CardContent>
                    <Typography variant='h4'>
                        {title}
                    </Typography>
                    <Typography variant='h6'>
                        {ritmo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>
                        <Link to={`/cancion/${id}`}>Letra y Video...</Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
