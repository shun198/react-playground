## React Hooks とは

関数コンポーネント内で状態管理やライフサイクルの処理などを行うための機能

## useState

関数コンポーネント内で状態を管理するために使用<br>
状態を定義し、その状態の現在の値と、その値を更新するための関数を提供<br>
状態の変更は非同期で行われ、コンポーネントの再レンダリングがトリガーされる<br>

### useState の基礎

```javascript
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 0);
  }

  return <button onClick={handleClick}>You pressed me {count} times</button>;
}
```

### オブジェクトの useState

...（スプレッド演算子）を使用すること

- オブジェクトの一部のプロパティだけを更新できるようになる
  - setProducts で product を更新する際に、新しい name または price だけ変更される
- 複数の状態を 1 つの setProducts で更新
  - ...product は product オブジェクトのプロパティを展開しており、name または price を変更するたびに、他のプロパティは元のまま保持
- スプレッド演算子を使用すると、既存のオブジェクトに新しいプロパティを追加できる
  - 例えば、...product に description というプロパティを追加する場合は、{ ...product, description: 'Some description' }のように書くことができる

```javascript
import React, { useState } from 'react';

const Basic1 = () => {
  const [product, setProducts] = useState({ name: '', price: '' });

  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={(event) =>
            setProducts({ ...product, name: event.target.value })
          }
        />
        <input
          type="text"
          value={product.price}
          onChange={(event) =>
            setProducts({ ...product, price: event.target.value })
          }
        />
      </form>
      <h1>Product name is {product.name}</h1>
      <h1>Product price is {product.price}</h1>
    </>
  );
};

export default Basic1;
```

### 配列

```javascript
import React, { useState } from 'react';

const Basic2 = () => {
  const [products, setProducts] = useState([]);
  const newProducts = () => {
    setProducts([
      ...products,
      {
        id: products.length,
        name: 'Hello React',
      },
    ]);
  };
  return (
    <>
      <div>
        <button onClick={newProducts}>Add New Product</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} id: {product.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Basic2;
```

## useEffect

関数コンポーネント内で副作用を実行するために使用される<br>
副作用とは、データの取得、DOM の変更、購読/解除などの非同期操作を含む<br>

- コンポーネントがマウントされた後
- 更新された後
- アンマウントされる前

など、特定のタイミングで実行されるコールバック関数を指定する

```javascript

```

## useContext

React のコンテキスト（Context）を使用するために使用されます<br>
コンテキストを作成し、コンポーネントツリー内での値の受け渡しを容易にします<br>
`useContext`を使用してコンテキストの値にアクセスすることができます。

## useReducer

## useMemo

計算時間が長い関数の再計算を防ぐ

## useCallback
