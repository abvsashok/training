import { GET_TABLE_DATA } from "./getTableDataTypes"
import { initialState } from "./getTableInitialState"

export default (state = initialState, action) => {
  switch (action.type) {

  case GET_TABLE_DATA:
    // return { ...state, ...payload }
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
        console.log(res.data)
        return{
            userTableData:res.data
        }
      }).catch((err)=>{
      console.log(err)
      })

  default:
    return state
  }
}



