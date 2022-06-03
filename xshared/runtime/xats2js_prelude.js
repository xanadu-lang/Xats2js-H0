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
XATS2JS_strn_vt2t
  (cs)
{
cs.pop(); // remove the last '0'
let res = // from array to string
String.fromCharCode.apply(null, cs);
return res; // XATS2JS_strn_vt2t
}
/* ****** ****** */
//
function
XATS2JS_strn_nilq
  (opt)
{
return(opt==="");
}
function
XATS2JS_strn_consq
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
XATS2JS_strn_lt
  (x1, x2)
{
  return (x1 < x2);
}
function
XATS2JS_strn_gt
  (x1, x2)
{
  return (x1 > x2);
}
function
XATS2JS_strn_eq
  (x1, x2)
{
  return (x1===x2);
}
function
XATS2JS_strn_lte
  (x1, x2)
{
  return (x1 <= x2);
}
function
XATS2JS_strn_gte
  (x1, x2)
{
  return (x1 >= x2);
}
function
XATS2JS_strn_neq
  (x1, x2)
{
  return (x1 !== x2);
}
/* ****** ****** */
function
XATS2JS_strn_cmp
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
XATS2JS_strn_head_opt
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
XATS2JS_strn_head_raw
  (cs)
{
return cs.charCodeAt(0);
}
/* ****** ****** */
function
XATS2JS_strn_tail_raw
  (cs)
{
return cs.slice(1);//tail
}
/* ****** ****** */
function
XATS2JS_strn_length
  (cs)
{
  return (cs.length);
}
//
function
XATS2JS_strn_vt_length0
  (cs)
{
// HX: skipping
// the ending null char
  return (cs.length - 1);
}
function
XATS2JS_strn_vt_length1
  (cs)
{
// HX: skipping
// the ending null char
  return (cs.length - 1);
}
//
/* ****** ****** */
function
XATS2JS_strn_get_at
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
XATS2JS_strn_vt_get_at
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
XATS2JS_strn_forall_cfr
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
return res; // strn_forall_cfr
}
/* ****** ****** */
function
XATS2JS_strn_rforall_cfr
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
return res; // strn_rforall_cfr
}
/* ****** ****** */
function
XATS2JS_strn_vt_forall_cfr
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
  (!f0(cs[i0]))
  {res = false; break;}
}
return res; // strn_vt_forall_cfr
}
/* ****** ****** */
function
XATS2JS_strn_vt_rforall_cfr
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
  (!f0(cs[i0-1]))
  {res = false; break;}
}
return res; // strn_vt_rforall_cfr
}
/* ****** ****** */

/* end of [prelude_DATS_CATS_JS_basics.cats] */
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
XATS2JS_strn
  ( cs )
{
return cs;//cs:JS_strn
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

/* end of [prelude_DATS_CATS_JS_runtime.cats] */
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

/* end of [prelude_DATS_CATS_JS_prelude.cats] */
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

/* end of [prelude_DATS_CATS_JS_g_eqref.cats] */
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
XATS2JS_strn_print(cs)
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

/* end of [prelude_DATS_CATS_JS_g_print.cats] */
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

/* end of [prelude_DATS_CATS_JS_basics1.cats] */
// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(105(line=8,offs=1)--161(line=10,offs=28))
// L1DCLnone1(...)

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(247(line=18,offs=1)--319(line=24,offs=24))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(323(line=26,offs=1)--361(line=27,offs=30))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(396(line=32,offs=1)--489(line=40,offs=26))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(498(line=42,offs=1)--591(line=50,offs=26))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(595(line=52,offs=1)--633(line=53,offs=30))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(634(line=54,offs=1)--672(line=55,offs=30))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(792(line=67,offs=1)--841(line=69,offs=24))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(845(line=71,offs=1)--894(line=73,offs=24))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(926(line=77,offs=1)--976(line=79,offs=29))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(977(line=80,offs=1)--1017(line=81,offs=32))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1026(line=83,offs=1)--1077(line=85,offs=29))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1078(line=86,offs=1)--1120(line=87,offs=34))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1149(line=90,offs=1)--1210(line=93,offs=30))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1211(line=94,offs=1)--1249(line=95,offs=30))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1278(line=98,offs=1)--1341(line=101,offs=30))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1342(line=102,offs=1)--1384(line=103,offs=34))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1393(line=105,offs=1)--1456(line=108,offs=30))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1457(line=109,offs=1)--1499(line=110,offs=34))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1585(line=118,offs=1)--1656(line=122,offs=33))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1657(line=123,offs=1)--1705(line=124,offs=40))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1740(line=129,offs=1)--1815(line=133,offs=37))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1816(line=134,offs=1)--1864(line=135,offs=40))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1899(line=140,offs=1)--1972(line=144,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(1981(line=146,offs=1)--2054(line=150,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2055(line=151,offs=1)--2105(line=152,offs=42))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2106(line=153,offs=1)--2156(line=154,offs=42))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2191(line=159,offs=1)--2282(line=165,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2283(line=166,offs=1)--2339(line=167,offs=48))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2351(line=170,offs=1)--2442(line=176,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2443(line=177,offs=1)--2499(line=178,offs=48))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2511(line=181,offs=1)--2602(line=187,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2603(line=188,offs=1)--2659(line=189,offs=48))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2671(line=192,offs=1)--2764(line=198,offs=35))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2765(line=199,offs=1)--2823(line=200,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2835(line=203,offs=1)--2928(line=209,offs=35))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2929(line=210,offs=1)--2987(line=211,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(2999(line=214,offs=1)--3092(line=220,offs=35))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3093(line=221,offs=1)--3151(line=222,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3184(line=227,offs=1)--3290(line=234,offs=37))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3291(line=235,offs=1)--3349(line=236,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3382(line=241,offs=1)--3476(line=247,offs=36))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3477(line=248,offs=1)--3535(line=249,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3544(line=251,offs=1)--3638(line=257,offs=36))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3639(line=258,offs=1)--3697(line=259,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3709(line=262,offs=1)--3803(line=268,offs=36))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3804(line=269,offs=1)--3862(line=270,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3871(line=272,offs=1)--3965(line=278,offs=36))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(3966(line=279,offs=1)--4024(line=280,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4033(line=282,offs=1)--4130(line=288,offs=39))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4131(line=289,offs=1)--4189(line=290,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4271(line=299,offs=1)--4325(line=301,offs=31))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4326(line=302,offs=1)--4370(line=303,offs=36))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4405(line=308,offs=1)--4463(line=310,offs=33))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4464(line=311,offs=1)--4512(line=312,offs=40))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4524(line=315,offs=1)--4582(line=317,offs=33))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4583(line=318,offs=1)--4631(line=319,offs=40))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4666(line=324,offs=1)--4725(line=326,offs=33))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4726(line=327,offs=1)--4776(line=328,offs=42))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4785(line=330,offs=1)--4844(line=332,offs=33))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4845(line=333,offs=1)--4895(line=334,offs=42))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(4930(line=339,offs=1)--5000(line=341,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5009(line=343,offs=1)--5079(line=345,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5088(line=347,offs=1)--5158(line=349,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5167(line=351,offs=1)--5238(line=353,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5247(line=355,offs=1)--5318(line=357,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5327(line=359,offs=1)--5398(line=361,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5402(line=363,offs=1)--5458(line=364,offs=48))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5459(line=365,offs=1)--5515(line=366,offs=48))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5516(line=367,offs=1)--5572(line=368,offs=48))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5573(line=369,offs=1)--5631(line=370,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5632(line=371,offs=1)--5690(line=372,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5691(line=373,offs=1)--5749(line=374,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5784(line=379,offs=1)--5855(line=381,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5856(line=382,offs=1)--5914(line=383,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(5949(line=388,offs=1)--6020(line=390,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6029(line=392,offs=1)--6100(line=394,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6109(line=396,offs=1)--6180(line=398,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6189(line=400,offs=1)--6260(line=402,offs=41))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6264(line=404,offs=1)--6322(line=405,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6323(line=406,offs=1)--6381(line=407,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6382(line=408,offs=1)--6440(line=409,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6441(line=410,offs=1)--6499(line=411,offs=50))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6583(line=420,offs=1)--6694(line=430,offs=18))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6716(line=433,offs=1)--6834(line=442,offs=20))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6835(line=443,offs=1)--6956(line=452,offs=21))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(6978(line=455,offs=1)--7091(line=465,offs=16))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(7092(line=466,offs=1)--7205(line=476,offs=16))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(7206(line=477,offs=1)--7319(line=487,offs=16))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(7340(line=489,offs=1)--7456(line=499,offs=17))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(7457(line=500,offs=1)--7573(line=510,offs=17))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(7574(line=511,offs=1)--7690(line=521,offs=17))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(7711(line=523,offs=1)--7827(line=533,offs=17))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(7848(line=535,offs=1)--7969(line=544,offs=22))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(7990(line=546,offs=1)--8111(line=555,offs=22))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(8132(line=557,offs=1)--8253(line=566,offs=22))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(8274(line=568,offs=1)--8391(line=577,offs=20))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(8395(line=579,offs=1)--8528(line=588,offs=24))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(8529(line=589,offs=1)--8662(line=598,offs=24))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(8686(line=601,offs=1)--8821(line=612,offs=20))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(8842(line=614,offs=1)--9051(line=629,offs=9))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(9096(line=631,offs=1)--9231(line=640,offs=24))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(9252(line=642,offs=1)--9407(line=652,offs=25))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(9428(line=654,offs=1)--9652(line=669,offs=9))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/basics0.dats@(9701(line=671,offs=1)--9925(line=686,offs=9))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(67(line=6,offs=1)--122(line=8,offs=27))
// L1DCLnone1(...)

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(143(line=10,offs=1)--184(line=11,offs=28))
// L1DCLnone1(...)

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(185(line=12,offs=1)--232(line=13,offs=34))
// L1DCLnone1(...)

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(391(line=25,offs=1)--459(line=30,offs=24))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(468(line=32,offs=1)--540(line=37,offs=27))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(549(line=39,offs=1)--623(line=44,offs=27))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(627(line=46,offs=1)--673(line=47,offs=38))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(674(line=48,offs=1)--722(line=49,offs=40))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(723(line=50,offs=1)--773(line=51,offs=42))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(855(line=60,offs=1)--905(line=62,offs=30))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(914(line=64,offs=1)--970(line=66,offs=35))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(974(line=68,offs=1)--1014(line=69,offs=32))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1015(line=70,offs=1)--1061(line=71,offs=38))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1093(line=75,offs=1)--1204(line=81,offs=36))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1205(line=82,offs=1)--1322(line=88,offs=9))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1440(line=96,offs=1)--1501(line=99,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1510(line=101,offs=1)--1582(line=105,offs=36))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1586(line=107,offs=1)--1634(line=108,offs=40))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1635(line=109,offs=1)--1689(line=110,offs=46))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1721(line=114,offs=1)--1852(line=122,offs=42))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(1853(line=123,offs=1)--1978(line=129,offs=9))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2099(line=137,offs=1)--2166(line=140,offs=37))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2175(line=142,offs=1)--2253(line=146,offs=39))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2257(line=148,offs=1)--2311(line=149,offs=46))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2312(line=150,offs=1)--2372(line=151,offs=52))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2694(line=176,offs=1)--2825(line=184,offs=42))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(2826(line=185,offs=1)--2965(line=191,offs=9))
function
XATS2JS_strm_uncons_cfr(a1x1, a1x2, a1x3)
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
} // function // XATS2JS_strm_uncons_cfr(11)


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3033(line=194,offs=1)--3144(line=200,offs=44))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3145(line=201,offs=1)--3248(line=206,offs=9))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3371(line=214,offs=1)--3427(line=216,offs=33))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3436(line=218,offs=1)--3498(line=220,offs=38))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3502(line=222,offs=1)--3548(line=223,offs=38))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3549(line=224,offs=1)--3601(line=225,offs=44))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3633(line=229,offs=1)--3750(line=235,offs=36))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(3751(line=236,offs=1)--3879(line=242,offs=9))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4003(line=250,offs=1)--4070(line=253,offs=37))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4079(line=255,offs=1)--4160(line=259,offs=42))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4164(line=261,offs=1)--4218(line=262,offs=46))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4219(line=263,offs=1)--4279(line=264,offs=52))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4311(line=268,offs=1)--4451(line=276,offs=45))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(4452(line=277,offs=1)--4588(line=283,offs=9))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5029(line=312,offs=1)--5102(line=315,offs=40))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5111(line=317,offs=1)--5198(line=321,offs=45))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5202(line=323,offs=1)--5262(line=324,offs=52))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5263(line=325,offs=1)--5329(line=326,offs=58))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5361(line=330,offs=1)--5501(line=338,offs=45))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5502(line=339,offs=1)--5652(line=345,offs=9))
function
XATS2JS_strm_vt_uncons_cfr(a1x1, a1x2, a1x3)
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
} // function // XATS2JS_strm_vt_uncons_cfr(21)


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5723(line=348,offs=1)--5843(line=354,offs=47))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(5844(line=355,offs=1)--5954(line=360,offs=9))
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


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6028(line=364,offs=1)--6137(line=369,offs=47))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6138(line=370,offs=1)--6270(line=379,offs=9))
function
XATS2JS_strm_vt_map0_cfr(a1x1, a1x2)
{
let xtmp94;
;
;
// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6229(line=378,offs=1)--6268(line=378,offs=40))
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(10022(line=817,offs=1)--10341(line=849,offs=9))
function
strm_vt_map0_4546_(a2x1)
{
let xtmp112;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(10088(line=825,offs=1)--10339(line=848,offs=12))
function
auxmain_10091_(a3x1)
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(10263(line=843,offs=3)--10295(line=844,offs=24))
{
{
// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6229(line=378,offs=1)--6268(line=378,offs=40))
function
map0$fopr_2525_(a5x1)
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
xtmp103 = map0$fopr_2525_(xtmp101);
}
;
;
} // val(H0Pvar(y0(95)))
;
{
{
xtmp107 = auxmain_10091_(xtmp102);
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(1850(line=144,offs=1)--1902(line=146,offs=37))
// g_free(27): argless
// { // val-implmnt
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(1798(line=140,offs=1)--1846(line=142,offs=29))
function
strm_vt_free_2535_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // strm_vt_free(28)
;
// } // val-implmnt // g_free(27)
;
xtmp108 = strm_vt_free_2535_(a3x1);
}
;
} // lam-function
;
xtmp97 = XATS2JS_new_llazy(xtmp110,xtmp111);
return xtmp97;
} // function // auxmain(26)
;
{
xtmp112 = auxmain_10091_(a2x1);
}
;
return xtmp112;
} // function // strm_vt_map0(25)
;
xtmp94 = strm_vt_map0_4546_(a1x1);
}
;
return xtmp94;
} // function // XATS2JS_strm_vt_map0_cfr(23)


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6341(line=384,offs=1)--6447(line=388,offs=49))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6448(line=389,offs=1)--6629(line=402,offs=9))
function
XATS2JS_strm_vt_filter0_cfr(a1x1, a1x2)
{
let xtmp115;
;
;
// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6541(line=397,offs=3)--6571(line=398,offs=22))
// L1DCLnone0();
// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6586(line=400,offs=3)--6624(line=400,offs=41))
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(10726(line=886,offs=1)--11194(line=929,offs=9))
function
strm_vt_filter0_4734_(a2x1)
{
let xtmp137;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(10798(line=894,offs=1)--11192(line=928,offs=8))
function
auxmain_10801_(a3x1)
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
xtmp119 = auxloop_10891_(XATS2JS_llazy_eval(a3x1));
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(1850(line=144,offs=1)--1902(line=146,offs=37))
// g_free(27): argless
// { // val-implmnt
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(1798(line=140,offs=1)--1846(line=142,offs=29))
function
strm_vt_free_2535_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // strm_vt_free(28)
;
// } // val-implmnt // g_free(27)
;
xtmp120 = strm_vt_free_2535_(a3x1);
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
auxloop_10891_(a3x1)
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
// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6586(line=400,offs=3)--6624(line=400,offs=41))
function
filter0$test_2731_(a4x1)
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
xtmp129 = filter0$test_2731_(xtmp127);
}
;
if
(xtmp129)
// then
{
{
{
xtmp132 = auxmain_10801_(xtmp128);
}
;
xtmp125 = [2, xtmp127, xtmp132];
}
;
} // if-then
else
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats@(11116(line=925,offs=3)--11135(line=925,offs=22))
{
{
// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6541(line=397,offs=3)--6571(line=398,offs=22))
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
xtmp137 = auxmain_10801_(a2x1);
}
;
return xtmp137;
} // function // strm_vt_filter0(31)
;
xtmp115 = strm_vt_filter0_4734_(a1x1);
}
;
return xtmp115;
} // function // XATS2JS_strm_vt_filter0_cfr(29)


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(6942(line=424,offs=1)--7004(line=429,offs=25))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7005(line=430,offs=1)--7057(line=432,offs=35))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7086(line=435,offs=1)--7155(line=440,offs=26))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7156(line=441,offs=1)--7208(line=443,offs=37))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7237(line=446,offs=1)--7301(line=450,offs=31))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7302(line=451,offs=1)--7352(line=453,offs=33))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7381(line=456,offs=1)--7456(line=461,offs=31))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7457(line=462,offs=1)--7507(line=464,offs=33))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7536(line=467,offs=1)--7600(line=471,offs=30))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7601(line=472,offs=1)--7653(line=474,offs=35))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7729(line=481,offs=1)--7818(line=487,offs=35))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7819(line=488,offs=1)--7873(line=490,offs=37))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7905(line=494,offs=1)--7996(line=500,offs=33))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(7997(line=501,offs=1)--8053(line=503,offs=39))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8065(line=506,offs=1)--8156(line=512,offs=33))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8157(line=513,offs=1)--8213(line=515,offs=39))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8248(line=520,offs=1)--8356(line=527,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8357(line=528,offs=1)--8413(line=530,offs=39))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8425(line=533,offs=1)--8533(line=540,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8534(line=541,offs=1)--8590(line=543,offs=39))
// L1DCLnone0()

// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8625(line=548,offs=1)--8738(line=555,offs=34))


// ./../../modules/xatsopt/prelude/DATS/CATS/JS/prelude.dats@(8739(line=556,offs=1)--8803(line=558,offs=47))
// L1DCLnone0()

