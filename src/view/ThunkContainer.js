import React, { Component,useEffect } from 'react'
import {connect} from 'react-redux'
// import {fetchUsers} from  './redux/reduxThunk/thunkActions'
import { fetchUsers }  from  './redux'

 function ThunkContainer ({ userData,fetchUsers }){
    //  useEffect(()=>{
    //     fetchUsers()
    //  },[])
     useEffect(() => {
        fetchUsers()
     }, [])
        // return <h2>hello user </h2>
          return  userData.loading ? (
              <h2>loading</h2>
          ) : userData.error ? (
              <h2>{userData.error}</h2>
          ) : (
              <div>
                  <h2>user list </h2>
                  <div>
                     {
                         userData.users &&
                         userData.users.map(user => <p>{user.name} '/n' {user.email}</p>)
                         
                     } 
                  </div>
              </div>
          )
}
const mapStateToProps = state => {
    return{
        userData : state.thunk
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers : () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ThunkContainer)
