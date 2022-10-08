import { useEffect } from "react";
import Home from "./pages/Home";
import { useAppDispatch } from "./store";
import { getAllCharacters } from "./store/utils";
import { Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="details/:id" element={<DetailsPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}
