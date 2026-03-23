/** @license Apache-2.0 */

'use strict';

/**
* Create a function for performing a reduction on a provided ndarray according to a callback function.
*
* @module @stdlib/ndarray-base-unary-reduce-strided1d-dispatch-by-factory
*
* @example
* var base = require( '@stdlib/stats-base-ndarray-max-by' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var factory = require( '@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-by-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'same',
*     'casting': 'none'
* };
*
* var table = {
*     'default': base
* };
* var maxBy = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* function clbk( v ) {
*     return v * 2.0;
* }
*
* var y = maxBy( x, clbk );
* // returns <ndarray>
*
* var v = y.get();
* // returns 4.0
*
* @example
* var base = require( '@stdlib/stats-base-ndarray-max-by' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var factory = require( '@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-by-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'same',
*     'casting': 'none'
* };
*
* var table = {
*     'default': base
* };
* var maxBy = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0 ];
* var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );
*
* function clbk( v ) {
*     return v * 2.0;
* }
*
* var out = maxBy.assign( x, y, clbk );
* // returns <ndarray>
*
* var v = out.get();
* // returns 4.0
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
