// import React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-6a4a8.firebaseio.com/"
})

export default instance