import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import toast from "../utils/toast";
import AuthLayout from "../components/AuthLayout";
import { auth } from "../firebaseConfig";

export default function Login() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, form.email.trim(), form.password);

      toast("Login successful!", "success");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast("Email or password is incorrect.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      mode="login"
      title="Welcome back."
      subtitle="Good to see you again. Enter your details to sign in."
    >
      <form className="auth-form" onSubmit={submit}>
        <label>Email address</label>

        <div className="field-wrap">
          <Mail size={17} />

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={update}
            required
          />
        </div>

        <div className="label-row">
          <label>Password</label>

          <Link to="/forgotpassword">Forgot password?</Link>
        </div>

        <div className="field-wrap">
          <LockKeyhole size={17} />

          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={update}
            required
          />

          <button
            type="button"
            className="field-icon-button"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>

        <button className="button auth-submit" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
          <span>→</span>
        </button>
      </form>

      <p className="auth-switch">
        New around here? <Link to="/register">Create an account</Link>
      </p>
    </AuthLayout>
  );
}
