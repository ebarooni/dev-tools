module.exports = {
  excluded: [
    "${PWD}/node_modules",
    "${PWD}/ios/Pods",
    "${PWD}/example-app",
    "${PWD}/example-app",
  ],
  line_length: {
    ignores_comments: true,
    ignores_function_declarations: true,
    ignores_interpolated_strings: true,
    ignores_urls: true,
    warning: 150,
  },
  opt_in_rules: [
    "implicitly_unwrapped_optional",
    "file_name_no_space",
    "force_unwrapping",
    "function_default_parameter_at_end",
    "lower_acl_than_parent",
    "modifier_order",
    "overridden_super_call",
    "unowned_variable_capture",
    "unused_import",
  ],
};
