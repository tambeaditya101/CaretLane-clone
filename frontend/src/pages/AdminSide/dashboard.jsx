import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: [ "Rings","MangalSutra","EarRings","Necklace","Bangles"],
    datasets: [
      {
        label: "Users Gained",
        data: [55,94,47,55,67],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
      <Box > 
         <Box  >
            <Bar  data ={userData}/>     
         </Box>
         <Box >
           <Line data={userData} /> 
         </Box>
         <Box >
         <Pie data={userData} />    
         </Box>      
      </Box>
  );
};

export default Dashboard;
