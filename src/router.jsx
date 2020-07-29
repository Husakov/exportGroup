import React from "react";
import LandingPage from "./pages/landingPage";
import SurvayPage from "./pages/surveyPage";
const routes = {
  "/": () => <LandingPage />,
  "/survey": () => <SurvayPage />
};
export default routes;