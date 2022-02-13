import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicRoute } from '~components';
import { Login, Logout, Register } from '~pages';
import { AuthPageLayout } from '~layouts';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthPageLayout />}>
                    <Route path="/login" element={<PublicRoute page={Login} restricted={true} />} />
                    <Route path="/logout" element={<PublicRoute page={Logout} restricted={true} />} />
                    <Route path="/register" element={<PublicRoute page={Register} restricted={true} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
