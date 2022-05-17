/* ****** ****** */
// XATS2JS_PRELUDE
/* ****** ****** */

'use strict';

/* ****** ****** */
/*
Basics for Xats2js
*/
/* ****** ****** */
//
// prelude/bool.sats
//
/* ****** ****** */
function
XATS2JS_bool_neg
  (b0)
{ return !b0 ; }
/* ****** ****** */
function
XATS2JS_bool_add
  (b1, b2)
{ return (b1 || b2); }
function
XATS2JS_bool_mul
  (b1, b2)
{ return (b1 && b2); }
/* ****** ****** */
//
// prelude/char.sats
//
/* ****** ****** */
function
XATS2JS_char_eqzq
  (c0)
{
return (0===c0); // eqzq
}
function
XATS2JS_char_neqzq
  (c0)
{
return (0!==c0); // neqzq
}
/* ****** ****** */
function
XATS2JS_char_cmp
  (c1, c2)
{
if
(c1 < c2)
return (-1);
else
return (c1 <= c2 ? 0 : 1);
}
/* ****** ****** */
function
XATS2JS_char_equal
  (c1, c2)
{
return (c1===c2); // equal
}
function
XATS2JS_char_noteq
  (c1, c2)
{
return (c1!==c2); // noteq
}
/* ****** ****** */
//
// prelude/gint.sats
//
/* ****** ****** */
function
XATS2JS_gint_abs_sint
  (x0)
{
if
(x0 >= 0)
{
  return x0; // abs
}
else
{
  return -x0; // abs
}
}
/* ****** ****** */
function
XATS2JS_gint_neg_sint
  (x0)
{
return (-x0); // neg
}
/* ****** ****** */
function
XATS2JS_gint_succ_sint
  (x0)
{
return (x0 + 1); // +1
}
function
XATS2JS_gint_pred_sint
  (x0)
{
return (x0 - 1); // -1
}
/* ****** ****** */
function
XATS2JS_gint_lt_sint_sint
  (x1, x2)
{
return (x1 < x2); // lt
}
function
XATS2JS_gint_gt_sint_sint
  (x1, x2)
{
return (x1 > x2); // gt
}
function
XATS2JS_gint_eq_sint_sint
  (x1, x2)
{
return (x1 === x2); // eq
}
function
XATS2JS_gint_lte_sint_sint
  (x1, x2)
{
return (x1 <= x2); // lte
}
function
XATS2JS_gint_gte_sint_sint
  (x1, x2)
{
return (x1 >= x2); // gte
}
function
XATS2JS_gint_neq_sint_sint
  (x1, x2)
{
return (x1 !== x2); // neq
}
/* ****** ****** */
function
XATS2JS_gint_cmp_sint_sint
  (x1, x2)
{
if
(x1 < x2)
return (-1);
else
return (x1 <= x2 ? 0 : 1);
}
/* ****** ****** */
function
XATS2JS_gint_add_sint_sint
  (x1, x2)
{
   return (x1 + x2); // add
}
/* ****** ****** */
function
XATS2JS_gint_sub_sint_sint
  (x1, x2)
{
  return (x1 - x2); // sub
}
/* ****** ****** */
function
XATS2JS_gint_mul_sint_sint
  (x1, x2)
{
  return (x1 * x2); // mul
}
/* ****** ****** */
function
XATS2JS_gint_mod_sint_sint
  (x1, x2)
{
  return (x1 % x2); // mod
}
/* ****** ****** */
function
XATS2JS_gint_div_sint_sint
  (x1, x2)
{ 
//
  let q0 = x1 / x2;
//
  if
  (q0 >= 0)
  {
    return Math.floor(q0);
  }
  else
  {
    return Math.ceil( q0 );
  }
}
/* ****** ****** */
//
// prelude/gflt.sats
//
/* ****** ****** */
function
XATS2JS_gflt_i_dflt
  (x0)
{
  return x0; // int
}
/* ****** ****** */
function
XATS2JS_gflt_abs_dflt
  (x0)
{
if
(x0 >= 0.0)
{
  return x0; // abs
}
else
{
  return -x0; // abs
}
}
/* ****** ****** */
function
XATS2JS_gflt_neg_dflt
  (x0)
{
return (-x0); // neg
}
/* ****** ****** */
function
XATS2JS_gflt_succ_dflt
  (x0)
{
return (x0 + 1); // +1
}
function
XATS2JS_gflt_pred_dflt
  (x0)
{
return (x0 - 1); // -1
}
/* ****** ****** */
function
XATS2JS_gflt_lt_dflt_dflt
  (x1, x2)
{
return (x1 < x2); // lt
}
function
XATS2JS_gflt_gt_dflt_dflt
  (x1, x2)
{
return (x1 > x2); // gt
}
function
XATS2JS_gflt_eq_dflt_dflt
  (x1, x2)
{
return (x1 === x2); // eq
}
function
XATS2JS_gflt_lte_dflt_dflt
  (x1, x2)
{
return (x1 <= x2); // lte
}
function
XATS2JS_gflt_gte_dflt_dflt
  (x1, x2)
{
return (x1 >= x2); // gte
}
function
XATS2JS_gflt_neq_dflt_dflt
  (x1, x2)
{
return (x1 !== x2); // neq
}
/* ****** ****** */
function
XATS2JS_gflt_cmp_dflt_dflt
  (x1, x2)
{
if
(x1 < x2)
return (-1);
else
return (x1 <= x2 ? 0 : 1);
}
/* ****** ****** */
function
XATS2JS_gflt_add_dflt_dflt
  (x1, x2)
{
   return (x1 + x2); // add
}
/* ****** ****** */
function
XATS2JS_gflt_sub_dflt_dflt
  (x1, x2)
{
   return (x1 - x2); // sub
}
/* ****** ****** */
function
XATS2JS_gflt_mul_dflt_dflt
  (x1, x2)
{
   return (x1 * x2); // mul
}
/* ****** ****** */
function
XATS2JS_gflt_div_dflt_dflt
  (x1, x2)
{
   return (x1 / x2); // div
}
/* ****** ****** */
//
// prelude/string.sats
//
/* ****** ****** */
//
// HX-2020-09-28:
// Please note that:
// A string is a JS-string
// A string_vt is a JS-array
//
/* ****** ****** */
function
XATS2JS_string_vt2t
  (cs)
{
cs.pop(); // remove the last '0'
let res = // from array to string
String.fromCharCode.apply(null, cs);
return res; // XATS2JS_string_vt2t
}
/* ****** ****** */
//
function
XATS2JS_string_nilq
  (opt)
{
return(opt==="");
}
function
XATS2JS_string_consq
  (opt)
{
return(opt!=="");
}
/* ****** ****** */
//
function
XATS2JS_stropt_nilq
  (opt)
{
return(opt===null);
}
function
XATS2JS_stropt_consq
  (opt)
{
return(opt!==null);
}
//
/* ****** ****** */
function
XATS2JS_string_lt
  (x1, x2)
{
  return (x1 < x2);
}
function
XATS2JS_string_gt
  (x1, x2)
{
  return (x1 > x2);
}
function
XATS2JS_string_eq
  (x1, x2)
{
  return (x1===x2);
}
function
XATS2JS_string_lte
  (x1, x2)
{
  return (x1 <= x2);
}
function
XATS2JS_string_gte
  (x1, x2)
{
  return (x1 >= x2);
}
function
XATS2JS_string_neq
  (x1, x2)
{
  return (x1 !== x2);
}
/* ****** ****** */
function
XATS2JS_string_cmp
  (x1, x2)
{
if(x1 < x2)
{
  return -1;
} else
{
  return (x1===x2 ? 0 : 1);
} // end of [if]
}
/* ****** ****** */
function
XATS2JS_string_head_opt
  (cs)
{
if
(cs.length <= 0)
{
  return 0; // none
}
return cs.charCodeAt(0);
}
/* ****** ****** */
function
XATS2JS_string_head_raw
  (cs)
{
return cs.charCodeAt(0);
}
/* ****** ****** */
function
XATS2JS_string_tail_raw
  (cs)
{
return cs.slice(1);//tail
}
/* ****** ****** */
function
XATS2JS_string_length
  (cs)
{
  return (cs.length);
}
//
function
XATS2JS_string_vt_length
  (cs)
{
// HX: skipping
// the ending null char
  return (cs.length - 1);
}
function
XATS2JS_string_vt_length1
  (cs)
{
// HX: skipping
// the ending null char
  return (cs.length - 1);
}
//
/* ****** ****** */
function
XATS2JS_string_get_at
  (cs, i0)
{
return cs.charCodeAt(i0);
}
/* ****** ****** */
function
XATS2JS_strtmp_vt_alloc
  (bsz)
{
  let
  cs =
  new Array(bsz+1);
  cs[bsz] = 0; return cs;
}
function
XATS2JS_string_vt_get_at
  (cs, i0)
{
  return cs[i0];
  //cs:JS_array(char)
}
function
XATS2JS_strtmp_vt_set_at
  (cs, i0, c0)
{
  return (cs[i0] = c0);
}
/* ****** ****** */
function
XATS2JS_string_forall_cfr
  (cs, f0)
{
let i0;
let
res = true;
let
len = cs.length
for
( i0 = 0
; i0 < len; i0 += 1)
{
let c0 = cs.charCodeAt(i0);
if
(!f0(c0)){res = false; break;}
}
return res; // string_forall_cfr
}
/* ****** ****** */
function
XATS2JS_string_rforall_cfr
  (cs, f0)
{
let i0;
let
res = true;
let
len = cs.length
for
( i0 = len
; i0 >= 1 ; i0 -= 1)
{
let c0 = cs.charCodeAt(i0-1);
if
(!f0(c0)){res = false; break;}
}
return res; // string_rforall_cfr
}
/* ****** ****** */
function
XATS2JS_string_vt_forall_cfr
  (cs, f0)
{
let i0;
let
res = true;
let
len = cs.length-1;
for
( i0 = 0
; i0 < len; i0 += 1)
{
if
(!f0(cs[i0])){res = false; break;}
}
return res; // string_vt_forall_cfr
}
/* ****** ****** */
function
XATS2JS_string_vt_rforall_cfr
  (cs, f0)
{
let i0;
let
res = true;
let
len = cs.length-1;
for
( i0 = len
; i0 >= 1 ; i0 -= 1)
{
if
(!f0(cs[i0-1])){res = false; break;}
}
return res; // string_vt_rforall_cfr
}
/* ****** ****** */

/* end of [XATS2JS_basics.cats] */
/* ****** ****** */
/*
Runtime for Xats2js
*/
/* ****** ****** */
const
XATS2JS_nil = null
const
XATS2JS_top = null
const
XATS2JS_none = null
const
XATS2JS_null = null
const
XATS2JS_void = null
/* ****** ****** */
function
XATS2JS_fnull
  (    )
{
throw new Error();
}
/* ****** ****** */
var // global
XATS2JS_excbas = 0
var // global
XATS2JS_exctag = 0
function
XATS2JS_new_exctag
  (    )
{
let bas0 =
XATS2JS_excbas;
let tag1 =
XATS2JS_exctag + 1;
XATS2JS_exctag = tag1;
return ( bas0 + tag1 );
}
/* ****** ****** */
function
XATS2JS_char
  ( cs )
{
// cs: singleton
return cs.charCodeAt(0);
}
function
XATS2JS_string
  ( cs )
{
return cs;//cs:JS_string
}
/* ****** ****** */
function
XATS2JS_fcast
  ( x0 )
{
return x0; //obj: object
}  
/* ****** ****** */
//
function
XATS2JS_raise
  ( exn )
{
  throw exn;//no return!
}
function
XATS2JS_reraise
  ( exn )
{
  throw exn;//no return!
}
/* ****** ****** */
//
function
XATS2JS_assert
  ( b0 )
{
if
(!b0)
{
  // [b0] is false
  throw new Error();
} // if-then
return ; // [b0] is true
}
//
function
XATS2JS_assertloc
  ( b0, loc )
{
if
(!b0)
{
  // [b0] is false
  throw new Error(loc);
} // if-then
return ; // [b0] is true
}
function
XATS2JS_assertmsg
  ( b0, msg )
{
if
(!b0)
{
  // [b0] is false
  throw new Error(msg);
} // if-then
return ; // [b0] is true
}
//
/* ****** ****** */
function
XATS2JS_lval_err
  (loc)
{
  // non-left-val!
  throw new Error(loc);
}
/* ****** ****** */
function
XATS2JS_lval_get
  (lvl0)
{
//
let
root = lvl0.root;
let
offs = lvl0.offs;
//
if
(
lvl0.hasOwnProperty('prev')
)
root =
XATS2JS_lval_get(lvl0.prev);
//  
return root[offs]; // JS_lval_get
}
/* ****** ****** */
function
XATS2JS_lval_set
  (lvl0, obj1)
{
//
let root = null;
let offs = lvl0.offs;
//
if
(
lvl0.hasOwnProperty('prev')
)
{ // flat tuple
root =
XATS2JS_lval_get(lvl0.prev);
root =
root.slice(); root[offs] = obj1;
XATS2JS_lval_set(lvl0.prev, root);
}
else
{
  lvl0.root[offs] = obj1; // boxed
}
return; // end of [XATS2JS_lval_set]
}
/* ****** ****** */
//
function
XATS2JS_ctag
  (x0)
{ return x0[0]; }
//
function
XATS2JS_carg
  (x0, i0)
{ return x0[i0]; }
//
function
XATS2JS_targ
  (x0, i0)
{ return x0[i0]; }
//
/* ****** ****** */
function
XATS2JS_patckerr0()
{
  throw new Error();
}
function
XATS2JS_patckerr1(loc)
{
  throw new Error(loc);
}
/* ****** ****** */
function
XATS2JS_matcherr0()
{
  throw new Error();
}
function
XATS2JS_matcherr1(loc)
{
  throw new Error(loc);
}
/* ****** ****** */
function
XATS2JS_new_var0
  ()
{
return {root:[null], offs:0};
}
function
XATS2JS_new_var1
  (init)
{
return {root:[init], offs:0};
}
/* ****** ****** */
function
XATS2JS_new_cofs
  (lvl1, idx2)
{
return {root:lvl1, offs:idx2}; 
}
function
XATS2JS_new_tofs
  (lvl1, idx2)
{
return {root:lvl1, offs:idx2}; 
}
/* ****** ****** */
function
XATS2JS_new_cptr
  (lvl1, idx2)
{
let
con1 =
XATS2JS_lval_get(lvl1);
return {root:con1, offs:idx2}; 
}
function
XATS2JS_new_tptr
  (lvl1, idx2)
{
let
tup1 =
XATS2JS_lval_get(lvl1);
if
(tup1[0] >= 0)
return {
  root:tup1, offs:idx2
};
else
return {
  prev:lvl1,
  root:tup1, offs:idx2
}; // end of [XATS2JS_new_tptr]
}
/* ****** ****** */

function
XATS2JS_new_lazy
  (thunk)
{
return {
  lztag: 0 // unused
, lzval: null // saved
, lzfun: thunk // for eval
}
} // end of [XATS2JS_new_lazy]

function
XATS2JS_lazy_eval
  (lzobj)
{
//
let lzres;
//
if
(lzobj.lztag===0)
{
lzres =
lzobj.lzfun();
lzobj.lztag = 1;
lzobj.lzval = lzres;
} else
{
//
// HX: tracking
//
  lzobj.lztag += 1;
  lzres = lzobj.lzval;
} ;
return lzres; // lazy_eval
} // end of [XATS2JS_lazy_eval]

/* ****** ****** */

function
XATS2JS_new_llazy
  (thunk, frees)
{
return {
  lztag: false // unused
, lzfun: thunk // for eval
, lzfrs: frees // for frees
}
} // end of [XATS2JS_new_llazy]

function
XATS2JS_llazy_eval
  (lzobj)
{
//
if
(lzobj.lztag)
{
  throw new Error();
}
//
  lzobj.lztag = true; // used
  return lzobj.lzfun(); // eval
//
} // end of [XATS2JS_llazy_eval]

function
XATS2JS_llazy_free
  (lzobj)
{
//
if
(lzobj.lztag)
{
  throw new Error();
}
//
  lzobj.lztag = true; // used
  return lzobj.lzfrs(); // free
//
} // end of [XATS2JS_llazy_free]

/* ****** ****** */

/* end of [XATS2JS_runtime.cats] */
/* ****** ****** */
/*
Basics for Xats2js
*/
/* ****** ****** */
//
/*
prelude/array.sats
For arrays of
various dimensions:
//
Ref: 0-dimensional
Array: 1-dimensional
Matrix: 2-dimensional
//
*/
//
/* ****** ****** */
//
/*
HX: 0-dimensional
*/
//
/* ****** ****** */

function
XATS2JS_a0ptr_make
  (x0)
{
let A0 =
XATS2JS_a0ptr_alloc();
A0[0] = x0; return A0;
}
function
XATS2JS_a0ptr_alloc
  (  )
{
  return new Array(1);
}

/* ****** ****** */

function
XATS2JS_a0ref_get
  (A0)
{
  return A0[0];
}

/* ****** ****** */

function
XATS2JS_a0ref_set
  (A0, x0)
{
  return (A0[0] = x0);
}

/* ****** ****** */

function
XATS2JS_a0ref_get0
  (A0)
{
  return A0[0];
}

/* ****** ****** */
//
// HX: 1-dimensional
//
/* ****** ****** */

function
XATS2JS_a1ptr_alloc
  (asz)
{
  return new Array(asz);
}

/* ****** ****** */

function
XATS2JS_a1ref_get_at
  (A0, i0)
{
  return A0[i0];
}
function
XATS2JS_a1ptr_get_at
  (A0, i0)
{
  return A0[i0];
}

/* ****** ****** */

function
XATS2JS_a1ref_set_at
  (A0, i0, x0)
{
  return (A0[i0] = x0);
}
function
XATS2JS_a1ptr_set_at
  (A0, i0, x0)
{
  return (A0[i0] = x0);
}
function
XATS2JS_a1ptr_set_at_raw
  (A0, i0, x0)
{
  return (A0[i0] = x0);
}

/* ****** ****** */
//
// prelude/unsafe.sats
//
/* ****** ****** */
//
function
XATS2JS_UN_p2tr_get
  (ptr)
{
  return XATS2JS_lval_get(ptr);
}
function
XATS2JS_UN_p2tr_set
  (ptr, obj)
{
  XATS2JS_lval_set(ptr, obj); return;
}
//
/* ****** ****** */

/* end of [XATS2JS_prelude.cats] */
/* ****** ****** */
/*
G_eqref for Xats2js
*/
/* ****** ****** */

function
XATS2JS_g_eqref
  (x1, x2)
{
  return (x1 === x2); 
}
function
XATS2JS_g_neqrf
  (x1, x2)
{
  return (x1 !== x2); 
}

/* ****** ****** */

/* end of [XATS2JS_g_eqref.cats] */
/* ****** ****** */
/*
G_print for Xats2js
*/
/* ****** ****** */
//
var
XATS2JS_the_print_store = [];
//
/* ****** ****** */

function
XATS2JS_g_print(obj)
{
var
rep = obj.toString();
XATS2JS_the_print_store.push(rep);
return; // XATS2JS_g_print
}

/* ****** ****** */
function
XATS2JS_bool_print
  (b0)
{
if(b0)
{
XATS2JS_g_print("true");
}
else
{
XATS2JS_g_print("false");
}
return; // XATS2JS_bool_print
}
/* ****** ****** */
function
XATS2JS_char_print
  (c0)
{
// c0: number
XATS2JS_g_print
(String.fromCharCode(c0));
return; // XATS2JS_char_print
}
/* ****** ****** */
function
XATS2JS_gint_print_sint
  (x0)
{
XATS2JS_g_print(x0);
return; // gint_print_sint
}
function
XATS2JS_gint_print_uint
  (x0)
{
XATS2JS_g_print(x0);
return; // gint_print_uint
}
/* ****** ****** */
function
XATS2JS_gflt_print_sflt
  (x0)
{
XATS2JS_g_print(x0);
return; // gint_print_sflt
}
function
XATS2JS_gflt_print_dflt
  (x0)
{
XATS2JS_g_print(x0);
return; // gint_print_dflt
}
/* ****** ****** */
function
XATS2JS_string_print
  (cs)
{
  return XATS2JS_g_print(cs);
}
/* ****** ****** */

function
XATS2JS_the_print_store_join()
{
var
rep =
XATS2JS_the_print_store.join("");
return rep;
} // XATS2JS_the_print_store_join

/* ****** ****** */

function
XATS2JS_the_print_store_clear()
{
XATS2JS_the_print_store = []; return;
} // XATS2JS_the_print_store_clear

/* ****** ****** */

/* end of [XATS2JS_g_print.cats] */
/* ****** ****** */
/*
JSBasics for Xats2js
*/
/* ****** ****** */
function
XATS2JS_jsobj_get_at
  (obj, key)
{
  return obj[ key ];
}
function
XATS2JS_jsobj_set_at
  (obj, key, itm)
{
  return (obj[key] = itm);
}
/* ****** ****** */
// HX-2020-11-09:
// Native arrays for Xats2js
/* ****** ****** */

function
XATS2JS_jsarray_size
  ( xs )
{
  return ( xs.length );
}
function
XATS2JS_jsarray_length
  ( xs )
{
  return ( xs.length );
}

/* ****** ****** */

function
XATS2JS_jsarray_get_at
  (xs, i0)
{
  return xs[i0];
}
function
XATS2JS_jsarray_set_at
  (xs, i0, x0)
{
  return ( xs[i0] = x0 );
}

/* ****** ****** */
//
// HX-2020-11-28:
// Native objmaps for Xats2js
//
/* ****** ****** */

function
XATS2JS_jsobjmap_keys
   (obj)
{
return Object.keys(obj);
} // XATS2JS_jsobjmap_keys

/* ****** ****** */

function
XATS2JS_jsobjmap_keyq
   (obj, key)
{
return obj.hasOwnProperty(key);
} // XATS2JS_jsobjmap_keyq

/* ****** ****** */

function
XATS2JS_jsobjmap_make_nil
  ()
{
  return {} ;
} // XATS2JS_jsobjmap_make_nil

/* ****** ****** */

function
XATS2JS_jsobjmap_search_opt
   (obj, key)
{
//
let itm0 = obj[key];
//
if(itm0===undefined)
{
  return XATS2JS_optn_vt_nil();
} else {
  return XATS2JS_optn_vt_cons(itm0);
} // end of [if]
//
} // [ XATS2JS_jsobjmap_search_opt ]

/* ****** ****** */

function
XATS2JS_jsobjmap_insert_any
   (obj, key, itm1)
{
  obj[key] = itm1; return;
} // [XATS2JS_jsobjmap_insert_any]

function
XATS2JS_jsobjmap_remove_any
   (obj, key)
{
  delete object[key]; return ;
} // [XATS2JS_jsobjmap_remove_any]

/* ****** ****** */

function
XATS2JS_jsobjmap_insert_opt
   (obj, key, itm1)
{
//
let itm0 = obj[key];
//
if(itm0===undefined)
{
  obj[key] = itm1;
  return XATS2JS_optn_vt_nil();
} else {
  obj[key] = itm1;
  return XATS2JS_optn_vt_cons(itm0);
} // end of [if]
//
} // [ XATS2JS_jsobjmap_insert_opt ]

function
XATS2JS_jsobjmap_remove_opt
   (obj, key)
{
//
let itm0 = obj[key];
//
if(itm0===undefined)
{
  return XATS2JS_optn_vt_nil();
} else {
  delete object[key];
  return XATS2JS_optn_vt_cons(itm0);
} // end of [if]
//
} // [ XATS2JS_jsobjmap_remove_opt ]

/* ****** ****** */

/* end of [XATS2JS_jsbasics.cats] */
// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(105(line=8,offs=1)--160(line=10,offs=27))
// L1DCLnone1(...)

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(239(line=18,offs=1)--311(line=24,offs=24))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(315(line=26,offs=1)--352(line=27,offs=30))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(387(line=32,offs=1)--480(line=40,offs=26))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(489(line=42,offs=1)--582(line=50,offs=26))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(586(line=52,offs=1)--623(line=53,offs=30))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(624(line=54,offs=1)--661(line=55,offs=30))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(768(line=65,offs=1)--816(line=67,offs=24))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(820(line=69,offs=1)--868(line=71,offs=24))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(900(line=75,offs=1)--950(line=77,offs=29))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(951(line=78,offs=1)--990(line=79,offs=32))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(999(line=81,offs=1)--1050(line=83,offs=29))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1051(line=84,offs=1)--1092(line=85,offs=34))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1121(line=88,offs=1)--1182(line=91,offs=30))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1183(line=92,offs=1)--1220(line=93,offs=30))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1249(line=96,offs=1)--1312(line=99,offs=30))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1313(line=100,offs=1)--1354(line=101,offs=34))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1363(line=103,offs=1)--1426(line=106,offs=30))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1427(line=107,offs=1)--1468(line=108,offs=34))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1547(line=116,offs=1)--1618(line=120,offs=33))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1619(line=121,offs=1)--1666(line=122,offs=40))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1701(line=127,offs=1)--1776(line=131,offs=37))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1777(line=132,offs=1)--1824(line=133,offs=40))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1859(line=138,offs=1)--1932(line=142,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(1941(line=144,offs=1)--2014(line=148,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2015(line=149,offs=1)--2064(line=150,offs=42))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2065(line=151,offs=1)--2114(line=152,offs=42))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2149(line=157,offs=1)--2240(line=163,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2241(line=164,offs=1)--2296(line=165,offs=48))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2308(line=168,offs=1)--2399(line=174,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2400(line=175,offs=1)--2455(line=176,offs=48))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2467(line=179,offs=1)--2558(line=185,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2559(line=186,offs=1)--2614(line=187,offs=48))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2626(line=190,offs=1)--2719(line=196,offs=35))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2720(line=197,offs=1)--2777(line=198,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2789(line=201,offs=1)--2882(line=207,offs=35))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2883(line=208,offs=1)--2940(line=209,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(2952(line=212,offs=1)--3045(line=218,offs=35))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3046(line=219,offs=1)--3103(line=220,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3136(line=225,offs=1)--3242(line=232,offs=37))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3243(line=233,offs=1)--3300(line=234,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3333(line=239,offs=1)--3427(line=245,offs=36))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3428(line=246,offs=1)--3485(line=247,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3494(line=249,offs=1)--3588(line=255,offs=36))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3589(line=256,offs=1)--3646(line=257,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3658(line=260,offs=1)--3752(line=266,offs=36))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3753(line=267,offs=1)--3810(line=268,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3819(line=270,offs=1)--3913(line=276,offs=36))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3914(line=277,offs=1)--3971(line=278,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(3980(line=280,offs=1)--4077(line=286,offs=39))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4078(line=287,offs=1)--4135(line=288,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4217(line=297,offs=1)--4271(line=299,offs=31))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4272(line=300,offs=1)--4315(line=301,offs=36))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4350(line=306,offs=1)--4408(line=308,offs=33))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4409(line=309,offs=1)--4456(line=310,offs=40))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4468(line=313,offs=1)--4526(line=315,offs=33))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4527(line=316,offs=1)--4574(line=317,offs=40))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4609(line=322,offs=1)--4668(line=324,offs=33))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4669(line=325,offs=1)--4718(line=326,offs=42))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4727(line=328,offs=1)--4786(line=330,offs=33))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4787(line=331,offs=1)--4836(line=332,offs=42))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4871(line=337,offs=1)--4941(line=339,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(4950(line=341,offs=1)--5020(line=343,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5029(line=345,offs=1)--5099(line=347,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5108(line=349,offs=1)--5179(line=351,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5188(line=353,offs=1)--5259(line=355,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5268(line=357,offs=1)--5339(line=359,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5343(line=361,offs=1)--5398(line=362,offs=48))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5399(line=363,offs=1)--5454(line=364,offs=48))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5455(line=365,offs=1)--5510(line=366,offs=48))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5511(line=367,offs=1)--5568(line=368,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5569(line=369,offs=1)--5626(line=370,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5627(line=371,offs=1)--5684(line=372,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5719(line=377,offs=1)--5790(line=379,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5791(line=380,offs=1)--5848(line=381,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5883(line=386,offs=1)--5954(line=388,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(5963(line=390,offs=1)--6034(line=392,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6043(line=394,offs=1)--6114(line=396,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6123(line=398,offs=1)--6194(line=400,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6198(line=402,offs=1)--6255(line=403,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6256(line=404,offs=1)--6313(line=405,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6314(line=406,offs=1)--6371(line=407,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6372(line=408,offs=1)--6429(line=409,offs=50))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6502(line=416,offs=1)--6622(line=426,offs=20))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6644(line=429,offs=1)--6761(line=438,offs=20))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6762(line=439,offs=1)--6882(line=448,offs=21))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(6904(line=451,offs=1)--7026(line=461,offs=18))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(7027(line=462,offs=1)--7149(line=472,offs=18))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(7150(line=473,offs=1)--7272(line=483,offs=18))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(7293(line=485,offs=1)--7418(line=495,offs=19))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(7419(line=496,offs=1)--7544(line=506,offs=19))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(7545(line=507,offs=1)--7670(line=517,offs=19))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(7691(line=519,offs=1)--7816(line=529,offs=19))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(7837(line=531,offs=1)--7965(line=540,offs=24))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(7986(line=542,offs=1)--8114(line=551,offs=24))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(8135(line=553,offs=1)--8265(line=562,offs=24))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(8286(line=564,offs=1)--8410(line=573,offs=22))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(8414(line=575,offs=1)--8551(line=584,offs=25))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(8552(line=585,offs=1)--8692(line=594,offs=26))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(8716(line=597,offs=1)--8858(line=608,offs=22))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(8879(line=610,offs=1)--9095(line=625,offs=8))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(9142(line=627,offs=1)--9276(line=636,offs=24))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(9297(line=638,offs=1)--9451(line=648,offs=25))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(9472(line=650,offs=1)--9703(line=665,offs=8))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats@(9754(line=667,offs=1)--9985(line=682,offs=8))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(67(line=6,offs=1)--122(line=8,offs=27))
// L1DCLnone1(...)

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(143(line=10,offs=1)--183(line=11,offs=27))
// L1DCLnone1(...)

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(184(line=12,offs=1)--227(line=13,offs=30))
// L1DCLnone1(...)

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(385(line=25,offs=1)--453(line=30,offs=24))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(462(line=32,offs=1)--534(line=37,offs=27))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(543(line=39,offs=1)--617(line=44,offs=27))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(621(line=46,offs=1)--666(line=47,offs=38))
function
XATS2JS_lazy_cfr(a1x1)
{
let xtmp1;
let xtmp3;
;
xtmp3 =
function()
{
let xtmp2;
{
xtmp2 = a1x1();
}
;
return xtmp2;
} // lam-function
;
xtmp1 = XATS2JS_new_lazy(xtmp3);
return xtmp1;
} // function // XATS2JS_lazy_cfr(0)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(667(line=48,offs=1)--714(line=49,offs=40))
function
XATS2JS_llazy_cfr(a1x1)
{
let xtmp5;
let xtmp7;
let xtmp8;
;
xtmp7 =
function()
{
let xtmp6;
{
xtmp6 = a1x1();
}
;
return xtmp6;
} // lam-function
;
xtmp8 =
function()
{
let xtmp6;
} // lam-function
;
xtmp5 = XATS2JS_new_llazy(xtmp7,xtmp8);
return xtmp5;
} // function // XATS2JS_llazy_cfr(1)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(715(line=50,offs=1)--764(line=51,offs=42))
function
XATS2JS_lazy_vt_cfr(a1x1)
{
let xtmp10;
let xtmp12;
let xtmp13;
;
xtmp12 =
function()
{
let xtmp11;
{
xtmp11 = a1x1();
}
;
return xtmp11;
} // lam-function
;
xtmp13 =
function()
{
let xtmp11;
} // lam-function
;
xtmp10 = XATS2JS_new_llazy(xtmp12,xtmp13);
return xtmp10;
} // function // XATS2JS_lazy_vt_cfr(2)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(846(line=60,offs=1)--896(line=62,offs=30))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(905(line=64,offs=1)--961(line=66,offs=35))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(965(line=68,offs=1)--1004(line=69,offs=32))
function
XATS2JS_optn_nil()
{
let xtmp14;
{
xtmp14 = [1];
}
;
return xtmp14;
} // function // XATS2JS_optn_nil(3)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1005(line=70,offs=1)--1050(line=71,offs=38))
function
XATS2JS_optn_cons(a1x1)
{
let xtmp16;
;
{
xtmp16 = [2, a1x1];
}
;
return xtmp16;
} // function // XATS2JS_optn_cons(4)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1082(line=75,offs=1)--1193(line=81,offs=36))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1194(line=82,offs=1)--1310(line=88,offs=8))
function
XATS2JS_optn_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp20;
let xtmp21;
let xtmp22;
;
;
;
{
xtmp21 = 0;
do {
do {
if(1!==XATS2JS_ctag(L1VALeval0(L1VALtmp(arg[1](17))))) break;
xtmp21 = 1;
} while(false);
if(xtmp21 > 0) break;
do {
if(2!==XATS2JS_ctag(L1VALeval0(L1VALtmp(arg[1](17))))) break;
//L1PCKany();
xtmp21 = 2;
} while(false);
if(xtmp21 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp21) {
case 1:
{
xtmp20 = a1x2();
}
;
break;
case 2:
xtmp22 = L1VALeval0(L1VALtmp(arg[1](17)))[1];
{
xtmp20 = a1x3(xtmp22);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp20;
} // function // XATS2JS_optn_uncons_cfr(5)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1428(line=96,offs=1)--1489(line=99,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1498(line=101,offs=1)--1570(line=105,offs=36))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1574(line=107,offs=1)--1621(line=108,offs=40))
function
XATS2JS_list_nil()
{
let xtmp23;
{
xtmp23 = [1];
}
;
return xtmp23;
} // function // XATS2JS_list_nil(6)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1622(line=109,offs=1)--1675(line=110,offs=46))
function
XATS2JS_list_cons(a1x1, a1x2)
{
let xtmp26;
;
;
{
xtmp26 = [2, a1x1, a1x2];
}
;
return xtmp26;
} // function // XATS2JS_list_cons(7)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1707(line=114,offs=1)--1838(line=122,offs=42))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1839(line=123,offs=1)--1963(line=129,offs=8))
function
XATS2JS_list_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp30;
let xtmp31;
let xtmp32;
let xtmp33;
;
;
;
{
xtmp31 = 0;
do {
do {
if(1!==XATS2JS_ctag(L1VALeval0(L1VALtmp(arg[1](27))))) break;
xtmp31 = 1;
} while(false);
if(xtmp31 > 0) break;
do {
if(2!==XATS2JS_ctag(L1VALeval0(L1VALtmp(arg[1](27))))) break;
//L1PCKany();
//L1PCKany();
xtmp31 = 2;
} while(false);
if(xtmp31 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp31) {
case 1:
{
xtmp30 = a1x2();
}
;
break;
case 2:
xtmp32 = L1VALeval0(L1VALtmp(arg[1](27)))[1];
xtmp33 = L1VALeval0(L1VALtmp(arg[1](27)))[2];
{
xtmp30 = a1x3(xtmp32, xtmp33);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp30;
} // function // XATS2JS_list_uncons_cfr(8)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2083(line=137,offs=1)--2150(line=140,offs=37))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2159(line=142,offs=1)--2239(line=146,offs=41))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2243(line=148,offs=1)--2296(line=149,offs=46))
function
XATS2JS_strmcon_nil()
{
let xtmp34;
{
xtmp34 = [1];
}
;
return xtmp34;
} // function // XATS2JS_strmcon_nil(9)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2297(line=150,offs=1)--2356(line=151,offs=52))
function
XATS2JS_strmcon_cons(a1x1, a1x2)
{
let xtmp37;
;
;
{
xtmp37 = [2, a1x1, a1x2];
}
;
return xtmp37;
} // function // XATS2JS_strmcon_cons(10)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2694(line=176,offs=1)--2831(line=184,offs=44))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2832(line=185,offs=1)--2972(line=191,offs=8))
function
XATS2JS_stream_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp41;
let xtmp42;
let xtmp43;
let xtmp44;
let xtmp45;
;
;
;
xtmp42 = XATS2JS_lazy_eval(a1x1);
{
xtmp43 = 0;
do {
do {
if(1!==XATS2JS_ctag(xtmp42)) break;
xtmp43 = 1;
} while(false);
if(xtmp43 > 0) break;
do {
if(2!==XATS2JS_ctag(xtmp42)) break;
//L1PCKany();
//L1PCKany();
xtmp43 = 2;
} while(false);
if(xtmp43 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp43) {
case 1:
{
xtmp41 = a1x2();
}
;
break;
case 2:
xtmp44 = xtmp42[1];
xtmp45 = xtmp42[2];
{
xtmp41 = a1x3(xtmp44, xtmp45);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp41;
} // function // XATS2JS_stream_uncons_cfr(11)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3042(line=194,offs=1)--3153(line=200,offs=44))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3154(line=201,offs=1)--3256(line=206,offs=8))
function
XATS2JS_streax_uncons_cfr(a1x1, a1x2)
{
let xtmp48;
let xtmp49;
let xtmp50;
let xtmp51;
let xtmp52;
;
;
xtmp49 = XATS2JS_lazy_eval(a1x1);
{
xtmp50 = 0;
do {
do {
if(1!==XATS2JS_ctag(xtmp49)) break;
//L1PCKany();
//L1PCKany();
xtmp50 = 1;
} while(false);
if(xtmp50 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp50) {
case 1:
xtmp51 = xtmp49[1];
xtmp52 = xtmp49[2];
{
xtmp48 = a1x2(xtmp51, xtmp52);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp48;
} // function // XATS2JS_streax_uncons_cfr(12)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3379(line=214,offs=1)--3435(line=216,offs=33))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3444(line=218,offs=1)--3506(line=220,offs=38))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3510(line=222,offs=1)--3555(line=223,offs=38))
function
XATS2JS_optn_vt_nil()
{
let xtmp53;
{
xtmp53 = [1];
}
;
return xtmp53;
} // function // XATS2JS_optn_vt_nil(13)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3556(line=224,offs=1)--3607(line=225,offs=44))
function
XATS2JS_optn_vt_cons(a1x1)
{
let xtmp55;
;
{
xtmp55 = [2, a1x1];
}
;
return xtmp55;
} // function // XATS2JS_optn_vt_cons(14)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3639(line=229,offs=1)--3756(line=235,offs=36))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3757(line=236,offs=1)--3884(line=242,offs=8))
function
XATS2JS_optn_vt_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp59;
let xtmp60;
let xtmp61;
;
;
;
{
xtmp60 = 0;
do {
do {
if(1!==XATS2JS_ctag(L1VALeval0(L1VALtmp(arg[1](56))))) break;
xtmp60 = 1;
} while(false);
if(xtmp60 > 0) break;
do {
if(2!==XATS2JS_ctag(L1VALeval0(L1VALtmp(arg[1](56))))) break;
//L1PCKany();
xtmp60 = 2;
} while(false);
if(xtmp60 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp60) {
case 1:
{
xtmp59 = a1x2();
}
;
break;
case 2:
xtmp61 = L1VALeval0(L1VALtmp(arg[1](56)))[1];
{
xtmp59 = a1x3(xtmp61);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp59;
} // function // XATS2JS_optn_vt_uncons_cfr(15)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4008(line=250,offs=1)--4075(line=253,offs=37))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4084(line=255,offs=1)--4165(line=259,offs=42))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4169(line=261,offs=1)--4222(line=262,offs=46))
function
XATS2JS_list_vt_nil()
{
let xtmp62;
{
xtmp62 = [1];
}
;
return xtmp62;
} // function // XATS2JS_list_vt_nil(16)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4223(line=263,offs=1)--4282(line=264,offs=52))
function
XATS2JS_list_vt_cons(a1x1, a1x2)
{
let xtmp65;
;
;
{
xtmp65 = [2, a1x1, a1x2];
}
;
return xtmp65;
} // function // XATS2JS_list_vt_cons(17)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4314(line=268,offs=1)--4454(line=276,offs=45))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4455(line=277,offs=1)--4590(line=283,offs=8))
function
XATS2JS_list_vt_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp69;
let xtmp70;
let xtmp71;
let xtmp72;
;
;
;
{
xtmp70 = 0;
do {
do {
if(1!==XATS2JS_ctag(L1VALeval0(L1VALtmp(arg[1](66))))) break;
xtmp70 = 1;
} while(false);
if(xtmp70 > 0) break;
do {
if(2!==XATS2JS_ctag(L1VALeval0(L1VALtmp(arg[1](66))))) break;
//L1PCKany();
//L1PCKany();
xtmp70 = 2;
} while(false);
if(xtmp70 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp70) {
case 1:
{
xtmp69 = a1x2();
}
;
break;
case 2:
xtmp71 = L1VALeval0(L1VALtmp(arg[1](66)))[1];
xtmp72 = L1VALeval0(L1VALtmp(arg[1](66)))[2];
{
xtmp69 = a1x3(xtmp71, xtmp72);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp69;
} // function // XATS2JS_list_vt_uncons_cfr(18)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5049(line=312,offs=1)--5122(line=315,offs=40))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5131(line=317,offs=1)--5220(line=321,offs=47))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5224(line=323,offs=1)--5283(line=324,offs=52))
function
XATS2JS_strmcon_vt_nil()
{
let xtmp73;
{
xtmp73 = [1];
}
;
return xtmp73;
} // function // XATS2JS_strmcon_vt_nil(19)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5284(line=325,offs=1)--5349(line=326,offs=58))
function
XATS2JS_strmcon_vt_cons(a1x1, a1x2)
{
let xtmp76;
;
;
{
xtmp76 = [2, a1x1, a1x2];
}
;
return xtmp76;
} // function // XATS2JS_strmcon_vt_cons(20)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5381(line=330,offs=1)--5527(line=338,offs=47))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5528(line=339,offs=1)--5679(line=345,offs=8))
function
XATS2JS_stream_vt_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp80;
let xtmp81;
let xtmp82;
let xtmp83;
let xtmp84;
;
;
;
xtmp81 = XATS2JS_llazy_eval(a1x1);
{
xtmp82 = 0;
do {
do {
if(1!==XATS2JS_ctag(xtmp81)) break;
xtmp82 = 1;
} while(false);
if(xtmp82 > 0) break;
do {
if(2!==XATS2JS_ctag(xtmp81)) break;
//L1PCKany();
//L1PCKany();
xtmp82 = 2;
} while(false);
if(xtmp82 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp82) {
case 1:
{
xtmp80 = a1x2();
}
;
break;
case 2:
xtmp83 = xtmp81[1];
xtmp84 = xtmp81[2];
{
xtmp80 = a1x3(xtmp83, xtmp84);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp80;
} // function // XATS2JS_stream_vt_uncons_cfr(21)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5752(line=348,offs=1)--5872(line=354,offs=47))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5873(line=355,offs=1)--5982(line=360,offs=8))
function
XATS2JS_streax_vt_uncons_cfr(a1x1, a1x2)
{
let xtmp87;
let xtmp88;
let xtmp89;
let xtmp90;
let xtmp91;
;
;
xtmp88 = XATS2JS_llazy_eval(a1x1);
{
xtmp89 = 0;
do {
do {
if(1!==XATS2JS_ctag(xtmp88)) break;
//L1PCKany();
//L1PCKany();
xtmp89 = 1;
} while(false);
if(xtmp89 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp89) {
case 1:
xtmp90 = xtmp88[1];
xtmp91 = xtmp88[2];
{
xtmp87 = a1x2(xtmp90, xtmp91);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp87;
} // function // XATS2JS_streax_vt_uncons_cfr(22)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6056(line=364,offs=1)--6171(line=369,offs=49))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6172(line=370,offs=1)--6306(line=379,offs=8))
function
XATS2JS_stream_vt_map0_cfr(a1x1, a1x2)
{
let xtmp94;
;
;
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6266(line=378,offs=1)--6304(line=378,offs=39))
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(10251(line=826,offs=1)--10575(line=858,offs=8))
function
stream_vt_map0_4318_(a2x1)
{
let xtmp112;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(10318(line=834,offs=1)--10573(line=857,offs=12))
function
auxmain_10321_(a3x1)
{
let xtmp97;
let xtmp110;
let xtmp111;
;
xtmp110 =
function()
{
let xtmp98;
let xtmp99;
let xtmp100;
let xtmp101;
let xtmp102;
let xtmp103;
let xtmp106;
let xtmp107;
let xtmp108;
xtmp99 = XATS2JS_llazy_eval(a3x1);
{
xtmp100 = 0;
do {
do {
if(1!==XATS2JS_ctag(xtmp99)) break;
xtmp100 = 1;
} while(false);
if(xtmp100 > 0) break;
do {
if(2!==XATS2JS_ctag(xtmp99)) break;
//L1PCKany();
//L1PCKany();
xtmp100 = 2;
} while(false);
if(xtmp100 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp100) {
case 1:
{
xtmp98 = [1];
}
;
break;
case 2:
xtmp101 = xtmp99[1];
xtmp102 = xtmp99[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(10497(line=852,offs=3)--10529(line=853,offs=24))
{
{
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6266(line=378,offs=1)--6304(line=378,offs=39))
function
map0$fopr_2523_(a5x1)
{
let xtmp105;
;
{
xtmp105 = a1x2(a5x1);
}
;
return xtmp105;
} // function // map0$fopr(24)
;
xtmp103 = map0$fopr_2523_(xtmp101);
}
;
;
} // val(H0Pvar(y0(95)))
;
{
{
xtmp107 = auxmain_10321_(xtmp102);
}
;
xtmp106 = [2, xtmp103, xtmp107];
}
;
xtmp98 = xtmp106;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp98;
} // lam-function
;
xtmp111 =
function()
{
let xtmp98;
let xtmp99;
let xtmp100;
let xtmp101;
let xtmp102;
let xtmp103;
let xtmp106;
let xtmp107;
let xtmp108;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(1837(line=143,offs=1)--1892(line=145,offs=41))
// aux_impdecl0: dcl0 = L1DCLtimpcst(g_free(27)(2); L1DCLimpdecl(LIMPDECL@{hdc=g_free(27); hag=; def=Some(L1VALctmp(stream_vt_free(28)(3))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLtimpcst(stream_vt_free(28)(3); L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(28); hag=HFARGnpats(-1; H0Pvar(xs(96))); def=Some(L1VALfree3(L1VALtmp(arg[1](109)))); lev=(6); lts=(arg[1](109)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })))); }))// g_free(27)(2): argless
// { // val-implmnt
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(1784(line=139,offs=1)--1833(line=141,offs=31))
function
stream_vt_free_2236_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(28)
;
// } // val-implmnt // g_free(27)(2)
;
xtmp108 = stream_vt_free_2236_(a3x1);
}
;
} // lam-function
;
xtmp97 = XATS2JS_new_llazy(xtmp110,xtmp111);
return xtmp97;
} // function // auxmain(26)
;
{
xtmp112 = auxmain_10321_(a2x1);
}
;
return xtmp112;
} // function // stream_vt_map0(25)
;
xtmp94 = stream_vt_map0_4318_(a1x1);
}
;
return xtmp94;
} // function // XATS2JS_stream_vt_map0_cfr(23)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6379(line=384,offs=1)--6491(line=388,offs=51))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6492(line=389,offs=1)--6674(line=402,offs=8))
function
XATS2JS_stream_vt_filter0_cfr(a1x1, a1x2)
{
let xtmp115;
;
;
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6588(line=397,offs=3)--6617(line=398,offs=22))
// L1DCLnone0();
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6632(line=400,offs=3)--6669(line=400,offs=40))
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(10956(line=895,offs=1)--11429(line=938,offs=8))
function
stream_vt_filter0_4520_(a2x1)
{
let xtmp137;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(11029(line=903,offs=1)--11427(line=937,offs=8))
function
auxmain_11032_(a3x1)
{
let a3y1;
let xtmp118;
let xtmp122;
let xtmp123;
do {
;
xtmp122 =
function()
{
let xtmp119;
let xtmp120;
{
xtmp119 = auxloop_11126_(XATS2JS_llazy_eval(a3x1));
}
;
return xtmp119;
} // lam-function
;
xtmp123 =
function()
{
let xtmp119;
let xtmp120;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(1837(line=143,offs=1)--1892(line=145,offs=41))
// aux_impdecl0: dcl0 = L1DCLtimpcst(g_free(27)(5); L1DCLimpdecl(LIMPDECL@{hdc=g_free(27); hag=; def=Some(L1VALctmp(stream_vt_free(28)(6))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLtimpcst(stream_vt_free(28)(6); L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(28); hag=HFARGnpats(-1; H0Pvar(xs(96))); def=Some(L1VALfree3(L1VALtmp(arg[1](121)))); lev=(6); lts=(arg[1](121)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })))); }))// g_free(27)(5): argless
// { // val-implmnt
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(1784(line=139,offs=1)--1833(line=141,offs=31))
function
stream_vt_free_2236_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(28)
;
// } // val-implmnt // g_free(27)(5)
;
xtmp120 = stream_vt_free_2236_(a3x1);
}
;
} // lam-function
;
xtmp118 = XATS2JS_new_llazy(xtmp122,xtmp123);
break;//return
} while( true );
return xtmp118;
} // function // auxmain(32)
function
auxloop_11126_(a3x1)
{
let a3y1;
let xtmp125;
let xtmp126;
let xtmp127;
let xtmp128;
let xtmp129;
let xtmp132;
let xtmp133;
let xtmp136;
do {
;
{
xtmp126 = 0;
do {
do {
if(1!==XATS2JS_ctag(a3x1)) break;
xtmp126 = 1;
} while(false);
if(xtmp126 > 0) break;
do {
if(2!==XATS2JS_ctag(a3x1)) break;
//L1PCKany();
//L1PCKany();
xtmp126 = 2;
} while(false);
if(xtmp126 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp126) {
case 1:
{
xtmp125 = [1];
}
;
break;
case 2:
xtmp127 = a3x1[1];
xtmp128 = a3x1[2];
{
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6632(line=400,offs=3)--6669(line=400,offs=40))
function
filter0$test_2727_(a4x1)
{
let xtmp131;
;
{
xtmp131 = a1x2(a4x1);
}
;
return xtmp131;
} // function // filter0$test(30)
;
xtmp129 = filter0$test_2727_(xtmp127);
}
;
if
(xtmp129)
// then
{
{
{
xtmp132 = auxmain_11032_(xtmp128);
}
;
xtmp125 = [2, xtmp127, xtmp132];
}
;
} // if-then
else
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats@(11351(line=934,offs=3)--11370(line=934,offs=22))
{
{
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6588(line=397,offs=3)--6617(line=398,offs=22))
function
g_free_1550_(a4x1)
{
let xtmp135;
;
{
xtmp135 = [-1];
}
;
return xtmp135;
} // function // g_free(27)
;
xtmp133 = g_free_1550_(xtmp127);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(133)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(133)));
} // val(H0Pnil())
;
{
// tail-recursion:
// L1CMDapp(tmp(136); L1VALfcst(auxloop(33)); L1VALeval3(L1VALtmp(tmp(128))))
a3y1 = XATS2JS_llazy_eval(xtmp128); a3x1 = a3y1; continue;
}
;
xtmp125 = xtmp136;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp125;
} // function // auxloop(33)
;
{
xtmp137 = auxmain_11032_(a2x1);
}
;
return xtmp137;
} // function // stream_vt_filter0(31)
;
xtmp115 = stream_vt_filter0_4520_(a1x1);
}
;
return xtmp115;
} // function // XATS2JS_stream_vt_filter0_cfr(29)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6980(line=422,offs=1)--7042(line=427,offs=25))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7043(line=428,offs=1)--7094(line=430,offs=35))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7123(line=433,offs=1)--7192(line=438,offs=26))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7193(line=439,offs=1)--7244(line=441,offs=37))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7273(line=444,offs=1)--7337(line=448,offs=31))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7338(line=449,offs=1)--7387(line=451,offs=33))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7416(line=454,offs=1)--7491(line=459,offs=31))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7492(line=460,offs=1)--7541(line=462,offs=33))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7570(line=465,offs=1)--7634(line=469,offs=30))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7635(line=470,offs=1)--7686(line=472,offs=35))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7762(line=479,offs=1)--7851(line=485,offs=35))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7852(line=486,offs=1)--7905(line=488,offs=37))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7937(line=492,offs=1)--8028(line=498,offs=33))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8029(line=499,offs=1)--8084(line=501,offs=39))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8096(line=504,offs=1)--8187(line=510,offs=33))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8188(line=511,offs=1)--8243(line=513,offs=39))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8278(line=518,offs=1)--8386(line=525,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8387(line=526,offs=1)--8442(line=528,offs=39))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8454(line=531,offs=1)--8562(line=538,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8563(line=539,offs=1)--8618(line=541,offs=39))
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8653(line=546,offs=1)--8766(line=553,offs=34))


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8767(line=554,offs=1)--8830(line=556,offs=47))
// L1DCLnone0()

