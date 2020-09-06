import React from 'react';
import { Provider } from 'react-redux'

import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import SearchBar from './components/SearchBar/SearchBar';
import store from './store'

import './App.css';

function App() {
	return (
		<Provider store={store} >
			<div className="App">
				<h1>Marvel App</h1>
				<SearchBar />
				<CharacterList />
				<CharacterDetails />
			</div>
		</Provider>
	);
}

export default App;
