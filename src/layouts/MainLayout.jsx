
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <div className='min-h-[calc(100vh-142px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;