import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
	return (
		<div className='App'>
			<Login />
			<Logout />
			<Profile />
		</div>
	);
}

function Login() {
	const { loginWithRedirect } = useAuth0();

	return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

function Logout() {
	const { logout } = useAuth0();
	return (
		<button onClick={() => logout({ returnTo: window.location.origin })}>
			Log Out
		</button>
	);
}

function Profile() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	);
}

export default App;
