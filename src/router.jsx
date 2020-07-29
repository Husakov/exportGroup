import React from "react";
import LandingPage from "./pages/landingPage";
import SurvayPage from "./pages/surveyPage";
const routes = {
  "/": () => <LandingPage />,
  "/exportGroup": () => <LandingPage />,
  "/survey": () => <SurvayPage />
};
export default routes;