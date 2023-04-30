# React を使用するために必要な用語

## JSX

JavaScript(ECMAScript)の XML ライクな拡張構文

HTML に似た構文を使用して、JavaScript のコード内で UI を直感的かつ簡単に記述できます

以下の例では`h1`タグ内のテキストが JavaScript の関数として render 関数に返されています

```javascript
export default function App() {
  return (
    <div>
      <h1>Welcome to React world!</h1>
    </div>
  );
}
```

## Component

UI の部品を表現するための JavaScript の関数またはクラスです

各 Component は、props という引数を受け取り、それをもとに UI を作成します

以下が props を使わない Welcome の Component の例です

```javascript
function Welcome() {
  return <h1>Welcome!</h1>;
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
```

## State

コンポーネントの状態を表現するためのオブジェクトです。ステートを変更することで、コンポーネントの UI が再レンダリングされます。

## Props

コンポーネント間でデータを受け渡すための機能です

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(<Greeting name="John" />, document.getElementById('root'));
```

## Composition

## ライフサイクルメソッド

React の Component は、

- マウント
- アップデート
- アンマウント

の 3 つのフェーズがあります。それぞれのフェーズで、React は予め定義されたライフサイクルメソッドを呼び出します。コンポーネントの初期化、描画、更新、破棄など、重要な処理を行うために使用されます。

これらの用語は、React を使用する上で非常に重要な概念であり、理解しておく必要があります。また、React は動的で柔軟なライブラリであるため、これら以外にも多くの概念や用語があります。
