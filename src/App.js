import * as React from 'react';


function List(props) {
  return (
    <ul>
        {props.list.map(function(item){
          return (<Item item={item} />);
      })}
      </ul>
  );
}

const Item = (props) => {
  const {item} = props;
  return ( 
    <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
  );
}


function App() {
  const stories = [
  { title: 'react',
   url: 'http://reactjs.org/',
   author: 'Dan Abramov, Andrew Clark',
   num_comments: 3,
   points: 4,
   objectID: 0,
 },

 {
   title: 'Redux',
   url: 'http://redux.js.org/',
   author: 'John Resig',
   num_comments: 2,
   points: 5,
   objectID: 1,
 },
];

const handleSearch = (event) => {
  console.log(event.target.value);
 };

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />

      <hr />

      <List list = {stories} />
    </div>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
}

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}

export default App;