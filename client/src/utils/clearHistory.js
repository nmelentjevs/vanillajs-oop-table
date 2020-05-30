const clearHistory = () =>
  history.pushState({}, `Vanilla JS Table`, `http://localhost:3000/`);

export default clearHistory;
