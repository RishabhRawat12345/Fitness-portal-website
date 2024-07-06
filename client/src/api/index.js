import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => {
  return API.post("/user/signup", data);
};

export const UserSignIn = async (data) => {
  return API.post("/user/signin", data);
};

export const getDashboardDetails = async (token) => {
  return API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getWorkouts = async (token, date) => {
  return API.get(`/user/workout/${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addWorkout = async (token, data) => {
  return API.post("/user/workout", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};


