function Navbar() {
  return (
    <div className="navbarCtn">
      <a className="navbarLink" href="/all">
        <p className="navbarText">All cocktails</p>
      </a>
      <a className="navbarLink" href="/generator">
        <p className="navbarText">Random cocktail</p>
      </a>
      <a className="navbarLink" href="/add">
        <p className="navbarText">Add a cocktail</p>
      </a>
    </div>
  );
}

export default Navbar;
