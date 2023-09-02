import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredEmployeeNumber, setenteredEmployeeNumber] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmployeeNumber, enteredAge);
    if (enteredEmployeeNumber.length !== 8) {
      setError({
        title: '社員番号が不正です',
        message: '社員番号は8桁にしてください',
      });
      return;
    }
    props.onAddUser(enteredEmployeeNumber, enteredAge);
    setenteredEmployeeNumber('');
    setEnteredAge('');
  };

  const employeeNumberChangeHandler = (event) => {
    setenteredEmployeeNumber(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* errorがobjectなら{}内をレンダリングする */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        {/* submitボタンを押すとaddUserHandlerが起動する */}
        <form onSubmit={addUserHandler}>
          {/* JSXではforの代わりにhtmlForを使う */}
          <label htmlFor="employeeNumber" className="text-red-500">
            社員番号
          </label>
          <input
            id="employeeNumber"
            placeholder="社員番号"
            type="text"
            value={enteredEmployeeNumber}
            onChange={employeeNumberChangeHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            placeholder="number"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
