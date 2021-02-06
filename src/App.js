import AppRouter from "./router/Router";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
    // TODO: delete this line
  );
}

export default App;
