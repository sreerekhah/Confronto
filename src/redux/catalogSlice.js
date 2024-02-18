// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
//   export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
//     const res = await fetch("/api/products");
//     console.log("res---",res)
//     return res?.json();
//  });
//   const initialState = {
//     products:[],
//     selected:null
//   };
// const catalogSlice = createSlice({
//     name:'catalog',
//     initialState,
//     reducers :{
//     },
//     extraReducers(builder) {
//         builder
//           .addCase(fetchTodos.fulfilled, (state, action) => {
//             state.status = 'succeeded'
            
//             console.log("state in catalogslice--",state)
//           })   
//       }
// })
// export const {initializeCatalog} = catalogSlice.actions
// export const catalogreducer = catalogSlice.reducer;


// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTodos } from

// const ProductList = () => {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.catalog.products);
//     const status = useSelector((state) => state.catalog.status);

//     useEffect(() => {
//         dispatch(fetchTodos());
//     }, [dispatch]);