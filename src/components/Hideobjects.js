function Hideobjects() {
  const HideObjects = () => {
	  
	  
		 var styleHideObjects = {
			
			"display" : "none"
		};
		
		var objHideSideBar = document.querySelector(".side_bar");
		Object.assign(objHideSideBar.style, styleHideObjects);
		
		var objHideMenu = document.querySelector(".menu_right");
		Object.assign(objHideMenu.style, styleHideObjects);
		
	 }

	 return (

		<div className='HideDiv' onClick={HideObjects} >
		</div>
				
	);
}

{/*style='width: 100%;height: 100%; z-index: -1;'*/}

export default Hideobjects;