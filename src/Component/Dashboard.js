import { Grid } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MediaCard from "./Cards";
import Dropdown from "./Dropdown";

const Dashboard = () => {
  const [dataState, setDataState] = useState([]);
  const [category, setCategory] = useState("");

  const getData = useCallback(async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setDataState(data);
      let filterCategory = data.data?.map((item) => item.category);
      filterCategory = [...new Set([...filterCategory])];
      setCategory([...filterCategory]);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Dropdown data={category} />
      <Grid container sx={{marginTop:5}}>
        {dataState.data &&
          dataState.data.map((item, i) => 
          <Grid item md={3} sm={6} xs={12} sx={{gap : 2, marginBottom : 3, display:'flex', justifyContent:'center',}}>
          <MediaCard data={item} key={i} />
          </Grid>
          
          )}

      </Grid>
    </>
  );
};

export default Dashboard;
