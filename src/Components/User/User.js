import { UserHeader } from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";

export const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="publicar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};
