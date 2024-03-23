import { useState } from 'react';
import cl from '../styles/LoginPage.module.css';
import { Link } from 'react-router-dom';
import { useUserStore } from '../store/user';

const LoginPage = () => {
	const [userInfo, setUserInfo] = useState('');
	const { setUserData } = useUserStore();

	const handleAuth = () => {
		setUserData(userInfo);
	};

	return (
		<div className={cl.login_page}>
			<div className={cl.login_form}>
				<div className={cl.login_form_head}>
					Войти в систему управления остатками
				</div>
				<input
					type='text'
					className={cl.login_input}
					value={userInfo}
					onChange={(e) => setUserInfo(e.target.value)}
				/>
				<input type='password' className={cl.password_input} />
				<Link
					to='/remains'
					className={cl.login_button}
					onClick={handleAuth}
				>
					<div className={cl.link_text}>Войти</div>
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
