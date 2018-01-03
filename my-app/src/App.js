import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppSearch from './Components/AppSearch';
import AppResults from './Components/AppResults';
import SavedArticles from './Components/SavedArticles';
import scrape from '../src/scripts/scrape';
import api from '../src/api/api';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  //current state of variables
  state = {
      topic: "",
      startYear: "",
      endYear: "",
      articles:[],
      saved:[],
  }

  //when comp mounts, get all saved articles and update this.state.saved
  componentDidMount () {
    this.getSavedArticles();
  }

  //method to get all saved articles from db
  getSavedArticles = () => {
    api.getArticle()
    .then((res) => {
      this.setState({saved:res.data});
    });
  }


  //helper methd for rendering 1 search resilts div for each article
  renderArticles = () => {
    return this.state.articles.map(article => (
      <AppResults 
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }

//helper method for rendering one div for each saved article
  renderSaved = () => {
    return this.state.saved.map(save => (
      <SavedArticles
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }

  //keep trk of what user inputs in topic, so it can be grabbed later
  handleTopicChange = (event) => {
    this.setState({topic: event.target.value});
  }

  //keep trk of user input for start year
  handleStartYearChange = (event) => {
    this.setState({startYear: event.target.value});
  }

  handleEndYearChange = (event) => {
    this.setState({endYear: event.target.value});
  }

  //method to handle submit search
  handleClick (event) {
    event.preventDefault();
    api.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
    .then((res) => {
      console.log(this.state.topic);
      console.log(this.state.startYear);
      console.log(this.state.endYear);
    })
    console.log("The button clicked");
  }
  

  // handleDeleteButton = () => {
  //   api.deleteArticle(_id)
  //     .then(this.getSavedArticles());
  // }

  handleSaveButton = (id) => {
    const findArticleById = this.state.articles.find((el) => el._id === id);
    console.log(findArticleById);
    const newSave = {title: findArticleById.headline.main, date: findArticleById.pub_date, url: findArticleById.web_url};
    api.saveArticle(newSave)
    .then(this.getSavedArticles());
  }

  render() {
    return (
      <div className="App">
      <AppHeader />
      <AppSearch handleChange={this.handleChange} selectArticles={this.handleClick}/>
      <AppResults />
      <SavedArticles />
      </div>
    );
  }
}

export default App;
