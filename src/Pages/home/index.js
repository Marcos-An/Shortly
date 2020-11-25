import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/contato">
        <h1>Home</h1>
      </Link>
    </div>
  );
}
