const createStore=(initialState = {})=>{
    let state = initialState;
    const listeners = [];

    const getState = () => state;
    
    const subscribe = (listener)=>{
        listeners.push(listener);
    }

    const dispatch = (action)=>{
        state = action(state);
        listeners.forEach((l)=>l(state));
    }

    return {getState, subscribe, dispatch}
}

export default createStore;
