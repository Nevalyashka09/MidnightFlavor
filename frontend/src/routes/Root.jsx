import { Outlet } from "react-router-dom";
import Background from "../assets/images/background.png";

export default function Root() {
  return (
    <>
      <img className="backgroundImg" src={Background} alt="jungles" />
      <main>
        <Outlet />
      </main>
    </>
  );
}
