import React from "react";

const Header=({handleToggleDarkMode, darkMode})=>{

return(
    <div className="header">
        <h1>Notes</h1>
        <button onClick={()=>{
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode)
                
                console.log("Header", darkMode);   }
                  
                
                    
				} className="save">Toogle Mode</button>

    </div>
)
}
export default Header;