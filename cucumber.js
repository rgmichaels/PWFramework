module.exports = {
  default: {
    require: ['tests/step_definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature']
  }
};
