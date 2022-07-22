import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CreditClosure from "./components/creditClosure/CreditClosure";
import ClosureInfo from "./components/closureInfo/ClosureInfo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import QiwiTerminal from "./components/qiwiTerminal/QiwiTerminal";
import Kassa24 from "./components/kassa24/Kassa24";
import Bank from "./components/bank/Bank";
import Freepay from "./components/freepay/Freepay";
import PayPage from "./components/payPage/PayPage";

import axios from "axios";
import GettingCredit from "./components/gettingCredit/GettingCredit";
import Contacts from "./components/contacts/Contacts";
import Company from "./components/company/Company";
import Documents from "./components/documents/Documents";
import Faq from "./components/faq/Faq";
import PressRealeses from "./components/pressReleases/PressRealeses";
import Dashboard from "./components/dashboard/Dashboard";

const bankffin24 = [8, 9];
const qiwiPk = [11];
const kassaPk = [10];
const documentsPk = [4, 5, 10, 11, 43, 44, 45];

function App() {
  // const axios = require("axios").default;

  const [data, setData] = useState("");
  useEffect(() => {
    function getData() {
      axios
        .get("https://fastcash-back.trafficwave.kz/website/documents/")
        .then((response) => {
          setData(response.data);
        });
    }
    getData();
  }, []);

  const [state, setState] = React.useState([]);
  const [qiwiState, setQiwiState] = React.useState([]);
  const [kassaState, setKassaState] = React.useState([]);
  const [documents, setDocuments] = React.useState([]);

  React.useEffect(() => {
    if (data) {
      data.forEach((item) => {
        if (bankffin24.includes(item.pk)) {
          setState((prev) => [...prev, item]);
        }

        if (qiwiPk.includes(item.pk)) {
          setQiwiState((prev) => [...prev, item]);
        }

        if (kassaPk.includes(item.pk)) {
          setKassaState((prev) => [...prev, item]);
        }

        if (documentsPk.includes(item.pk)) {
          setDocuments((prev) => [...prev, item]);
        }
      });
    }
  }, [data]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/how_to_close" element={<ClosureInfo />}></Route>
        <Route
          path="/bankffin24"
          element={<CreditClosure pdfs={state} />}
        ></Route>
        <Route
          path="/qiwi_terminal"
          element={<QiwiTerminal pdfs={qiwiState} />}
        ></Route>
        <Route
          path="/kassa24_terminal"
          element={<Kassa24 pdfs={kassaState} />}
        ></Route>
        <Route path="/bank" element={<Bank />}></Route>
        <Route path="/freepay" element={<Freepay />}></Route>
        <Route path="/calculator" element={<PayPage />}></Route>
        <Route path="/how_to_get" element={<GettingCredit />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/about" element={<Company />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/documents"
          element={<Documents pdfs={documents} />}
        ></Route>
        <Route path="/press-releases" element={<PressRealeses />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
