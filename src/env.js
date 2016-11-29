var defaultRoute = 'http://localhost:8888';

var environments = [
    {
        developer: 'Sergey',
        client: 'http://localhost:3000',
        backend: 'http://localhost:7878'
    }
];
var currentEnv;
if (typeof window !== 'undefined') {
    var origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port: '');

    currentEnv = environments.filter((en) => en.client === origin);
}
var backend = currentEnv.length > 0 ? currentEnv[0].backend : defaultRoute;

export default backend;
