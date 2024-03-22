import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import RemainsPage from './components/RemainsPage';
import { useState } from 'react';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/remains' element={<RemainsPage />} />
			</Routes>
		</div>
	);
}

export default App;
