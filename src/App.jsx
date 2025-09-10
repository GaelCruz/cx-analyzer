import { useState } from "react";

import "./App.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/DashboardPage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Theme appearance="dark" accentColor="purple">
      <BrowserRouter>
        <SignedOut>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            
          </Routes>
        </SignedIn>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
