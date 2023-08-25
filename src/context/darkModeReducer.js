const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return { darkmode: false };
    case "DARK":
      return { darkmode: true };
    case "TOGGOLE":
      return { darkmode: !state.darkmode };
    default:
      return;
  }
};
export default DarkModeReducer;
