import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout/index";
import DetailedCard from "../Components/DetailedCard";
import { getPhotos } from "../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";

const MainPage = () => {
    const photos = useSelector(state => state.photos.photos);
    const loading = useSelector(state => state.photos.isPhotosLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos)
    }, [])

    useEffect(() => {
        dispatch(getPhotos());
    }, []);

    
    return (
        <Layout nickName="Ilyas" id={1}>
            <div className="cnMainPageRoot">
                <InfiniteScroll 
                dataLength={photos.length}
                next={() => console.log('next')}
                hasMore={true}
                loader={'loading'}
                endMessage={
                    <p>Thats all </p>
                }>

                    {loading ? 'loading...' : photos.map(({ author, imgUrl, id, likes, comments, avatarUrl }) => (
                        <DetailedCard
                        key={id}
                        userName={author.nickname}
                        userId={author.id}
                        avatarUrl={author.avatarUrl}
                        imgUrl={imgUrl}
                        likes={likes.length}
                        isLikeByYou={true}
                        comments={comments}
                        className="cnMainPageCard"
                    />
                    ))}
                </InfiniteScroll>
            </div>








        </Layout>
    );
};

export default MainPage;