# コンポーネント

通常は src ファイル内に components フォルダを作成し、コンポーネントを格納する
コンポーネントを作成する際は Javascript の関数として書く

## コンポーネント作成例

- コンポーネントの作成
- export
- App.js へ import

の順で行う

### src/components/ExpenseItem.js

```javascript
function ExpenseItem() {
  return <h2>Expense Item!</h2>;
}

// コンポーネントを他の箇所で使用するにはexportする必要がある
export default ExpenseItem;
```

### src/App.js

```javascript
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

//JSX(Javascript XMLコード)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ExpenseItem></ExpenseItem>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

## 複雑な構成のコンポーネント

div タグ内に div タグを作成

```javascript
function ExpenseItem() {
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

## コンポーネント内に CSS を適用させるには

該当する CSS を import する
CSS を使用するには `className` で指定する必要がある

```javascript
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

## コンポーネントの中身を動的に変更させるには？

`{}`内に関数内で定義した変数を入れると動的に変えることができる

```javascript
import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

## Props 経由でデータを渡すとき

通常は Component の引数に props を定義します

### src/App.js

```javascript
import './App.css';
import ExpenseItem from './components/ExpenseItem';

//JSX(Javascript XMLコード)
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's Get Started
          <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date}
          ></ExpenseItem>
        </p>
      </header>
    </div>
  );
}

export default App;
```

### src/components/ExpenseItem.js

```javascript
import './ExpenseItem.css';

// propsの引数を定義
// propsの後ろにApp.js内で定義した変数を記載する
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

## ボタンのイベントを追加するとき

onClick を使用

```javascript
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        onClick={() => {
          console.log('Clicked!');
        }}
      >
        Change Title
      </button>
    </Card>
  );
}

export default ExpenseItem;
```

## リンクを使ったページ遷移

```javascript
import { Link } from 'react-router-dom/cjs/react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
```

## ナビゲーションバー

```javascript
import { Link } from 'react-router-dom/cjs/react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
```

## フォームの作成

```javascript
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    // event.preventDefaultメソッドは、submitイベントの発生元であるフォームが持つデフォルトの動作をキャンセルするメソッド
    // フォームが持つデフォルトの動作とは、フォームの内容を指定したURLへ送信するという動作
    // https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
    event.preventDefault();
    const enterdTitle = titleInputRef.current.value;
    const enterdImage = imageInputRef.current.value;
    const enterdAddress = addressInputRef.current.value;
    const enterdDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enterdTitle,
      image: enterdImage,
      address: enterdAddress,
      description: enterdDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
```

## fetchAPI

```

```

## パッケージのインストール

```
npm install <パッケージ名>
```

でインストールできます

例

```
npm install react-hook-form
npm install next/router
```
