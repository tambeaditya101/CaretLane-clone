import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: ["Rings", "MangalSutra", "EarRings", "Necklace", "Bangles"],
    datasets: [
      {
        label: "Users Gained",
        data: [55, 94, 47, 55, 67],
        backgroundColor: [
          "#d297de",
          "#aef2e9",
          "#ffc4e9",
          "#70e06e",
          "#e8c4bc",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <Box  bgGradient='linear(to-l, blue.100, pink.100)' >
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Welcome to DashBoard
      </Text>
      <Box  >
        <Bar data={userData} />
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
