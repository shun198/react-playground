import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card clasName={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* JSXではforの代わりにhtmlForを使う */}
        <label htmlFor="username">Username</label>
        <input id="username" placeholder="username" type="text"></input>
        <label htmlFor="username">Age(Years)</label>
        <input id="age" placeholder="number" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
