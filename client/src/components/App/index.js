import Landing from '../../pages/Landing';
import { Route, withRouter } from 'react-router-dom';


const App = () => {
  return (
    <>
        <Route exact path="/" render={() => <Landing  />} />

    </>
  );
}

export default withRouter(App);
