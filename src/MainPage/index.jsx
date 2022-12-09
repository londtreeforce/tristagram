import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout/index";
import DetailedCard from "../Components/DetailedCard";
import { getPhotos } from "../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";

const MainPage = () => {
    const state = useSelector (state => state);
    const dispatch = useDispatch ();

    useEffect(() => {
        dispatch(getPhotos)
    }, [])

    useEffect(() => {
        dispatch(getPhotos())
    },[]);

    console.log(state, 'state');
    return (
        <Layout nickName="Ilyas" id={1}>
            <div>main page</div>
            <DetailedCard
                userName="Ilyas"
                userId={1}
                imgUrl="https://i.pinimg.com/236x/33/62/47/33624764ea12c26c2076d3954cf0ac7f.jpg"
                likes={10}
                isLikeByYou={true}
                comments={[{ text: 'asd', nickName: 'zxcdw'}]}
            />
            </Layout>
    );
};

export default MainPage;