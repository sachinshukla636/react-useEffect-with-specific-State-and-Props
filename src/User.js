import React, { useEffect, useState } from 'react';

export default function User(props) {
  // useEffect(() => {
  //   console.log('useEffect called');
  // }, [data]);
  // useEffect(() => {
  //   alert('Count is ' + count);
  // }, [count]);
  useEffect(() => {
    // console.log('useEffect');
    alert('Count is ' + props.count + ' ' + props.data);
  }, [props.count, props.data]);
  return (
    <div>
      <h2>Count :: {props.count}</h2>
      <h2>Data :: {props.data}</h2>
    </div>
  );
}
