import { Routes, Route, useNavigate } from "react-router-dom";
import Form from "./components/form";
import Home from "./pages/home";
import Secrets from "./pages/secrets";
import Submit from "./pages/submit";
import { auth, provider } from "../src/config/firebase-config";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAction = (id) => {
    if (id === 1) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/secrets");
          sessionStorage.setItem(
            "Auth Token",
            userCredential._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            alert("please check your password");
          }
          if (error.code === "auth/user-not-found") {
            alert("please check your Email");
          }
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/secrets");
          sessionStorage.setItem(
            "Auth Token",
            userCredential._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            alert("please check your password");
          }
          if (error.code === "auth/email-already-in-use") {
            alert("Email Already in use");
          }
        });
    }
  };

  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider).then((result) => {
      navigate("/secrets");
      sessionStorage.setItem("Auth Token", result._tokenResponse.refreshToken);
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <Form
            title="Login"
            setEmail={setEmail}
            setPassword={setPassword}
            handleAction={() => handleAction(1)}
            handleGoogleAuth={() => handleGoogleAuth()}
          />
        }
      />
      <Route
        path="/register"
        element={
          <Form
            title="Register"
            setEmail={setEmail}
            setPassword={setPassword}
            handleAction={() => handleAction(2)}
            handleGoogleAuth={() => handleGoogleAuth()}
          />
        }
      />
      <Route path="/secrets" element={<Secrets />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  );
}

export default App;
