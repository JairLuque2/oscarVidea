import { Grid } from '@mui/material';
import React, { useMemo } from 'react';
import { getSongByRitmo } from '../helpers';
import { SongCard } from './';

export const SongList = ({ ritmo }) => {
    const canciones = useMemo(() => getSongByRitmo(ritmo), [ritmo]);

    return (
        <Grid container px={{ sm: 40 }}>
            {canciones.map((cancion) => (
                <SongCard key={cancion.id} {...cancion} />
            ))}
        </Grid>
    );
};
