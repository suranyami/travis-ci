describe('Views.Repository', function() {
  var template, repository;

  beforeEach(function() {
    repository = Test.Factory.repositories.travis();
    template = SC.Handlebars.compile(
      '{{#view SC.View tagName="ul" id="repositories" contentBinding="Travis.repository"}}' +
      '  <h1>{{slug}}</h1>' +
      '{{/view}}'
    );
  });

  it('works', function() {
    var view = SC.View.create({ template: template });
    withinRunLoop(function() { view._insertElementLater(function() {}) });

    Travis.set('repository', repository);

    var html = view.$();
    expect(html).toHaveText(repository.get('slug'));
  });
});