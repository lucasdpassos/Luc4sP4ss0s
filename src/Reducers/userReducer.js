// Este conceito é aplicado caso posteriormente seja estruturada uma autenticação via e-mail do usuário


const initialState = {
    email:''
}

export default (state = initialState, action) => {

        if(action.type === 'SET_EMAIL'){
            return { ...state, email:action.payload.email };
        }

        return state;

}