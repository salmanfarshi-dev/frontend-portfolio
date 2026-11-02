import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import toast from "../utils/toast";
import AuthLayout from "../components/AuthLayout";
import { auth } from "../firebaseConfig";

export default function Register() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      return toast("Password must be at least 6 characters.", "error");
    }

    if (form.password !== form.confirm) {
      return toast("Passwords do not match.", "error");
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email.trim(),
        form.password
      );

      await updateProfile(userCredential.user, {
        displayName: form.name.trim(),
      });

      toast("Account created successfully!", "success");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      mode="register"
      title="Create your account."
      subtitle="Join the community and let's make great things happen."
    >
      <form className="auth-form" onSubmit={submit}>
        <label>Full name</label>

        <div className="field-wrap">
          <UserRound size={17} />

          <input
            name="name"
            placeholder="Alex Morgan"
            value={form.name}
            onChange={update}
            required
            minLength={2}
          />
        </div>

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

        <label>Password</label>

        <div className="field-wrap">
          <LockKeyhole size={17} />

          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="At least 6 characters"
            value={form.password}
            onChange={update}
            minLength={6}
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

        <label>Confirm password</label>

        <div className="field-wrap">
          <LockKeyhole size={17} />

          <input
            type={show ? "text" : "password"}
            name="confirm"
            placeholder="Re-enter your password"
            value={form.confirm}
            onChange={update}
            required
          />
        </div>

        <button
          className="button auth-submit"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create account"}
          <span>→</span>
        </button>
      </form>

      <p className="auth-switch">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </AuthLayout>
  );
}