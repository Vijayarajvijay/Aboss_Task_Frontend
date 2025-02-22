import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Skeleton,
  Box,
  Paper,
  Button,
} from "@mui/material";

const StudentList = ({ remountKey }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState("#ffffff");

  const reRenderCount = useRef(0);


  console.log('current',reRenderCount);
  

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    if (remountKey > 0) {
      setBgColor("#ffcccc");
    }
    reRenderCount.current += 1;
  },[]);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://aboss-task-backend.onrender.com/students");
      setTimeout(() => {
        setStudents(response.data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching students", error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 800,
        margin: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: bgColor,
        width: "400px",
        position: "relative",
        paddingBottom: "10px",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
        >
          Student List
        </Typography>

        <Typography
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            fontSize: "14px",
            fontWeight: "bold",
            backgroundColor: "#fff",
            padding: "4px 8px",
            borderRadius: "4px",
            boxShadow: 1,
          }}
        >
          Re-renders: {reRenderCount.current}
        </Typography>

        {loading ? (
          <Box>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={80}
              sx={{ mb: 1, borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={80}
              sx={{ mb: 1, borderRadius: 2 }}
            />
          </Box>
        ) : (
          students.map((student) => (
            <Student key={student._id} name={student.name} />
          ))
        )}
      </CardContent>
    </Card>
  );
};

const Student = ({ name }) => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <Paper
      elevation={2}
      sx={{
        padding: 2,
        marginBottom: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>
      <Button
        variant="contained"
        size="small"
        onClick={() => setClickCount((prev) => prev + 1)}
      >
        Clicked {clickCount} times
      </Button>
    </Paper>
  );
};

export default StudentList;
