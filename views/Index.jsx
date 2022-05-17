const React = require("react");
class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      // Ternary =>  "whateverLogic" ? " ifItsTrue" : "ifItsNot"
      <>
        <h1>Fruits Index Page </h1>
        <nav>
            <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li>
                The <a href={`./fruits/${i}`}>{fruit.name}</a> is {fruit.color}{" "}
                <br></br>
                {fruit.readyToEat ? "Its Ready" : " Its NOT"}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
module.exports = Index;