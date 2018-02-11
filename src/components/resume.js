import React, { Component } from 'react';


class Resume extends Component {
   
    render() {
        return (
            <div>
              <form action="">
                  <input type="text"/>
                  <input type="text"/>
                  <input type="text"/>
                  <input type="text"/>
                  <input type="text"/>
              </form>
            </div>
        )
    }
}

// function mapStateToProp(state){
//     return({
//         userName: state.root.userName
//     })
// }
// function mapDispatchToProp(dispatch) {
//     return ({
//         SignOut: () => { dispatch(SignOut()) }
//     })
// }

export default Resume;
