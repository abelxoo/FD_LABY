import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Strona nie została znaleziona</h1>
      <p>Strona nie istnieje</p>
      <Link to="/" className="btn btn-primary">
        wróć na stronę główną
      </Link>
    </div>
  );
};

export default NotFound;