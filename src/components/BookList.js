import React from 'react';
import BookItem from './BookItem';
import { Container, Row, Col } from 'react-bootstrap';

// Importing images
import book1 from './images/book1.jpeg';
import book2 from './images/book2.jpeg';
import book3 from './images/book3.jpeg';

const books = [
    {
        id: 1,
        title: 'Book One',
        author: 'Author One',
        description: 'Description of Book One',
        image: book1, // Using the imported image variable
        cost: '$19.99'
    },
    {
        id: 2,
        title: 'Book Two',
        author: 'Author Two',
        description: 'Description of Book Two',
        image: book2,
        cost: '$29.99'
    },
    {
        id: 3,
        title: 'Book Three',
        author: 'Author Three',
        description: 'Description of Book Three',
        image: book3,
        cost: '$39.99'
    }
];

const BookList = () => {
    return (
        <Container className="mt-4">
            <Row>
                {books.map(book => (
                    <Col key={book.id} sm={12} md={6} lg={4}>
                        <BookItem book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BookList;
