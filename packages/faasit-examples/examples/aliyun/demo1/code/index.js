var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');


/*
To enable the initializer feature (https://help.aliyun.com/document_detail/156876.html)
please implement the initializer function as below：
exports.initializer = (context, callback) => {
  console.log('initializing');
  callback(null, '');
};
*/

exports.handler = (req, resp, context) => {
    console.log('hello world');

    resp.setHeader('Content-Type', 'application/json');
    resp.send(JSON.stringify({"hello":"world"}, null, '    '));
    // getRawBody(req, function(err, body) {
    //     for (var key in req.queries) {
    //       var value = req.queries[key];
    //       resp.setHeader(key, value);
    //     }
    //     resp.setHeader('Content-Type', 'application/json');
    //     params.body = body.toString();
    //     resp.send(JSON.stringify(params, null, '    '));
    // });

    /*
    getFormBody(req, function(err, formBody) {
        for (var key in req.queries) {
          var value = req.queries[key];
          resp.setHeader(key, value);
        }
        params.body = formBody;
        console.log(formBody);
        resp.send(JSON.stringify(params));
    });
    */
}