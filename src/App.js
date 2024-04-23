import "./App.css";
import Home from "./component/Home";
import Welcome from "./component/Welcome";
import Patient from "./component/Patient";
import PatientForm from "./component/PatientForm";
import SelectForm from "./component/SelectForm";
import Sample from "./component/Sample";
import Process from "./component/Process";
import Report from "./component/Report";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home />
      <Welcome /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patientform" element={<PatientForm />} />
          <Route path="/selectform" element={<SelectForm />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/process" element={<Process />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
