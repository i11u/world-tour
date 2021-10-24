import React, { useState, useEffect } from 'react';
import {db} from "../firebase";
import Grid from "@mui/material/Grid";

function PhotoListPage() {
  const [pictures, setPictures] = useState([]);

  useEffect(()=> {
    getDatas();
  })
  const getDatas = ()=>{
    db.collection("users").doc("user1").collection("pictures").get().then((response) => {
      response.forEach((doc) => {
        const document = doc.data();
        setPictures(document);
      });
    });
  }
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justify="center">
      <Grid item xs={6} alignItems="center" justify="center">
        <img width="150px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/d-team2.appspot.com/o/3.png?alt=media&token=40e4172e-8f71-4b87-8747-157e7d15a1d6"></img>
      </Grid>
      <Grid item xs={6}>
        <img width="150px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/d-team2.appspot.com/o/3.png?alt=media&token=40e4172e-8f71-4b87-8747-157e7d15a1d6"></img>
      </Grid>
    </Grid>
  )
}

export default PhotoListPage;
