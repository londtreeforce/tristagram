import './style.css';
import Navbar from '../Navbar';

const Layout = ({
    nickName,
    avatarUrl,
    id,
    children
}) => {
    return(
        <div className='cnLayoutRoot'>
            <Navbar />
            <div className='cnLayoutBody'>
                { children }
            </div>
        </div>

    );
};

export default Layout;