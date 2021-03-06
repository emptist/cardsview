Package.describe({
  name: 'jk1968:cardsview',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'cards view framework',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:emptist/cardsview.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(['coffeescript','mquandalle:jade','pcuci:bootcards'])
  api.addFiles(['jk1968:cardsview.js','cards/cardView/body.jade',
    'cards/cardView/card.jade','cards/cardView/cardHeading.jade',
    'cards/cardView/footer.jade','cards/cardleft.jade','cards/cardmiddle.jade',
    'cards/cardright.jade','cards/card.jade','cards/navbar.jade','cards/home.jade']);
});

Package.onTest(function(api) {
  //api.use('tinytest');
  api.use('jk1968:cardsview');
  api.addFiles('jk1968:cardsview-tests.js');
});
