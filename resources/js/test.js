window.$ = jQuery;
console.log($('body'));
export default class test {
    abc() {
        console.log('abc');
    }
    constructor(a) {
        console.log('construct');
    }


}

$(window).on('load', function() {
    test = new test('a');
    test.abc();
});
