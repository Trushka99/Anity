import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import GamesPage from "../pages/GamesPage/GamesPage";
import ReviewPage from "../pages/ReviewPage/ReviewPage";
export const createAppRoutes = (images: string[]): RouteObject[] => [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage images={images} />,
      },
      {
        path: "games",
        element: <GamesPage />,
      },
      {
        path: "games/:id",
        element: <ReviewPage />,
      },
    ],
  },
];
