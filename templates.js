(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"jumbotron\" id=\"welcome\"><h1>Welcome!</h1></div>\n<div class=\"col-xs-12 col-m-3\" id=\"search\">\n    This is #search\n"
    + ((stack1 = container.invokePartial(partials["partials/searchForm-partial"],depth0,{"name":"partials/searchForm-partial","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n<div class=\"col-xs-12 col-m-4\" id=\"charts1\">This is #charts1</div>\n<div class=\"col-xs-12 col-m-5\" id=\"charts2\">This is #charts2</div>\n\n\n";
},"usePartial":true,"useData":true});
templates['addForm'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " \n<div class=\"jumbotron\">\n    <h2>Add an Event</h2>\n    <form class = \"addForm\" action=\"/\" method=\"POST\">\n        <div class = \"form-group\">\n            <label for = \"eventName\">Event Name</label>\n            <input type = \"text\" id = \"eventName\" name=\"events.event_name\">\n        </div> <!-- end eventName -->\n\n        <div class = \"form-group\">\n            <label for = \"eventDate\">Event Date</label>\n            <input type = \"text\" id = \"eventDate\" name=\"events.event_date\">\n        </div> <!-- end eventDate -->\n\n        <div class = \"form-group dropdown\">\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"formatButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Event Format <span class=\"caret\"></span>\n        </button>\n            <ul class=\"dropdown-menu\" aria-labelledby=\"formatButton\">\n                <li><a href=\"#\" name = \"events.format\" value = \"standard\">Standard</a></li>\n                <li><a href=\"#\" name = \"events.format\" value = \"modern\">Modern</a></li>\n                <li><a href=\"#\" name = \"events.format\" value = \"legacy\">Legacy</a></li>\n                <li><a href=\"#\" name = \"events.format\" value = \"vintage\">Vintage</a></li>\n                <li><a href=\"#\" name = \"events.format\" value = \"limited\">Limited</a></li>\n                <li><a href=\"#\" name = \"events.format\" value = \"block\">Block</a></li>\n                <li><a href=\"#\" name = \"events.format\" value = \"mixed\">Mixed</a></li>\n            </ul>\n        </div> <!-- end format dropdown-->\n\n        <div class=\"form-group\" id=\"roundForm\">\n"
    + ((stack1 = container.invokePartial(partials["partials/addForm-partial"],depth0,{"name":"partials/addForm-partial","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n\n        <button class=\"\" type = \"submit\" id=\"subButton\">Submit Event</button>\n\n    </form> <!-- end addForm -->\n</div>  <!-- end jumbotron -->";
},"usePartial":true,"useData":true});
templates['queryResponse'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "        <div class=\"jumbotron\" id=\""
    + alias1(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ID","hash":{},"data":data}) : helper)))
    + "\">\n            <h2> "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.events : depth0)) != null ? stack1.event_name : stack1), depth0))
    + " </h2> <br>\n            <h3> "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.events : depth0)) != null ? stack1.event_date : stack1), depth0))
    + " </h3> <br>\n            <h3> "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.events : depth0)) != null ? stack1.format : stack1), depth0))
    + " </h3> <br>\n\n            <div class=\"table-responsive\">\n"
    + ((stack1 = container.invokePartial(partials["partials/table-partial"],depth0,{"name":"partials/table-partial","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </div>\n\n        </div> \n    ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container\" id=\"responseDiv\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " \n</div>";
},"usePartial":true,"useData":true});
})();