import clsx from "clsx";
import AppTitle from "components/AppTitle";
import Attribution from "components/Attribution";
import Card from "components/Card";
import React from "react";

const App = () => {
  return (
    <div className="grid min-h-screen place-items-center my-6">
      <div className={clsx("space-y-14 px-4", "w-full sm:max-w-3xl")}>
        <AppTitle />
        <Card />
        <Attribution
          name={"Soe Wai Yan Aung"}
          githubProfileLink={"https://github.com/soewaiyanag"}
        />
      </div>
    </div>
  );
};

export default App;
