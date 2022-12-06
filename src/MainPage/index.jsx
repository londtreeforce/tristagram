import Layout from "../Components/Layout/index";
import DetailedCard from "../Components/DetailedCard";

const MainPage = () => {
    return (
        <Layout nickName="Ilya" id={1}>
            <>
            <div>main page</div>
            <DetailedCard />
            </>
        </Layout>
        
    );
};

export default MainPage;