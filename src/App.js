import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompanyDaitles from "./pagesCompontes/CompanyDetails";
import CompnayBank from './pagesCompontes/CompanyBank';
import CompanyConteact from './pagesCompontes/CompanyConteact';
import NavberComponet from "./pagesCompontes/NavberComponet";
const App = () => {
  return (
    <>

      <BrowserRouter>
<NavberComponet/>
        <Routes>
          <Route path="/" element={<CompanyDaitles />} />
          <Route path="/CompanyDaitles" element={<CompanyDaitles />} />
          <Route path="/CompnayBank" element={<CompnayBank />} />
          <Route path="/CompanyConteact" element={<CompanyConteact />} />

        </Routes>

      </BrowserRouter>

    </>
  );
};

export default App;