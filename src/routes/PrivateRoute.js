import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Note logged in so redirect to login page
  if (!Boolean(localStorage.getItem('currentUser'))) {
    return <Navigate to="/signin" replace={true} />;
  }

  // If the account is not verified
  if (!currentUser.is_verified) {
    return <Navigate to="/verify" replace={true} />;
  }

  // Authorised role will return the children route
  return children;
};

export default PrivateRoute;
