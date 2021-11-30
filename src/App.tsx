import "./styles/global.scss";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import { MoviesProvider } from "./components/MovieContext";

export function App() {
  return (
    <>
      <MoviesProvider>
        <div style={{ display: "flex" }}>
          <SideBar />
          <Content />
        </div>
      </MoviesProvider>
    </>
  );
}
