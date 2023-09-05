import React from "react";
import {FaKey} from "react-icons/fa"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="jumbotron center text-center mt-5">
      <div className="container">
        <div style={{display:"flex", justifyContent:"center"}} className="home-icon mt-5">
            <FaKey />
        </div>
        <h1 className="display-3 mt-3">Secrets</h1>
        <p className="lead">Don't keep your secrets, share them anonymously!</p>
        <hr />
        <Link className="btn btn-light btn-lg pr-4" to="/register" role="button">
          Register
        </Link>
        <Link className="btn btn-dark btn-lg mx-4" to="/login" role="button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
