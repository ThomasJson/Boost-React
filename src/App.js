import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import BaseScreen from "./screens/baseScreen/BaseScreen";
import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen";

const SearchScreen = React.lazy(()=> 
  import('./screens/searchScreen/SearchScreen')
)

const ProfileScreen = React.lazy(()=> 
  import('./screens/profileScreen/ProfileScreen')
)

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route
            index
            element={
              <Suspense fallback={<span>Loading</span>}>
                <HomeScreen />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<span>Loading</span>}>
                <SearchScreen />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<span>Loading</span>}>
                <ProfileScreen />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
