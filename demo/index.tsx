import React, { useState } from '../src/teact/teact';
import TeactDOM from '../src/teact/teact-dom';

TeactDOM.render(
  <App />,
  document.getElementById('root')!,
);

function App() {
  return (
    <div>
      <h2>Hello Teact!</h2>

      <Input label="First input" />
      <Input label="Second input" />
    </div>
  );
}


function Input({ label }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
