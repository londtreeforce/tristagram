import { useState } from 'react';
import UserBadge from '../UserBadge';
import './style.css';
import Comment from '../Comment';


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

    const [isCommentsShown, setIsCommentsShown] = useState(false);

    const renderComments = () => {
        if (comments.length > 2 && !isCommentsShown) {
            const commentsCopy = [...comments];
            const commentForRender = commentsCopy.splice(comments.length - 2, 2);


            return (
                <>
                    <span className="cnDetailedCardTitle " onClick={() => setIsCommentsShown(true)}>{`Остальные ${comments.length - commentForRender.length } комментария`}</span>{/*-2 комметария новых */}
                    {commentForRender.map((comment) => <Comment {...comment} />)}
                </>
            )
        }
        return comments.map((comment) => <Comment {...comment} />)
    };
    return (
        <div className="cnDetailedCardRoot">
            <div className="cnDetailedCardHeader">
                <UserBadge nickName={userName} avatarUrl={avatarUrl} id={id} />{/*Сюда не вписывать, по логике понятно что с UserBadge */}
            </div>
            <div>
                <img src={imgUrl} alt="img" className="cnDetailedCardImg" />
            </div>
            <div className="cnDetailedCardButtons">
                <i className={`${isLike ? 'fas' : 'far'} fa-heart cnDetailedCardLikeIcon`} />
                <i className="fa-sharp fa-solid fa-comment cnDetailedCardCommentIcon" />
            </div>
            <div className="cnDetailedCardLikes">
                {`Оценили ${likes} человек`}
            </div>
            <div className="cnDetailedCardComments">
                {renderComments()}
                {/* Можно за место  text={comment.text} nickName={comment.nickName} сделать {...comment} разложить поле*/}
            </div>

            <textarea className="cnDetailedCardTextArea" />
        </div>
    );
};

export default DetailedCard;