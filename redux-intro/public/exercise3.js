// EXERCISE 3
// Let's make the checkbox label say 'checked' whenever we check the checkbox
// The subscribe() callback is unimplemented -> 

let defaultState = {
	isChecked: false
}

let reducer3 = (state = defaultState, action) => {
	// assigning the state object to a copy of the state
	var stateCopy = Object.assign({}, state);// This is a very ES5 way to copy an object 
	// toggle to true and false
	if (action.type == "CLICK_CHECKBOX") {
		stateCopy.isChecked = !stateCopy.isChecked;
		return stateCopy;
	}

	return state;
}

let store3 = Redux.createStore(reducer3);

let checkboxHTML = document.getElementById('checkbox')
let checkboxLabelHTML = document.getElementById('checkbox-label');


// use store3.subscribe() to register a callback
// use store3.getState() in the callback to read the current state 
// use the current state to decide whether checkboxLabelHTML needs to be 'checked' or 'unchecked'
// use checkboxLabelHTML.innerHTML == ...   to update the label with the correct word

store3.subscribe(()=>{
	let state = store3.getState();

	if (state.isChecked) {
		// manipulate the DOM to make the label say checked
		checkboxLabelHTML.innerHTML = 'checked';
	} else {
		// manipulate the DOM to make the label say unchecked
		checkboxLabelHTML.innerHTML = 'unchecked';
	}
});

store3.subscribe(()=> {
	let state = store3.getState();
})


checkboxHTML.addEventListener('change', (e)=>{
	store3.dispatch({
		type: "CLICK_CHECKBOX"
	})
})