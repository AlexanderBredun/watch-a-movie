module.exports = {
	extends: 'stylelint-config-standard-scss',
	rules: {
		"indentation": [2],
      "custom-property-pattern": null,
      "media-feature-range-notation": null,
      "selector-class-pattern": null,
      "scss/dollar-variable-pattern": null,
      "no-descending-specificity":  [ true, { "severity": "warning" }],
      "function-linear-gradient-no-nonstandard-direction": null,
      "declaration-block-no-redundant-longhand-properties": null,
      "selector-pseudo-element-no-unknown": [ true, { "severity": "warning" }],
      "selector-pseudo-class-no-unknown": [ true, { "severity": "warning" }],
	},
};
