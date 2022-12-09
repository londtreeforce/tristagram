{/*
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout/index";
import DetailedCard from "../Components/DetailedCard";
import { getPhotos } from "../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";

const MainPage = () => {
    const photos = useSelector(state => state.photos.photos);
    const loading = useSelector(state => state.photos.isPhotosLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos());
    }, []);


    return (
        <Layout nickName="Ilya" id={1}>
            <div className="cnMainPageRoot">
                <InfiniteScroll
                    dataLength={photos.lenght}
                    next={() => console.log('next')}
                    hasMore={true}
                    loader={'loading'}
                    endMessage={
                        <p>Thats all </p>
                    }
                >
                    {loading ? 'loading' : photos.map(({ author, imgUrl, id, likes, comments }) => (
                        <DetailedCard
                            key={id}
                            userName={author.userName}
                            imgUrl={imgUrl}
                            userId={author.id}
                            likes={likes.lenght}
                            isLike={true}
                            comments={comments}
                        />
                    ))}
                </InfiniteScroll>
            </div>
        </Layout>

    );
};

export default MainPage;





*/}