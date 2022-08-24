import { Grid, Typography } from '@mui/material'
import { SongList } from '../components'
import { CancionesLayout } from '../layout/CancionesLayout'

export const Cuecas = () => {
    return (
        <CancionesLayout>
            <Grid container className='fondo'>
                <Grid item sm={12} bgcolor="rgba(0,0,0,0.5)" mx={{ xs: 0, sm: 50 }}>
                    <Typography variant='h2' color="white" sx={{ textAlign: "center" }}>Cuecas</Typography>
                </Grid>
                <Grid item sm={12}>
                    <SongList ritmo={'cueca'} />
                </Grid>
            </Grid>
        </CancionesLayout>
    )
}
