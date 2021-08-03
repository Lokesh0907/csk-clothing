import React from "react";
import { connect } from "react-redux";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { Switch, Route, Redirect } from "react-router-dom";
import { setCurrentUser } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount(){
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
			
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot( snapshot => {
					setCurrentUser({
							id: snapshot.id,
							...snapshot.data()
					});
				});
				
			}
			else{
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render(){
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={HomePage}></Route>
					<Route path="/shop" component={ShopPage}></Route>
					<Route 
						exact 
						path="/signin" 
						render={() => this.props.currentUser?(<Redirect to="/" />):(<SignInAndSignUp/>)}
					></Route>
					<Route exact path="/checkout" component={CheckOutPage}></Route>
				</Switch>
			</div>
		);
	}
	
}

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser});

const mapDispatchToProps = dispatch => {
	return {
		setCurrentUser : user =>{
			dispatch(setCurrentUser(user));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
