import { Route, Routes } from "react-router-dom"
import { CancionesRouter } from "../canciones/routes/CancionesRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<CancionesRouter />} />

        </Routes>
    )
}
