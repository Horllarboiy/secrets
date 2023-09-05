import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { db } from "../config/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";


const Submit = () => {
  let navigate = useNavigate();
  const [post, setPost] = useState("");

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/submit");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "post"), {
        post:post
      })
      toast.success("Posted successfully") 
      navigate("/secrets")
      

    } catch (e) {
      toast.error(e)
    }
  };
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <div className="home-icon">
          <FaKey />
        </div>
        <h1 className="display-3">Secrets</h1>
        <p className="secret-text">
          Don't keep your secrets, share them anonymously!
        </p>

        <form>
          <div className="form-group">
            <input
              autoComplete="off"
              type="text"
              className="form-control text-center"
              name="secret"
              placeholder="What's your secret?"
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <button
            onClick={handlePost}
            type="submit"
            className="btn btn-dark mt-4"
          >
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Submit;
