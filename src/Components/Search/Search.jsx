import React from "react";
import {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import  axios  from "axios";
import  useStyle  from "./styles";
import { Button } from "@material-ui/core";

const Search = () => {

  const classes = useStyle()

    const [cardData, setCardData] = useState( );
    const [visible, setVisible] = useState(5);

    const allCardData = async () => {
        const response = await axios.get('http://localhost:5000/record')
        setCardData(response.data[0]);   
    }
    console.log(cardData)
  

    const loadMore = () => {
       setVisible(visible + 5)
    }

    useEffect(() => {
        allCardData()
    },[]);

    const renderCard = (station) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {station.Return}
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


// Tried to fix the error and complete this but it didn't work
      // return(
      //   <div className={classes.App}>
      //     <div className={classes.wrapper}>
      //       <div className={classes.cards}>
      //     {cardData.map(cardData => <div>{cardData.Departure}</div>)}
      //       </div>
      //     </div>
      //     {visible < cardData.length && (<Button onClick = {loadMore}></Button>)}
      //   </div>
      // )

    /*return(
        <div className={classes.App}>
           <div className={classes.wrapper}>
                <div className={classes.cards}>
               {renderCard(cardData)}
                </div>
            </div>
            {visible < cardData.length && (
            <Button onClick={loadMore}>Load</Button>
        )}
        </div>    
    )*/
}

export default Search;