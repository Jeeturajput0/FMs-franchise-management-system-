import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

export default function LandingPage() {
  return (
    <main className="landing">
      <nav className="landing-nav">
        <Link to="/" className="brand">
          <span className="brand-mark">A</span>
          <span>
            AI<span>Scholars</span>
          </span>
        </Link>
        <Link className="login-button" to="/login">
          Login <Icon name="arrow" size={17} />
        </Link>
      </nav>
      <section className="landing-hero">
        <div className="hero-copy">
          <span className="eyebrow">FRANCHISE MANAGEMENT, SIMPLIFIED</span>
          <h1>
            Smarter learning.
            <br />
            <em>Stronger</em> futures.
          </h1>
          <p>
            A single intelligent workspace for managing franchises, courses,
            students, fees and every milestone in between.
          </p>
          <Link className="hero-button" to="/login">
            Access your workspace <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-card v-card-one">
            <span className="tiny-icon">
              <Icon name="users" size={18} />
            </span>
            <b>12,480</b>
            <small>Active learners</small>
          </div>
          <div className="visual-card v-card-two">
            <span className="success-dot">✓</span>
            <div>
              <b>Course completed</b>
              <small>Advanced AI Concepts</small>
            </div>
          </div>
          <div className="visual-center">
            <span>AI</span>
            <strong>
              LEARN
              <br />
              WITHOUT
              <br />
              LIMITS
            </strong>
          </div>
        </div>
      </section>
      <Link
        className="dashboard-fab"
        to="/admin/dashboard"
        title="Open Admin Dashboard"
      >
        <Icon name="grid" size={22} />
        <span>Admin dashboard</span>
        <Icon name="arrow" size={17} />
      </Link>
    </main>
  );
}
