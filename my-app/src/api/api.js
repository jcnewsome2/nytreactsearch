import axios from "axios";

const api = {
  // Query NYT API
  searchNYT: function (topic, startYear, endYear) {
    // const authKey = "8e26e01fb7de4f1eb35d15607e0dbf68";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    
    return axios.get(queryURL, {
      params: {
        'api-key': "8e26e01fb7de4f1eb35d15607e0dbf68",
        'q': topic,
        'begin_date': startYear,
        'end_date': endYear,
        }
    })
  },

  // Retrieves saved articles from the db
  getArticle: function () {
    return axios.get("http://localhost:8080/api/fetch");
  },
  // Saves a new article to the db
  saveArticle: function (articleObj) {
    return axios.post("http://localhost:8080/api/saved", articleObj);
  },
  // Deletes an article from the db
  deleteArticle: function (id) {
    return axios.delete(`http://localhost:8080/api/saved/${id}`);
  }
}

export default api;