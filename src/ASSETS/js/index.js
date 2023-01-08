if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
}

if (window.location.href !== window.location.origin + window.location.pathname) {
    history.pushState({}, null, window.location.origin + window.location.pathname);
}
