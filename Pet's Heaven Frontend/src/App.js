import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import MyNavBar from "./pages/NavBar/NavBar";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import AddAni from "./pages/Animal/AddAni";
import AddComp from "./pages/Complaints/AddComp";
import AddOrd from "./pages/Orders/AddOrd";
import AddAppoint from "./pages/Appointments/AddAppoint";
import ComplaintsPage from "./pages/Complaints/ComplaintsPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import FeedPage from "./pages/Feedback/FeedPage";
import Footer from "./pages/Footer/FooterPage";
import HomePageP from "./pages/HomeP/HomePageP";
import LoginPage from "./pages/Login/LoginPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import ProfilePage from "./pages/Registration/ProfilePage";
import RegPage from "./pages/Registration/RegPage";
import Test from "./pages/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CardRPage from "./pages/CardR/CardRPage";
import SearchPage from "./pages/Animal/SearchPage";
import ResCompPage from "./pages/Complaints/ResCompPage";
import NotAdmin from "./pages/Misc/NotAdmin";
import NotRes from "./pages/Misc/NotRescuer";
import NotUser from "./pages/Misc/NotUser";
import ProtectedUser from "./pages/Protectection/ProtectedUser";
import ProtectedRes from "./pages/Protectection/ProtectedRes";
import ProtectedAdmin from "./pages/Protectection/ProtectedAdmin";
import UpdateComp from "./pages/Complaints/UpdateComp";
import UpdateOrd from "./pages/Orders/UpdateOrder";
import ResAppoint from "./pages/Appointments/ResAppoint";
import UserAppoint from "./pages/Appointments/UserAppoint";
import AllContact from "./pages/ContactUs/AllContact";
import AllFeed from "./pages/Feedback/AllFeed";
import AniBot from "./components/AniBot/AniBot";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar></MyNavBar>
      <AniBot></AniBot>
      <Routes>
        <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>}></Route>
        <Route
          path="/addani"
          element={
            <ProtectedRes>
              <AddAni></AddAni>
            </ProtectedRes>
          }
        ></Route>
        <Route path="/addcomp" element={<ProtectedUser><AddComp></AddComp></ProtectedUser>}></Route>
        <Route
          path="/complaints"
          element={<ProtectedUser><ComplaintsPage></ComplaintsPage></ProtectedUser>}
        ></Route>
        <Route
          path="/contactus"
          element={<ContactUsPage></ContactUsPage>}
        ></Route>
        <Route path="/feedback" element={<ProtectedUser><FeedPage></FeedPage></ProtectedUser>}></Route>
        <Route path="/" element={<HomePageP></HomePageP>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/orders" element={<ProtectedUser><OrderPage></OrderPage></ProtectedUser>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/register" element={<RegPage></RegPage>}></Route>
        <Route
          path="/rescomppage"
          element={<ProtectedRes><ResCompPage></ResCompPage></ProtectedRes>}
        ></Route>
        <Route path="/searchpage" element={<SearchPage></SearchPage>}></Route>
        {/* <Route path="/cardr" element={<CardRPage></CardRPage>}></Route> */}
        <Route path="/not-admin" element={<NotAdmin></NotAdmin>}></Route>
        <Route path="/not-res" element={<NotRes></NotRes>}></Route>
        <Route path="/not-user" element={<NotUser></NotUser>}></Route>
        {/* <Route path="/test" element={<Test></Test>}></Route> */}
        <Route
          path="/addapp/:complaintId/:complaintBy"
          element={<ProtectedRes><AddAppoint></AddAppoint></ProtectedRes>}
        ></Route>
        <Route
          path="/upcomp/:compId"
          element={<ProtectedUser><UpdateComp></UpdateComp></ProtectedUser>}
        ></Route>
        <Route
          path="/addorder/:postedBy/:animalId"
          element={<ProtectedUser><AddOrd></AddOrd></ProtectedUser>}
        ></Route>
        <Route
          path="/editorder/:ordId"
          element={<ProtectedUser><UpdateOrd></UpdateOrd></ProtectedUser>}
        ></Route>

        <Route path="/resapps" element={<ProtectedRes><ResAppoint></ResAppoint></ProtectedRes>}></Route>
        <Route path="/userapps" element={<ProtectedUser><UserAppoint></UserAppoint></ProtectedUser>}></Route>
        <Route
          path="/admincontact"
          element={
            <ProtectedAdmin>
              <AllContact></AllContact>
            </ProtectedAdmin>
          }
        ></Route>
        <Route path="/allfeed" element={<AllFeed></AllFeed>}></Route>
        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
        {/* <Route path="/" element={<Test></Test>}></Route> */}
      </Routes>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
