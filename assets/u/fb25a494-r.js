/*! For licenses information, see LICENSES.txt */
const e=Object.freeze({displayName:"R",name:"r",patterns:[{include:"#roxygen"},{include:"#comments"},{include:"#constants"},{include:"#keywords"},{include:"#storage-type"},{include:"#strings"},{include:"#brackets"},{include:"#function-declarations"},{include:"#lambda-functions"},{include:"#builtin-functions"},{include:"#function-calls"},{include:"#general-variables"}],repository:{brackets:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.parens.begin.r"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.parens.end.r"}},patterns:[{include:"source.r"}]},{begin:"\\[(?!\\[)",beginCaptures:{0:{name:"punctuation.section.brackets.single.begin.r"}},end:"\\]",endCaptures:{0:{name:"punctuation.section.brackets.single.end.r"}},patterns:[{include:"source.r"}]},{begin:"\\[\\[",beginCaptures:{0:{name:"punctuation.section.brackets.double.begin.r"}},contentName:"meta.item-access.arguments.r",end:"\\]\\]",endCaptures:{0:{name:"punctuation.section.brackets.double.end.r"}},patterns:[{include:"source.r"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.braces.begin.r"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.braces.end.r"}},patterns:[{include:"source.r"}]}]},"builtin-functions":{patterns:[{captures:{1:{name:"support.function.r"}},match:"\\b(abbreviate|abs|acos|acosh|activeBindingFunction|addNA|addTaskCallback|agrep|agrepl|alist|all|all\\.equal|all\\.equal\\.character|all\\.equal\\.default|all\\.equal\\.environment|all\\.equal\\.envRefClass|all\\.equal\\.factor|all\\.equal\\.formula|all\\.equal\\.function|all\\.equal\\.language|all\\.equal\\.list|all\\.equal\\.numeric|all\\.equal\\.POSIXt|all\\.equal\\.raw|all\\.names|allowInterrupts|all\\.vars|any|anyDuplicated|anyDuplicated\\.array|anyDuplicated\\.data\\.frame|anyDuplicated\\.default|anyDuplicated\\.matrix|anyNA|anyNA\\.data\\.frame|anyNA\\.numeric_version|anyNA\\.POSIXlt|aperm|aperm\\.default|aperm\\.table|append|apply|Arg|args|array|arrayInd|as\\.array|as\\.array\\.default|as\\.call|as\\.character|as\\.character\\.condition|as\\.character\\.Date|as\\.character\\.default|as\\.character\\.error|as\\.character\\.factor|as\\.character\\.hexmode|as\\.character\\.numeric_version|as\\.character\\.octmode|as\\.character\\.POSIXt|as\\.character\\.srcref|as\\.complex|as\\.data\\.frame|as\\.data\\.frame\\.array|as\\.data\\.frame\\.AsIs|as\\.data\\.frame\\.character|as\\.data\\.frame\\.complex|as\\.data\\.frame\\.data\\.frame|as\\.data\\.frame\\.Date|as\\.data\\.frame\\.default|as\\.data\\.frame\\.difftime|as\\.data\\.frame\\.factor|as\\.data\\.frame\\.integer|as\\.data\\.frame\\.list|as\\.data\\.frame\\.logical|as\\.data\\.frame\\.matrix|as\\.data\\.frame\\.model\\.matrix|as\\.data\\.frame\\.noquote|as\\.data\\.frame\\.numeric|as\\.data\\.frame\\.numeric_version|as\\.data\\.frame\\.ordered|as\\.data\\.frame\\.POSIXct|as\\.data\\.frame\\.POSIXlt|as\\.data\\.frame\\.raw|as\\.data\\.frame\\.table|as\\.data\\.frame\\.ts|as\\.data\\.frame\\.vector|as\\.Date|as\\.Date\\.character|as\\.Date\\.default|as\\.Date\\.factor|as\\.Date\\.numeric|as\\.Date\\.POSIXct|as\\.Date\\.POSIXlt|as\\.difftime|as\\.double|as\\.double\\.difftime|as\\.double\\.POSIXlt|as\\.environment|as\\.expression|as\\.expression\\.default|as\\.factor|as\\.function|as\\.function\\.default|as\\.hexmode|asin|asinh|as\\.integer|as\\.list|as\\.list\\.data\\.frame|as\\.list\\.Date|as\\.list\\.default|as\\.list\\.difftime|as\\.list\\.environment|as\\.list\\.factor|as\\.list\\.function|as\\.list\\.numeric_version|as\\.list\\.POSIXct|as\\.list\\.POSIXlt|as\\.logical|as\\.logical\\.factor|as\\.matrix|as\\.matrix\\.data\\.frame|as\\.matrix\\.default|as\\.matrix\\.noquote|as\\.matrix\\.POSIXlt|as\\.name|asNamespace|as\\.null|as\\.null\\.default|as\\.numeric|as\\.numeric_version|as\\.octmode|as\\.ordered|as\\.package_version|as\\.pairlist|asplit|as\\.POSIXct|as\\.POSIXct\\.Date|as\\.POSIXct\\.default|as\\.POSIXct\\.numeric|as\\.POSIXct\\.POSIXlt|as\\.POSIXlt|as\\.POSIXlt\\.character|as\\.POSIXlt\\.Date|as\\.POSIXlt\\.default|as\\.POSIXlt\\.factor|as\\.POSIXlt\\.numeric|as\\.POSIXlt\\.POSIXct|as\\.qr|as\\.raw|asS3|asS4|assign|as\\.single|as\\.single\\.default|as\\.symbol|as\\.table|as\\.table\\.default|as\\.vector|as\\.vector\\.factor|atan|atan2|atanh|attach|attachNamespace|attr|attr\\.all\\.equal|attributes|autoload|autoloader|backsolve|baseenv|basename|besselI|besselJ|besselK|besselY|beta|bindingIsActive|bindingIsLocked|bindtextdomain|bitwAnd|bitwNot|bitwOr|bitwShiftL|bitwShiftR|bitwXor|body|bquote|break|browser|browserCondition|browserSetDebug|browserText|builtins|by|by\\.data\\.frame|by\\.default|bzfile|c|call|callCC|capabilities|casefold|cat|cbind|cbind\\.data\\.frame|c\\.Date|c\\.difftime|ceiling|c\\.factor|character|char\\.expand|charmatch|charToRaw|chartr|check_tzones|chkDots|chol|chol2inv|chol\\.default|choose|class|clearPushBack|close|closeAllConnections|close\\.connection|close\\.srcfile|close\\.srcfilealias|c\\.noquote|c\\.numeric_version|col|colMeans|colnames|colSums|commandArgs|comment|complex|computeRestarts|conditionCall|conditionCall\\.condition|conditionMessage|conditionMessage\\.condition|conflictRules|conflicts|Conj|contributors|cos|cosh|cospi|c\\.POSIXct|c\\.POSIXlt|crossprod|Cstack_info|cummax|cummin|cumprod|cumsum|curlGetHeaders|cut|cut\\.Date|cut\\.default|cut\\.POSIXt|c\\.warnings|data\\.class|data\\.frame|data\\.matrix|date|debug|debuggingState|debugonce|default\\.stringsAsFactors|delayedAssign|deparse|deparse1|det|detach|determinant|determinant\\.matrix|dget|diag|diff|diff\\.Date|diff\\.default|diff\\.difftime|diff\\.POSIXt|difftime|digamma|dim|dim\\.data\\.frame|dimnames|dimnames\\.data\\.frame|dir|dir\\.create|dir\\.exists|dirname|do\\.call|dontCheck|double|dput|dQuote|drop|droplevels|droplevels\\.data\\.frame|droplevels\\.factor|dump|duplicated|duplicated\\.array|duplicated\\.data\\.frame|duplicated\\.default|duplicated\\.matrix|duplicated\\.numeric_version|duplicated\\.POSIXlt|duplicated\\.warnings|dynGet|dyn\\.load|dyn\\.unload|eapply|eigen|emptyenv|enc2native|enc2utf8|encodeString|Encoding|endsWith|enquote|environment|environmentIsLocked|environmentName|env\\.profile|errorCondition|eval|eval\\.parent|evalq|exists|exp|expand\\.grid|expm1|expression|extSoftVersion|factor|factorial|fifo|file|file\\.access|file\\.append|file\\.choose|file\\.copy|file\\.create|file\\.exists|file\\.info|file\\.link|file\\.mode|file\\.mtime|file\\.path|file\\.remove|file\\.rename|file\\.show|file\\.size|file\\.symlink|Filter|Find|findInterval|find\\.package|findPackageEnv|findRestart|floor|flush|flush\\.connection|for|force|forceAndCall|formals|format|format\\.AsIs|formatC|format\\.data\\.frame|format\\.Date|format\\.default|format\\.difftime|formatDL|format\\.factor|format\\.hexmode|format\\.info|format\\.libraryIQR|format\\.numeric_version|format\\.octmode|format\\.packageInfo|format\\.POSIXct|format\\.POSIXlt|format\\.pval|format\\.summaryDefault|forwardsolve|function|gamma|gc|gcinfo|gc\\.time|gctorture|gctorture2|get|get0|getAllConnections|getCallingDLL|getCallingDLLe|getConnection|getDLLRegisteredRoutines|getDLLRegisteredRoutines\\.character|getDLLRegisteredRoutines\\.DLLInfo|getElement|geterrmessage|getExportedValue|getHook|getLoadedDLLs|getNamespace|getNamespaceExports|getNamespaceImports|getNamespaceInfo|getNamespaceName|getNamespaceUsers|getNamespaceVersion|getNativeSymbolInfo|getOption|getRversion|getSrcLines|getTaskCallbackNames|gettext|gettextf|getwd|gl|globalCallingHandlers|globalenv|gregexec|gregexpr|grep|grepl|grepRaw|grouping|gsub|gzcon|gzfile|I|iconv|iconvlist|icuGetCollate|icuSetCollate|identical|identity|if|ifelse|Im|importIntoEnv|infoRDS|inherits|integer|interaction|interactive|intersect|intToBits|intToUtf8|inverse\\.rle|invisible|invokeRestart|invokeRestartInteractively|isa|is\\.array|is\\.atomic|isatty|isBaseNamespace|is\\.call|is\\.character|is\\.complex|is\\.data\\.frame|isdebugged|is\\.double|is\\.element|is\\.environment|is\\.expression|is\\.factor|isFALSE|is\\.finite|is\\.function|isIncomplete|is\\.infinite|is\\.integer|is\\.language|is\\.list|is\\.loaded|is\\.logical|is\\.matrix|is\\.na|is\\.na\\.data\\.frame|is\\.name|isNamespace|isNamespaceLoaded|is\\.nan|is\\.na\\.numeric_version|is\\.na\\.POSIXlt|is\\.null|is\\.numeric|is\\.numeric\\.Date|is\\.numeric\\.difftime|is\\.numeric\\.POSIXt|is\\.numeric_version|is\\.object|ISOdate|ISOdatetime|isOpen|is\\.ordered|is\\.package_version|is\\.pairlist|is\\.primitive|is\\.qr|is\\.R|is\\.raw|is\\.recursive|isRestart|isS4|isSeekable|is\\.single|is\\.symbol|isSymmetric|isSymmetric\\.matrix|is\\.table|isTRUE|is\\.unsorted|is\\.vector|jitter|julian|julian\\.Date|julian\\.POSIXt|kappa|kappa\\.default|kappa\\.lm|kappa\\.qr|kronecker|l10n_info|labels|labels\\.default|La_library|lapply|La\\.svd|La_version|lazyLoad|lazyLoadDBexec|lazyLoadDBfetch|lbeta|lchoose|length|length\\.POSIXlt|lengths|levels|levels\\.default|lfactorial|lgamma|libcurlVersion|library|library\\.dynam|library\\.dynam\\.unload|licence|license|list|list2DF|list2env|list\\.dirs|list\\.files|load|loadedNamespaces|loadingNamespaceInfo|loadNamespace|local|lockBinding|lockEnvironment|log|log10|log1p|log2|logb|logical|lower\\.tri|ls|makeActiveBinding|make\\.names|make\\.unique|Map|mapply|marginSums|margin\\.table|match|match\\.arg|match\\.call|match\\.fun|Math\\.data\\.frame|Math\\.Date|Math\\.difftime|Math\\.factor|Math\\.POSIXt|mat\\.or\\.vec|matrix|max|max\\.col|mean|mean\\.Date|mean\\.default|mean\\.difftime|mean\\.POSIXct|mean\\.POSIXlt|memCompress|memDecompress|mem\\.maxNSize|mem\\.maxVSize|memory\\.profile|merge|merge\\.data\\.frame|merge\\.default|message|mget|min|missing|Mod|mode|months|months\\.Date|months\\.POSIXt|names|namespaceExport|namespaceImport|namespaceImportClasses|namespaceImportFrom|namespaceImportMethods|names\\.POSIXlt|nargs|nchar|ncol|NCOL|Negate|new\\.env|next|NextMethod|ngettext|nlevels|noquote|norm|normalizePath|nrow|NROW|nullfile|numeric|numeric_version|numToBits|numToInts|nzchar|objects|oldClass|OlsonNames|on\\.exit|open|open\\.connection|open\\.srcfile|open\\.srcfilealias|open\\.srcfilecopy|Ops\\.data\\.frame|Ops\\.Date|Ops\\.difftime|Ops\\.factor|Ops\\.numeric_version|Ops\\.ordered|Ops\\.POSIXt|options|order|ordered|outer|packageEvent|packageHasNamespace|packageNotFoundError|packageStartupMessage|package_version|packBits|pairlist|parent\\.env|parent\\.frame|parse|parseNamespaceFile|paste|paste0|path\\.expand|path\\.package|pcre_config|pi|pipe|plot|pmatch|pmax|pmax\\.int|pmin|pmin\\.int|polyroot|Position|pos\\.to\\.env|pretty|pretty\\.default|prettyNum|print|print\\.AsIs|print\\.by|print\\.condition|print\\.connection|print\\.data\\.frame|print\\.Date|print\\.default|print\\.difftime|print\\.Dlist|print\\.DLLInfo|print\\.DLLInfoList|print\\.DLLRegisteredRoutines|print\\.eigen|print\\.factor|print\\.function|print\\.hexmode|print\\.libraryIQR|print\\.listof|print\\.NativeRoutineList|print\\.noquote|print\\.numeric_version|print\\.octmode|print\\.packageInfo|print\\.POSIXct|print\\.POSIXlt|print\\.proc_time|print\\.restart|print\\.rle|print\\.simple\\.list|print\\.srcfile|print\\.srcref|print\\.summaryDefault|print\\.summary\\.table|print\\.summary\\.warnings|print\\.table|print\\.warnings|prmatrix|proc\\.time|prod|proportions|prop\\.table|provideDimnames|psigamma|pushBack|pushBackLength|q|qr|qr\\.coef|qr\\.default|qr\\.fitted|qr\\.Q|qr\\.qty|qr\\.qy|qr\\.R|qr\\.resid|qr\\.solve|qr\\.X|quarters|quarters\\.Date|quarters\\.POSIXt|quit|quote|range|range\\.default|rank|rapply|raw|rawConnection|rawConnectionValue|rawShift|rawToBits|rawToChar|rbind|rbind\\.data\\.frame|rcond|Re|readBin|readChar|read\\.dcf|readline|readLines|readRDS|readRenviron|Recall|Reduce|regexec|regexpr|reg\\.finalizer|registerS3method|registerS3methods|regmatches|remove|removeTaskCallback|rep|rep\\.Date|rep\\.difftime|repeat|rep\\.factor|rep\\.int|replace|rep_len|replicate|rep\\.numeric_version|rep\\.POSIXct|rep\\.POSIXlt|require|requireNamespace|restartDescription|restartFormals|retracemem|return|returnValue|rev|rev\\.default|R\\.home|rle|rm|RNGkind|RNGversion|round|round\\.Date|round\\.POSIXt|row|rowMeans|rownames|row\\.names|row\\.names\\.data\\.frame|row\\.names\\.default|rowsum|rowsum\\.data\\.frame|rowsum\\.default|rowSums|R_system_version|R\\.version|R\\.Version|R\\.version\\.string|sample|sample\\.int|sapply|save|save\\.image|saveRDS|scale|scale\\.default|scan|search|searchpaths|seek|seek\\.connection|seq|seq_along|seq\\.Date|seq\\.default|seq\\.int|seq_len|seq\\.POSIXt|sequence|sequence\\.default|serialize|serverSocket|setdiff|setequal|setHook|setNamespaceInfo|set\\.seed|setSessionTimeLimit|setTimeLimit|setwd|showConnections|shQuote|sign|signalCondition|signif|simpleCondition|simpleError|simpleMessage|simpleWarning|simplify2array|sin|single|sinh|sink|sink\\.number|sinpi|slice\\.index|socketAccept|socketConnection|socketSelect|socketTimeout|solve|solve\\.default|solve\\.qr|sort|sort\\.default|sort\\.int|sort\\.list|sort\\.POSIXlt|source|split|split\\.data\\.frame|split\\.Date|split\\.default|split\\.POSIXct|sprintf|sqrt|sQuote|srcfile|srcfilealias|srcfilecopy|srcref|standardGeneric|startsWith|stderr|stdin|stdout|stop|stopifnot|storage\\.mode|str2expression|str2lang|strftime|strptime|strrep|strsplit|strtoi|strtrim|structure|strwrap|sub|subset|subset\\.data\\.frame|subset\\.default|subset\\.matrix|substitute|substr|substring|sum|summary|summary\\.connection|summary\\.data\\.frame|Summary\\.data\\.frame|summary\\.Date|Summary\\.Date|summary\\.default|Summary\\.difftime|summary\\.factor|Summary\\.factor|summary\\.matrix|Summary\\.numeric_version|Summary\\.ordered|summary\\.POSIXct|Summary\\.POSIXct|summary\\.POSIXlt|Summary\\.POSIXlt|summary\\.proc_time|summary\\.srcfile|summary\\.srcref|summary\\.table|summary\\.warnings|suppressMessages|suppressPackageStartupMessages|suppressWarnings|suspendInterrupts|svd|sweep|switch|sys\\.call|sys\\.calls|Sys\\.chmod|Sys\\.Date|sys\\.frame|sys\\.frames|sys\\.function|Sys\\.getenv|Sys\\.getlocale|Sys\\.getpid|Sys\\.glob|Sys\\.info|sys\\.load\\.image|Sys\\.localeconv|sys\\.nframe|sys\\.on\\.exit|sys\\.parent|sys\\.parents|Sys\\.readlink|sys\\.save\\.image|Sys\\.setenv|Sys\\.setFileTime|Sys\\.setlocale|Sys\\.sleep|sys\\.source|sys\\.status|system|system2|system\\.file|system\\.time|Sys\\.time|Sys\\.timezone|Sys\\.umask|Sys\\.unsetenv|Sys\\.which|t|table|tabulate|tan|tanh|tanpi|tapply|taskCallbackManager|tcrossprod|t\\.data\\.frame|t\\.default|tempdir|tempfile|textConnection|textConnectionValue|tolower|topenv|toString|toString\\.default|toupper|trace|traceback|tracemem|tracingState|transform|transform\\.data\\.frame|transform\\.default|trigamma|trimws|trunc|truncate|truncate\\.connection|trunc\\.Date|trunc\\.POSIXt|try|tryCatch|tryInvokeRestart|typeof|unclass|undebug|union|unique|unique\\.array|unique\\.data\\.frame|unique\\.default|unique\\.matrix|unique\\.numeric_version|unique\\.POSIXlt|unique\\.warnings|units|units\\.difftime|unix\\.time|unlink|unlist|unloadNamespace|unlockBinding|unname|unserialize|unsplit|untrace|untracemem|unz|upper\\.tri|url|UseMethod|utf8ToInt|validEnc|validUTF8|vapply|vector|Vectorize|version|warning|warningCondition|warnings|weekdays|weekdays\\.Date|weekdays\\.POSIXt|which|which\\.max|which\\.min|while|with|withAutoprint|withCallingHandlers|with\\.default|within|within\\.data\\.frame|within\\.list|withRestarts|withVisible|write|writeBin|writeChar|write\\.dcf|writeLines|xor|xpdrows\\.data\\.frame|xtfrm|xtfrm\\.AsIs|xtfrm\\.data\\.frame|xtfrm\\.Date|xtfrm\\.default|xtfrm\\.difftime|xtfrm\\.factor|xtfrm\\.numeric_version|xtfrm\\.POSIXct|xtfrm\\.POSIXlt|xzfile|zapsmall)\\s*(\\()"},{captures:{1:{name:"support.function.r"}},match:"\\b(abline|arrows|assocplot|axis|Axis|axis\\.Date|axis\\.POSIXct|axTicks|barplot|barplot\\.default|box|boxplot|boxplot\\.default|boxplot\\.matrix|bxp|cdplot|clip|close\\.screen|co\\.intervals|contour|contour\\.default|coplot|curve|dotchart|erase\\.screen|filled\\.contour|fourfoldplot|frame|grconvertX|grconvertY|grid|hist|hist\\.default|identify|image|image\\.default|layout|layout\\.show|lcm|legend|lines|lines\\.default|locator|matlines|matplot|matpoints|mosaicplot|mtext|pairs|pairs\\.default|panel\\.smooth|par|persp|pie|plot|plot\\.default|plot\\.design|plot\\.function|plot\\.new|plot\\.window|plot\\.xy|points|points\\.default|polygon|polypath|rasterImage|rect|rug|screen|segments|smoothScatter|spineplot|split\\.screen|stars|stem|strheight|stripchart|strwidth|sunflowerplot|symbols|text|text\\.default|title|xinch|xspline|xyinch|yinch)\\s*(\\()"},{captures:{1:{name:"support.function.r"}},match:"\\b(adjustcolor|as\\.graphicsAnnot|as\\.raster|axisTicks|bitmap|blues9|bmp|boxplot\\.stats|cairo_pdf|cairo_ps|cairoSymbolFont|check\\.options|chull|CIDFont|cm|cm\\.colors|col2rgb|colorConverter|colorRamp|colorRampPalette|colors|colorspaces|colours|contourLines|convertColor|densCols|dev2bitmap|devAskNewPage|dev\\.capabilities|dev\\.capture|dev\\.control|dev\\.copy|dev\\.copy2eps|dev\\.copy2pdf|dev\\.cur|dev\\.flush|dev\\.hold|deviceIsInteractive|dev\\.interactive|dev\\.list|dev\\.new|dev\\.next|dev\\.off|dev\\.prev|dev\\.print|dev\\.set|dev\\.size|embedFonts|extendrange|getGraphicsEvent|getGraphicsEventEnv|graphics\\.off|gray|gray\\.colors|grey|grey\\.colors|grSoftVersion|hcl|hcl\\.colors|hcl\\.pals|heat\\.colors|Hershey|hsv|is\\.raster|jpeg|make\\.rgb|n2mfrow|nclass\\.FD|nclass\\.scott|nclass\\.Sturges|palette|palette\\.colors|palette\\.pals|pdf|pdfFonts|pdf\\.options|pictex|png|postscript|postscriptFonts|ps\\.options|quartz|quartzFont|quartzFonts|quartz\\.options|quartz\\.save|rainbow|recordGraphics|recordPlot|replayPlot|rgb|rgb2hsv|savePlot|setEPS|setGraphicsEventEnv|setGraphicsEventHandlers|setPS|svg|terrain\\.colors|tiff|topo\\.colors|trans3d|Type1Font|x11|X11|X11Font|X11Fonts|X11\\.options|xfig|xy\\.coords|xyTable|xyz\\.coords)\\s*(\\()"},{captures:{1:{name:"support.function.r"}},match:"\\b(addNextMethod|allNames|Arith|as|asMethodDefinition|assignClassDef|assignMethodsMetaData|balanceMethodsList|cacheGenericsMetaData|cacheMetaData|cacheMethod|callGeneric|callNextMethod|canCoerce|cbind2|checkAtAssignment|checkSlotAssignment|classesToAM|classLabel|classMetaName|className|coerce|Compare|completeClassDefinition|completeExtends|completeSubclasses|Complex|conformMethod|defaultDumpName|defaultPrototype|doPrimitiveMethod|dumpMethod|dumpMethods|el|elNamed|empty\\.dump|emptyMethodsList|evalOnLoad|evalqOnLoad|evalSource|existsFunction|existsMethod|extends|externalRefMethod|finalDefaultMethod|findClass|findFunction|findMethod|findMethods|findMethodSignatures|findUnique|fixPre1\\.8|formalArgs|functionBody|generic\\.skeleton|getAllSuperClasses|getClass|getClassDef|getClasses|getDataPart|getFunction|getGeneric|getGenerics|getGroup|getGroupMembers|getLoadActions|getMethod|getMethods|getMethodsForDispatch|getMethodsMetaData|getPackageName|getRefClass|getSlots|getValidity|hasArg|hasLoadAction|hasMethod|hasMethods|implicitGeneric|inheritedSlotNames|initFieldArgs|initialize|initRefFields|insertClassMethods|insertMethod|insertSource|is|isClass|isClassDef|isClassUnion|isGeneric|isGrammarSymbol|isGroup|isRematched|isSealedClass|isSealedMethod|isVirtualClass|isXS3Class|kronecker|languageEl|linearizeMlist|listFromMethods|listFromMlist|loadMethod|Logic|makeClassRepresentation|makeExtends|makeGeneric|makeMethodsList|makePrototypeFromClassDef|makeStandardGeneric|matchSignature|Math|Math2|mergeMethods|metaNameUndo|MethodAddCoerce|methodSignatureMatrix|method\\.skeleton|MethodsList|MethodsListSelect|methodsPackageMetaName|missingArg|multipleClasses|new|newBasic|newClassRepresentation|newEmptyObject|Ops|packageSlot|possibleExtends|prohibitGeneric|promptClass|promptMethods|prototype|Quote|rbind2|reconcilePropertiesAndPrototype|registerImplicitGenerics|rematchDefinition|removeClass|removeGeneric|removeMethod|removeMethods|representation|requireMethods|resetClass|resetGeneric|S3Class|S3Part|sealClass|selectMethod|selectSuperClasses|setAs|setClass|setClassUnion|setDataPart|setGeneric|setGenericImplicit|setGroupGeneric|setIs|setLoadAction|setLoadActions|setMethod|setOldClass|setPackageName|setPrimitiveMethods|setRefClass|setReplaceMethod|setValidity|show|showClass|showDefault|showExtends|showMethods|showMlist|signature|SignatureMethod|sigToEnv|slot|slotNames|slotsFromS3|substituteDirect|substituteFunctionArgs|Summary|superClassDepth|testInheritedMethods|testVirtual|tryNew|unRematchDefinition|validObject|validSlotNames)\\s*(\\()"},{captures:{1:{name:"support.function.r"}},match:"\\b(acf|acf2AR|add1|addmargins|add\\.scope|aggregate|aggregate\\.data\\.frame|aggregate\\.ts|AIC|alias|anova|ansari\\.test|aov|approx|approxfun|ar|ar\\.burg|arima|arima0|arima0\\.diag|arima\\.sim|ARMAacf|ARMAtoMA|ar\\.mle|ar\\.ols|ar\\.yw|as\\.dendrogram|as\\.dist|as\\.formula|as\\.hclust|asOneSidedFormula|as\\.stepfun|as\\.ts|ave|bandwidth\\.kernel|bartlett\\.test|BIC|binomial|binom\\.test|biplot|Box\\.test|bw\\.bcv|bw\\.nrd|bw\\.nrd0|bw\\.SJ|bw\\.ucv|C|cancor|case\\.names|ccf|chisq\\.test|cmdscale|coef|coefficients|complete\\.cases|confint|confint\\.default|confint\\.lm|constrOptim|contrasts|contr\\.helmert|contr\\.poly|contr\\.SAS|contr\\.sum|contr\\.treatment|convolve|cooks\\.distance|cophenetic|cor|cor\\.test|cov|cov2cor|covratio|cov\\.wt|cpgram|cutree|cycle|D|dbeta|dbinom|dcauchy|dchisq|decompose|delete\\.response|deltat|dendrapply|density|density\\.default|deriv|deriv3|deviance|dexp|df|DF2formula|dfbeta|dfbetas|dffits|df\\.kernel|df\\.residual|dgamma|dgeom|dhyper|diffinv|dist|dlnorm|dlogis|dmultinom|dnbinom|dnorm|dpois|drop1|drop\\.scope|drop\\.terms|dsignrank|dt|dummy\\.coef|dummy\\.coef\\.lm|dunif|dweibull|dwilcox|ecdf|eff\\.aovlist|effects|embed|end|estVar|expand\\.model\\.frame|extractAIC|factanal|factor\\.scope|family|fft|filter|fisher\\.test|fitted|fitted\\.values|fivenum|fligner\\.test|formula|frequency|friedman\\.test|ftable|Gamma|gaussian|get_all_vars|getCall|getInitial|glm|glm\\.control|glm\\.fit|hasTsp|hat|hatvalues|hclust|heatmap|HoltWinters|influence|influence\\.measures|integrate|interaction\\.plot|inverse\\.gaussian|IQR|is\\.empty\\.model|is\\.leaf|is\\.mts|isoreg|is\\.stepfun|is\\.ts|is\\.tskernel|KalmanForecast|KalmanLike|KalmanRun|KalmanSmooth|kernapply|kernel|kmeans|knots|kruskal\\.test|ksmooth|ks\\.test|lag|lag\\.plot|line|lm|lm\\.fit|lm\\.influence|lm\\.wfit|loadings|loess|loess\\.control|loess\\.smooth|logLik|loglin|lowess|ls\\.diag|lsfit|ls\\.print|mad|mahalanobis|makeARIMA|make\\.link|makepredictcall|manova|mantelhaen\\.test|mauchly\\.test|mcnemar\\.test|median|median\\.default|medpolish|model\\.extract|model\\.frame|model\\.frame\\.default|model\\.matrix|model\\.matrix\\.default|model\\.matrix\\.lm|model\\.offset|model\\.response|model\\.tables|model\\.weights|monthplot|mood\\.test|mvfft|na\\.action|na\\.contiguous|na\\.exclude|na\\.fail|na\\.omit|na\\.pass|napredict|naprint|naresid|nextn|nlm|nlminb|nls|nls\\.control|NLSstAsymptotic|NLSstClosestX|NLSstLfAsymptote|NLSstRtAsymptote|nobs|numericDeriv|offset|oneway\\.test|optim|optimHess|optimise|optimize|order\\.dendrogram|pacf|p\\.adjust|p\\.adjust\\.methods|Pair|pairwise\\.prop\\.test|pairwise\\.table|pairwise\\.t\\.test|pairwise\\.wilcox\\.test|pbeta|pbinom|pbirthday|pcauchy|pchisq|pexp|pf|pgamma|pgeom|phyper|plclust|plnorm|plogis|plot\\.ecdf|plot\\.spec\\.coherency|plot\\.spec\\.phase|plot\\.stepfun|plot\\.ts|pnbinom|pnorm|poisson|poisson\\.test|poly|polym|power|power\\.anova\\.test|power\\.prop\\.test|power\\.t\\.test|ppoints|ppois|ppr|PP\\.test|prcomp|predict|predict\\.glm|predict\\.lm|preplot|princomp|printCoefmat|profile|proj|promax|prop\\.test|prop\\.trend\\.test|psignrank|pt|ptukey|punif|pweibull|pwilcox|qbeta|qbinom|qbirthday|qcauchy|qchisq|qexp|qf|qgamma|qgeom|qhyper|qlnorm|qlogis|qnbinom|qnorm|qpois|qqline|qqnorm|qqplot|qsignrank|qt|qtukey|quade\\.test|quantile|quasi|quasibinomial|quasipoisson|qunif|qweibull|qwilcox|r2dtable|rbeta|rbinom|rcauchy|rchisq|read\\.ftable|rect\\.hclust|reformulate|relevel|reorder|replications|reshape|resid|residuals|residuals\\.glm|residuals\\.lm|rexp|rf|rgamma|rgeom|rhyper|rlnorm|rlogis|rmultinom|rnbinom|rnorm|rpois|rsignrank|rstandard|rstudent|rt|runif|runmed|rweibull|rwilcox|rWishart|scatter\\.smooth|screeplot|sd|se\\.contrast|selfStart|setNames|shapiro\\.test|sigma|simulate|smooth|smoothEnds|smooth\\.spline|sortedXyData|spec\\.ar|spec\\.pgram|spec\\.taper|spectrum|spline|splinefun|splinefunH|SSasymp|SSasympOff|SSasympOrig|SSbiexp|SSD|SSfol|SSfpl|SSgompertz|SSlogis|SSmicmen|SSweibull|start|stat\\.anova|step|stepfun|stl|StructTS|summary\\.aov|summary\\.glm|summary\\.lm|summary\\.manova|summary\\.stepfun|supsmu|symnum|termplot|terms|terms\\.formula|time|toeplitz|ts|tsdiag|ts\\.intersect|tsp|ts\\.plot|tsSmooth|ts\\.union|t\\.test|TukeyHSD|uniroot|update|update\\.default|update\\.formula|var|variable\\.names|varimax|var\\.test|vcov|weighted\\.mean|weighted\\.residuals|weights|wilcox\\.test|window|write\\.ftable|xtabs)\\s*(\\()"},{captures:{1:{name:"support.function.r"}},match:"\\b(adist|alarm|apropos|aregexec|argsAnywhere|asDateBuilt|askYesNo|aspell|aspell_package_C_files|aspell_package_Rd_files|aspell_package_R_files|aspell_package_vignettes|aspell_write_personal_dictionary_file|as\\.person|as\\.personList|as\\.relistable|as\\.roman|assignInMyNamespace|assignInNamespace|available\\.packages|bibentry|browseEnv|browseURL|browseVignettes|bug\\.report|capture\\.output|changedFiles|charClass|checkCRAN|chooseBioCmirror|chooseCRANmirror|citation|cite|citeNatbib|citEntry|citFooter|citHeader|close\\.socket|combn|compareVersion|contrib\\.url|count\\.fields|create\\.post|data|dataentry|data\\.entry|de|debugcall|debugger|demo|de\\.ncols|de\\.restore|de\\.setup|download\\.file|download\\.packages|dump\\.frames|edit|emacs|example|file\\.edit|fileSnapshot|file_test|find|findLineNum|fix|fixInNamespace|flush\\.console|formatOL|formatUL|getAnywhere|getCRANmirrors|getFromNamespace|getParseData|getParseText|getS3method|getSrcDirectory|getSrcFilename|getSrcLocation|getSrcref|getTxtProgressBar|glob2rx|globalVariables|hasName|head|head\\.matrix|help|help\\.request|help\\.search|help\\.start|history|hsearch_db|hsearch_db_concepts|hsearch_db_keywords|installed\\.packages|install\\.packages|is\\.relistable|isS3method|isS3stdGeneric|limitedLabels|loadhistory|localeToCharset|lsf\\.str|ls\\.str|maintainer|make\\.packages\\.html|makeRweaveLatexCodeRunner|make\\.socket|memory\\.limit|memory\\.size|menu|methods|mirror2html|modifyList|new\\.packages|news|nsl|object\\.size|old\\.packages|osVersion|packageDate|packageDescription|packageName|package\\.skeleton|packageStatus|packageVersion|page|person|personList|pico|process\\.events|prompt|promptData|promptImport|promptPackage|rc\\.getOption|rc\\.options|rc\\.settings|rc\\.status|readCitationFile|read\\.csv|read\\.csv2|read\\.delim|read\\.delim2|read\\.DIF|read\\.fortran|read\\.fwf|read\\.socket|read\\.table|recover|relist|remove\\.packages|removeSource|Rprof|Rprofmem|RShowDoc|RSiteSearch|rtags|Rtangle|RtangleFinish|RtangleRuncode|RtangleSetup|RtangleWritedoc|RweaveChunkPrefix|RweaveEvalWithOpt|RweaveLatex|RweaveLatexFinish|RweaveLatexOptions|RweaveLatexSetup|RweaveLatexWritedoc|RweaveTryStop|savehistory|select\\.list|sessionInfo|setBreakpoint|setRepositories|setTxtProgressBar|stack|Stangle|str|strcapture|strOptions|summaryRprof|suppressForeignCheck|Sweave|SweaveHooks|SweaveSyntaxLatex|SweaveSyntaxNoweb|SweaveSyntConv|tail|tail\\.matrix|tar|timestamp|toBibtex|toLatex|txtProgressBar|type\\.convert|undebugcall|unstack|untar|unzip|update\\.packages|upgrade|URLdecode|URLencode|url\\.show|vi|View|vignette|warnErrList|write\\.csv|write\\.csv2|write\\.socket|write\\.table|xedit|xemacs|zip)\\s*(\\()"}]},comments:{patterns:[{captures:{1:{name:"comment.line.pragma.r"},2:{name:"entity.name.pragma.name.r"}},match:"^(#pragma[ \\t]+mark)[ \\t](.*)",name:"comment.line.pragma-mark.r"},{begin:"(^[ \\t]+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.r"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.r"}},end:"\\n",name:"comment.line.number-sign.r"}]}]},constants:{patterns:[{match:"\\b(pi|letters|LETTERS|month\\.abb|month\\.name)\\b",name:"support.constant.misc.r"},{match:"\\b(TRUE|FALSE|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_|Inf|NaN)\\b",name:"constant.language.r"},{match:"\\b0(x|X)[0-9a-fA-F]+i\\b",name:"constant.numeric.imaginary.hexadecimal.r"},{match:"\\b\\d+\\.?\\d*(?:(e|E)(\\+|-)?\\d+)?i\\b",name:"constant.numeric.imaginary.decimal.r"},{match:"\\.\\d+(?:(e|E)(\\+|-)?\\d+)?i\\b",name:"constant.numeric.imaginary.decimal.r"},{match:"\\b0(x|X)[0-9a-fA-F]+L\\b",name:"constant.numeric.integer.hexadecimal.r"},{match:"\\b(?:\\d+\\.?\\d*)(?:(e|E)(\\+|-)?\\d+)?L\\b",name:"constant.numeric.integer.decimal.r"},{match:"\\b0(x|X)[0-9a-fA-F]+\\b",name:"constant.numeric.float.hexadecimal.r"},{match:"\\b\\d+\\.?\\d*(?:(e|E)(\\+|-)?\\d+)?\\b",name:"constant.numeric.float.decimal.r"},{match:"\\.\\d+(?:(e|E)(\\+|-)?\\d+)?\\b",name:"constant.numeric.float.decimal.r"}]},"function-calls":{begin:"(?:\\b|(?=\\.))((?:[a-zA-Z._][\\w.]*|`[^`]+`))\\s*(\\()",beginCaptures:{1:{name:"variable.function.r"},2:{name:"punctuation.section.parens.begin.r"}},contentName:"meta.function-call.arguments.r",end:"(\\))",endCaptures:{1:{name:"punctuation.section.parens.end.r"}},name:"meta.function-call.r",patterns:[{include:"#function-parameters"}]},"function-declarations":{patterns:[{captures:{1:{name:"entity.name.function.r"},2:{name:"keyword.operator.assignment.r"},3:{name:"keyword.control.r"}},match:"((?:`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`)|(?:[A-Za-z.][0-9A-Za-z._]*))\\s*(<?<-|=(?!=))\\s*(function|\\\\)(?!\\w)",name:"meta.function.r",patterns:[{include:"#lambda-functions"}]}]},"function-parameters":{patterns:[{contentName:"meta.function-call.parameters.r",name:"meta.function-call.r"},{match:"(?:[a-zA-Z._][\\w.]*|`[^`]+`)(?=\\s[^=])",name:"variable.other.r"},{begin:"(?==)",end:"(?=[,)])",patterns:[{include:"source.r"}]},{match:",",name:"punctuation.separator.parameters.r"},{include:"source.r"}]},"general-variables":{patterns:[{captures:{1:{name:"variable.parameter.r"},2:{name:"keyword.operator.assignment.r"}},match:"([A-Za-z.][0-9A-Za-z._]*)\\s*(=)(?=[^=])"},{captures:{1:{name:"variable.parameter.r"},2:{name:"keyword.operator.assignment.r"}},match:"(`[^`]+`)\\s*(=)(?=[^=])"},{match:"\\b([\\d_][0-9A-Za-z._]+)\\b",name:"invalid.illegal.variable.other.r"},{match:"\\b([0-9A-Za-z_]+)(?=::)",name:"entity.namespace.r"},{match:"\\b([0-9A-Za-z._]+)\\b",name:"variable.other.r"},{match:"(`[^`]+`)",name:"variable.other.r"}]},keywords:{patterns:[{match:"\\b(break|next|repeat|else|in)\\b",name:"keyword.control.r"},{match:"\\b(ifelse|if|for|return|switch|while|invisible)\\b(?=\\s*\\()",name:"keyword.control.r"},{match:"(\\-|\\+|\\*|\\/|%\\/%|%%|%\\*%|%o%|%x%|\\^)",name:"keyword.operator.arithmetic.r"},{match:"(:=|<-|<<-|->|->>)",name:"keyword.operator.assignment.r"},{match:"(==|<=|>=|!=|<>|<|>|%in%)",name:"keyword.operator.comparison.r"},{match:"(!|&{1,2}|[|]{1,2})",name:"keyword.operator.logical.r"},{match:"(\\|>)",name:"keyword.operator.pipe.r"},{match:"(%between%|%chin%|%like%|%\\+%|%\\+replace%|%:%|%do%|%dopar%|%>%|%<>%|%T>%|%\\$%)",name:"keyword.operator.other.r"},{match:"(\\.\\.\\.|\\$|:|\\~|@)",name:"keyword.other.r"}]},"lambda-functions":{patterns:[{begin:"\\b(function)\\s*(\\()",beginCaptures:{1:{name:"keyword.control.r"},2:{name:"punctuation.section.parens.begin.r"}},contentName:"meta.function.parameters.r",end:"\\)",endCaptures:{0:{name:"punctuation.section.parens.end.r"}},name:"meta.function.r",patterns:[{include:"#comments"},{match:"(?:[a-zA-Z._][\\w.]*|`[^`]+`)",name:"variable.other.r"},{begin:"(?==)",end:"(?=[,)])",patterns:[{include:"source.r"}]},{match:",",name:"punctuation.separator.parameters.r"}]}]},roxygen:{patterns:[{begin:"^\\s*(#')\\s*",beginCaptures:{1:{name:"punctuation.definition.comment.r"}},end:"$\\n?",name:"comment.line.roxygen.r",patterns:[{captures:{1:{name:"keyword.other.r"},2:{name:"variable.parameter.r"}},match:"(@param)\\s*((?:[a-zA-Z._][\\w.]*|`[^`]+`))"},{match:"@[a-zA-Z0-9]+",name:"keyword.other.r"}]}]},"storage-type":{patterns:[{match:"\\b(character|complex|double|expression|integer|list|logical|numeric|single|raw)\\b(?=\\s*\\()",name:"storage.type.r"}]},strings:{patterns:[{begin:'[rR]"(-*)\\[',beginCaptures:{0:{name:"punctuation.definition.string.raw.begin.r"}},end:'\\]\\1"',endCaptures:{0:{name:"punctuation.definition.string.raw.end.r"}},name:"string.quoted.double.raw.r"},{begin:"[rR]'(-*)\\[",beginCaptures:{0:{name:"punctuation.definition.string.raw.begin.r"}},end:"\\]\\1'",endCaptures:{0:{name:"punctuation.definition.string.raw.end.r"}},name:"string.quoted.single.raw.r"},{begin:'[rR]"(-*)\\{',beginCaptures:{0:{name:"punctuation.definition.string.raw.begin.r"}},end:'\\}\\1"',endCaptures:{0:{name:"punctuation.definition.string.raw.end.r"}},name:"string.quoted.double.raw.r"},{begin:"[rR]'(-*)\\{",beginCaptures:{0:{name:"punctuation.definition.string.raw.begin.r"}},end:"\\}\\1'",endCaptures:{0:{name:"punctuation.definition.string.raw.end.r"}},name:"string.quoted.single.raw.r"},{begin:'[rR]"(-*)\\(',beginCaptures:{0:{name:"punctuation.definition.string.raw.begin.r"}},end:'\\)\\1"',endCaptures:{0:{name:"punctuation.definition.string.raw.end.r"}},name:"string.quoted.double.raw.r"},{begin:"[rR]'(-*)\\(",beginCaptures:{0:{name:"punctuation.definition.string.raw.begin.r"}},end:"\\)\\1'",endCaptures:{0:{name:"punctuation.definition.string.raw.end.r"}},name:"string.quoted.single.raw.r"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.r"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.r"}},name:"string.quoted.double.r",patterns:[{match:"\\\\.",name:"constant.character.escape.r"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.r"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.r"}},name:"string.quoted.single.r",patterns:[{match:"\\\\.",name:"constant.character.escape.r"}]}]}},scopeName:"source.r"});var a=[e];export{a as default};
//# sourceMappingURL=fb25a494-r.js.map
