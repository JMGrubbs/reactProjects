import React from "react";

import Header from './Header'
import AppDemos from './AppDemos'
import AboutMe from './AboutMe';
import GithubLinks from './GithubLinks';

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <AppDemos />
      <GithubLinks />
    </div>
  );
};

export default App;
