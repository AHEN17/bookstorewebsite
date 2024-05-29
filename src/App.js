import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main className="py-3">
                <BookList />
            </main>
            <Footer />
        </div>
    );
};

export default App;
