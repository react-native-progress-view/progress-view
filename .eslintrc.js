module.exports = {
  root: true,
  extends: ['@react-native'],
  overrides: [
    {
      // @react-native/babel-preset parses Flow with hermes-parser, whose
      // tokens @babel/eslint-parser can't convert; lint Flow files the way
      // React Native itself does. hermes-eslint resolves type references on
      // its own, so the ft-flow scope rules are redundant (and incompatible),
      // and Flow itself reports undefined identifiers, including its builtin
      // types like $ReadOnly that no-undef doesn't know about.
      files: ['*.js'],
      parser: 'hermes-eslint',
      rules: {
        'ft-flow/define-flow-type': 'off',
        'ft-flow/use-flow-type': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
