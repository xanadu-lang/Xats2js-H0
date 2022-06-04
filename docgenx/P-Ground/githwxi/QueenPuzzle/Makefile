######
#
# A simple Makefile
#
######
CAT=cat
CPF=cp -f
ECHO=echo
MAKE=make
NODE=node
######
SHARED=./../../../../shared0
XATSOPT=./../../../../xatsopt
XATS2JS="./../../../../bin/xats2js"
######
XATS2JS_PRELUDE=\
"$(SHARED)/runtime/xats2js_prelude.js"
XATS2JS_PRELUDE_NODE=\
"$(SHARED)/runtime/xats2js_prelude_node.js"
XATS2JS_XATSLIB_NODE=\
"$(SHARED)/runtime/xats2js_xatslib_node.js"
######
test:: \
QueenPuzzle
QueenPuzzle:: ; \
$(CAT) $(XATS2JS_PRELUDE) > QueenPuzzle_dats.js && \
$(CAT) $(XATS2JS_PRELUDE_NODE) >> QueenPuzzle_dats.js && \
$(XATS2JS) 1>/dev/null 2>&1 --output-a QueenPuzzle_dats.js -d ./QueenPuzzle.dats && $(NODE) QueenPuzzle_dats.js
######
#
# HX: for cleaning up
#
######
clean:: ; rm -f *~
######
cleanall:: clean
cleanall:: ; rm -f *_dats.js
######
export XATS2JSD=./../../../..
export XATSHOME=$(XATS2JSD)/modules/xatsopt
###### end of [Makefile] ######
