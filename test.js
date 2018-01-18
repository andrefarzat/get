const assert = require('assert');


describe('get', function() {

    let get = require('./get');

    it('should return the right index', function() {
        let obj = {'a': 1};
        assert.equal(get(obj, 'a'), 1);

        obj = {a: {b: {c: 2}}};
        assert.equal(get(obj, 'a.b.c'), 2);

        obj = {array: [{key: 'value'}]};
        assert.equal(get(obj, 'array.0.key'), 'value');
    });

    it('should return undefined when any index is wrong', function() {
        let obj = {'a': 1};
        assert.equal(get(obj, 'b'), undefined);
        assert.equal(get(obj, 'a.b.c', undefined));
    });

    it('should return undefined to all non-object parameters', function() {
        assert.equal(get('abc', 'a.b.c'), undefined);
        assert.equal(get(1, 'a.b.c'), undefined);
        assert.equal(get(undefined, 'a.b.c'), undefined);
        assert.equal(get(null, 'a.b.c'), undefined);
        assert.equal(get({}, 'a.b.c'), undefined);
        assert.equal(get(NaN, 'a.b.c'), undefined);
        assert.equal(get(function() {}, 'a.b.c'), undefined);
        assert.equal(get(Infinity, 'a.b.c'), undefined);
    });
});