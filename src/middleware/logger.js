const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log("The action: ", action);
        const returnvalue = next(action);
        console.log("The new State is ", store.getState())
    console.groupEnd()

    return returnvalue

}

export default logger