import { Outlet } from 'react-router-dom';

const AuthPageLayout = () => {
    return (
        <div className="page-container auth-page-bg animate-bg-fade-in">
            <Outlet />
        </div>
    );
};

export default AuthPageLayout;
