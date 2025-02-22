import React, { useState, Suspense } from "react";
import { Button, Box, CircularProgress } from "@mui/material";

const StudentList = React.lazy(() => import("./StudentList"));

function MainPage() {
  const [remountKey, setRemountKey] = useState(0);  

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setRemountKey((prev) => prev + 1)}
        sx={{ mb: 2 }}
      >
        Remount StudentList
      </Button>

      <Suspense fallback={<CircularProgress />}>
        <StudentList key={remountKey} remountKey={remountKey} />
      </Suspense>
    </Box>
  );
}

export default MainPage;
