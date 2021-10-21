import React from 'react';
import './Cat.css';

function Cat(props) {
 return (
    <React.Fragment>
        <h1 className="Cat">this is my bussiness {props.animal}</h1>
        {props.children}
    </React.Fragment>
 );
}

// class Cat extends React.Component {
//     render() {
//         return(
//             <h1 className="Cat">this is my bussiness cat</h1>
//         );
//     }
// }
export default Cat;