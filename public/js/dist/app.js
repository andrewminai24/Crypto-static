(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/components/app.js");
})({
    "./assets/js/components/app.js": function(module, exports) {
        eval('throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/a1/CryptoProfits-app/assets/js/components/app.js: Unexpected token (52:10)\\n\\n  50 |       case \\"home\\":\\n  51 |         return (\\n> 52 |           <Home\\n     |           ^\\n  53 |             handleDateChange={this.handleDateChange}\\n  54 |             globalState={this.state}\\n  55 |             onInputChange={this.onInputChange}\\n    at Parser.raise (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Parser.unexpected (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:7642:16)\\n    at Parser.parseExprAtom (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8841:20)\\n    at Parser.parseExprSubscripts (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Parser.parseMaybeUnary (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Parser.parseExprOps (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Parser.parseMaybeConditional (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Parser.parseMaybeAssign (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8978:28)\\n    at Parser.parseExprAtom (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8762:21)\\n    at Parser.parseExprSubscripts (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Parser.parseMaybeUnary (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Parser.parseExprOps (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Parser.parseMaybeConditional (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Parser.parseMaybeAssign (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Parser.parseExpression (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:8135:23)\\n    at Parser.parseReturnStatement (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10198:28)\\n    at Parser.parseStatementContent (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9877:21)\\n    at Parser.parseStatement (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Parser.parseSwitchStatement (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10236:36)\\n    at Parser.parseStatementContent (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9880:21)\\n    at Parser.parseStatement (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Parser.parseBlockBody (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Parser.parseBlock (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10376:10)\\n    at Parser.parseFunctionBody (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9424:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9394:10)\\n    at Parser.parseMethod (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9348:10)\\n    at Parser.pushClassMethod (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10804:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10729:12)\\n    at Parser.parseClassMember (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10668:10)\\n    at withTopicForbiddingContext (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10623:14)\\n    at Parser.withTopicForbiddingContext (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9702:14)\\n    at Parser.parseClassBody (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10600:10)\\n    at Parser.parseClass (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:10574:22)\\n    at Parser.parseStatementContent (/Users/a1/CryptoProfits-app/node_modules/@babel/parser/lib/index.js:9871:21)");\n\n//# sourceURL=webpack:///./assets/js/components/app.js?');
    }
});