import { useState } from "react";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const setAndStoreUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <>
      <Header user={user} setUser={setAndStoreUser} />
      <AppRoutes user={user} setUser={setAndStoreUser} />
    </>
  );
}

export default App;
