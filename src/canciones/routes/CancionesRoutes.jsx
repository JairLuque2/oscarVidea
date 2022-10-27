import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, Taquiraris, MorenadaYCuecas, RomanticaFlor, PreciosaFlor, BolivianitaDulceColor, CantaYuriOrtuno } from '../pages'
import { CancionPage } from '../pages/CancionPage'

export const CancionesRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/romanticaFlor' element={<RomanticaFlor />} />
            <Route path='/preciosaFlor' element={<PreciosaFlor />} />
            <Route path='/bolivianitaDulceColor' element={<BolivianitaDulceColor />} />
            <Route path='/cantaYuriOrtuno' element={<CantaYuriOrtuno />} />
            <Route path='/taquiraris' element={<Taquiraris />} />
            <Route path='/morenadaYCuecas' element={<MorenadaYCuecas />} />
            <Route path='cancion/:id' element={<CancionPage />} />

            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    )
}
