import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const addStudent = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://aboss-task-backend.onrender.com/create/students",
        {
          name: newStudent,
          age,
          gender,
        }
      );
      setNewStudent("");
      setAge("");
      setGender("");
      if (response.status === 201)
        toast.success("Student created successfully");
    } catch (error) {
      console.error("Error adding student", error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
        >
          Add Student
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "500px",
          }}
        >
          <TextField
            label="Student Name"
            variant="outlined"
            fullWidth
            value={newStudent}
            onChange={(e) => setNewStudent(e.target.value)}
          />
          <TextField
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            label="Gender"
            variant="outlined"
            fullWidth
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1, fontWeight: "bold" }}
            onClick={addStudent}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Student"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddStudent;
