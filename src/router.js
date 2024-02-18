import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import Product from './components/Product';
import Compare from "./components/Compare";
import Root from "./components/Root";
//  export const router = createBrowserRouter(createRoutesFromElements(
//    <>
//     <Route path="/" element={<Catalog />}></Route>
//     <Route path="/product/:id" element={<Product/>}></Route>
//     <Route path="/compare" element={<Compare/>}></Route>   
//     </> 
    
//  ))

const router = createBrowserRouter(
   [
      {
         path:"/",
         element:<Root/>,
         children:[
            {
               path:"/",
               element: <Catalog/>,
               index:true
            },
            {
               path:"/product/:id",
               element:<Product/>
            },
            {
               path:"/compare",
               element:<Compare/>
            }
         ]
      }
   ]
);

export default router