"use strict"

import tl = require('vsts-task-lib/task');
import oc = require('./oc-install')

oc.installOc(tl.getInput('version'))
    .then(function () {
        tl.setResult(tl.TaskResult.Succeeded, "oc command successfully executed.");
    })
    .catch(function (err) {
        tl.setResult(tl.TaskResult.Failed, err);
    });