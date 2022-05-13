import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Page not found`;
    const timeoutID = window.setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => window.clearTimeout(timeoutID);
  }, [history]);

  return (
    <div className="bg-white h-screen grid place-content-center">
      <div className="text-center">
        <h1 className="text-6xl">404</h1>
      </div>
    </div>
  );
};

export default NotFound;
