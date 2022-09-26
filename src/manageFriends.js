let state = {
  friends : []
}

let action = {
  type : "friends/add",
  payload: {
    name: "Chrome Boi",
    hometown: "NYC",
    id: 1
  },
  
  // type : "friends/remove",
  // id: 1

}

export function manageFriends(state, action) {
  switch(action.type){
    case "friends/add":
      // let new_friends_list = [...state.friends, action.payload]
      return {
        state: [...state.friends, action.payload]
      }
    // case "friends/remove":
    //   let updated_friends_list = state.friends.filter(friend => friend.id != action.id)
    //   return {state: updated_friends_list} 
    // default:
      return state

  }
}
