// This code is valid for Articulate 360
// this script will allow you to add completion percentage, 
// email, subtitles and enlarge button
var toggle = true,
	arrFromList,
	checkStatusInterval,
	subtitlesButtonNode = document.createElement("div"),
	progressBarObject = document.createElement("div"),
	emailButtonNode = document.createElement("a"),
	controlNode = null,
	menuCollectionNodes,
	slideNumberNode = document.createElement("div"),
	emailsubject = '1 on 1 conversations',
	emailbody = 'What was the slide number of the issue?%0AWhat was the issue?',
	mailto = 'onlinelearning@gadventures.com',
	globalCheckOnce = false,
	initInterval = setInterval(init, 1000);

function init(){
	emailButtonNode.id = 'emailIcon';
	subtitlesButtonNode.id = 'subtitlesIcon';
	slideNumberNode.id = 'slideNumber';
	progressBarObject.id = 'courseProgressBar'
	emailButtonNode.href = 'mailto:'+mailto+'?subject='+emailsubject+'&body='+emailbody;

	if (document.getElementsByClassName("controls-group control-bar cs-seekcontrol progress-control")[0] !== null) controlNode = document.getElementsByClassName("controls-group control-bar cs-seekcontrol progress-control")[0].childNodes[0];

	controlNode.appendChild(subtitlesButtonNode);
	controlNode.appendChild(emailButtonNode);
	controlNode.appendChild(slideNumberNode);
	controlNode.appendChild(progressBarObject);
}

