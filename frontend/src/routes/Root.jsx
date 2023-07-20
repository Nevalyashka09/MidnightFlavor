import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../assets/images/background.png";

export default function Root() {
  return (
    <>
      <img className="backgroundImg" src={Background} alt="jungles" />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
