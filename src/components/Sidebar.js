import './Sidebar.css';
import Show_sidebar from './Show_sidebar';

function Sidebar(){
	
	return(
	
		<div className='registration_panal'>
	
			<div className='side_bar'>
			
				<form>
				
					<h3 className='heading'>Looking for a new home in London?</h3>
					
					<p className='discription'>Let us help you find the the best option to buy.</p>

					<p className='guide'>Full Name</p>
					<input type='text' placeholder='Your Name' className='information'/>
					
					<p className='guide'>Email</p>
					<input type='email' placeholder='example@exmp.com' className='information'/>
					
					<p className='guide'>Phone</p>
					<input type='number' placeholder='+1-111-222-333' className='information'/>
					
					<input type='checkbox' value='checked' id='checkbox'/>
					<label for='checkbox' className='terms_label'>
					I agree with <a href='#'>terms and conditions</a>?
					</label>
					
					<input type='submit' value='Apply' className='submit'/>
				</form>
				
			</div>

			
			<Show_sidebar />
				

		</div>
	
	)
	
}

export default Sidebar;