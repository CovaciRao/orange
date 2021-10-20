import React from 'react';
import Apple from '../Apple/Apple';
import Orange from '../Orange/Orange';
import './FruitBox.css';

function FruitBox() {
 return (
    <div className='FruitBox'>
        <Orange />
        <Apple />
        <Orange />
    </div>
 );
}

export default FruitBox;