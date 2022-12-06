import UserBadge from '../UserBadge/index';
import './style.css';



const Navbar = ({
    nickName,
    avatarUrl,
    id,
}) => {
    return(
        <div className='cnNavbarRoot'>
            <div className='cnNavbarWrapper'>
                <span>Tristagarm</span>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id}/>
            </div> 
        </div>
    );
};

export default Navbar;