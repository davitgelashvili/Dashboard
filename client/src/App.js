// import './App.scss';
import { Route, Routes } from "react-router";
import Adminpanel from './adminpanel/Adminpanel';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path={'adminpanel/*'} element={<Adminpanel />} />
      </Routes>
      {/* <CustomEditor /> */}
    </div>
  );
}

export default App;
