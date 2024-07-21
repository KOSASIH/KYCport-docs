import React from 'react';
import wasm from '../modules/myModule.wasm';

const WebAssembly = () => {
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    const instance = wasm();
    const result = instance.exports.add(2, 3);
    setResult(result);
  };

  return (
    <div>
      <h1>WebAssembly Module</h1>
      <button onClick={handleAdd}>Add 2 and 3</button>
      <p>The result is: {result}</p>
    </div>
  );
};

export default WebAssembly;
