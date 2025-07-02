import React from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createAppRoutes } from "../../routes/AppRouter";
const images = [
  "https://cdna.artstation.com/p/assets/images/images/085/897/498/large/stayaliveplz-mirko-4-my-hero-academia.jpg?1741887730",
  "https://cdnb.artstation.com/p/assets/images/images/086/156/135/large/kley-ryuko-final1.jpg?1742498499",
  "https://cdna.artstation.com/p/assets/images/images/086/355/502/large/chthonic-meat-of-entropy-1.jpg?1743011592",
  "https://cdnb.artstation.com/p/assets/images/images/084/893/825/large/ibrahem-swaid-shibari-knight-3-poster-03s.jpg?1739448368",
  "https://cdna.artstation.com/p/assets/images/images/086/381/844/large/bchung-ss.jpg?1743065171",
  "https://cdna.artstation.com/p/assets/images/images/086/367/230/large/logan-cure-magik-sfw.jpg?1743027598",
];

const App: React.FC = () => {
  const appRouter = createBrowserRouter(createAppRoutes(images), {
    future: {
      // @ts-expect-error: типы пока не знают этот флаг
      v7_startTransition: true,
    },
  });

  return <RouterProvider router={appRouter} />;
};

export default App;
