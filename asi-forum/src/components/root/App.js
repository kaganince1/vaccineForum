import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import ListPoint from "../common/ListPoint";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import AddOrUpdateUser from "../users/AddOrUpdateUser";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/saveuser/:userId" component={AddOrUpdateUser}></Route>
        <Route path="/saveuser" component={AddOrUpdateUser}></Route>
        <Route path="/pointlist" component={ListPoint}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Container>
  );
}

export default App;