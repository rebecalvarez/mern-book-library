import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import BookCard from '../components/BookCard';
import bookshelfbanner from '../img/ebooks.jpg';
class Bookshelf extends Component {
  state = {books: []};

  // Method to Query the API/Database to GET all the books in the database.
  loadBookshelf = () => {
    API.getBookshelf()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // Method to DELETE a particular book from the database.
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBookshelf())
      .catch(err => console.log(err))
  };

  // Lifecycle Method - once the Bookshelf Component mounts it runs the 'loadBookshelf' method.
  componentDidMount() {
    this.loadBookshelf()
  }

    render() {
        return (
            <div className='container'>
                <Jumbotron
                    title='My Bookshelf'
                    lead='All of my books stored in one place'
                    instructions='View your book at Google, or remove it from your book on the bookshelf ...'
                    image={bookshelfbanner}
                />

                <BookCard
                    books={this.state.books}
                    buttonAction={this.deleteBook}
                    buttonType='btn btn-danger mt-2'
                    buttonText='Delete Book'
                />
            </div>
        )
    }

}

export default Bookshelf;


