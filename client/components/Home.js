import React from 'react';
import { useSelector } from 'react-redux';

const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  console.log()

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Home;
