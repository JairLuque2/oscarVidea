import { Button, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getSongById } from '../helpers';
import { CancionesLayout } from '../layout/CancionesLayout';
import ReactPlayer from 'react-player'

export const CancionPage = () => {
    // como nombremos a la variable en el path del router "hero/:id" asi se llamara al "useParams"
    const { id, ...rest } = useParams();

    const cancion = useMemo(() => getSongById(id), [id]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    console.log(cancion.letra)

    if (!cancion) {
        return <Navigate to='/' />;
    }

    return (
        <CancionesLayout>
            <Grid container className='fondo'>
                <Grid item sm={10} bgcolor="rgba(0,0,0,0.5)" mx={{ xs: 0 }}>
                    <Typography variant='h2' color="white" sx={{ textAlign: "center" }}>
                        {cancion.title}
                    </Typography>
                </Grid>
                <Grid item sm={2}>
                    <Button size="large" variant="contained" onClick={onNavigateBack}>
                        Atras
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                    className="title"
                    height={630}
                    px={{ xs: 0, sm: 5 }}
                >
                    <Grid container height={630}>
                        <Grid item sm={12} width={"100%"}>
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                url={cancion.linkCantado}
                                controls
                            />
                        </Grid>
                        <Grid item sm={12} width={"100%"}>
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                url={cancion.linkInstrumental}
                                controls
                            />
                        </Grid>
                    </Grid>


                </Grid>
                <Grid item xs={12} sm={6} color="white" className='letra'>
                    <Typography variant='subtitle1' color="white" className='cancionLetra'>
                        {cancion.letra}
                    </Typography>
                </Grid>
            </Grid>
        </CancionesLayout>
    );
};
