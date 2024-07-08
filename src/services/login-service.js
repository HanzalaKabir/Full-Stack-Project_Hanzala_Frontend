import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const {
      data: { accessToken, username },
    } = await axios.post(
      "https://full-stack-project-hanzala-backend.onrender.com/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    console.log("Login Succesful");
    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
  }
};
