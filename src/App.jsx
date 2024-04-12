import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostDetailPage from './components/PostDetailPage';
import AddPostPage from './components/AddPostPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:id" component={PostDetailPage} />
        <Route path="/add-post" component={AddPostPage} />
      </Routes>
    </Router>
  );
}

export default App;
