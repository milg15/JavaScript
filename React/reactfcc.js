//Create a Stateless Functional ComponentPassed
const MyComponent = function() {
  <div>Kimi to no RABU SUTOORII</div>
}

//Create a React Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
        <h1>Sore wa yosou doori</h1>
      </div>
    )
    // change code above this line
  }
};

//Create a Component with Composition //Use React to Render Nested Components 
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
      <TypesOfFruit/>
      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits/>
        { /* change code above this line */ }
      </div>
    );
  }
};


//How to render THE COMPONENT
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
          <Fruits />
          <Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"));

//Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* change code above this line */1 }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date = {Date()}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

//Pass an Array as Props
const List = (props) => {
  { /* change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks={["soba ni itatte", "Practice Japanese"]}/>
        <h2>Tomorrow</h2>
        <List tasks ={["Do SCRUM", "Work", "Sleep"]}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

//Use Default Props
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line
ShoppingCart.defaultProps = {items: 0};

/*Note: As of React v15.5.0, PropTypes is imported independently 
from React, like this: import PropTypes from 'prop-types';*/
//Use PropTypes to Define the Props You Expect 
Items.propTypes  = {quantity: PropTypes.number.isRequired };


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // change code below this line

    // change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button>Click Me</button>
        { /* change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
