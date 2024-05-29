import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookItem = ({ book }) => {
    return (
        <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={book.image} alt={book.title} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">by {book.author}</Card.Subtitle>
                <Card.Text>{book.description}</Card.Text>
                <Card.Text><strong>Cost:</strong> {book.cost}</Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
    );
};

export default BookItem;
