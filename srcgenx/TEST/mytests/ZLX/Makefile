######
#
# For testing xats2js
#
######
CAT=cat
CPF=cp -f
ECHO=echo
NODE=node
######
MYTEST="."
######
XSHARED=./../../../../xshared
XATS2JS="./../../../../bin/xats2js"
######
XATS2JS_PRELUDE=\
"$(XSHARED)/runtime/xats2js_prelude.js"
XATS2JS_PRELUDE_NODE=\
"$(XSHARED)/runtime/xats2js_prelude_node.js"
XATS2JS_XATSLIB_NODE=\
"$(XSHARED)/runtime/xats2js_xatslib_node.js"
######
all:: test
######
test:: ; $(XATS2JS)
######
test:: \
ZLX-PSet-1
ZLX-PSet-1:: ; \
$(CAT) $(XATS2JS_PRELUDE) > output_dats.js && \
$(CAT) $(XATS2JS_PRELUDE_NODE) >> output_dats.js && \
$(CAT) $(XATS2JS_XATSLIB_NODE) >> output_dats.js && \
$(XATS2JS) --output-a output_dats.js -d $(MYTEST)/MIT-ASE-6.0001/PSet-1.dats && $(NODE) output_dats.js
######
test:: \
ZLX-Tally
ZLX-Tally:: ; \
$(CAT) $(XATS2JS_PRELUDE) > output_dats.js && \
$(CAT) $(XATS2JS_PRELUDE_NODE) >> output_dats.js && \
$(XATS2JS) --output-a output_dats.js -d $(MYTEST)/lecture-2018-12-24/Tally.dats && $(NODE) output_dats.js
######
test:: \
ZLX-IsPrime
ZLX-IsPrime:: ; \
$(CAT) $(XATS2JS_PRELUDE) > output_dats.js && \
$(CAT) $(XATS2JS_PRELUDE_NODE) >> output_dats.js && \
$(XATS2JS) --output-a output_dats.js -d $(MYTEST)/lecture-2018-12-27/IsPrime.dats && $(NODE) output_dats.js
######
test:: \
ZLX-IntPrint
ZLX-IntPrint:: ; \
$(CAT) $(XATS2JS_PRELUDE) > output_dats.js && \
$(CAT) $(XATS2JS_PRELUDE_NODE) >> output_dats.js && \
$(XATS2JS) --output-a output_dats.js -d $(MYTEST)/lecture-2018-12-28/IntPrint.dats && $(NODE) output_dats.js
######
test:: \
ZLX-LinSearch
ZLX-LinSearch:: ; \
$(CAT) $(XATS2JS_PRELUDE) > output_dats.js && \
$(CAT) $(XATS2JS_PRELUDE_NODE) >> output_dats.js && \
$(XATS2JS) --output-a output_dats.js -d $(MYTEST)/lecture-2019-01-07/linear_search.dats && $(NODE) output_dats.js
######
test:: \
ZLX-LinSearch2D
ZLX-LinSearch2D:: ; \
$(CAT) $(XATS2JS_PRELUDE) > output_dats.js && \
$(CAT) $(XATS2JS_PRELUDE_NODE) >> output_dats.js && \
$(XATS2JS) --output-a output_dats.js -d $(MYTEST)/lecture-2019-01-07/linear_search_2d.dats && $(NODE) output_dats.js
######

######
#
# HX: for cleaning up
#
######

######
clean:: ; rm -f *~
######
cleanall:: clean
cleanall:: ; rm -f output
cleanall:: ; rm -f output_dats.js
######
###### end of [Makefile_output] ######
