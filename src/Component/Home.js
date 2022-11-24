import { Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import MediaCard from "./Cards";

const Home = ({ data }) => {
  // console.log(data, 'home data');
  // let location = useLocation();
  //   let data = location.state.item.e
  const { state } = useLocation();
  console.log(state, "====>> state");
  return (
    <>
      <Grid container sx={{marginTop:5}}>
        <Grid item md={6} xs={12} sm={12} sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <img src={state?.data?.image} alt="" width={500} height={500}/>
        </Grid>
        <Grid item md={6} xs={12} sm={12} sx={{display:'flex',flexDirection:'column' ,justifyContent:'flex-start'}}>
          
          <Typography>{state?.data?.category}</Typography>
          <Typography>{state?.data?.title}</Typography>
          <Typography>{state?.data?.description}</Typography>
          <Typography>{state?.data?.price}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
