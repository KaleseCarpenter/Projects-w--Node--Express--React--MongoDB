//inside react component will always be a :render and :return
//Capitalization matters
const React = require("react");

class Show extends React.Component {
  render() {
     //props = properties which is data that you want to pass to a component.
      //this is how we get access to our fruits
    const fruit = this.props.fruit;
    return (
      //Return statement MUST have one main parent for this component, can use div or React.Fragment  
      <>
        <h1> Show Page </h1>
        The {fruit.name} is {fruit.color}
        {" "}
        {fruit.readyToEat ? ", it is Ready To Eat" : ", NahhMann, thats Expired "}
      </>
    );
  }
}
module.exports = Show;
