(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"jumbotron\" id=\"welcome\"><h1>Welcome!</h1></div>\n<div class=\"col-xs-12 col-m-3\" id=\"search\">\n    This is #search\n"
    + ((stack1 = container.invokePartial(partials["partials/searchForm-partial"],depth0,{"name":"partials/searchForm-partial","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n<div class=\"col-xs-12 col-m-4\" id=\"charts1\">This is #charts1</div>\n<div class=\"col-xs-12 col-m-5\" id=\"charts2\">This is #charts2</div>\n\n\n";
},"usePartial":true,"useData":true});
})();