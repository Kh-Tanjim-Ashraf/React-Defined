import { useState } from "react";
import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";
import StatGrid from "./components/stats/StatGrid";
import MainGrid from "./components/layout/MainGrid";
import Doctors from "./data/doctors";
import Appointments from "./data/appointments";

function App() {
  // Lift the state up: Lifted from `StatGrid` component
  const [doctors, setDoctors] = useState(Doctors);
  const [appointments, setAppointments] = useState(Appointments);

  return (
    <>
      <Header />

      <PageContainer>
        <StatGrid doctors={doctors} appointments={appointments} />

        <MainGrid doctors={doctors} appointments={appointments} />
      </PageContainer>
    </>
  );
}

export default App;
