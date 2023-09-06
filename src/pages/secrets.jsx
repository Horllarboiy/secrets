import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../config/firebase-config";
import { getDocs, collection } from "firebase/firestore";

const Secrets = () => {
  const [post, setPost] = useState([]);
  const handleLogOut = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/secrets");
    }
    if (!authToken) {
      navigate("/login");
    }

    const fetchPost = async () => {
      await getDocs(collection(db, "post")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPost(newData);
        console.log(post, newData);
      });
    };
    fetchPost();
  }, []);
  return (
    <div className="jumbotron text-center secrets">
      <div className="container">
        <i className=""></i>
        <h1 className="display-3">You've Discovered Secrets!</h1>
        <div className="card secret-text display-5">
          {post.map((item, i) => (
            <div className="card-body" key={i}>
             <p className="card-title"> {item.post}</p>
            </div>
          ))}
        </div>
       
        <button
          className="btn btn-light btn-lg mt-5"
          onClick={handleLogOut}
        >
          Log Out
        </button>
        <Link
          className="btn btn-dark btn-lg mx-4 mt-5"
          to="/submit"
          role="button"
        >
          Submit a Secret
        </Link>
      </div>
    </div>
  );
};

export default Secrets;
