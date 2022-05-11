import AppTitle from "components/AppTitle";
import Attribution from "components/Attribution";
import Card from "components/Card";
import React from "react";
import CustomTipProvider from "contexts/CustomTipContext";

function App() {
  return (
    <div
      role="application"
      className="grid min-h-screen place-items-center my-6"
    >
      <div className="space-y-14 px-4 w-full sm:max-w-2xl">
        <AppTitle />
        <CustomTipProvider>
          <Card />
        </CustomTipProvider>
        <Attribution
          name={"Soe Wai Yan Aung"}
          githubProfileLink={"https://github.com/soewaiyanag"}
        />
      </div>
    </div>
  );
}

export default App;
