import Layout from "../Components/Layout/index";
import DetailedCard from "../Components/DetailedCard";

const MainPage = () => {
    return (
        <Layout nickName="Ilya" id={1}>
            <>
                <div>main page</div>
                <DetailedCard
                    userName="Ilya"
                    imgUrl="https://wallbox.ru/resize/320x240/wallpapers/main/201333/anime-kartinka-yepizod-ccbe297.jpg"
                    userId={1}
                    likes={10}
                    isLike={true}
                    comments={[{ text: 'asd', nickName: 'User 1' }, { text: 'asd', nickName: 'User 1' }, { text: 'asd', nickName: 'User 1' }, { text: 'asd', nickName: 'User 1' }, { text: 'asd', nickName: 'User 1' }, { text: 'asd', nickName: 'User 1' }]}
                />
            </>
        </Layout>

    );
};

export default MainPage;