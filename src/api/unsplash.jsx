import axios from "axios";

export default axios.create({
  baseUrl: `https://api.unsplash.com/search/photos/`,
  headers: {
    Authorization: `Client-ID e68dc46a66ff808a98c53acda17ab1f3f7d49b2e07551aee96d7ac7a1c6d754b`
  }
});
