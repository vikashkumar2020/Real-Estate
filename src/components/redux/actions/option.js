const optionChange = (val) => {
    return {
        type: "OPTION_CHANGE",
        payload : val,
    }
}

export default optionChange;