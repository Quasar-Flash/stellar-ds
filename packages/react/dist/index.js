"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Box: () => Box,
  Button: () => Button,
  Heading: () => Heading,
  Text: () => Text,
  TextInput: () => TextInput
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  qice100: "#F6F8FC",
  qgray50: "#FAFAFA",
  qgray100: "#F6F7FC",
  qgray200: "#edf2f7",
  qgray300: "#E8EAF3",
  qgray400: "#D5D5D5",
  qgray500: "#a0aec0",
  qgray600: "#757575",
  qgray650: "#999999",
  qgray700: "#4a5568",
  qgray800: "#2d3748",
  qgray900: "#1a202c",
  qgray950: "#333333",
  qdarkGray100: "#252525",
  qgreen100: "#1BAC55",
  qgreen200: "#319358",
  qblue900: "#2A2E3E",
  qred100: "#E83F5B",
  test: "#fff"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Poppins, sans-serif",
  secondary: "Roboto, sans-serif",
  tertiary: "Scada, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$qgreen100",
        "&:not(:disabled):hover": {
          background: "$qgreen200",
          filter: "brightness(0.9)"
        },
        "&:disabled": {
          backgroundColor: "$qgreen100",
          opacity: 0.4
        }
      },
      secondary: {
        background: "$qblue900",
        color: "$white",
        "&:not(:disabled):hover": {
          color: "$qgray100",
          filter: "brightness(0.9)"
        },
        "&:disabled": {
          color: "$qgray200",
          opacity: 0.4
        }
      },
      tertiary: {
        background: "$qred100",
        color: "$white",
        "&:not(:disabled):hover": {
          color: "$white",
          filter: "brightness(0.9)"
        },
        "&:disabled": {
          color: "$white",
          opacity: 0.4
        }
      },
      quaternary: {
        background: "$qice100",
        color: "$qdarkGray100",
        "&:not(:disabled):hover": {
          color: "$qdarkGray100",
          filter: "brightness(0.9)"
        },
        "&:disabled": {
          color: "$qdarkGray100",
          opacity: 0.4
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "baseline",
  backgroundColor: "$white",
  variants: {
    variant: {
      fullfilled: {
        border: "2px solid $gray900"
      },
      underscored: {
        padding: "$3 $2",
        backgroundColor: "transparent",
        borderBottom: "2px solid $qgray600",
        borderRadius: "unset"
      }
    }
  },
  "&:has(input:focus)": {
    borderColor: "$qgray900"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$qgray950",
  fontWeight: "regular"
});
var Label = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$qgray950",
  fontWeight: "regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$qgray950",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$qgray650"
  }
});

// src/components/TextInput/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function TextInput(_a) {
  var _b = _a, {
    prefix,
    label,
    variant
  } = _b, props = __objRest(_b, [
    "prefix",
    "label",
    "variant"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    !!label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TextInputContainer, { variant, children: [
      !!prefix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prefix, { children: prefix }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, __spreadValues({}, props))
    ] })
  ] });
}
TextInput.displayName = "TextInput";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Box,
  Button,
  Heading,
  Text,
  TextInput
});
