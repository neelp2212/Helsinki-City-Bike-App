import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  App:{
  backgroundColor:"#26a69a",
  paddingTop:"2em",
  paddingBottom: "2em"
},
  cards:{
  maxWidth:"1200px",
  margin:"0 auto",
  display:"grid","gridGap":"1rem"
},
}))
/*
  @media (min-width: 600px):{
  __expression__":"(min-width: 600px)","cards":{"gridTemplateColumns":"repeat(2, 1fr)"}},
  @media (min-width: 900px):{"__expression__":"(min-width: 900px)","cards":{"gridTemplateColumns":"repeat(3, 1fr)"}}}



/* .App {
  background-color: #26a69a;
  padding-top: 2em;
  padding-bottom: 2em;
}
 
.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
}
 
@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
 
@media (min-width: 900px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
} */