import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-8 py-20 flex justify-center">
      <div className="p-8 text-center flex flex-col items-center space-y-4 border border-grey rounded-md">
        <h1 className="text-xl font-extrabold">404 Page Not Found</h1>
        <p>The page you're looking for does not exist.</p>
        <Link to="/" className="text-white bg-red-300 rounded px-6 py-2 text-sm text-white-A700">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
