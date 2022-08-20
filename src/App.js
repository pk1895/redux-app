import './App.css';
import FirstComp from "./Componenet/FirstComp";
import { useSelector, useDispatch } from "react-redux"
import { getUser } from './Redux/saga/serviceCall';
import { useEffect } from "react"

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const name = useSelector((state) => state.userReducer.users);

  return (
    <div className="App">
      <p>Hello World</p>

      <FirstComp />
    </div>
  );
}

export default App;
