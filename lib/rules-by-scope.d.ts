declare const eslintRules: {
  'array-callback-return': string;
  'constructor-super': string;
  'default-case-last': string;
  'default-param-last': string;
  eqeqeq: string;
  'for-direction': string;
  'getter-return': string;
  'guard-for-in': string;
  'max-lines': string;
  'max-params': string;
  'no-array-constructor': string;
  'no-async-promise-executor': string;
  'no-bitwise': string;
  'no-caller': string;
  'no-case-declarations': string;
  'no-class-assign': string;
  'no-compare-neg-zero': string;
  'no-cond-assign': string;
  'no-console': string;
  'no-const-assign': string;
  'no-constant-binary-expression': string;
  'no-constant-condition': string;
  'no-continue': string;
  'no-control-regex': string;
  'no-debugger': string;
  'no-delete-var': string;
  'no-dupe-class-members': string;
  'no-dupe-else-if': string;
  'no-dupe-keys': string;
  'no-duplicate-case': string;
  'no-empty': string;
  'no-empty-character-class': string;
  'no-empty-pattern': string;
  'no-empty-static-block': string;
  'no-eq-null': string;
  'no-eval': string;
  'no-ex-assign': string;
  'no-extra-boolean-cast': string;
  'no-fallthrough': string;
  'no-func-assign': string;
  'no-global-assign': string;
  'no-import-assign': string;
  'no-inner-declarations': string;
  'no-irregular-whitespace': string;
  'no-iterator': string;
  'no-loss-of-precision': string;
  'no-mixed-operators': string;
  'no-new-symbol': string;
  'no-new-wrappers': string;
  'no-nonoctal-decimal-escape': string;
  'no-obj-calls': string;
  'no-proto': string;
  'no-prototype-builtins': string;
  'no-redeclare': string;
  'no-regex-spaces': string;
  'no-return-await': string;
  'no-script-url': string;
  'no-self-assign': string;
  'no-self-compare': string;
  'no-setter-return': string;
  'no-shadow-restricted-names': string;
  'no-sparse-arrays': string;
  'no-template-curly-in-string': string;
  'no-ternary': string;
  'no-this-before-super': string;
  'no-undef': string;
  'no-unsafe-finally': string;
  'no-unsafe-negation': string;
  'no-unsafe-optional-chaining': string;
  'no-unused-labels': string;
  'no-unused-private-class-members': string;
  'no-useless-catch': string;
  'no-useless-escape': string;
  'no-useless-rename': string;
  'no-var': string;
  'no-void': string;
  'no-with': string;
  'require-yield': string;
  'use-isnan': string;
  'valid-typeof': string;
};
declare const importRules: {
  'import/default': string;
  'import/export': string;
  'import/named': string;
  'import/namespace': string;
  'import/no-amd': string;
  'import/no-cycle': string;
  'import/no-default-export': string;
  'import/no-deprecated': string;
  'import/no-duplicates': string;
  'import/no-named-as-default': string;
  'import/no-named-as-default-member': string;
  'import/no-self-import': string;
  'import/no-unused-modules': string;
};
declare const jestRules: {
  'jest/expect-expect': string;
  'jest/max-expects': string;
  'jest/no-alias-methods': string;
  'jest/no-commented-out-tests': string;
  'jest/no-conditional-expect': string;
  'jest/no-confusing-set-timeout': string;
  'jest/no-deprecated-functions': string;
  'jest/no-disabled-tests': string;
  'jest/no-done-callback': string;
  'jest/no-export': string;
  'jest/no-focused-tests': string;
  'jest/no-hooks': string;
  'jest/no-identical-title': string;
  'jest/no-interpolation-in-snapshots': string;
  'jest/no-jasmine-globals': string;
  'jest/no-mocks-import': string;
  'jest/no-restricted-jest-methods': string;
  'jest/no-restricted-matchers': string;
  'jest/no-standalone-expect': string;
  'jest/no-test-prefixes': string;
  'jest/no-test-return-statement': string;
  'jest/no-untyped-mock-factory': string;
  'jest/prefer-called-with': string;
  'jest/prefer-comparison-matcher': string;
  'jest/prefer-equality-matcher': string;
  'jest/prefer-expect-resolves': string;
  'jest/prefer-lowercase-title': string;
  'jest/prefer-mock-promise-shorthand': string;
  'jest/prefer-spy-on': string;
  'jest/prefer-strict-equal': string;
  'jest/prefer-to-be': string;
  'jest/prefer-to-contain': string;
  'jest/prefer-to-have-length': string;
  'jest/prefer-todo': string;
  'jest/require-to-throw-message': string;
  'jest/valid-describe-callback': string;
  'jest/valid-expect': string;
  'jest/valid-title': string;
};
declare const jsdocRules: {
  'jsdoc/check-access': string;
  'jsdoc/check-property-names': string;
  'jsdoc/empty-tags': string;
  'jsdoc/require-property': string;
  'jsdoc/require-property-description': string;
  'jsdoc/require-property-name': string;
  'jsdoc/require-property-type': string;
};
declare const jsxA11yRules: {
  'jsx-a11y/alt-text': string;
  'jsx-a11y/anchor-has-content': string;
  'jsx-a11y/anchor-is-valid': string;
  'jsx-a11y/aria-activedescendant-has-tabindex': string;
  'jsx-a11y/aria-props': string;
  'jsx-a11y/aria-role': string;
  'jsx-a11y/aria-unsupported-elements': string;
  'jsx-a11y/autocomplete-valid': string;
  'jsx-a11y/click-events-have-key-events': string;
  'jsx-a11y/heading-has-content': string;
  'jsx-a11y/html-has-lang': string;
  'jsx-a11y/iframe-has-title': string;
  'jsx-a11y/img-redundant-alt': string;
  'jsx-a11y/lang': string;
  'jsx-a11y/media-has-caption': string;
  'jsx-a11y/mouse-events-have-key-events': string;
  'jsx-a11y/no-access-key': string;
  'jsx-a11y/no-aria-hidden-on-focusable': string;
  'jsx-a11y/no-autofocus': string;
  'jsx-a11y/no-distracting-elements': string;
  'jsx-a11y/no-redundant-roles': string;
  'jsx-a11y/prefer-tag-over-role': string;
  'jsx-a11y/role-has-required-aria-props': string;
  'jsx-a11y/role-supports-aria-props': string;
  'jsx-a11y/scope': string;
  'jsx-a11y/tabindex-no-positive': string;
};
declare const nextjsRules: {
  'nextjs/google-font-display': string;
  'nextjs/google-font-preconnect': string;
  'nextjs/inline-script-id': string;
  'nextjs/next-script-for-ga': string;
  'nextjs/no-assign-module-variable': string;
  'nextjs/no-async-client-component': string;
  'nextjs/no-before-interactive-script-outside-document': string;
  'nextjs/no-css-tags': string;
  'nextjs/no-document-import-in-page': string;
  'nextjs/no-head-element': string;
  'nextjs/no-head-import-in-document': string;
  'nextjs/no-img-element': string;
  'nextjs/no-script-component-in-head': string;
  'nextjs/no-sync-scripts': string;
  'nextjs/no-title-in-document-head': string;
  'nextjs/no-typos': string;
  'nextjs/no-unwanted-polyfillio': string;
};
declare const reactRules: {
  'react/button-has-type': string;
  'react/checked-requires-onchange-or-readonly': string;
  'react/jsx-key': string;
  'react/jsx-no-comment-textnodes': string;
  'react/jsx-no-duplicate-props': string;
  'react/jsx-no-target-blank': string;
  'react/jsx-no-undef': string;
  'react/jsx-no-useless-fragment': string;
  'react/no-children-prop': string;
  'react/no-danger': string;
  'react/no-direct-mutation-state': string;
  'react/no-find-dom-node': string;
  'react/no-is-mounted': string;
  'react/no-render-return-value': string;
  'react/no-string-refs': string;
  'react/no-unescaped-entities': string;
  'react/no-unknown-property': string;
  'react/react-in-jsx-scope': string;
  'react/require-render-return': string;
  'react/void-dom-elements-no-children': string;
};
declare const reactPerfRules: {
  'react-perf/jsx-no-jsx-as-prop': string;
  'react-perf/jsx-no-new-array-as-prop': string;
  'react-perf/jsx-no-new-function-as-prop': string;
  'react-perf/jsx-no-new-object-as-prop': string;
};
declare const treeShakingRules: {
  'tree-shaking/no-side-effects-in-initialization': string;
};
declare const typescriptRules: {
  '@typescript-eslint/adjacent-overload-signatures': string;
  '@typescript-eslint/array-type': string;
  '@typescript-eslint/ban-ts-comment': string;
  '@typescript-eslint/ban-tslint-comment': string;
  '@typescript-eslint/ban-types': string;
  '@typescript-eslint/consistent-type-definitions': string;
  '@typescript-eslint/no-duplicate-enum-values': string;
  '@typescript-eslint/no-empty-interface': string;
  '@typescript-eslint/no-explicit-any': string;
  '@typescript-eslint/no-extra-non-null-assertion': string;
  '@typescript-eslint/no-misused-new': string;
  '@typescript-eslint/no-namespace': string;
  '@typescript-eslint/no-non-null-asserted-optional-chain': string;
  '@typescript-eslint/no-this-alias': string;
  '@typescript-eslint/no-unnecessary-type-constraint': string;
  '@typescript-eslint/no-unsafe-declaration-merging': string;
  '@typescript-eslint/no-var-requires': string;
  '@typescript-eslint/prefer-as-const': string;
  '@typescript-eslint/prefer-for-of': string;
  '@typescript-eslint/prefer-function-type': string;
  '@typescript-eslint/prefer-ts-expect-error': string;
  '@typescript-eslint/triple-slash-reference': string;
};
declare const unicornRules: {
  'unicorn/catch-error-name': string;
  'unicorn/empty-brace-spaces': string;
  'unicorn/error-message': string;
  'unicorn/escape-case': string;
  'unicorn/explicit-length-check': string;
  'unicorn/filename-case': string;
  'unicorn/new-for-builtins': string;
  'unicorn/no-abusive-eslint-disable': string;
  'unicorn/no-array-for-each': string;
  'unicorn/no-array-reduce': string;
  'unicorn/no-await-expression-member': string;
  'unicorn/no-await-in-promise-methods': string;
  'unicorn/no-console-spaces': string;
  'unicorn/no-document-cookie': string;
  'unicorn/no-empty-file': string;
  'unicorn/no-hex-escape': string;
  'unicorn/no-instanceof-array': string;
  'unicorn/no-invalid-remove-event-listener': string;
  'unicorn/no-lonely-if': string;
  'unicorn/no-negated-condition': string;
  'unicorn/no-nested-ternary': string;
  'unicorn/no-new-array': string;
  'unicorn/no-new-buffer': string;
  'unicorn/no-null': string;
  'unicorn/no-object-as-default-parameter': string;
  'unicorn/no-process-exit': string;
  'unicorn/no-single-promise-in-promise-methods': string;
  'unicorn/no-static-only-class': string;
  'unicorn/no-thenable': string;
  'unicorn/no-this-assignment': string;
  'unicorn/no-typeof-undefined': string;
  'unicorn/no-unnecessary-await': string;
  'unicorn/no-unreadable-array-destructuring': string;
  'unicorn/no-unreadable-iife': string;
  'unicorn/no-useless-fallback-in-spread': string;
  'unicorn/no-useless-length-check': string;
  'unicorn/no-useless-promise-resolve-reject': string;
  'unicorn/no-useless-spread': string;
  'unicorn/no-useless-switch-case': string;
  'unicorn/no-zero-fractions': string;
  'unicorn/number-literal-case': string;
  'unicorn/numeric-separators-style': string;
  'unicorn/prefer-add-event-listener': string;
  'unicorn/prefer-array-flat': string;
  'unicorn/prefer-array-flat-map': string;
  'unicorn/prefer-array-some': string;
  'unicorn/prefer-blob-reading-methods': string;
  'unicorn/prefer-code-point': string;
  'unicorn/prefer-date-now': string;
  'unicorn/prefer-dom-node-append': string;
  'unicorn/prefer-dom-node-dataset': string;
  'unicorn/prefer-dom-node-remove': string;
  'unicorn/prefer-dom-node-text-content': string;
  'unicorn/prefer-event-target': string;
  'unicorn/prefer-includes': string;
  'unicorn/prefer-logical-operator-over-ternary': string;
  'unicorn/prefer-math-trunc': string;
  'unicorn/prefer-modern-dom-apis': string;
  'unicorn/prefer-modern-math-apis': string;
  'unicorn/prefer-native-coercion-functions': string;
  'unicorn/prefer-node-protocol': string;
  'unicorn/prefer-number-properties': string;
  'unicorn/prefer-optional-catch-binding': string;
  'unicorn/prefer-prototype-methods': string;
  'unicorn/prefer-query-selector': string;
  'unicorn/prefer-reflect-apply': string;
  'unicorn/prefer-regexp-test': string;
  'unicorn/prefer-set-size': string;
  'unicorn/prefer-spread': string;
  'unicorn/prefer-string-replace-all': string;
  'unicorn/prefer-string-slice': string;
  'unicorn/prefer-string-starts-ends-with': string;
  'unicorn/prefer-string-trim-start-end': string;
  'unicorn/prefer-type-error': string;
  'unicorn/require-array-join-separator': string;
  'unicorn/require-number-to-fixed-digits-argument': string;
  'unicorn/switch-case-braces': string;
  'unicorn/text-encoding-identifier-case': string;
  'unicorn/throw-new-error': string;
};
export {
  eslintRules,
  importRules,
  jestRules,
  jsdocRules,
  jsxA11yRules,
  nextjsRules,
  reactRules,
  reactPerfRules,
  treeShakingRules,
  typescriptRules,
  unicornRules,
};
