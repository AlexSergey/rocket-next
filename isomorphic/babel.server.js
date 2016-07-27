require("babel-polyfill");
require("babel-core/register")({
        "presets": ["es2015", "react", "stage-0"],
        "plugins": [
            "transform-decorators-legacy",
            "kneden",
            "transform-object-assign"
        ]
    }
);

try {
    require("./server");
} catch (e) {
    console.log(e);
}
