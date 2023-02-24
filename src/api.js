import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: 'Client-ID Qn_t5fboTPqPtbtmTLu2U6LYHt2CEBk6zIHWuknykaw'
    },
    params: {
      query: term
    }
  });
  console.log(response.data.results);
  return response;
};

export default searchImages;