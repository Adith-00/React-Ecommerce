import Sign_In from "./Components/Login Section/sign_InPage";
import Test from "./test";
import Router from "./router/router";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store} >
        <Router/>
    </Provider>
  
  );
}

export default App;
