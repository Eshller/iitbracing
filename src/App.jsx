import { Route, Routes } from "react-router-dom";
import { CarsPage } from "./components/Cars";
import HomePage from "./components/HomePage";
import TeamPage from "./components/TeamPage";
import AchievementsPage from "./components/AchievementsPage";
import SponsorsPage from "./components/SponsorsPage";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import CompetitionsPage from "./components/CompetitionsPage";
const App = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/competitions" element={<CompetitionsPage />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default App;
