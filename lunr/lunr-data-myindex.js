var lunrdoc = lunrdoc || {};lunrdoc.indexJson={"version":"0.4.5","fields":[{"name":"title","boost":10},{"name":"body","boost":1}],"ref":"cid","documentStore":{"store":{},"length":0},"tokenStore":{"root":{"docs":{}},"length":0},"corpusTokens":[],"pipeline":["stopWordFilter","stemmer"]};lunrdoc.content={};lunrdoc.template = function (context) {         var post = context.post;         return '<div><a href="' + post.url + '">' + post.title + '</a></div>';       };lunrdoc.noResultsMessage="Sorry, there are no results for that search.";