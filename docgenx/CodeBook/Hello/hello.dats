(* ****** ****** *)
#include"\
$(XATS2JSD)\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)
#extern
fun
ATS_hello(): void = $extnam()
#implfun
ATS_hello() = print("Hello, world!")
(* ****** ****** *)

(* end of [hello.dats] *)
