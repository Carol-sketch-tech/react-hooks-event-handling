import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
    }
  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;


function MultiButton(){
  function handleClick(number){
    console.log(`Botton${number} was clicked`)
  }
  return (
    <div>
      <button onClick={()=>handleClick(1)}>Button 1</button>
      <button onClick={()=>handleClick(2)}>Button 2</button>
      <button onClick={()=>handleClick(3)}>Button 3</button>
    </div>
  );
}
// when one of the buttons is clicked we want the callbakc to log out the button's number.
// if a button is clikced, the event object will be logged not the number of the button.
// this is why we need to provide a function defination, not a function invocation to our event handlers.
// by having an arrow function were providing each of our button's onClick handlers a function defination that will only be invoked when the 
// button is clicked.


// onChange- is usedfule when handling changes in the inputvalues.
// this event listener is often used with <input>,<select> and <textarea> inputs(basically anywhere you need to capture a user's input)
// exampe of using an onChange handler

