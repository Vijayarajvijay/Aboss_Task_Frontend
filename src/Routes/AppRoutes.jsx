import Sidebar from "../components/Sidebar/Sidebar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import StudentList from "../pages/StudentList";
import AddStudent from "../pages/AddStudent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/sidebar"
        element={
          <>
            {" "}
            <Sidebar />
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <div style={{ display: "flex" }}>
              <Sidebar />
              <div
                style={{ marginLeft: "350px", width: "100%", padding: "20px" }}
              >
                <MainPage />
              </div>
            </div>
          </>
        }
      />

      <Route
        path="/addStudent"
        element={
          <>
            <div style={{ display: "flex" }}>
              <Sidebar />
              <div
                style={{ marginLeft: "350px", width: "100%", padding: "20px" }}
              >
                <AddStudent />
              </div>
            </div>
          </>
        }
      />

      <Route
        path="/Students"
        element={
          <>
            <div style={{ display: "flex" }}>
              <Sidebar />
              <div
                style={{ marginLeft: "350px", width: "100%", padding: "20px" }}
              >
                <StudentList />
              </div>
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
