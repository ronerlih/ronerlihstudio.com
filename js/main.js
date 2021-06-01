let projectLength = projects.length;
let loadedLength = 0;
const startTime = new Date().getTime();
function init(){
	let hook = document.getElementById('content');
	//cycle elements
	projects.forEach((proj)=>{
		let link = 'href=""';
		(proj.link == '') ? link = '' : link ='href="' + proj.link + '"';
		
		let projElement = document.createElement('div');
		projElement.className = 'project-container';
		projElement.innerHTML = '<a ' + link + ' ><div class="project-div"><img onload="imgLoad()" class="project-vinyet" src=' + 
										proj.img + ' ><div class="project-name">' + 
										proj.name + '</div><div class="blurb">' + 
										proj.blurb + '</div></div><div onmouseover="hover(this)" onmouseout="hoverOut(this)" class="project-overlay"></div></a>';

		hook.appendChild(projElement);
	}
	)
	
}

function hover(elem){
//		elem.style.opacity = .2;
		elem.style.opacity = 1;
		// elem.style.cursor = "url(../css/cursor.cur), none;"
		// elem.style.borderBottom = '1px solid';
		console.log('in hover')
//		elem.style.borderBottomStyle = 'outset';
}
function hoverOut(elem){
		elem.style.opacity = 0;
		elem.style.borderBottom = 'none';
}
function loaded(){
setTimeout(()=>{
	document.getElementById('loading-screen').style.display = 'none';
},1000 + startTime - new Date().getTime());
//console.log('startTime: ' + startTime);

}
function imgLoad(){
loadedLength++;
if(loadedLength == projectLength || new Date().getTime() > startTime + 3000	){loaded()}
}

document.addEventListener("DOMContentLoaded", init());
