import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Card from "./Components/Card";
import CardOne from "./Components/CardOne";
import Navbar from "./Components/Navbar";
import Usestate from "./Components/Usestate";
import Imagecard from "./Components/Imagecard";
import Page from "./Components/Page";
import Prop from "./Components/Prop";
import ExcericePropState from "./Components/ExcericePropState";
import Formhandling from "./Components/Formhandling";

import Form from "./FormExercise/Form.jsx";
import Cards from "./FormExercise/Cards.jsx";
import Newcard from "./FormExercise/Newcard.jsx";
import Detailofcard from "./FormExercise/Detailofcard.jsx";

import Home from "./Apistut/Home";
import Show from "./Apistut/Show";
import Services from "./Apistut/Services";
import UserDetail from "./Apistut/UserDetail.jsx";
import { MdPodcasts } from "react-icons/md";
import Usershow from "./Apistut/Usershow.jsx";

function App() {
  const data = [
    {
      id: 1,
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
    },
    {
      id: 2,
      email: "morrison@gmail.com",
      username: "mor_2314",
      password: "83r5^_",
    },
  ];

  return (
    <div>
      <nav className="w-full h-16 bg-yellow-400 flex justify-around items-center mb-6">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
        <Link to="/usershow">User</Link>
        {/* <Link to="/userdetail">UserDetail</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/services" element={<Services />}>
          Services
        </Route>
        <Route path="/show" element={<Show />}>
          Show
        </Route>
        <Route path="/usershow" element={<Usershow />}>
          User
        </Route>
        {/* <Route path="/userdetail" element={<UserDetail />}>
          UserDetail
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;

// <div className="w-full h-screen flex items-center justify-center gap-4 bg-zinc-200">
//   <Newcard />
// </div>
