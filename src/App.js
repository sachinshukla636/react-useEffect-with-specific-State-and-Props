import React, { useEffect, useState } from 'react';
import './style.css';
import User from './User';

export default function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);
  // useEffect(() => {
  //   console.log('useEffect called');
  // }, [data]);
  // useEffect(() => {
  //   //alert('Count is ' + count);
  // }, [count]);
  return (
    <div>
      <h1>useEffect with specific State and Props</h1>
      {/* <h2>Count :: {count}</h2>
      <h2>Data :: {data}</h2> */}
      <User count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </div>
  );
}
