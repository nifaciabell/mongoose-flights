const React = require("react");

function New() {
  return (
    <div>
      <h1>New Flight Page</h1>

      <form action="/flight" method="POST">
        <label htmlFor="airline">
          Airline:
          <input type="text" name="airline" />
        </label>

        <br />
        <label htmlFor="text">
          Flight No: <input type="number" name="flightNo" />
        </label>

        <br />
        <label htmlFor="departure">
          Departure: <input type="datetime-local" name="departure" />
        </label>

        <br />

        <input type="submit" value="Create new flight" />
      </form>
    </div>
  );
}

module.exports = New;
