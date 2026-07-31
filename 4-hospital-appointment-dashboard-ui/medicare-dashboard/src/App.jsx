import { useState } from "react";
import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";
import StatGrid from "./components/stats/StatGrid";

function App() {
  return (
    <>
      <Header />

      <PageContainer>
        <StatGrid />

        {/* Sample Ref till implementing `MainGrid` */}
        {/* <StatGrid /> */}
      </PageContainer>
    </>
  );
}

export default App;
