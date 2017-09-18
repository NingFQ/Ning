export default function (state={},action) {
	switch(action.type){
		case "GET_GOOD_DETAILS" :
			return action.payload;
		default :
			return state;
	}
}
