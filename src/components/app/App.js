import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../actions";

import AppFooter from "../AppFooter/AppFooter";
import AppNavBar from "../AppNavBar/AppNavBar";
import AppRoutes from "../Routes/Routes";
import AppHeader from "../AppHeader/AppHeader";
import AppBanner from "../AppBanner/AppBanner";
import AppMarquee from "../AppMarquee/AppMarquee";
import Spinner from "../shared/spinner/Spinner";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { categoriesLoadingStatus } = useSelector(({ categories }) => categories);

  if (categoriesLoadingStatus !== "idle") {
    return <Spinner />;
  }

  return (
    <div className="App">
      <AppBanner />
      <AppHeader />
      <AppMarquee />
      <div className="container">
        <AppNavBar />
        <AppRoutes />
      </div>
      <AppFooter />
    </div>
  );
};

export default App;
