import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import FriendsListPage from "./pages/FriendsListPage";
import BookingPage from "./pages/Booking";
import AboutPage from "./pages/AboutPage";
import MyKitchenListPage from "./pages/MyKitchenList";
import KitchenCMPage from "./pages/KitchenCM";
import KitchenManagementPage from "./pages/KitchenMngt";
import PartyCMPage from "./pages/PartyCM";
import PartyDetailPage from "./pages/PartyDetail";
import PartyManagementPage from "./pages/PartyManagement";
import BusinessEntryPage from "./pages/BusinessEntry";
import EntryInformationPage from "./pages/EntryInformation";
import NavBar from "./components/navbar";
import "./App.css";
import PartyListPage from "./pages/PartyList";
import ProfilePage from "./pages/Profile";
import BottomBar from "./components/bottomBar";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <NavBar />
        <Router>
          <div className="max-w-6xl ml-auto mr-auto">
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/friends" element={<FriendsListPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/kitchen/my" element={<MyKitchenListPage />} />
              <Route path="/kitchen/create" element={<KitchenCMPage />} />
              <Route
                path="/kitchen/manage"
                element={<KitchenManagementPage />}
              />
              <Route path="/party/list" element={<PartyListPage />} />
              <Route path="/party/create" element={<PartyCMPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/party/detail" element={<PartyDetailPage />} />
              <Route
                path="/party/management"
                element={<PartyManagementPage />}
              />
              <Route path="/business/entry" element={<BusinessEntryPage />} />
              <Route
                path="/business/entry/information"
                element={<EntryInformationPage />}
              />
            </Routes>
          </div>
        </Router>
      </div>
      <BottomBar />
    </div>
  );
}

// function CustomBottomBar() {
//   const location = useLocation(); // 使用useLocation钩子获取当前页面路径
//   const useBar =
//     location.pathname === "/party/list" || location.pathname === "/";

//   if (useBar) {
//     return (
//       <div>
//         <BottomBar />
//       </div>
//     );
//   } else {
//     return;
//   }
// }

export default App;
