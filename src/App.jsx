import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import FetchCountries from "./assets/components/Countries";
import CountryDetails from "./assets/components/CountryDetails";
import UseLocalStorage from "./assets/components/LocalStorage";
import Layout from "./assets/components/Layout";
import { ThemeContext } from "./assets/components/Context";

function App() {
  const [theme, setTheme] = UseLocalStorage("theme", "light");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<FetchCountries />} />
          <Route
            path="country/:ccn3"
            element={<CountryDetails />}
          />
        </Route>
      </>
    )
  );
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <RouterProvider router={router} />;
    </ThemeContext.Provider>
  );
}

export default App;
