const optionreducer = (state="Buy",action) => {
    if(action.type === "OPTION_CHANGE")
    {
        state = action.payload;
    }
    return state;
}
export default optionreducer;