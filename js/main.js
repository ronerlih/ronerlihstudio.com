let projectLength = projects.length;
let loadedLength = 0;
const startTime = new Date().getTime();

function dropSvg(e) {
   if (e.target.matches(".github-link, .github-link *, .social a * "))
      e.target.closest("a").querySelector(".gradient-initial").style.opacity = 0;
}
function showSvg(e) {
   if (e.target.matches(".github-link, .github-link *, .social a *"))
      e.target.closest("a").querySelector(".gradient-initial").style.opacity = 1;
}


function init(){
	let hook = document.getElementById('content');

   document.body.onmouseover = dropSvg;
   document.body.onmouseout = showSvg;

	//cycle elements
	projects.forEach((proj)=>{
		let link = 'href=""';
		(proj.link == '') ? link = '' : link ='href="' + proj.link + '"';
		
		let projElement = document.createElement('div');
		projElement.className = 'project-container';
		projElement.innerHTML = '<a ' + link + ' ><div class="project-div"><img onload="imgLoad()" onerror="imgLoad()" class="project-vinyet" src=' + 
										proj.img + ' ><div class="project-name">' + 
										proj.name + '</div><div class="blurb">' + 
										proj.blurb + '</div></div><div onmouseover="hover(this)" onmouseout="hoverOut(this)" class="project-overlay"></div></a>';

		hook.appendChild(projElement);
	}
	)
	
}

function hover(elem){
		elem.style.opacity = 1;
		console.log('in hover')
}
function hoverOut(elem){
		elem.style.opacity = 0;
		elem.style.borderBottom = 'none';
}
function loaded(){
setTimeout(()=>{
	document.getElementById('loading-screen').style.display = 'none';
},0);
//console.log('startTime: ' + startTime);

}
function imgLoad(){

loadedLength++;
if(loadedLength === projectLength || performance.now() > 3000	){loaded()}
}

document.addEventListener("DOMContentLoaded", init());
