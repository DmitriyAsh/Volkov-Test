import cl from '../styles/LoginPage.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div className={cl.login_page}>
			<div className={cl.login_form}>
				<div className={cl.login_form_head}>
					Войти в систему управления остатками
				</div>
				<input type='text' className={cl.login_input} />
				<input type='password' className={cl.password_input} />
				<Link to='/remains' className={cl.login_button}>
					<div className={cl.link_text}>Войти</div>
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
