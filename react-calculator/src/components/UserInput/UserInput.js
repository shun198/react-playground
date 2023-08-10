const UserInput = () => {
  const submitHandler = (event) => {
    // ページのリロードを防ぎ、その後の処理を継続させる
    event.preventDefault();
    console.log('SUBMIT');
  };

  const resetHandler = () => {
    console.log('RESET');
  };

  const inputChangeHandler = (input, value) => {
    console.log(input);
    console.log(value);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          {/* event.target.value内に入力された値が入る */}
          <input
            onChange={(event) =>
              inputChangeHandler('current-savings', event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler('expected-return', event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('duration', event.target.value)
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
