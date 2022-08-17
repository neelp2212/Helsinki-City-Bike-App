import React from "react";
import {useEffect, useState} from 'react';
import { Card }from "@material-ui/core/";
import  useStyle  from "./styles";


const ListStationDetails = () => {

  const classes = useStyle()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/record')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }

  const renderCard = (station, index) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {station}
          </Card.Title>
          <Card.Text>
            <ul>
              <li>{station.Departure}</li>
              <li>{station.Return}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return(
    <div className={classes.App}>
      <Card>
      <ul>
       {data.map((item) => (
        <li key={item.id}><b>Departure station name</b> - {item['Departure station name']} <br></br><b>Return station name</b> - {item['Return station name']}<br></br> <b>Departure</b>- {item.Departure}<br></br> <b>Return</b> - {item.Return} </li>
      ))}
      </ul>
      </Card>
      </div>
  )
}

export default ListStationDetails;