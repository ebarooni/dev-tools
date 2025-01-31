import plugin from "@ebarooni/eslint-config";

export default [
  ...plugin.base,
  {
    rules: {
      "no-undef": "off",
    },
  },
];
