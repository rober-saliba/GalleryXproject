/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/galleries/route";
exports.ids = ["app/api/galleries/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgalleries%2Froute&page=%2Fapi%2Fgalleries%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgalleries%2Froute.js&appDir=C%3A%5Cprojects%5Cmuseum%5Cmuseum%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cprojects%5Cmuseum%5Cmuseum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgalleries%2Froute&page=%2Fapi%2Fgalleries%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgalleries%2Froute.js&appDir=C%3A%5Cprojects%5Cmuseum%5Cmuseum%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cprojects%5Cmuseum%5Cmuseum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_projects_museum_museum_src_app_api_galleries_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/galleries/route.js */ \"(rsc)/./src/app/api/galleries/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/galleries/route\",\n        pathname: \"/api/galleries\",\n        filename: \"route\",\n        bundlePath: \"app/api/galleries/route\"\n    },\n    resolvedPagePath: \"C:\\\\projects\\\\museum\\\\museum\\\\src\\\\app\\\\api\\\\galleries\\\\route.js\",\n    nextConfigOutput,\n    userland: C_projects_museum_museum_src_app_api_galleries_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnYWxsZXJpZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdhbGxlcmllcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdhbGxlcmllcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDcHJvamVjdHMlNUNtdXNldW0lNUNtdXNldW0lNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNwcm9qZWN0cyU1Q211c2V1bSU1Q211c2V1bSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZ0I7QUFDN0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXHByb2plY3RzXFxcXG11c2V1bVxcXFxtdXNldW1cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZ2FsbGVyaWVzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nYWxsZXJpZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nYWxsZXJpZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dhbGxlcmllcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXHByb2plY3RzXFxcXG11c2V1bVxcXFxtdXNldW1cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZ2FsbGVyaWVzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgalleries%2Froute&page=%2Fapi%2Fgalleries%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgalleries%2Froute.js&appDir=C%3A%5Cprojects%5Cmuseum%5Cmuseum%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cprojects%5Cmuseum%5Cmuseum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/galleries/route.js":
/*!****************************************!*\
  !*** ./src/app/api/galleries/route.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mongodb */ \"(rsc)/./src/app/lib/mongodb.js\");\n\n\n// Helper to safely convert MongoDB ID to string\nfunction safeId(id) {\n    try {\n        return id.toString();\n    } catch (e) {\n        return id;\n    }\n}\n// Helper to safely convert MongoDB document for JSON\nfunction sanitizeDocument(doc) {\n    if (!doc) return null;\n    // Create a new object to avoid modifying the original\n    const sanitized = {};\n    // Process each field\n    Object.keys(doc).forEach((key)=>{\n        if (key === '_id') {\n            sanitized._id = safeId(doc._id);\n        } else if (doc[key] instanceof Date) {\n            sanitized[key] = doc[key].toISOString();\n        } else if (typeof doc[key] === 'object' && doc[key] !== null) {\n            sanitized[key] = sanitizeDocument(doc[key]);\n        } else {\n            sanitized[key] = doc[key];\n        }\n    });\n    return sanitized;\n}\nasync function GET() {\n    try {\n        console.log('Fetching galleries...');\n        // Connect directly to MongoDB\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(process.env.MONGODB_DB_NAME);\n        const collection = db.collection('galleries');\n        // Get all galleries\n        const galleries = await collection.find({\n            isActive: true\n        }).toArray();\n        console.log(`Found ${galleries.length} galleries`);\n        // Sanitize documents for JSON\n        const sanitizedGalleries = galleries.map((gallery)=>sanitizeDocument(gallery));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(sanitizedGalleries);\n    } catch (error) {\n        console.error('Failed to fetch galleries:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch galleries'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nYWxsZXJpZXMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ0c7QUFFOUMsZ0RBQWdEO0FBQ2hELFNBQVNFLE9BQU9DLEVBQUU7SUFDaEIsSUFBSTtRQUNGLE9BQU9BLEdBQUdDLFFBQVE7SUFDcEIsRUFBRSxPQUFPQyxHQUFHO1FBQ1YsT0FBT0Y7SUFDVDtBQUNGO0FBRUEscURBQXFEO0FBQ3JELFNBQVNHLGlCQUFpQkMsR0FBRztJQUMzQixJQUFJLENBQUNBLEtBQUssT0FBTztJQUVqQixzREFBc0Q7SUFDdEQsTUFBTUMsWUFBWSxDQUFDO0lBRW5CLHFCQUFxQjtJQUNyQkMsT0FBT0MsSUFBSSxDQUFDSCxLQUFLSSxPQUFPLENBQUNDLENBQUFBO1FBQ3ZCLElBQUlBLFFBQVEsT0FBTztZQUNqQkosVUFBVUssR0FBRyxHQUFHWCxPQUFPSyxJQUFJTSxHQUFHO1FBQ2hDLE9BQU8sSUFBSU4sR0FBRyxDQUFDSyxJQUFJLFlBQVlFLE1BQU07WUFDbkNOLFNBQVMsQ0FBQ0ksSUFBSSxHQUFHTCxHQUFHLENBQUNLLElBQUksQ0FBQ0csV0FBVztRQUN2QyxPQUFPLElBQUksT0FBT1IsR0FBRyxDQUFDSyxJQUFJLEtBQUssWUFBWUwsR0FBRyxDQUFDSyxJQUFJLEtBQUssTUFBTTtZQUM1REosU0FBUyxDQUFDSSxJQUFJLEdBQUdOLGlCQUFpQkMsR0FBRyxDQUFDSyxJQUFJO1FBQzVDLE9BQU87WUFDTEosU0FBUyxDQUFDSSxJQUFJLEdBQUdMLEdBQUcsQ0FBQ0ssSUFBSTtRQUMzQjtJQUNGO0lBRUEsT0FBT0o7QUFDVDtBQUVPLGVBQWVRO0lBQ3BCLElBQUk7UUFDRkMsUUFBUUMsR0FBRyxDQUFDO1FBRVosOEJBQThCO1FBQzlCLE1BQU1DLFNBQVMsTUFBTWxCLG9EQUFhQTtRQUNsQyxNQUFNbUIsS0FBS0QsT0FBT0MsRUFBRSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7UUFDaEQsTUFBTUMsYUFBYUosR0FBR0ksVUFBVSxDQUFDO1FBRWpDLG9CQUFvQjtRQUNwQixNQUFNQyxZQUFZLE1BQU1ELFdBQVdFLElBQUksQ0FBQztZQUFFQyxVQUFVO1FBQUssR0FBR0MsT0FBTztRQUNuRVgsUUFBUUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFTyxVQUFVSSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRWpELDhCQUE4QjtRQUM5QixNQUFNQyxxQkFBcUJMLFVBQVVNLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBVzFCLGlCQUFpQjBCO1FBRXJFLE9BQU9oQyxxREFBWUEsQ0FBQ2lDLElBQUksQ0FBQ0g7SUFDM0IsRUFBRSxPQUFPSSxPQUFPO1FBQ2RqQixRQUFRaUIsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBT2xDLHFEQUFZQSxDQUFDaUMsSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQTRCLEdBQ3JDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxccHJvamVjdHNcXG11c2V1bVxcbXVzZXVtXFxzcmNcXGFwcFxcYXBpXFxnYWxsZXJpZXNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJy4uLy4uL2xpYi9tb25nb2RiJztcblxuLy8gSGVscGVyIHRvIHNhZmVseSBjb252ZXJ0IE1vbmdvREIgSUQgdG8gc3RyaW5nXG5mdW5jdGlvbiBzYWZlSWQoaWQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaWQudG9TdHJpbmcoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBpZDtcbiAgfVxufVxuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IGNvbnZlcnQgTW9uZ29EQiBkb2N1bWVudCBmb3IgSlNPTlxuZnVuY3Rpb24gc2FuaXRpemVEb2N1bWVudChkb2MpIHtcbiAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuICBcbiAgLy8gQ3JlYXRlIGEgbmV3IG9iamVjdCB0byBhdm9pZCBtb2RpZnlpbmcgdGhlIG9yaWdpbmFsXG4gIGNvbnN0IHNhbml0aXplZCA9IHt9O1xuICBcbiAgLy8gUHJvY2VzcyBlYWNoIGZpZWxkXG4gIE9iamVjdC5rZXlzKGRvYykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdfaWQnKSB7XG4gICAgICBzYW5pdGl6ZWQuX2lkID0gc2FmZUlkKGRvYy5faWQpO1xuICAgIH0gZWxzZSBpZiAoZG9jW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICBzYW5pdGl6ZWRba2V5XSA9IGRvY1trZXldLnRvSVNPU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jW2tleV0gPT09ICdvYmplY3QnICYmIGRvY1trZXldICE9PSBudWxsKSB7XG4gICAgICBzYW5pdGl6ZWRba2V5XSA9IHNhbml0aXplRG9jdW1lbnQoZG9jW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYW5pdGl6ZWRba2V5XSA9IGRvY1trZXldO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gc2FuaXRpemVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBnYWxsZXJpZXMuLi4nKTtcbiAgICBcbiAgICAvLyBDb25uZWN0IGRpcmVjdGx5IHRvIE1vbmdvREJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKHByb2Nlc3MuZW52Lk1PTkdPREJfREJfTkFNRSk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ2dhbGxlcmllcycpO1xuICAgIFxuICAgIC8vIEdldCBhbGwgZ2FsbGVyaWVzXG4gICAgY29uc3QgZ2FsbGVyaWVzID0gYXdhaXQgY29sbGVjdGlvbi5maW5kKHsgaXNBY3RpdmU6IHRydWUgfSkudG9BcnJheSgpO1xuICAgIGNvbnNvbGUubG9nKGBGb3VuZCAke2dhbGxlcmllcy5sZW5ndGh9IGdhbGxlcmllc2ApO1xuICAgIFxuICAgIC8vIFNhbml0aXplIGRvY3VtZW50cyBmb3IgSlNPTlxuICAgIGNvbnN0IHNhbml0aXplZEdhbGxlcmllcyA9IGdhbGxlcmllcy5tYXAoZ2FsbGVyeSA9PiBzYW5pdGl6ZURvY3VtZW50KGdhbGxlcnkpKTtcbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oc2FuaXRpemVkR2FsbGVyaWVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZ2FsbGVyaWVzOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGdhbGxlcmllcycgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY2xpZW50UHJvbWlzZSIsInNhZmVJZCIsImlkIiwidG9TdHJpbmciLCJlIiwic2FuaXRpemVEb2N1bWVudCIsImRvYyIsInNhbml0aXplZCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiX2lkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiR0VUIiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImRiIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfREJfTkFNRSIsImNvbGxlY3Rpb24iLCJnYWxsZXJpZXMiLCJmaW5kIiwiaXNBY3RpdmUiLCJ0b0FycmF5IiwibGVuZ3RoIiwic2FuaXRpemVkR2FsbGVyaWVzIiwibWFwIiwiZ2FsbGVyeSIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/galleries/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/mongodb.js":
/*!********************************!*\
  !*** ./src/app/lib/mongodb.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n// Ilya Zeldner\n\n// Log the MongoDB connection details for debugging\nconsole.log('MongoDB Connection Setup:');\nconsole.log(`URI: ${process.env.MONGODB_URI}`);\nconsole.log(`DB Name: ${process.env.MONGODB_DB_NAME}`);\nconst uri = process.env.MONGODB_URI;\nconst dbName = process.env.MONGODB_DB_NAME;\nif (!uri) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env');\n}\nif (!dbName) {\n    throw new Error('Please define the MONGODB_DB_NAME environment variable inside .env');\n}\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, we use a global variable so that the MongoClient\n    // is not constantly created and closed during hot reloading.\n    // This is a good practice because it prevents the MongoClient from \n    // being created multiple times in development mode, which can cause\n    // issues with the connection pool.\n    if (!global._mongoClientPromise) {\n        // If the global variable does not exist, create a new MongoClient\n        // and assign it to the global variable.   \n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        global._mongoClientPromise = client.connect().then((client)=>{\n            console.log('MongoDB Connected Successfully!');\n            return client;\n        }).catch((err)=>{\n            console.error('MongoDB Connection Error:', err);\n            throw err;\n        });\n    }\n    clientPromise = global._mongoClientPromise; // Use the global variable\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb25nb2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZUFBZTtBQUN1QjtBQUV0QyxtREFBbUQ7QUFDbkRDLFFBQVFDLEdBQUcsQ0FBQztBQUNaRCxRQUFRQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0FBQzdDSixRQUFRQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0UsZUFBZSxFQUFFO0FBRXJELE1BQU1DLE1BQU1KLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNRyxTQUFTTCxRQUFRQyxHQUFHLENBQUNFLGVBQWU7QUFFMUMsSUFBSSxDQUFDQyxLQUFLO0lBQ1IsTUFBTSxJQUFJRSxNQUFNO0FBQ2xCO0FBQ0EsSUFBSSxDQUFDRCxRQUFRO0lBQ1QsTUFBTSxJQUFJQyxNQUFNO0FBQ3BCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUlSLElBQXNDLEVBQUU7SUFDeEMsd0VBQXdFO0lBQ3hFLDZEQUE2RDtJQUM3RCxvRUFBb0U7SUFDcEUsb0VBQW9FO0lBQ3BFLG1DQUFtQztJQUNuQyxJQUFJLENBQUNTLE9BQU9DLG1CQUFtQixFQUFFO1FBQ2xDLGtFQUFrRTtRQUNqRSwyQ0FBMkM7UUFDM0NILFNBQVMsSUFBSVYsZ0RBQVdBLENBQUNPO1FBQ3ZCSyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTyxHQUN4Q0MsSUFBSSxDQUFDTCxDQUFBQTtZQUNKVCxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPUTtRQUNULEdBQ0NNLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTGhCLFFBQVFpQixLQUFLLENBQUMsNkJBQTZCRDtZQUMzQyxNQUFNQTtRQUNSO0lBQ047SUFDQU4sZ0JBQWdCQyxPQUFPQyxtQkFBbUIsRUFBRSwwQkFBMEI7QUFDeEUsT0FBTyxFQVlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUYsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RzXFxtdXNldW1cXG11c2V1bVxcc3JjXFxhcHBcXGxpYlxcbW9uZ29kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbHlhIFplbGRuZXJcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbi8vIExvZyB0aGUgTW9uZ29EQiBjb25uZWN0aW9uIGRldGFpbHMgZm9yIGRlYnVnZ2luZ1xyXG5jb25zb2xlLmxvZygnTW9uZ29EQiBDb25uZWN0aW9uIFNldHVwOicpO1xyXG5jb25zb2xlLmxvZyhgVVJJOiAke3Byb2Nlc3MuZW52Lk1PTkdPREJfVVJJfWApO1xyXG5jb25zb2xlLmxvZyhgREIgTmFtZTogJHtwcm9jZXNzLmVudi5NT05HT0RCX0RCX05BTUV9YCk7XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3QgZGJOYW1lID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9EQl9OQU1FO1xyXG5cclxuaWYgKCF1cmkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52Jyk7XHJcbn1cclxuaWYgKCFkYk5hbWUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQl9OQU1FIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52Jyk7XHJcbn1cclxuXHJcbmxldCBjbGllbnQ7XHJcbmxldCBjbGllbnRQcm9taXNlO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7IFxyXG4gICAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgd2UgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIE1vbmdvQ2xpZW50XHJcbiAgICAvLyBpcyBub3QgY29uc3RhbnRseSBjcmVhdGVkIGFuZCBjbG9zZWQgZHVyaW5nIGhvdCByZWxvYWRpbmcuXHJcbiAgICAvLyBUaGlzIGlzIGEgZ29vZCBwcmFjdGljZSBiZWNhdXNlIGl0IHByZXZlbnRzIHRoZSBNb25nb0NsaWVudCBmcm9tIFxyXG4gICAgLy8gYmVpbmcgY3JlYXRlZCBtdWx0aXBsZSB0aW1lcyBpbiBkZXZlbG9wbWVudCBtb2RlLCB3aGljaCBjYW4gY2F1c2VcclxuICAgIC8vIGlzc3VlcyB3aXRoIHRoZSBjb25uZWN0aW9uIHBvb2wuXHJcbiAgICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgIC8vIElmIHRoZSBnbG9iYWwgdmFyaWFibGUgZG9lcyBub3QgZXhpc3QsIGNyZWF0ZSBhIG5ldyBNb25nb0NsaWVudFxyXG4gICAgLy8gYW5kIGFzc2lnbiBpdCB0byB0aGUgZ2xvYmFsIHZhcmlhYmxlLiAgIFxyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XHJcbiAgICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gICAgICAgIC50aGVuKGNsaWVudCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBDb25uZWN0ZWQgU3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsaWVudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBDb25uZWN0aW9uIEVycm9yOicsIGVycik7XHJcbiAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTsgLy8gVXNlIHRoZSBnbG9iYWwgdmFyaWFibGVcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpOyBcclxuICAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbiAgICAgIC50aGVuKGNsaWVudCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vbmdvREIgQ29ubmVjdGVkIFN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICByZXR1cm4gY2xpZW50O1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIENvbm5lY3Rpb24gRXJyb3I6JywgZXJyKTtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgIH0pO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxyXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJNT05HT0RCX0RCX05BTUUiLCJ1cmkiLCJkYk5hbWUiLCJFcnJvciIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCIsInRoZW4iLCJjYXRjaCIsImVyciIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgalleries%2Froute&page=%2Fapi%2Fgalleries%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgalleries%2Froute.js&appDir=C%3A%5Cprojects%5Cmuseum%5Cmuseum%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cprojects%5Cmuseum%5Cmuseum&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();