
var output = function(message, arg1, arg2, arg3, arg4, arg5){
	console.log(new Date().toLocaleTimeString() + ' | ' + message, arg1?arg1:'', arg2?arg2:'', arg3?arg3:'', arg4?arg4:'', arg5?arg5:'');
};

module.exports = {
	output: output
};