/*! For licenses information, see LICENSES.txt */
const e=Object.freeze({displayName:"Dockerfile",name:"docker",patterns:[{captures:{1:{name:"keyword.other.special-method.dockerfile"},2:{name:"keyword.other.special-method.dockerfile"}},match:"^\\s*\\b(?i:(FROM))\\b.*?\\b(?i:(AS))\\b"},{captures:{1:{name:"keyword.control.dockerfile"},2:{name:"keyword.other.special-method.dockerfile"}},match:"^\\s*(?i:(ONBUILD)\\s+)?(?i:(ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR))\\s"},{captures:{1:{name:"keyword.operator.dockerfile"},2:{name:"keyword.other.special-method.dockerfile"}},match:"^\\s*(?i:(ONBUILD)\\s+)?(?i:(CMD|ENTRYPOINT))\\s"},{begin:'"',beginCaptures:{1:{name:"punctuation.definition.string.begin.dockerfile"}},end:'"',endCaptures:{1:{name:"punctuation.definition.string.end.dockerfile"}},name:"string.quoted.double.dockerfile",patterns:[{match:"\\\\.",name:"constant.character.escaped.dockerfile"}]},{begin:"'",beginCaptures:{1:{name:"punctuation.definition.string.begin.dockerfile"}},end:"'",endCaptures:{1:{name:"punctuation.definition.string.end.dockerfile"}},name:"string.quoted.single.dockerfile",patterns:[{match:"\\\\.",name:"constant.character.escaped.dockerfile"}]},{captures:{1:{name:"punctuation.whitespace.comment.leading.dockerfile"},2:{name:"comment.line.number-sign.dockerfile"},3:{name:"punctuation.definition.comment.dockerfile"}},comment:"comment.line",match:"^(\\s*)((#).*$\\n?)"}],scopeName:"source.dockerfile",aliases:["dockerfile"]});var n=[e];export{n as default};
//# sourceMappingURL=c96d1659-docker.js.map
