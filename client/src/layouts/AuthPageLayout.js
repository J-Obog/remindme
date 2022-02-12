import { Outlet } from 'react-router-dom';

const AuthPageLayout = () => {
    return (
        <div className="page-container auth-page-bg items-center justify-center animate-bg-fade-in">
            <Outlet />
        </div>
    );
};

export default AuthPageLayout;
