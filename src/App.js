import { Provider } from "react-redux";
import Header from "./Components/Common/Header/Header";
import { Goods } from "./Components/Goods";
import { store } from "./store";

function App() {



  return (
    <Provider store={store}>
    <div className="App">
      <div className="wrapper">
        <Header />
        <Goods/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
