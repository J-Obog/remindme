import { Navigate } from 'react-router-dom';

const PublicRoute = ({ page: Page, restricted }) => {
    let isAuthed = false;
    return isAuthed && restricted ? <Navigate to="/" /> : <Page />;
};

export default PublicRoute;
