export default function (state=[],action) {
	switch(action.type){
		case "GET_BANNER":
			return action.payload
		default :
			return state;
	}
}
