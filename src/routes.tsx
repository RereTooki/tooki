import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import BirthdayWishForm from "./components/BirthdayWishForm";
import BirthdayWishList from "./components/BirthdayWishList";
import AdminLogin from "./components/AdminLogin";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/wishme",
    element: <BirthdayWishForm />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },

  {
    path: "/wishes",
    element: (
      <RequireAuth>
        <BirthdayWishList />
      </RequireAuth>
    ),
  },
]);

export default router;
