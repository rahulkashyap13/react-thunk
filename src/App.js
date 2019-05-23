import React, { Component} from 'react';
import Layout from "./containers/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Posts from "./containers/Posts";
import Login from "./containers/Login";
import Registration from "./containers/Registration";
import AddPost from "./containers/AddPost";
import EditPost from "./containers/EditPost";

const DefaultLayout = ({ component: Component, layout: Layout, ...rest }) => {
	return (
	  <Route
		{ ...rest }
		render={ props => (
		  <Layout { ...props }>
			<Component { ...props } />
		  </Layout>
		) }
	  />
	);
  };

class App extends Component {
	render() {
		return (
			<Switch>				
				<Route path="/login" component={ Login } />
				<Route path="/registration" component={ Registration } />
				<DefaultLayout exact path="/dashboard" layout={ Layout } component={ Posts } />
				<DefaultLayout path="/add-post" layout={ Layout } component={ AddPost } />
				<DefaultLayout path="/edit-post/:id" layout={ Layout } component={ EditPost } />
				<Redirect to="/login" />
			</Switch>
		);
	}
}

export default App;
