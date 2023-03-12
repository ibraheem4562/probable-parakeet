function Show_menu() {
  const ShowMenu = () => {
	  
    var styleShowMenu = {
			
			"position" : "absolute",
			"display" : "block",
			"right" : "50px",
			"width" : "150px",
			"padding-bottom" : "25px",
			"background" : "#2b3954",
			"border" : "1px solid #333",
			"box-shadow" : "inset 0 0 15px 0 #555",
			"border-radius" : "5px",
			"z-index" : "3"
			
		};
		
		var objShowMenu = document.querySelector(".menu_right");
		Object.assign(objShowMenu.style, styleShowMenu);
		
	 
	 
	  var styleShowMenuItem = {
			
			"display" : "block",
			"color" : "black",
			"z-index" : "1"
			
		};
		
		var objShowMenuItem = document.querySelector(".menu_right_item");
		Object.assign(objShowMenuItem.style, styleShowMenuItem);
		
	 }

	 return (

		<div className='burger' onClick={ShowMenu}>
			<i className="fa-solid fa-bars icon"></i>
		</div>
				
	);
}

export default Show_menu;