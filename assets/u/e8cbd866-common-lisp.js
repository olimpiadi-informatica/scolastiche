/*! For licenses information, see LICENSES.txt */
const e=Object.freeze({displayName:"Common Lisp",fileTypes:["lisp","lsp","l","cl","asd","asdf"],foldingStartMarker:"\\(",foldingStopMarker:"\\)",name:"common-lisp",patterns:[{include:"#comment"},{include:"#block-comment"},{include:"#string"},{include:"#escape"},{include:"#constant"},{include:"#lambda-list"},{include:"#function"},{include:"#style-guide"},{include:"#def-name"},{include:"#macro"},{include:"#symbol"},{include:"#special-operator"},{include:"#declaration"},{include:"#type"},{include:"#class"},{include:"#condition-type"},{include:"#package"},{include:"#variable"},{include:"#punctuation"}],repository:{"block-comment":{begin:"\\#\\|",contentName:"comment.block.commonlisp",end:"\\|\\#",name:"comment",patterns:[{include:"#block-comment",name:"comment"}]},class:{match:"(?i)(?<=^|\\s|\\()(?:two-way-stream|synonym-stream|symbol|structure-object|structure-class|string-stream|stream|standard-object|standard-method|standard-generic-function|standard-class|sequence|restart|real|readtable|ratio|random-state|package|number|method|integer|hash-table|generic-function|file-stream|echo-stream|concatenated-stream|class|built-in-class|broadcast-stream|bit-vector|array)(?=(\\s|\\(|\\)))",name:"support.class.commonlisp"},comment:{begin:"(^[ \\t]+)?(?=;)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.commonlisp"}},end:"(?!\\G)",patterns:[{begin:";",beginCaptures:{0:{name:"punctuation.definition.comment.commonlisp"}},end:"\\n",name:"comment.line.semicolon.commonlisp"}]},"condition-type":{match:"(?i)(?<=^|\\s|\\()(?:warning|undefined-function|unbound-variable|unbound-slot|type-error|style-warning|stream-error|storage-condition|simple-warning|simple-type-error|simple-error|simple-condition|serious-condition|reader-error|program-error|print-not-readable|parse-error|package-error|floating-point-underflow|floating-point-overflow|floating-point-invalid-operation|floating-point-inexact|file-error|error|end-of-file|division-by-zero|control-error|condition|cell-error|arithmetic-error)(?=(\\s|\\(|\\)))",name:"support.type.exception.commonlisp"},constant:{patterns:[{match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(?:t|single-float-negative-epsilon|single-float-epsilon|short-float-negative-epsilon|short-float-epsilon|pi|nil|multiple-values-limit|most-positive-single-float|most-positive-short-float|most-positive-long-float|most-positive-fixnum|most-positive-double-float|most-negative-single-float|most-negative-short-float|most-negative-long-float|most-negative-fixnum|most-negative-double-float|long-float-negative-epsilon|long-float-epsilon|least-positive-single-float|least-positive-short-float|least-positive-normalized-single-float|least-positive-normalized-short-float|least-positive-normalized-long-float|least-positive-normalized-double-float|least-positive-long-float|least-positive-double-float|least-negative-single-float|least-negative-short-float|least-negative-normalized-single-float|least-negative-normalized-short-float|least-negative-normalized-long-float|least-negative-normalized-double-float|least-negative-long-float|least-negative-double-float|lambda-parameters-limit|lambda-list-keywords|internal-time-units-per-second|double-float-negative-epsilon|double-float-epsilon|char-code-limit|call-arguments-limit|boole-xor|boole-set|boole-orc2|boole-orc1|boole-nor|boole-nand|boole-ior|boole-eqv|boole-clr|boole-c2|boole-c1|boole-andc2|boole-andc1|boole-and|boole-2|boole-1|array-total-size-limit|array-rank-limit|array-dimension-limit)(?=(\\s|\\(|\\)))",name:"constant.language.commonlisp"},{match:"(?<=^|\\s|\\(|,@|,\\.|,)([+-]?\\d+(?:\\/\\d+)*|[-+]?\\d*\\.?\\d+([eE][-+]?\\d+)?|(\\#b|\\#B)[01\\/+-]+|(\\#o|\\#O)[0-7\\/+-]+|(\\#x|\\#X)[0-9a-fA-F\\/+-]+|(\\#\\d+[rR]?)[0-9a-zA-Z\\/+-]+)(?=(\\s|\\)))",name:"constant.numeric.commonlisp"},{match:"(?i)(?<=\\s)(\\.)(?=\\s)",name:"variable.other.constant.dot.commonlisp"},{match:"(?<=^|\\s|\\(|,@|,\\.|,)([+-]?\\d*\\.\\d*((e|s|f|d|l|E|S|F|D|L)[+-]?\\d+)?|[+-]?\\d+(\\.\\d*)?(e|s|f|d|l|E|S|F|D|L)[+-]?\\d+)(?=(\\s|\\)))",name:"constant.numeric.commonlisp"}]},declaration:{match:"(?i)(?<=^|\\s|\\()(?:type|speed|special|space|safety|optimize|notinline|inline|ignore|ignorable|ftype|dynamic-extent|declaration|debug|compilation-speed)(?=(\\s|\\(|\\)))",name:"storage.type.function.declaration.commonlisp"},"def-name":{patterns:[{captures:{1:{name:"storage.type.function.defname.commonlisp"},3:{name:"storage.type.function.defname.commonlisp"},4:{name:"variable.other.constant.defname.commonlisp"},6:{patterns:[{include:"#package"},{match:"\\S+?",name:"entity.name.function.commonlisp"}]},7:{name:"variable.other.constant.defname.commonlisp"},9:{patterns:[{include:"#package"},{match:"\\S+?",name:"entity.name.function.commonlisp"}]}},match:"(?i)(?<=^|\\s|\\()(defun|defsetf|defmethod|defmacro|define-symbol-macro|define-setf-expander|define-modify-macro|define-method-combination|define-compiler-macro|defgeneric)\\s+(\\(\\s*([#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+)\\s*((,@|,\\.|,)?)([#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?)|((,@|,\\.|,)?)([#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?))(?=(\\s|\\(|\\)))"},{captures:{1:{name:"storage.type.function.defname.commonlisp"},2:{name:"entity.name.type.commonlisp"}},match:"(?i)(?<=^|\\s|\\()(deftype|defpackage|define-condition|defclass)\\s+([#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?)(?=(\\s|\\(|\\)))"},{captures:{1:{name:"storage.type.function.defname.commonlisp"},2:{patterns:[{include:"#package"},{match:"\\S+?",name:"variable.other.constant.defname.commonlisp"}]}},match:"(?i)(?<=^|\\s|\\()(defconstant)\\s+([#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?)(?=(\\s|\\(|\\)))"},{captures:{1:{name:"storage.type.function.defname.commonlisp"}},match:"(?i)(?<=^|\\s|\\()(defvar|defparameter)\\s+(?=(\\s|\\(|\\)))"},{captures:{1:{name:"storage.type.function.defname.commonlisp"},2:{name:"entity.name.type.commonlisp"}},match:"(?i)(?<=^|\\s|\\()(defstruct)\\s+\\(?\\s*([#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?)(?=(\\s|\\(|\\)))"},{captures:{1:{name:"keyword.control.commonlisp"},2:{patterns:[{include:"#package"},{match:"\\S+?",name:"entity.name.function.commonlisp"}]}},match:"(?i)(?<=^|\\s|\\()(macrolet|labels|flet)\\s+\\(\\s*\\(\\s*([#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?)(?=(\\s|\\(|\\)))"}]},escape:{match:"(?i)(?<=^|\\s|\\()(?:\\#\\\\\\S+?)(?=(\\s|\\(|\\)))",name:"constant.character.escape.commonlisp"},function:{patterns:[{match:"(?i)(?<=^|\\s|\\(|\\#')(?:values|third|tenth|symbol-value|symbol-plist|symbol-function|svref|subseq|sixth|seventh|second|schar|sbit|row-major-aref|rest|readtable-case|nth|ninth|mask-field|macro-function|logical-pathname-translations|ldb|gethash|getf|get|fourth|first|find-class|fill-pointer|fifth|fdefinition|elt|eighth|compiler-macro-function|char|cdr|cddr|cdddr|cddddr|cdddar|cddar|cddadr|cddaar|cdar|cdadr|cdaddr|cdadar|cdaar|cdaadr|cdaaar|car|cadr|caddr|cadddr|caddar|cadar|cadadr|cadaar|caar|caadr|caaddr|caadar|caaar|caaadr|caaaar|bit|aref)(?=(\\s|\\(|\\)))",name:"support.function.accessor.commonlisp"},{match:"(?i)(?<=^|\\s|\\(|\\#')(?:yes-or-no-p|y-or-n-p|write-sequence|write-char|write-byte|warn|vector-pop|use-value|use-package|unuse-package|union|unintern|unexport|terpri|tailp|substitute-if-not|substitute-if|substitute|subst-if-not|subst-if|subst|sublis|string-upcase|string-downcase|string-capitalize|store-value|sleep|signal|shadowing-import|shadow|set-syntax-from-char|set-macro-character|set-exclusive-or|set-dispatch-macro-character|set-difference|set|rplacd|rplaca|room|reverse|revappend|require|replace|remprop|remove-if-not|remove-if|remove-duplicates|remove|remhash|read-sequence|read-byte|random|provide|pprint-tabular|pprint-newline|pprint-linear|pprint-fill|nunion|nsubstitute-if-not|nsubstitute-if|nsubstitute|nsubst-if-not|nsubst-if|nsubst|nsublis|nstring-upcase|nstring-downcase|nstring-capitalize|nset-exclusive-or|nset-difference|nreverse|nreconc|nintersection|nconc|muffle-warning|method-combination-error|maphash|makunbound|ldiff|invoke-restart-interactively|invoke-restart|invoke-debugger|invalid-method-error|intersection|inspect|import|get-output-stream-string|get-macro-character|get-dispatch-macro-character|gentemp|gensym|fresh-line|fill|file-position|export|describe|delete-if-not|delete-if|delete-duplicates|delete|continue|clrhash|close|clear-input|break|abort)(?=(\\s|\\(|\\)))",name:"support.function.f.sideeffects.commonlisp"},{match:"(?i)(?<=^|\\s|\\(|\\#')(?:zerop|write-to-string|write-string|write-line|write|wild-pathname-p|vectorp|vector-push-extend|vector-push|vector|values-list|user-homedir-pathname|upper-case-p|upgraded-complex-part-type|upgraded-array-element-type|unread-char|unbound-slot-instance|typep|type-of|type-error-expected-type|type-error-datum|two-way-stream-output-stream|two-way-stream-input-stream|truncate|truename|tree-equal|translate-pathname|translate-logical-pathname|tanh|tan|synonym-stream-symbol|symbolp|symbol-package|symbol-name|sxhash|subtypep|subsetp|stringp|string>=|string>|string=|string<=|string<|string\\/=|string-trim|string-right-trim|string-not-lessp|string-not-greaterp|string-not-equal|string-lessp|string-left-trim|string-greaterp|string-equal|string|streamp|stream-external-format|stream-error-stream|stream-element-type|standard-char-p|stable-sort|sqrt|special-operator-p|sort|some|software-version|software-type|slot-value|slot-makunbound|slot-exists-p|slot-boundp|sinh|sin|simple-vector-p|simple-string-p|simple-condition-format-control|simple-condition-format-arguments|simple-bit-vector-p|signum|short-site-name|set-pprint-dispatch|search|scale-float|round|restart-name|rename-package|rename-file|rem|reduce|realpart|realp|readtablep|read-preserving-whitespace|read-line|read-from-string|read-delimited-list|read-char-no-hang|read-char|read|rationalp|rationalize|rational|rassoc-if-not|rassoc-if|rassoc|random-state-p|proclaim|probe-file|print-not-readable-object|print|princ-to-string|princ|prin1-to-string|prin1|pprint-tab|pprint-indent|pprint-dispatch|pprint|position-if-not|position-if|position|plusp|phase|peek-char|pathnamep|pathname-version|pathname-type|pathname-name|pathname-match-p|pathname-host|pathname-directory|pathname-device|pathname|parse-namestring|parse-integer|pairlis|packagep|package-used-by-list|package-use-list|package-shadowing-symbols|package-nicknames|package-name|package-error-package|output-stream-p|open-stream-p|open|oddp|numerator|numberp|null|nthcdr|notevery|notany|not|next-method-p|nbutlast|namestring|name-char|mod|mismatch|minusp|min|merge-pathnames|merge|member-if-not|member-if|member|max|maplist|mapl|mapcon|mapcar|mapcan|mapc|map-into|map|make-two-way-stream|make-synonym-stream|make-symbol|make-string-output-stream|make-string-input-stream|make-string|make-sequence|make-random-state|make-pathname|make-package|make-load-form-saving-slots|make-list|make-hash-table|make-echo-stream|make-dispatch-macro-character|make-condition|make-concatenated-stream|make-broadcast-stream|make-array|macroexpand-1|macroexpand|machine-version|machine-type|machine-instance|lower-case-p|long-site-name|logxor|logtest|logorc2|logorc1|lognot|lognor|lognand|logior|logical-pathname|logeqv|logcount|logbitp|logandc2|logandc1|logand|log|load-logical-pathname-translations|load|listp|listen|list-length|list-all-packages|list\\*|list|lisp-implementation-version|lisp-implementation-type|length|ldb-test|lcm|last|keywordp|isqrt|intern|interactive-stream-p|integerp|integer-length|integer-decode-float|input-stream-p|imagpart|identity|host-namestring|hash-table-test|hash-table-size|hash-table-rehash-threshold|hash-table-rehash-size|hash-table-p|hash-table-count|graphic-char-p|get-universal-time|get-setf-expansion|get-properties|get-internal-run-time|get-internal-real-time|get-decoded-time|gcd|functionp|function-lambda-expression|funcall|ftruncate|fround|format|force-output|fmakunbound|floor|floatp|float-sign|float-radix|float-precision|float-digits|float|finish-output|find-symbol|find-restart|find-package|find-if-not|find-if|find-all-symbols|find|file-write-date|file-string-length|file-namestring|file-length|file-error-pathname|file-author|ffloor|fceiling|fboundp|expt|exp|every|evenp|eval|equalp|equal|eql|eq|ensure-generic-function|ensure-directories-exist|enough-namestring|endp|encode-universal-time|ed|echo-stream-output-stream|echo-stream-input-stream|dribble|dpb|disassemble|directory-namestring|directory|digit-char-p|digit-char|deposit-field|denominator|delete-package|delete-file|decode-universal-time|decode-float|count-if-not|count-if|count|cosh|cos|copy-tree|copy-symbol|copy-structure|copy-seq|copy-readtable|copy-pprint-dispatch|copy-list|copy-alist|constantp|constantly|consp|cons|conjugate|concatenated-stream-streams|concatenate|compute-restarts|complexp|complex|complement|compiled-function-p|compile-file-pathname|compile-file|compile|coerce|code-char|clear-output|class-of|cis|characterp|character|char>=|char>|char=|char<=|char<|char\\/=|char-upcase|char-not-lessp|char-not-greaterp|char-not-equal|char-name|char-lessp|char-int|char-greaterp|char-equal|char-downcase|char-code|cerror|cell-error-name|ceiling|call-next-method|byte-size|byte-position|byte|butlast|broadcast-stream-streams|boundp|both-case-p|boole|bit-xor|bit-vector-p|bit-orc2|bit-orc1|bit-not|bit-nor|bit-nand|bit-ior|bit-eqv|bit-andc2|bit-andc1|bit-and|atom|atanh|atan|assoc-if-not|assoc-if|assoc|asinh|asin|ash|arrayp|array-total-size|array-row-major-index|array-rank|array-in-bounds-p|array-has-fill-pointer-p|array-element-type|array-displacement|array-dimensions|array-dimension|arithmetic-error-operation|arithmetic-error-operands|apropos-list|apropos|apply|append|alphanumericp|alpha-char-p|adjustable-array-p|adjust-array|adjoin|acosh|acos|acons|abs|>=|>|=|<=|<|1-|1\\+|\\/=|\\/|-|\\+|\\*)(?=(\\s|\\(|\\)))",name:"support.function.f.sideeffects.commonlisp"},{match:"(?i)(?<=^|\\s|\\(|\\#')(?:variable|update-instance-for-redefined-class|update-instance-for-different-class|structure|slot-unbound|slot-missing|shared-initialize|remove-method|print-object|no-next-method|no-applicable-method|method-qualifiers|make-load-form|make-instances-obsolete|make-instance|initialize-instance|function-keywords|find-method|documentation|describe-object|compute-applicable-methods|compiler-macro|class-name|change-class|allocate-instance|add-method)(?=(\\s|\\(|\\)))",name:"support.function.sgf.nosideeffects.commonlisp"},{match:"(?i)(?<=^|\\s|\\(|\\#')(?:reinitialize-instance)(?=(\\s|\\(|\\)))",name:"support.function.sgf.sideeffects.commonlisp"},{match:"(?i)(?<=^|\\s|\\(|\\#')(?:satisfies)(?=(\\s|\\(|\\)))",name:"support.function.typespecifier.commonlisp"}]},"lambda-list":{match:"(?i)(?<=^|\\s|\\()(?:&[#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?|&whole|&rest|&optional|&key|&environment|&body|&aux|&allow-other-keys)(?=(\\s|\\(|\\)))",name:"keyword.other.lambdalist.commonlisp"},macro:{patterns:[{match:"(?i)(?<=^|\\s|\\()(?:with-standard-io-syntax|with-slots|with-simple-restart|with-package-iterator|with-hash-table-iterator|with-condition-restarts|with-compilation-unit|with-accessors|when|unless|typecase|time|step|shiftf|setf|rotatef|return|restart-case|restart-bind|psetf|prog2|prog1|prog\\*|prog|print-unreadable-object|pprint-logical-block|pprint-exit-if-list-exhausted|or|nth-value|multiple-value-setq|multiple-value-list|multiple-value-bind|make-method|loop|lambda|ignore-errors|handler-case|handler-bind|formatter|etypecase|dotimes|dolist|do-symbols|do-external-symbols|do-all-symbols|do\\*|do|destructuring-bind|defun|deftype|defstruct|defsetf|defpackage|defmethod|defmacro|define-symbol-macro|define-setf-expander|define-condition|define-compiler-macro|defgeneric|defconstant|defclass|declaim|ctypecase|cond|call-method|assert|and)(?=(\\s|\\(|\\)))",name:"storage.type.function.m.nosideeffects.commonlisp"},{match:"(?i)(?<=^|\\s|\\()(?:with-output-to-string|with-open-stream|with-open-file|with-input-from-string|untrace|trace|remf|pushnew|push|psetq|pprint-pop|pop|otherwise|loop-finish|incf|in-package|ecase|defvar|defparameter|define-modify-macro|define-method-combination|decf|check-type|ccase|case)(?=(\\s|\\(|\\)))",name:"storage.type.function.m.sideeffects.commonlisp"},{match:"(?i)(?<=^|\\s|\\()(?:setq)(?=(\\s|\\(|\\)))",name:"storage.type.function.specialform.commonlisp"}]},package:{patterns:[{captures:{2:{name:"support.type.package.commonlisp"},3:{name:"support.type.package.commonlisp"}},match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(([A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?)|(\\#))(?=::|:)"}]},punctuation:{patterns:[{match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)('|`)(?=\\S)",name:"variable.other.constant.singlequote.commonlisp"},{match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(?::[#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?)(?=(\\s|\\(|\\)))",name:"entity.name.variable.commonlisp"},{captures:{1:{name:"variable.other.constant.sharpsign.commonlisp"},2:{name:"constant.numeric.commonlisp"}},match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#)(\\d*)(?=\\()"},{captures:{1:{name:"variable.other.constant.sharpsign.commonlisp"},2:{name:"constant.numeric.commonlisp"},3:{name:"variable.other.constant.sharpsign.commonlisp"}},match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#)(\\d*)(\\*)(?=0|1)"},{match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#\\*|\\#0\\*)(?=(\\s|\\(|\\)))",name:"variable.other.constant.sharpsign.commonlisp"},{captures:{1:{name:"variable.other.constant.sharpsign.commonlisp"},2:{name:"constant.numeric.commonlisp"},3:{name:"variable.other.constant.sharpsign.commonlisp"}},match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#)(\\d+)(a|A)(?=.)"},{captures:{1:{name:"variable.other.constant.sharpsign.commonlisp"},2:{name:"constant.numeric.commonlisp"},3:{name:"variable.other.constant.sharpsign.commonlisp"}},match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#)(\\d+)(=)(?=.)"},{captures:{1:{name:"variable.other.constant.sharpsign.commonlisp"},2:{name:"constant.numeric.commonlisp"},3:{name:"variable.other.constant.sharpsign.commonlisp"}},match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#)(\\d+)(\\#)(?=.)"},{match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#(\\+|-))(?=\\S)",name:"variable.other.constant.sharpsign.commonlisp"},{match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#('|,|\\.|c|C|s|S|p|P))(?=\\S)",name:"variable.other.constant.sharpsign.commonlisp"},{captures:{1:{name:"support.type.package.commonlisp"}},match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(\\#)(:)(?=\\S)"},{captures:{2:{name:"variable.other.constant.backquote.commonlisp"},3:{name:"variable.other.constant.backquote.commonlisp"},4:{name:"variable.other.constant.backquote.commonlisp"},5:{name:"variable.other.constant.backquote.commonlisp"}},match:"(?i)(?<=^|\\s|\\()((`\\#)|(`)(,@|,\\.|,)?|(,@|,\\.|,))(?=\\S)"}]},"special-operator":{captures:{2:{name:"keyword.control.commonlisp"}},match:"(?i)(\\(\\s*)(unwind-protect|throw|the|tagbody|symbol-macrolet|return-from|quote|progv|progn|multiple-value-prog1|multiple-value-call|macrolet|locally|load-time-value|let\\*|let|labels|if|go|function|flet|eval-when|catch|block)(?=(\\s|\\(|\\)))"},string:{begin:'(")',beginCaptures:{1:{name:"punctuation.definition.string.begin.commonlisp"}},end:'(")',endCaptures:{1:{name:"punctuation.definition.string.end.commonlisp"}},name:"string.quoted.double.commonlisp",patterns:[{match:"\\\\.",name:"constant.character.escape.commonlisp"},{captures:{1:{name:"storage.type.function.formattedstring.commonlisp"},2:{name:"variable.other.constant.formattedstring.commonlisp"},8:{name:"storage.type.function.formattedstring.commonlisp"},10:{name:"storage.type.function.formattedstring.commonlisp"}},match:"(?i)(~)(((([+-]?\\d+)|('.)|V|\\#)*?(,)?)*?)((:@|@:|:|@)?)(\\(|\\)|\\[|\\]|;|{|}|<|>|\\^)"},{captures:{1:{name:"entity.name.variable.commonlisp"},2:{name:"variable.other.constant.formattedstring.commonlisp"},8:{name:"entity.name.variable.commonlisp"},10:{name:"entity.name.variable.commonlisp"}},match:"(?i)(~)(((([+-]?\\d+)|('.)|V|\\#)*?(,)?)*?)((:@|@:|:|@)?)(A|S|D|B|O|X|R|P|C|F|E|G|\\$|%|\\&|\\||~|T|\\*|\\?|_|W|I)"},{captures:{1:{name:"entity.name.variable.commonlisp"},2:{name:"variable.other.constant.formattedstring.commonlisp"},8:{name:"entity.name.variable.commonlisp"},10:{name:"entity.name.variable.commonlisp"},11:{name:"entity.name.variable.commonlisp"},12:{name:"entity.name.variable.commonlisp"}},match:"(?i)(~)(((([+-]?\\d+)|('.)|V|\\#)*?(,)?)*?)((:@|@:|:|@)?)(\\/)([#:A-Za-z0-9+\\-\\*\\/\\@$\\%\\^\\&_=<>\\~!?\\[\\]{}\\.]+?)(\\/)"},{match:"(~\\n)",name:"variable.other.constant.formattedstring.commonlisp"}]},"style-guide":{patterns:[{captures:{3:{name:"source.commonlisp"}},match:"(?i)(?<=^'|\\s'|\\('|,@'|,\\.'|,')(\\S+?)(::|:)((\\+[^\\s+]+\\+)|(\\*[^\\s\\*]+\\*))(?=(\\s|\\(|\\)))"},{match:"(?i)(?<=\\S:|^|\\s|\\(|,@|,\\.|,)(\\+[^\\s+]+\\+)(?=(\\s|\\(|\\)))",name:"variable.other.constant.earmuffsplus.commonlisp"},{match:"(?i)(?<=\\S:|^|\\s|\\(|,@|,\\.|,)(\\*[^\\s\\*]+\\*)(?=(\\s|\\(|\\)))",name:"string.regexp.earmuffsasterisk.commonlisp"}]},symbol:{match:"(?i)(?<=^|\\s|\\()(?:method-combination|declare)(?=(\\s|\\(|\\)))",name:"storage.type.function.symbol.commonlisp"},type:{match:"(?i)(?<=^|\\s|\\()(?:unsigned-byte|standard-char|standard|single-float|simple-vector|simple-string|simple-bit-vector|simple-base-string|simple-array|signed-byte|short-float|long-float|keyword|fixnum|extended-char|double-float|compiled-function|boolean|bignum|base-string|base-char)(?=(\\s|\\(|\\)))",name:"support.type.t.commonlisp"},variable:{patterns:[{match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(?:\\*trace-output\\*|\\*terminal-io\\*|\\*standard-output\\*|\\*standard-input\\*|\\*readtable\\*|\\*read-suppress\\*|\\*read-eval\\*|\\*read-default-float-format\\*|\\*read-base\\*|\\*random-state\\*|\\*query-io\\*|\\*print-right-margin\\*|\\*print-readably\\*|\\*print-radix\\*|\\*print-pretty\\*|\\*print-pprint-dispatch\\*|\\*print-miser-width\\*|\\*print-lines\\*|\\*print-level\\*|\\*print-length\\*|\\*print-gensym\\*|\\*print-escape\\*|\\*print-circle\\*|\\*print-case\\*|\\*print-base\\*|\\*print-array\\*|\\*package\\*|\\*modules\\*|\\*macroexpand-hook\\*|\\*load-verbose\\*|\\*load-truename\\*|\\*load-print\\*|\\*load-pathname\\*|\\*gensym-counter\\*|\\*features\\*|\\*error-output\\*|\\*default-pathname-defaults\\*|\\*debugger-hook\\*|\\*debug-io\\*|\\*compile-verbose\\*|\\*compile-print\\*|\\*compile-file-truename\\*|\\*compile-file-pathname\\*|\\*break-on-signals\\*)(?=(\\s|\\(|\\)))",name:"string.regexp.earmuffsasterisk.commonlisp"},{match:"(?i)(?<=^|\\s|\\(|,@|,\\.|,)(?:\\*\\*\\*|\\*\\*|\\+\\+\\+|\\+\\+|\\/\\/\\/|\\/\\/)(?=(\\s|\\(|\\)))",name:"variable.other.repl.commonlisp"}]}},scopeName:"source.commonlisp",aliases:["lisp"]});var a=[e];export{a as default};
//# sourceMappingURL=e8cbd866-common-lisp.js.map
