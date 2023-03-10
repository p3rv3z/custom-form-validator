export const validate = async (name, rule, value) => {
  if (rule.required && !value) {
    return rule.message || `${name} is required`;
  }

  if (
    rule.min &&
    (rule.type === "number" ? value < rule.min : value.length < rule.min)
  ) {
    return (
      rule.message ||
      `${name} should be at least ${rule.min} ${
        rule.type !== "number" && "characters"
      }`
    );
  }

  if (
    rule.max &&
    (rule.type === "number" ? value > rule.max : value.length > rule.max)
  ) {
    return (
      rule.message ||
      `${name} should be at most ${rule.max} ${
        rule.type !== "number" && "characters"
      }`
    );
  }

  if (rule.pattern && !rule.pattern.test(value)) {
    return rule.message || `${name} is invalid`;
  }

  if (rule.validator) {
    const result = rule.validator(value);
    if (result instanceof Promise) {
      return result.catch(
        (error) => error || rule.message || `${name} is invalid`
      );
    }
    if (result === false) {
      return rule.message || `${name} is invalid`;
    }
  }

  return null;
};
