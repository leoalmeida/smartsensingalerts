// This lets systemjs.conf.js knows how to load the module during testing
((global: any) => {
    global.ENV = 'testing';
})(this);
