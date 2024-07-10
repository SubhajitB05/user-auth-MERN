import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassWord: "",
  });

  const handleUserRegistration = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassWord } = userData;
    try {
      const {data}  = await axios.post("/register", {
        name,
        email,
        password,
        confirmPassWord
      });
      // console.log(data);
      if (data.error) {
        toast.error(data.error);
      } else {
        setUserData({});
        toast.success("Registration Successful");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form onSubmit={handleUserRegistration} className="form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          name="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          required={true}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required={true}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required={true}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          placeholder="********"
          onChange={(e) =>
            setUserData({ ...userData, confirmPassWord: e.target.value })
          }
          required={true}
          disabled={userData.password === ""}
        />
        <div>
          {userData.confirmPassWord === "" ? null : userData.password ===
            userData.confirmPassWord ? (
            <span style={{ color: "green" }}>Password matched</span>
          ) : (
            <span style={{ color: "red" }}>Password not matched</span>
          )}
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>

      <p>
        Allready have an account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default Register;
