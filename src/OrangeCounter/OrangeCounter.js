import React from "react";
class OrangeCounter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  // }

  // MoreOranges = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // }

  // render() {
  //   return (
  //   <>
  //     <button onClick={this.MoreOranges}>Adaugaaaa</button> 
  //     {
  //       [...Array(this.state.counter)].map((elementInArray, index) => ( 
  //         <> 🍊 </>
  //       ))
  //     }
  //   </>
  //   );
  // }

  render() {
    return (
    <>
      {
        [...Array(this.props.protocale)].map((elementInArray, index) => ( 
          <> 🍊 </>
        ))
      }
    </>
    );
  }
}

  export default OrangeCounter;