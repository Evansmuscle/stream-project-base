import React from 'react';

import {
  Router,
  // HashRouter,
  // MemoryRouter,
  Route,
  Switch,
  // Link,
} from 'react-router-dom';
import Header from './Header';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

// const PageOne = () => {
//   return (
//     <div>
//       {/* BAD!!! */}
//       {/* <a href="/pageTwo">To Page Two -&gt;</a> */}
//       <Link to="/pageTwo">To Page Two -&gt;</Link>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       {/* BAD!!! */}
//       {/* <a href="/">&lt;- To Page One</a> */}
//       <Link to="/">&lt;- To Page One</Link>
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
