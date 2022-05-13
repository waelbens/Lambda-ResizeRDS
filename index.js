var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    event.instances.forEach((instanceId) => {
        var rds = new AWS.RDS();
        var params = {
            DBInstanceIdentifier: instanceId,
            DBInstanceClass: event.instanceClass,
            ApplyImmediately: true
        };
        rds.modifyDBInstance(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
            });

    })
    callback(null, 'Done!');
};
