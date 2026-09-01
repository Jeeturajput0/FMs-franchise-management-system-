import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../components/Icon";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <main className="landing">
      <nav className="landing-nav">
        <Link to="/" className="brand">
          <span className="brand-mark">A</span>
          <span>
            AI<span>Scholars</span>
          </span>
        </Link>
        <Link className="login-button" to="/">
          Back to home
        </Link>
      </nav>
      <div className="modal-backdrop login-page">
        <section className="login-modal">
          <span className="brand-mark centered">A</span>
          <h2>Welcome back</h2>
          <p>Sign in to your AI Scholars workspace.</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/admin/dashboard");
            }}
          >
            <label>
              Email address
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <div className="password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Icon name="eye" size={18} />
                </button>
              </div>
            </label>
            <div className="login-row">
              <label className="checkbox">
                <input type="checkbox" /> Remember me
              </label>
              <a>Forgot password?</a>
            </div>
            <button className="submit-login">
              Sign in <Icon name="arrow" size={17} />
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
