import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Check the current URL when the component mounts and hide navbar when on the "/" page
    const currentPath = window.location.pathname;
    setShowNavbar(currentPath !== "/");
  }, []);

  return showNavbar ? (
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
  ) : null;
}

export default Navbar;
