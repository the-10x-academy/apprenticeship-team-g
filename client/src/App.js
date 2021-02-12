import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage'
import PostList from './Components/postlist/postlist'
import UploadCmp from './uploadComponent/uploadComponent'
  function App() {
    return (
        <main>
            <Router>

            
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/postList" component={PostList} />
                <Route path="/upload" component={UploadCmp} />
            </Switch>
            </Router>
        </main>
    )
}
export default App;