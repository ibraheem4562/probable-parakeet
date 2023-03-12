import './Nav.css';
import Show_menu from './Show_menu';
import './../lib/fontawesome-free-6.2.0-web/css/all.min.css';

import logo from './images/logo.png';

console.log(logo);

function Nav(){
	
	return(
		<div className='nav_bar'>
			
			<div className='main_menu' >
			
				<ul>
				
					<li className='logo'>
						<a href='#'>
							<img src={logo} />
						</a>
					</li>
					
					<li className='menu_left'>
						<a href='#'> WEST LONDON</a>
					</li>
					
				</ul>
				
				<div className='menu_right'>
				
					<ul>
					
						<li className='menu_right_item'>
							<a href='#'>contact</a>
						</li>
					
						<li className='menu_right_item'>
							<a href='#'>investments</a>
						</li>
					
						<li className='menu_right_item'>
							<a href='#'>Properties</a>
						</li>
					
						<li className='menu_right_item'>
							<a href='#'>locations</a>
						</li>
					
					</ul>
				
				</div>
				
				<Show_menu />
				
			</div>
			
			<div className='clearfix'></div>
			
		</div>
	
	);
	
}

export default Nav;