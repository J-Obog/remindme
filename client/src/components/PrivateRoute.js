import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ page: Page }) => {
    let isAuthed = true;

    return isAuthed ? <Page /> : <Navigate to="/login" />;
};

export default PrivateRoute;
