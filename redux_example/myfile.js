// initilize redux, 1 global object

// can also define state this way
// let initialState = 0;
// let initialState = {
    // user: null
// }
// can split this up into different files as your app gets bigger


// defines the behavior
const reducer = (state = 0, action) => {
    if (action.type == "INCREMENT") {
        return state + 1;
    } else {
        return state;  //if someone does an action that is not define, keep the current state as is
    }
}

let store = Redux.createStore(reducer);

// dispatch actions
document.addEventListener('click', (e) =>{
    store.dispatch({
        type: "INCREMENT"
    })
});

// how the website renders itself
store.subscribe(()=> {
    let state = store.getState();

    let finalHTML = `
        <div>Hello, this is a counter</div
        <div>${state}</div> 
    `
                        // this is where you'll see the counter increase by 1 each time you click

    document.getElementById('root').innerHTML = store.getState(); // this is updating our document
});

