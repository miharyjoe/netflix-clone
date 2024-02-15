import { NavBar } from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="m-5">
      <NavBar />
      <h1>Hello authenticated user</h1>
    </div>
  );
};

export default HomePage;
