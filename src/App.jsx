import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import MainPage from "./MainPage";
import UserPage from "./UserPage";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>

    </Provider>
    
  );
};
export default App;