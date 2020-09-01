import React from 'react';




function Comment(props) {
    return (
        <div>
            <h1> What is the Time!</h1>
            <h2>It's {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

// reactDom.render(
//     <Router>
//         <Route path='/test' component={Comment} />
//     </Router>
//     ,
//     document.getElementById('root')
// );

// function Image(props) {

//     return {


//     }
// }

export default Comment;