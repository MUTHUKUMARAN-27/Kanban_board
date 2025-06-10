import { NavLink } from 'react-router-dom';

const linkStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  textDecoration: 'none',
  marginRight: '1rem',
};

function Navbar() {
  return (
    <nav
      style={{
        padding: '1rem 2rem',
        borderRadius: '40px',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        backgroundColor: '#333',
      }}
    >
      <h2 style={{ color: '#fff', margin: 0 }}>
        🚀 My App
      </h2>

      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...linkStyle,
            color: isActive ? '#fff' : '#ddd',
            backgroundColor: isActive ? '#4e4ec8' : 'transparent',
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...linkStyle,
            color: isActive ? '#fff' : '#ddd',
            backgroundColor: isActive ? '#4e4ec8' : 'transparent',
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            ...linkStyle,
            color: isActive ? '#fff' : '#ddd',
            backgroundColor: isActive ? '#4e4ec8' : 'transparent',
          })}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
