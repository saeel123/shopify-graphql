import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductItem({
  product: { title }
}) {
  return (
    <div>
      <span>{title}</span> 
    </div>
  );
}