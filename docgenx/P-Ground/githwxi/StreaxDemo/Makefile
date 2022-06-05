######
#
# A simple Makefile
#
######
CAT=cat
CPF=cp -f
ECHO=echo
NODE=node
######
SHARED=./../../../../xshared
XATSOPT=./../../../../xatsopt
XATS2JS="./../../../../bin/xats2js"
######
XATS2JS_PRELUDE=\
"$(SHARED)/runtime/xats2js_prelude.js"
XATS2JS_XATSLIB_NODE=\
"$(SHARED)/runtime/xats2js_xatslib_node.js"
######
test::
######
# StreaxDemo:: ; $(XATS2JS) -d ./StreaxDemo.dats
# JS_StreaxDemo:: ; $(XATS2JS) -d ./JS_StreaxDemo.dats
######
test:: \
JS_StreaxDemo
JS_StreaxDemo:: ; \
$(CAT) $(XATS2JS_PRELUDE) > JS_StreaxDemo_dats.js && \
$(CAT) JS_StreaxDemo.cats >> JS_StreaxDemo_dats.js && \
$(XATS2JS) 1>/dev/null 2>&1 --output-a JS_StreaxDemo_dats.js -d ./JS_StreaxDemo.dats
######
#
# HX: for cleaning up
#
######
clean:: ; rm -f *~
######
cleanall:: clean
cleanall:: ; rm -f output
cleanall:: ; rm -f *_dats.js
######
export XATS2JSD=./../../../..
export XATSHOME=$(XATS2JSD)/modules/xatsopt
######
###### end of [Makefile] ######
