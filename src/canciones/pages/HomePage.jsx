import { Grid, Typography } from "@mui/material";
import { CrisisAlert, Visibility, AddTask, AssistantPhoto, AssuredWorkload, AutoGraph, Balance } from "@mui/icons-material";
import { CancionesLayout } from "../layout/CancionesLayout";
import { Carousel } from "../components/Carousel";


export const HomePage = () => {
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
                <Carousel />
                <Grid
                    container
                    justifyContent="center"
                >
                    <Grid
                        item
                        sm={12}
                        className="title textoFondoOscuro"
                        my={5}

                    >
                        <Typography variant="h4">
                            OSCAR <span className="titleColor">VIDEA</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        px={{ xs: 5, sm: 60 }}
                        className="textoFondoOscuro"

                    >
                        <Typography variant="h4">
                            <span className="titleColor">Prologo</span>
                        </Typography>
                        <p>La presente publicación representa el desafío de poner a consideración del público amante del género folklórico nacional boliviano, videos de mi autoría.
                            <br />
                            Como un esfuerzo personal de escribir todo Io realizado musicalmente, empeño que solo pretende dejar una constancia de un aporte cultural en este género, que representa el amor por Io nuestro y nuestra patria.
                            <br />
                            Tal vez esta entrega, no es un dechado de grandes virtudes, pero muestra el empeño y la dedicación de mi persona, por ofrecer un pequeño aporte en favor de la música nacional, dejando constancia escrita de todas y cada una de mis obras en diferentes publicaciones.
                            <br />
                            Todos los temas de este y de anteriores trabajos han sido subidos a Facebook y pueden ser utilizados por músicos de todas latitudes pues el propósito es difundir el presente aporte al folklore boliviano.
                            <br />
                            Agradezco la colaboración de quienes trabajan y han trabajado conmigo, en la ejecución, grabación y edición de todos mis materiales, pues sin su ayuda, este esfuerzo no sería posible. Sin embargo, los errores que se puedan encontrar en esta obra son de mi absoluta responsabilidad.
                        </p>
                        <Typography variant="h6">
                            <span className="titleColor">OSCAR VIDEA PANOZO</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        className="textoFondoOscuro"
                        px={{ xs: 5, sm: 60 }}
                    >
                        <Typography variant="h4">
                            Hoja <span className="titleColor">de vida</span>
                        </Typography>
                        <p>Como un hobby y tal vez como una ilusión, sueño no cumplido en mis primeros años de estudio musical, comienzo a introducirme en los profundos senderos de la música, a través del internet y con el apoyo del profesor Enrique Agreda, con quien estudiamos diferentes capítulos de la teoría musical en interminables tardes de análisis y discusión.
                            <br />
                            En realidad, yo deseaba ser más ejecutante que compositor, y ese era el objetivo inicial, pero por circunstancias familiares empiezo a escribir algunos temas que luego se volvieron cd’s y dvd’s, sin buscar un interés estrictamente comercial.
                            <br />
                            Nacen tres obras de todo este empeño, traducidas en textos de partituras y sus respectivos audios y videos y hoy publicamos el segundo material que es PRECIOSA FLOR. El primero y con el mismo formato que ya circula en los medios artísticos es BOLIVIANITA DULCE COLOR, y se halla en preparación la publicación del texto ROMANTICA FLOR.
                            <br />
                            En todo caso soy un autodidacta de la música y más que todo un amante del género folklórico boliviano esperando plasmar en un futuro próximo, otros materiales en diferentes géneros nacionales.
                            <br />
                            Si bien por un ordenamiento no planeado, inicie mis trabajos por mi amor a la cueca boliviana, las siguientes obras son una mixtura de diferentes ritmos nacionales que se publicarán en el transcurso del próximo año en soportes de audio y video y libro de partituras.
                            <br />
                            De igual modo, con el apoyo de mis colaboradores, continuo con la investigación y composición de otros géneros, que en su fase inicial están escritos en partituras, pero no serán editados en soportes musicales, sino en materiales impresos, por el momento.
                        </p>
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        className="textoFondoOscuro"
                        px={{ xs: 5, sm: 60 }}
                    >
                        <Typography variant="h4">
                            <span className="titleColor">Actividades</span>
                        </Typography>
                        <p>SOBODAYCOM, tuvo la gentileza de aceptarme como socio de esa entidad, a la que estoy agradecido.
                            <br />
                            Inicio estas actividades el primero de Enero del 2000, después del vacío que deja en mi, la muerte de mi madre, a quien no le gustaba que yo pudiera hacer música, por temas familiares que lastimaron nuestra familia.
                            <br />
                            Con el apoyo de algunos amigos y varias páginas web, y las enseñanzas de un amigo estudioso, como es Enrique Agreda, me inicio audazmente en el arte de componer temas, que venían girando en el interior de mis pensamientos.
                            <br />
                            Así nacen a lúz pública los siguientes trabajos musicales en soportes de Audio y Video:
                        </p>
                        <ol>
                            <li>Bolivianita Dulce Color</li>
                            <li>Preciosa Flor</li>
                            <li>Romántica Flor</li>
                        </ol>
                        <p>
                            Están grabados también 3 nuevos trabajos, que se editaran en soporte de audio hasta fines del presente año, que provisionalmente he denominado:
                        </p>
                        <ol>
                            <li>El Paraíso Oriental, que consta de 18 taquiraris</li>
                            <li>La Fiesta de Oruro con varias morenadas realizadas para con memorar el hermoso carnaval orureño con 10 temas.</li>
                            <li>El Lago Sagrado, con una mistura de temas que se inspiran en la geografía nacional, con 15 temas.</li>
                        </ol>
                    </Grid>
                </Grid>
            </Grid>
        </CancionesLayout >
    );
};
