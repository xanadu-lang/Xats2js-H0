(* ****** ****** *)
#include"\
$(XATS2JSD)\
/shared0/xats2js_prelude.hats"
(* ****** ****** *)
#extern
fun
ATS_hello(): void = $exname()
#implfun
ATS_hello() = print("Hello, world!")
(* ****** ****** *)

(* end of [hello.dats] *)
