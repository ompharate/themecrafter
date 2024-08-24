import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import DefaultLayout from './layout/DefaultLayout';
import UploadThemeForm from './pages/Form/UploadThemeForm';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | ThemeCrafter " />
              <ECommerce />
            </>
          }
        />
  
      
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | ThemeCrafter " />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/upload"
          element={
            <>
              <PageTitle title="Theme Upload | ThemeCrafter " />
              <UploadThemeForm />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | ThemeCrafter " />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | ThemeCrafter " />
              <Settings />
            </>
          }
        />
       
      </Routes>
    </DefaultLayout>
  );
}

export default App;
