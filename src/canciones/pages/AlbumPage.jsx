import { CancionesLayout } from '../layout/CancionesLayout'
import { Grid, Typography } from "@mui/material";
import ReactPlayer from 'react-player'

export const AlbumPage = () => {
    return (
        <CancionesLayout>
            <Grid
                color="white"
                container
                display="flex"
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="fondo"
                sx={{ backgroundColor: "black" }}
            >
                <Grid
                    container
                    justifyContent="center"
                    className="textoFondoOscuro"
                >
                    <Grid
                        item
                        sm={12}
                        className="title"
                        my={5}
                    >
                        <Typography variant="h4">
                            OSCAR <span className="titleColor">VIDEA</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="title"
                        my={5}
                        height={360}
                    >
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            url="https://www.youtube.com/watch?v=pLBuFxMYkx8"
                            controls
                        />
                    </Grid>

                </Grid>
            </Grid>
        </CancionesLayout>
    )
}
