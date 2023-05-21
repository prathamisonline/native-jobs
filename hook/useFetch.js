import React from 'react'
import { useState,useEffect } from 'react'

import axios from "axios";
// import {RAPID_API_KEY} from "@env";
// const rapidApiKey=RAPID_API_KEY;


const UseFetch = (endpoint,query) => {
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    "X_RapidAPI-Key":"0fde5798d8msh0cc7c6a2867f86ep11eba5jsnde22f4d13a18",

    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {
   ...query
  },
};

    const fetchData=async()=>{
        setIsLoading(true);
        try {
            const res=await axios.request(options);
            setData(response.data.data)
            
        } catch (error) {
            alert("There is some error")
            
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const refetch=()=>{
        setIsLoading(true);
        fetchData();
    }

  return (
    {data,isLoading,error,refetch}
  )
}

export default UseFetch;