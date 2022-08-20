import './App.css';
import FirstComp from "./Componenet/FirstComp";
import { useSelector, useDispatch } from "react-redux"
import { getUser } from './Redux/action/userAction';
import { useEffect } from "react"

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const users = useSelector((state) => state.userReducer.users);
  console.log(users);
  const name = users ? users[0].name : "";

  return (
    <div className="App">
      <p>Hello World</p>
      <p>{name}</p>
      <FirstComp />
    </div>
  );
}

export default App;
