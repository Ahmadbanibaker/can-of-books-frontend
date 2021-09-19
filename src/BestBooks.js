import { get } from 'mongoose';
import React from 'react';
import axios from 'axios';
import {
  Card,
  Alert
} from 'react-bootstrap';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount = () => {
    axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/books`).then(res => {
      this.setState({
        books: res.data.books
      })
    })

  }
  render() {

    /* TODO: render user's books in a Carousel */
    

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
