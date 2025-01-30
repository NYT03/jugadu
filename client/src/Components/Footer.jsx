const footerStyle = {
  backgroundColor: '#1a202c',
  color: 'white',
  padding: '2rem 0',
  textAlign: 'center',
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
}

const linkStyle = {
  color: '#60a5fa',
  textDecoration: 'none',
  margin: '0 0.5rem',
  transition: 'color 0.3s',
}

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; 2025 HackathonX. All rights reserved.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Code of Conduct</a>
        </div>
      </div>
    </footer>
  )
}
