import { useState } from "react";
import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";
import StatGrid from "./components/stats/StatGrid";
import MainGrid from "./components/layout/MainGrid";

function App() {
  return (
    <>
      <Header />

      <PageContainer>
        <StatGrid />

        <MainGrid />
      </PageContainer>
    </>
  );
}

export default App;
