var express = require('express');

var router = express.Router();

var endPoint = 'https://www.eliftech.com/school-task';


router.get(endPoint, function(req, res) {
    
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    
    var req = new XMLHttpRequest();
    
    req.open('GET', endPoint, true);
    req.send();
    req.onreadystatechange = result = function() {
        if (req.readyState != 4) {
          return
        }
      
        if (req.status === 200) {
            var data = JSON.parse(req.responseText);
            var result = [];
            var id = data.id;
            var expressions = data.expressions;
    
            for (var i = 0; i < expressions.length; i++) {
                
                            var Calculator = require('polish-notation'),
                            calculator = new Calculator();
                    
                            result.push(calculator.calculate(expressions[i]));
            }
        }
    }
    req.params.id = id;
});

router.post(endPoint, function (req, res){
    res = result;
    res.params.id = id
});

module.exports = { rout: router };
