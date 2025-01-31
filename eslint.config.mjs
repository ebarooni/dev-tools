import plugin from "@ebarooni/eslint-config";

export default [
  ...plugin.javascript,
  plugin.json,
  plugin.markdown,
  {
    rules: {
      "no-undef": "off",
    },
  },
];
