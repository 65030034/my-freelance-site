
function Header() {
  return (
    <header className="header-container">
      <img src={`${process.env.PUBLIC_URL}/picture/profile.jpg`} alt="Profile" />
      <div className="text-content">
        <h1>Jirayut Padpol</h1>
        <p>Full-Stack Developer</p>
      </div>
    </header>
  );
}

export default Header;
