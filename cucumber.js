module.exports = {
  default: {
<<<<<<< HEAD
    require: ['tests/step_definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature'],
  }
};
=======
    requireModule: ['ts-node/register'],
    require: [
      './features/step-definitions/**/*.ts',
      './support/**/*.ts'
    ],
    paths: ['./features/**/*.feature'],
    format: ['progress', 'html:cucumber-report.html']
  }
};
>>>>>>> origin/main
