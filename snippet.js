module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 20, filename: __jade[0].filename });
buf.push('<style type="text/css">.code-snippet {\n  margin-bottom: 1em;\n}\n.code-area {\n  margin-bottom: 1em;\n}\n.CodeMirror {\n  height: auto;\n  border-radius: 5px;\n  background-color: #f5f5f5;\n}\n</style>');
__jade.shift();
__jade.unshift({ lineno: 20, filename: __jade[0].filename });
buf.push('<div class="code-snippet">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 21, filename: __jade[0].filename });
buf.push('<div class="code-area">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 23, filename: __jade[0].filename });
buf.push('<textarea ui-codemirror="options" ng-model="code" ui-refresh="code">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</textarea>');
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.unshift({ lineno: 23, filename: __jade[0].filename });
buf.push('<button ng-click="exec()" class="btn btn-primary">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 24, filename: __jade[0].filename });
buf.push('<i class="icon-play">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</i>');
__jade.shift();
__jade.unshift({ lineno: 25, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 25, filename: __jade[0].filename });
buf.push('&nbsp;Play');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.shift();
buf.push('</button>');
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
}
return buf.join("");
} catch (err) {
  rethrow(err, __jade[0].filename, __jade[0].lineno);
}
}