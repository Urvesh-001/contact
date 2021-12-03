const initialState = [
    {
        id:0,
        name:"UKP",
        number:123456789,
        email:"UKP@YAHOO.COM"
    },
    {
        id:1,
        name:"TTKP",
        number:987654321,
        email:"TTKP@YAHOO.COM"
    }
];

const contactReducer = (state = initialState, action)=>{
    switch(action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state
        
        case "UPDATE_CONTACT":   
            const updateState = state.map((contact)=>contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;

        case "DELETE_CONTACT":
            const filterContact = state.filter(contact => contact.id !== action.payload && contact)
            state = filterContact;
            return state;  
        default: 
          return state;
    } 
};

export default contactReducer;