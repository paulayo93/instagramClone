import { Provider } from "react-redux";
import store from "./src/redux-store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Container from "./src/screens/container.screen";

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container />
      </PersistGate>
    </Provider>
  );
}
