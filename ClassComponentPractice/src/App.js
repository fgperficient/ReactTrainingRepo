import ErrorBoundary from "./components/ErrorBoundary";
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
  { id: "u4", name: "Daniel" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <ErrorBoundary>
      <UserFinder />
      </ErrorBoundary>
    </UsersContext.Provider>
  );
}

export default App;
