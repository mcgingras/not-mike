import React from 'react';

export default function Gif(props){
  return (
    <img
      className="full-screen"
      src={props.url}
    />
  )
}
