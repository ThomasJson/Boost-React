import React from "react";
import PostOverview from "../../components/profile/postOverview/PostOverview";
import ProfileHeader from "../../components/profile/profileHeader/ProfileHeader";
import ProfileInfo from "../../components/profile/profileInfo/ProfileInfo";
import RegisterStories from "../../components/profile/registerStories/RegisterStories";

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
