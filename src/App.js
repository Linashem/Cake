import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import Header from "./Components/Common/Header/Header";
import { Pagewrapper } from "./Components/Common/PageWrapper";
// import { Goods } from "./Components/Goods";
import { Main } from "./Containers/Main";
import { routes } from "./Helper/Conatants/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.shop} element={<Pagewrapper />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

