import AppRouter from "./router/Router";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
    // TODO: this line will be deleted
  );
}

export default App;
