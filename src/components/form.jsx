import React from "react";
import {Link} from "react-router-dom"
import {FaGoogle, FaHome} from "react-icons/fa"

const Form = ({ title, setEmail, setPassword, handleAction, handleGoogleAuth }) => {
  return (
    <div className="container mt-2">
      <h1>
        <Link to="/"><FaHome /></Link>
      </h1>
      <h1 className="mt-5">{title}</h1>
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="username"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={handleAction}
                type="submit"
                className="btn btn-dark mt-3"
              >
                {title}
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-8 mt-sm-5">
        <div className="card social-block">
          <div className="card-body">
            <button onClick={handleGoogleAuth} className="btn btn-block btn-outline-danger" href="/auth/google" >
              <i className="text-white">
                <FaGoogle />
              </i>
            <span className="ml-5">  {title} with Google</span>
            </button>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Form;
