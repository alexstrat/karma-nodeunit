(function(window) {

var createStartFn = function (tc, runnerPassedIn) {
};

var createDumpFn = function (tc, serialize) {
};


window.__testacular__.start = createStartFn(window.__testacular__);
window.dump = createDumpFn(window.__testacular__, function (value) {
  return window.angular && window.angular.mock && window.angular.mock.dump(value) || value;
});
})(window);