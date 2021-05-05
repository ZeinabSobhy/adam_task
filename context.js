
import React, { useState,useContext } from 'react';

const sourceData = [
    {
        name:  "1"
     
     
      
    },
    {
      name:  "2"
      
    },
  
    {
      name:  "3"
      
    },
   
   
   
   ]
const DrContext = React.createContext([{}, () => {}]);

const DrProvider = ({ children }) => {

	const [data, seData] = useState(sourceData );

	return (
		<DrContext.Provider value={[data, seData]}>{children}</DrContext.Provider>
	);
};

export { DrProvider, DrContext };