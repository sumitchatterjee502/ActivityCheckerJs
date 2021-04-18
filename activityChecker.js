/*
* Crypto Activity Checker Javascript Library v1.0
* Released under the MIT license
* https://github.com/sumitchatterjee502/frontendDataEncryption/blob/main/LICENSE
* Author : Sumit Chatterjee 
* Date : 16-04-2020
*/

var ACTIVITYCHECKER = ACTIVITYCHECKER || (function(){

	var timeoutId;

	const self =  {
		init: function(timeoutInMiliseconds, url){
			self.timeoutInMiliseconds = timeoutInMiliseconds; // 5000 for 5 sec
			self.url = url;
		},
		startTimer : ()=>{
			timeoutId = window.setTimeout(self.doInactive, self.timeoutInMiliseconds)
            console.log("hello");
		},
		resetTimer: ()=>{
			window.clearTimeout(timeoutId)
            self.startTimer();
		},
		doInactive: () =>{
			window.location.replace(self.url);// replace logout page in here
		},
		setupTimers : ()=>{
			document.addEventListener("mousemove", self.resetTimer, false);
            document.addEventListener("mousedown", self.resetTimer, false);
            document.addEventListener("onclick", self.resetTimer, false);
            document.addEventListener("oncontextmenu", self.resetTimer, false);
            document.addEventListener("ondblclick", self.resetTimer, false);
            document.addEventListener("onmouseenter", self.resetTimer, false);
            document.addEventListener("onmouseover", self.resetTimer, false);
            document.addEventListener("onmouseup", self.resetTimer, false);


            document.addEventListener("keypress", self.resetTimer, false);
            document.addEventListener("keydown", self.resetTimer, false);
            document.addEventListener("keyup", self.resetTimer, false);

            document.addEventListener("touchstart", self.resetTimer, false);
            document.addEventListener("touchmove", self.resetTimer, false);
             
            self.startTimer();
		}
	}
	return self;
}());
