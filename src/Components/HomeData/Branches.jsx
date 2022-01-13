import { Box } from '@mui/system';
import React, { useState } from 'react';
import './Serch.css';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const BOOKS = [
  { id: 1, name: 'Engineering Electromagnetics Solution Manual Sixth Edition', dept:'EE', author: 'John A Buck' },
  { id: 2, name: 'Electric Machines And Drives A First Course',dept:'EE', author:'Ned Mohan' },
  { id: 3, name: 'Electric Power Generation The Changing Dimensions',dept:'EE', author: 'B M Weedy,B J Cory' },
  { id: 4, name: 'Engineering Mechanics Dynamics Seventh Edition',dept:'MECH',author: 'J. L. Meriam, L. G. Kraige' },
  { id: 5, name: 'Welding Metallurgy Second Edition', dept:'MECH' , author: ' Randerlei Nascimento. Fellipe Viana. Gudson Melo'},
  { id: 6, name: 'Vibrations Second Edition',dept:'MECH' , author: ' Emmanuel Dorméus'},
  { id: 7, name: 'Soft Computing Techniques and Its Applications in Electrical Engineering',dept:'CS', author: 'Devendra K. Chaturvedi' },
  { id: 8, name: 'Clever Algorithms Nature-Inspired Programming Recipes',dept:'CS', author: 'Jason Brownlee' },
  { id: 9, name: 'Computer Organization',dept:'CS', author:'Dr. William Stallings '}
];

function Branches() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(BOOKS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = BOOKS.filter((book) => {
        return book.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(BOOKS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
         <Box>
      <div className="book-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((book) => (
            <li key={book.id} className="book">
              <span className="book-id">{book.id}</span>
              <span className="book-name">{book.name}</span>
              <span className="book-dept">{book.dept}</span>
              <span className="book-author">{book.author}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
      </Box>
    </div>
  );
}

export default Branches;
