import React, { useState, useEffect } from 'react';
import {db} from "../firebase";

function PointListPage() {
  const [point, setPoint] = useState(0);

  useEffect(()=> {
    getDatas();
  })
  const getDatas = ()=>{
    db.collection("users").limit(1).get().then((response) => {
      response.forEach((doc) => {
        const document = doc.data();
        setPoint(document.point);
      });
    });
  }
  return <div>PointList Page {point}</div>;
}

export default PointListPage;
