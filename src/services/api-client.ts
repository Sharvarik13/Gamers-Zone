import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "abd4014282014804a2a54bb7473f3ba7",
  },
});
