import { Link } from "react-router-dom";

const headerStyle = {
  backgroundColor: "#1a202c",
  color: "white",
  padding: "1rem 0",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navStyle = {
  display: "flex",
  gap: "1rem",
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  transition: "color 0.3s",
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={{ ...linkStyle, fontSize: "1.5rem", fontWeight: "bold" }}>
          HackathonX
        </Link>
        <nav>
          <ul style={navStyle}>
            <li><Link to="/about" style={linkStyle}>About</Link></li>
            <li><Link to="/schedule" style={linkStyle}>Schedule</Link></li>
            <li><Link to="/sponsors" style={linkStyle}>Sponsors</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
