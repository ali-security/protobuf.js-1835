"use strict";

var patched = false;

function patchTypeParser() {
    if (patched)
        return;
    patched = true;

    var type = require("jsdoc/tag/type");
    var parse = type.parse;

    type.parse = function parseTypeScriptType(tagValue, canHaveName, canHaveType) {
        try {
            return parse(tagValue, canHaveName, canHaveType);
        } catch (e) {
            if (!canHaveType)
                throw e;

            var text = String(tagValue || "");
            var open = text.indexOf("{");
            if (open < 0)
                throw e;

            var depth = 0;
            var close = -1;
            for (var i = open; i < text.length; ++i) {
                var ch = text.charAt(i);
                if (ch === "{")
                    ++depth;
                else if (ch === "}" && --depth === 0) {
                    close = i;
                    break;
                }
            }
            if (close < 0)
                throw e;

            var expression = text.substring(open + 1, close).trim();
            if (!/[&;]|\?:|=>|\bkeyof\b|\btypeof\b|^\s*\{/.test(expression))
                throw e;

            var name = canHaveName ? text.substring(close + 1).trim() : "";
            return {
                type: [ expression ],
                typeExpression: expression,
                name: name
            };
        }
    };
}

exports.defineTags = function(dictionary) {
    patchTypeParser();

    dictionary.defineTag("template", {
        mustHaveValue: true,
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            (doclet.templates || (doclet.templates = [])).push(tag.text);
        }
    });

    dictionary.defineTag("tstype", {
        mustHaveValue: true,
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            doclet.tsType = tag.text;
        }
    });
};
