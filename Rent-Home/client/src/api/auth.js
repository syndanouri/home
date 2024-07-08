import axios from "axios";

// api mte3 register

export const signup = async (data) => {
  // configuration de le requete
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${process.env.REACT_APP_URL}/api/register`,
    data,
    config
  );
  return response;
};

// api mte3 login

export const signin = async (data) => {
  // configuration de le requete
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${process.env.REACT_APP_URL}/api/login`,
    data,
    config
  );
  return response;
};
//api annonce

export const addannonce = async (data) => {
  // configuration de le requete
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${process.env.REACT_APP_URL}/api/annonce`,
    data,
    config
  );
  return response;
};
