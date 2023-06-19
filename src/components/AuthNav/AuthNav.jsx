import { Link } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </div>
  );
};
