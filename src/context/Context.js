
// import React, { useEffect } from 'react'
// import { createContext } from 'react'
// import { client } from '../config/client';

// const userData=createContext();

// export const context = ({children}) => {

//     const [user,setUser]=useState();

//     useEffect(()=>{
//         client.get("/verifyToken")
//             .then(async(res)=>{
//                 setUser(res.data);
//             })
//     },[])

//   return (
//     <userData.Provider value={user}>
//         {children}
//     </userData.Provider>
//   )
// }
