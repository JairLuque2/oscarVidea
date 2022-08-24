import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, AlbumPage, Taquiraris, Morenada, Cuecas, Chuntunqui } from '../pages'
import { CancionPage } from '../pages/CancionPage'

export const CancionesRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/album' element={<AlbumPage />} /> */}
            <Route path='/taquiraris' element={<Taquiraris />} />
            <Route path='/morenada' element={<Morenada />} />
            <Route path='/cuecas' element={<Cuecas />} />
            <Route path='/chuntunqui' element={<Chuntunqui />} />
            <Route path='cancion/:id' element={<CancionPage />} />

            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    )
}
