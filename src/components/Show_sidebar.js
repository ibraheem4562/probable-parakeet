function Show_sidebar() {
  const sideBar = () => {
	  
    var styleSideBar = {
			
			"position" : "absolute",
			"display" : "block",
			"left" : "30%",
			"top" : "100px",
			"z-index" : "2"
			
		};
		
		var objSideBar = document.querySelector(".side_bar");
		Object.assign(objSideBar.style, styleSideBar);
		
	  }

	  return (
		<div className='register_button' onClick={sideBar}>
			<button>find property</button>
		</div>
	  );
}

export default Show_sidebar;