/*! For licenses information, see LICENSES.txt */
const n=Object.freeze(JSON.parse(`{"displayName":"Hjson","fileTypes":["hjson"],"foldingStartMarker":"(?:^\\\\s*[{\\\\[](?!.*[}\\\\]],?\\\\s*$)|[{\\\\[]\\\\s*$)","foldingStopMarker":"(?:^\\\\s*[}\\\\]])","name":"hjson","patterns":[{"include":"#comments"},{"include":"#value"},{"match":"[^\\\\s]","name":"invalid.illegal.excess-characters.hjson"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.hjson"}},"end":"(\\\\])(?:\\\\s*([^,\\\\s]+))?","endCaptures":{"1":{"name":"punctuation.definition.array.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"meta.structure.array.hjson","patterns":[{"include":"#arrayContent"}]},"arrayArray":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.hjson"}},"end":"(\\\\])(?:\\\\s*([^,\\\\s\\\\]]+))?","endCaptures":{"1":{"name":"punctuation.definition.array.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"meta.structure.array.hjson","patterns":[{"include":"#arrayContent"}]},"arrayConstant":{"captures":{"1":{"name":"constant.language.hjson"},"2":{"name":"punctuation.separator.array.after-const.hjson"}},"match":"\\\\b(true|false|null)(?:[\\\\t ]*(?=,)|[\\\\t ]*(?:(,)[\\\\t ]*)?(?=$|#|/\\\\*|//|\\\\]))"},"arrayContent":{"name":"meta.structure.array.hjson","patterns":[{"include":"#comments"},{"include":"#arrayValue"},{"begin":"(?<=\\\\[)|,","beginCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.hjson"}},"end":"(?=[^\\\\s,/#])|(?=/[^/*])","patterns":[{"include":"#comments"},{"match":",","name":"invalid.illegal.extra-comma.hjson"}]},{"match":",","name":"punctuation.separator.array.hjson"},{"match":"[^\\\\s\\\\]]","name":"invalid.illegal.expected-array-separator.hjson"}]},"arrayJstring":{"patterns":[{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(\\")(?:\\\\s*((?:[^,\\\\s\\\\]#/]|/[^/*])+))?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.double.hjson","patterns":[{"include":"#jstringDoubleContent"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(')(?:\\\\s*((?:[^,\\\\s\\\\]#/]|/[^/*])+))?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.single.hjson","patterns":[{"include":"#jstringSingleContent"}]}]},"arrayMstring":{"begin":"'''","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(''')(?:\\\\s*((?:[^,\\\\s\\\\]#/]|/[^/*])+))?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.multiline.hjson"},"arrayNumber":{"captures":{"1":{"name":"constant.numeric.hjson"},"2":{"name":"punctuation.separator.array.after-num.hjson"}},"match":"(-?(?:0|(?:[1-9]\\\\d*))(?:\\\\.\\\\d+)?(?:[eE][+-]?\\\\d+)?)(?:[\\\\t ]*(?=,)|[\\\\t ]*(?:(,)[\\\\t ]*)?(?=$|#|/\\\\*|//|\\\\]))"},"arrayObject":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.hjson"}},"end":"(\\\\}|(?<=\\\\}))(?:\\\\s*([^,\\\\s\\\\]]+))?","endCaptures":{"1":{"name":"punctuation.definition.dictionary.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"meta.structure.dictionary.hjson","patterns":[{"include":"#objectContent"}]},"arrayString":{"patterns":[{"include":"#arrayMstring"},{"include":"#arrayJstring"},{"include":"#ustring"}]},"arrayValue":{"patterns":[{"include":"#arrayNumber"},{"include":"#arrayConstant"},{"include":"#arrayString"},{"include":"#arrayObject"},{"include":"#arrayArray"}]},"comments":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.hjson"}},"match":"^\\\\s*(#).*(?:\\\\n)?","name":"comment.line.hash"},{"captures":{"1":{"name":"punctuation.definition.comment.hjson"}},"match":"^\\\\s*(//).*(?:\\\\n)?","name":"comment.line.double-slash"},{"begin":"^\\\\s*/\\\\*","beginCaptures":{"1":{"name":"punctuation.definition.comment.hjson"}},"end":"\\\\*/(?:\\\\s*\\\\n)?","endCaptures":{"1":{"name":"punctuation.definition.comment.hjson"}},"name":"comment.block.double-slash"},{"captures":{"1":{"name":"punctuation.definition.comment.hjson"}},"match":"(#)[^\\\\n]*","name":"comment.line.hash"},{"captures":{"1":{"name":"punctuation.definition.comment.hjson"}},"match":"(//)[^\\\\n]*","name":"comment.line.double-slash"},{"begin":"/\\\\*","beginCaptures":{"1":{"name":"punctuation.definition.comment.hjson"}},"end":"\\\\*/","endCaptures":{"1":{"name":"punctuation.definition.comment.hjson"}},"name":"comment.block.double-slash"}]},"commentsNewline":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.hjson"}},"match":"(#).*\\\\n","name":"comment.line.hash"},{"captures":{"1":{"name":"punctuation.definition.comment.hjson"}},"match":"(//).*\\\\n","name":"comment.line.double-slash"},{"begin":"/\\\\*","beginCaptures":{"1":{"name":"punctuation.definition.comment.hjson"}},"end":"\\\\*/(\\\\s*\\\\n)?","endCaptures":{"1":{"name":"punctuation.definition.comment.hjson"}},"name":"comment.block.double-slash"}]},"constant":{"captures":{"1":{"name":"constant.language.hjson"}},"match":"\\\\b(true|false|null)[\\\\t ]*(?=$|#|/\\\\*|//|\\\\])"},"jstring":{"patterns":[{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(\\")(?:\\\\s*((?:[^\\\\s#/]|/[^/*]).*)$)?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.double.hjson","patterns":[{"include":"#jstringDoubleContent"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(')(?:\\\\s*((?:[^\\\\s#/]|/[^/*]).*)$)?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.single.hjson","patterns":[{"include":"#jstringSingleContent"}]}]},"jstringDoubleContent":{"patterns":[{"match":"\\\\\\\\(?:[\\"'\\\\\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4})","name":"constant.character.escape.hjson"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.hjson"},{"match":"[^\\"]*[^\\\\n\\\\r\\"\\\\\\\\]$","name":"invalid.illegal.string.hjson"}]},"jstringSingleContent":{"patterns":[{"match":"\\\\\\\\(?:[\\"'\\\\\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4})","name":"constant.character.escape.hjson"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.hjson"},{"match":"[^']*[^\\\\n\\\\r'\\\\\\\\]$","name":"invalid.illegal.string.hjson"}]},"key":{"begin":"(?:((?:[^:,\\\\{\\\\}\\\\[\\\\]\\\\s\\"'][^:,\\\\{\\\\}\\\\[\\\\]\\\\s]*)|(?:'(?:[^\\\\\\\\']|(\\\\\\\\(?:[\\"'\\\\\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4}))|(\\\\\\\\.))*')|(?:\\"(?:[^\\\\\\\\\\"]|(\\\\\\\\(?:[\\"'\\\\\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4}))|(\\\\\\\\.))*\\"))\\\\s*(?!\\\\n)([,\\\\{\\\\}\\\\[\\\\]]*))","beginCaptures":{"0":{"name":"meta.structure.key-value.begin.hjson"},"1":{"name":"support.type.property-name.hjson"},"2":{"name":"constant.character.escape.hjson"},"3":{"name":"invalid.illegal.unrecognized-string-escape.hjson"},"4":{"name":"constant.character.escape.hjson"},"5":{"name":"invalid.illegal.unrecognized-string-escape.hjson"},"6":{"name":"invalid.illegal.separator.hjson"},"7":{"name":"invalid.illegal.property-name.hjson"}},"end":"(?<!^|:)\\\\s*\\\\n|(?=})|(,)","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.hjson"}},"patterns":[{"include":"#commentsNewline"},{"include":"#keyValue"},{"match":"[^\\\\s]","name":"invalid.illegal.object-property.hjson"}]},"keyValue":{"begin":"(?:\\\\s*(:)\\\\s*([,\\\\}\\\\]]*))","beginCaptures":{"1":{"name":"punctuation.separator.dictionary.key-value.hjson"},"2":{"name":"invalid.illegal.object-property.hjson"}},"end":"(?<!^)\\\\s*(?=\\\\n)|(?=[},])","name":"meta.structure.key-value.hjson","patterns":[{"include":"#comments"},{"match":"^\\\\s+"},{"include":"#objectValue"},{"captures":{"1":{"name":"invalid.illegal.object-property.closing-bracket.hjson"}},"match":"^\\\\s*(\\\\})"},{"match":"[^\\\\s]","name":"invalid.illegal.object-property.hjson"}]},"mstring":{"begin":"'''","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(''')(?:\\\\s*((?:[^\\\\s#/]|/[^/*]).*)$)?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.multiline.hjson"},"number":{"captures":{"1":{"name":"constant.numeric.hjson"}},"match":"(-?(?:0|(?:[1-9]\\\\d*))(?:\\\\.\\\\d+)?(?:[eE][+-]?\\\\d+)?)[\\\\t ]*(?=$|#|/\\\\*|//|\\\\])"},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.hjson"}},"end":"(\\\\}|(?<=\\\\}))(?:\\\\s*([^,\\\\s]+))?","endCaptures":{"1":{"name":"punctuation.definition.dictionary.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"meta.structure.dictionary.hjson","patterns":[{"include":"#objectContent"}]},"objectArray":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.hjson"}},"end":"(\\\\])(?:\\\\s*([^,\\\\s\\\\}]+))?","endCaptures":{"1":{"name":"punctuation.definition.array.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"meta.structure.array.hjson","patterns":[{"include":"#arrayContent"}]},"objectConstant":{"captures":{"1":{"name":"constant.language.hjson"},"2":{"name":"punctuation.separator.dictionary.pair.after-const.hjson"}},"match":"\\\\b(true|false|null)(?:[\\\\t ]*(?=,)|[\\\\t ]*(?:(,)[\\\\t ]*)?(?=$|#|/\\\\*|//|\\\\}))"},"objectContent":{"patterns":[{"include":"#comments"},{"include":"#key"},{"match":":[.|\\\\s]","name":"invalid.illegal.object-property.hjson"},{"begin":"(?<=\\\\{|,)|,","beginCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.hjson"}},"end":"(?=[^\\\\s,/#])|(?=/[^/*])","patterns":[{"include":"#comments"},{"match":",","name":"invalid.illegal.extra-comma.hjson"}]},{"match":"[^\\\\s]","name":"invalid.illegal.object-property.hjson"}]},"objectJstring":{"patterns":[{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(\\")(?:\\\\s*((?:[^,\\\\s\\\\}#/]|/[^/*])+))?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.double.hjson","patterns":[{"include":"#jstringDoubleContent"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(')(?:\\\\s*((?:[^,\\\\s\\\\}#/]|/[^/*])+))?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.single.hjson","patterns":[{"include":"#jstringSingleContent"}]}]},"objectMstring":{"begin":"'''","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.hjson"}},"end":"(''')(?:\\\\s*((?:[^,\\\\s\\\\}#/]|/[^/*])+))?","endCaptures":{"1":{"name":"punctuation.definition.string.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"string.quoted.multiline.hjson"},"objectNumber":{"captures":{"1":{"name":"constant.numeric.hjson"},"2":{"name":"punctuation.separator.dictionary.pair.after-num.hjson"}},"match":"(-?(?:0|(?:[1-9]\\\\d*))(?:\\\\.\\\\d+)?(?:[eE][+-]?\\\\d+)?)(?:[\\\\t ]*(?=,)|[\\\\t ]*(?:(,)[\\\\t ]*)?(?=$|#|/\\\\*|//|\\\\}))"},"objectObject":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.hjson"}},"end":"(\\\\}|(?<=\\\\})\\\\}?)(?:\\\\s*([^,\\\\s}]+))?","endCaptures":{"1":{"name":"punctuation.definition.dictionary.end.hjson"},"2":{"name":"invalid.illegal.value.hjson"}},"name":"meta.structure.dictionary.hjson","patterns":[{"include":"#objectContent"}]},"objectString":{"patterns":[{"include":"#objectMstring"},{"include":"#objectJstring"},{"include":"#ustring"}]},"objectValue":{"patterns":[{"include":"#objectNumber"},{"include":"#objectConstant"},{"include":"#objectString"},{"include":"#objectObject"},{"include":"#objectArray"}]},"string":{"patterns":[{"include":"#mstring"},{"include":"#jstring"},{"include":"#ustring"}]},"ustring":{"match":"([^:,\\\\{\\\\[\\\\}\\\\]\\\\s].*)$","name":"string.quoted.none.hjson"},"value":{"patterns":[{"include":"#number"},{"include":"#constant"},{"include":"#string"},{"include":"#object"},{"include":"#array"}]}},"scopeName":"source.hjson"}`)),e=[n];export{e as default};
//# sourceMappingURL=93a78f11-hjson.js.map
