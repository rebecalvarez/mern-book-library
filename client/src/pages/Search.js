import React, { Component } from "react";
// import {withAlert} from 'react-alert';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";
import {} from 'dotenv/config'
import banner from '../img/library-banner.png'

// Function to format the book results as they are returned form the API. Allows for a single component
//'BookCard' that can be used in both pages.

const formatBookResults = googleApiResults => {
    const bookArray = [];

    googleApiResults.map(book => {

        const formattedBook = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors
            ? book.volumeInfo.authors
            : 'No Author Listed',
            description: book.volumeInfo.description
            ? book.volumeInfo.description
            : 'No Description Listed',
            googleBookId: book.id,
            thumbnail: book.volumeInfo.imageLinks.thumbnail
            ? book.volumeInfo.imageLinks.thumbnail
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/170px-No_image_available.svg.png',
            link: book.volumeInfo.canonicalVolumeLink,
            pageCount: book.volumeInfo.pageCount,
            subtitle: book.volumeInfo.subtitle,
            publishedDate: book.volumeInfo.publishedDate,

        };

        bookArray.push(formattedBook);
        return bookArray

    });
    return bookArray
};


class Search extends Component {
  state = {
    search: '',
    results: [],
    error: ""
   
  };

  //Method for saving a particular book to the database

  saveBook = event => {
      const chosenBook = this.state.results.find(book => book.googleBookId === event.target.id);

      const newSave = {
          title: chosenBook.title,
          authors: chosenBook.authors,
          description: chosenBook.description,
          googleBookId: chosenBook.googleBookId,
          thumbnail: chosenBook.thumbnail,
          link: chosenBook.link,
          pageCount:chosenBook.pageCount,
          subtitle: chosenBook.subtitle,
          publishedDate: chosenBook.publishedDate
      };

      API.saveBook(newSave)
      .then(res => {
          console.log(res.status, res.statusText);
          // this.props.alert.show('Book Saved!', {type: 'success'})
      })
      .catch(err => {
          console.log(err);
          // this.props.alert.show('Sorry, There was an issue with something back here ...', {
          //     type: 'error',
          //     timeout: 5000
          // })
      })
  };

  //Method Handling the change of the input field
  handleInputChange = event => {
      this.setState({search: event.target.value})
  }
// Method Handling the submission of the Seach form, makes a call to retrieve the results of the search
//from the Google Books API
handleFormSubmit = event => {
    event.preventDefault();
    API.getGoogleBooks(this.state.search)
    .then (res => {
        const formattedArray = formatBookResults(res.data.items);
        this.setState({results: formattedArray});
    })
    .catch(err => console.log(err))
};


  render() {
    return (
      <div>
            <Jumbotron 
            title="Search for your Favorite Books"
            lead="Using Google Books API and saving it to a MONGODB database"
            instructions = 'Search for a book, view it on Google Books, or add it to your Bookshelf...'
            image={banner}
            />
              
            
              <SearchForm
               handleInputChange={this.handleInputChange}
               handleFormSubmit={this.handleFormSubmit}
              />
              <BookCard
                books={this.state.results}
                buttonAction = {this.saveBook}
                buttonType = 'btn btn-warning mt-2'
                buttonText= 'Save Book'
              />
              </div>
            );
         
   
 
  }
}

// Exporting Component Utilizing the Alerts.
export default Search;




              