const React = require("react");

function Index(props) {
  const { flight } = props;

  return (
    <div>
      <nav>
        <a href="/flight/new">Book a New Flight</a>
      </nav>
      
      <h1>Flights</h1>
      <h3>Index Page</h3>

      <ul>
        {flight.map((flight, i) => {
          return (
            <li key={flight._id}>
              <br/>
              {flight.airline}
              <br/>
              {flight.flightNo}
              <br/>
              {new Date(Date(flight.departs)).toLocaleDateString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;