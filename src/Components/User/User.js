import { UserHeader } from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { NotFound } from "../NotFound";

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="publicar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
