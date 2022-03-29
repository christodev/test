module.exports = {
  "root": true,
  "extends": ["airbnb", "prettier","@react-native-community"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "prettier",
    //change airbnb defaults
    "no-unused-vars": "warn"
  }
};
