import PropTypes from 'prop-types';

import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";


export const PrivateComponent = ({ component: Component }) => {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('/login');
    }
  }, [authenticated, navigate]);

  return authenticated ? <Component /> : null;
};

PrivateComponent.propTypes = {
  component: PropTypes.elementType.isRequired,
};