"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreEnvFile = exports.envFilePath = void 0;
const envFileMap = {
    development: '.env.local',
    test: '.env.test',
};
exports.envFilePath = (_a = envFileMap[process.env.NODE_ENV]) !== null && _a !== void 0 ? _a : '.env';
exports.ignoreEnvFile = process.env.NODE_ENV === 'production';
