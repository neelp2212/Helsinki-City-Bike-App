import React from "react";
import {useEffect, useState} from 'react';
import { Card }from "@material-ui/core/";
import  useStyle  from "./styles";


const ListStationDetails = () => {

  const classes = useStyle()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [visible, setVisible] = useState(5);

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

  console.log(data)

const loadMore = () => {
  setVisible(visible + 5)
}
  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }

  return(
  <div className={classes.App}>
       {data.slice(0,visible).map((item) => (
        <Card>
          <ul>
          <li><b>Departure station name</b> - {item['Departure station name']}</li>
          <li><b>Return station name</b> - {item['Return station name']}</li>
          <li><b>Departure</b>- {item.Departure} </li>
          <li><b>Return</b> - {item.Return}</li> 
        </ul>
        </Card>
      ))}
      {visible < data.length && (
        <button onClick={loadMore}>Load</button>
      )}
      </div>
  )
}

export default ListStationDetails;




