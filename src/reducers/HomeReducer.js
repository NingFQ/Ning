export default function (state=[],action) {
	switch(action.type){
		case "GET_HOME-LIST":
			return action.payload
		default :
			return state;
	}
}
