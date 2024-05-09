import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
      <main className="bg-white">
        <Outlet />
      </main>
  );
};

export default RootLayout;