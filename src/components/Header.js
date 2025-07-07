function Header() {
  return (
    <header className="header-container">
      <img
        src={`${process.env.PUBLIC_URL}/picture/profile_picture.jpg`}
        alt="Profile"
        className="profile-img"
      />
      <div className="text-content">
        <h1>Jirayut Padpol</h1>
        <p>Full-Stack Developer</p>
        <a
          href={`${process.env.PUBLIC_URL}/PDF/Jirayut_Resume.pdf`}
          download
          className="download-btn"
        >
          Download Resume (PDF)
        </a>
      </div>
    </header>
  );
}

export default Header;
