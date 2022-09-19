import React from "react";
import PostOverview from "../../components/postOverview/PostOverview";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
import RegisterStories from "../../components/registerStories/RegisterStories";

const ProfileScreen = () => {
  return (
    <>
      <ProfileHeader />
      <main>
        <ProfileInfo />
        <RegisterStories />
        <PostOverview />
      </main>
    </>
  );
};

export default ProfileScreen;
