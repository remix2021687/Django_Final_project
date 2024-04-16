import { Route, Routes, Navigate } from 'react-router-dom';
import { PageTemplate } from './components/PageTemplate';

export const RouteCompontents = ({ Components }) => {
    const {RootLayout, HomePage} = Components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage}/>}/>
        </Routes>
    )
}