export default function (state=[],action) {
	switch(action.type){
		case "GET_ORDER-LIST":
			return action.payload
		default :
			return state;
	}
}