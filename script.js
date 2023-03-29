let btnBack = document.querySelector(`button`);

window.addEventListener('popstate', detecthistory); => {
    window.history.back();
});