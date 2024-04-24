import { Route, Routes, Navigate } from 'react-router-dom';
import { PageTemplate } from './components/PageTemplate';

export const RouteCompontents = ({ Components }) => {
    const {RootLayout, HomePage, TourPage} = Components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage}/>}/>
            <Route path='/tours' element={<PageTemplate Layout={RootLayout} Content={TourPage}/>}/>
        </Routes>
    )
}