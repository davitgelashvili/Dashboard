// import './App.scss';
import { Route, Routes } from "react-router";
import Adminpanel from './adminpanel/Adminpanel';
import Page from "./page/Page";

function App() {

  return (
    <Routes>
      <Route path={'adminpanel/*'} element={<Adminpanel />} />
      <Route path={'/*'} element={<Page />} />
    </Routes>
  );
}

export default App;
