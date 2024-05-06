/* eslint-disable no-unused-vars */
import "./index.css";
import moment from "moment";
import { Card, Button } from "react-bootstrap";

let WeatherCard = ({ date, temp, min, max }) => {
  return (
    // <div className="card">npm

    //     <div> {moment(date).format("dddd ha")} </div>
    //     <h1> {temp}°C </h1>
    //     <div> {min}°C - {max}°C </div>
    // </div>

    <Card id="card" style={{ width: "18rem" }} border="primary">
      <Card.Body>
        <Card.Title>{moment(date).format("dddd ha")}</Card.Title>
        <Card.Text>
          <h1> {temp}°C </h1>
        </Card.Text>
        <Card.Title>
          {" "}
          {min}°C - {max}°C
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
