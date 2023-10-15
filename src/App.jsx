import { Route, Routes } from "react-router-dom";
import { Pagewrapper } from "./Components/Common/PageWrapper";
import { Delivery } from "./Components/Delivery/Delivery";
import { GoodsInCart } from "./Components/GoodsInCart/GoodsInCart";
import { OneGoodContent } from "./Components/OneGoodContent/OneGoodContent";
import { Auth } from "./Containers/Auth";
import { Blog } from "./Containers/Blog";
import { Main } from "./Containers/Main";
import { NotFound } from "./Containers/NotFound";
import { OneGood } from "./Containers/OneGood";
import { Shop } from "./Containers/Shop";
import { routes } from "./Helper/Conatants/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Pagewrapper />}>
          <Route index element={<Main />} />
          <Route path={routes.cart} element={<GoodsInCart />} />
          <Route path={routes.shop} element={<Shop />} />
          <Route path={routes.good} element={<OneGood />}/>
          <Route path={routes.delivery} element={<Delivery/>} />
          <Route path={routes.auth} element={<Auth />} />
          <Route path={routes.blog} element={<Blog/>} />
          <Route path={routes.notFound} element={<NotFound/>} />

          

        </Route>
      </Routes>
    </div>
  );
}

export default App;
