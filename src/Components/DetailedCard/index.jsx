import UserBadge from '../UserBadge';
import './style.css';

const DetailedCard = (
    {
        userName,
        avatarUrl,
        id, 
        imgUrl,
        likes,
        isLike,
        comments 
    }
) => {
    return(
        <div className="cnDetailedCardRoot">
            <div className="cnDetailedCardHeader">
                <UserBadge nickName={userName} avatarUrl={avatarUrl} id={id}/>{/*Сюда не вписывать, по логике понятно что с UserBadge */}
            </div>
            <div>
                <img src={imgUrl} alt="img" className="cnDetailedCardImg"/>
            </div>
            <div className="cnDetailedCardButtons">
                <i className={`${isLike ? 'fas' : 'far'} fa-heart cnDetailedCardLikeIcon`} />
                <i className="fa-sharp fa-solid fa-comment cnDetailedCardCommentIcon" />
            </div>
            <div className="cnDetailedCardLikes">
                {`Оценили ${likes} человек`}
            </div>
            <div className="cnDetailedCardComments">
                comments
                comments
                comments
                comments
            </div>

            <textarea className="cnDetailedCardTextArea"/>
        </div>
    );
};

export default DetailedCard;