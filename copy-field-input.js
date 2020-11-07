"(function(){

window.addEventListener('load', function(){

var sourceControlId = 93293188, /** THE ID OF THE SENDER CONTROL */

targetControlId = 93324848, /** THE ID OF THE RECEIVER CONTROL **/

sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),

targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

sourceControlInstance.on('value-change', function(){

targetControlInstance.setValue( sourceControlInstance.getValue() );

});

targetControlInstance.setValue( sourceControlInstance.getValue() );

});

})();" 
