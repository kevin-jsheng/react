function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Jack" age="23" />
    <Person name="Smith" age="33" />
  </div>
);
ReactDOM.render(app, document.querySelector("#app"));
