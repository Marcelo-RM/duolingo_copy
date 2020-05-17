export const selectFlag = (flag) => {
    return {
        type: "SELECT_FLAG",
        flagSelected: flag,
        showChangeFlag: false,
    }
};

export const toggleFlag = (showChangeFlag) => {
    return {
        type: "TOGGLE_SELECT_FLAG",
        showChangeFlag,
    }
};