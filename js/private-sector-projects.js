
function Project(name, img, link, blurb) {
    this.name = name;
    this.img = img;
    this.link = link;
    this.blurb = blurb;
	 
}

	let projects = [
	new Project('Painting value estimator', 
					'https://ronerlihstudio.com/images/mona.jpg', 
					'',
					'A machine learning model that estimated painting value at auction.<br><br><br>'
//					94.7% accuracy. Using auction records of over 600,000 artist and over 1,000,000 paintings.
//				
),
	new Project('jFinder ', 
					'images/royals.jpg', 
					'https://j-finder.com',
					'Use machine-learning to find out how Jewish you look!<br>Trained on over 6000 images and tested on 1500 samples with 91.08% accuracy.<br>*coming soon<br><br>'),
	new Project('dApps', 
					'https://ronerlihstudio.com/Images/tm-01.jpg', 
//					'https://transparentmart.com',
					'',
//					'decentralised 3D market<br><br><br>'),
					'Decentralized apps<br><br><br><br>'),
	new Project('psyKrop', 
					'https://s3.amazonaws.com/ronerlihstudio.com/Images/Screen+Shot+2018-09-29+at+17.05.55.jpg', 
					'https://www.psykrop.com/',
					'psyKrop™ a camera and editing app that guides you to frame, in real-time, more compositionally balanced and aesthetically pleasing photos'),
	
	new Project('Quantum', 
					'https://s3.amazonaws.com/ronerlihstudio.com/Images/Screen+Shot+2018-09-29+at+16.29.53.png', 
					'https://www.blkboxanalytics.com/',
					'dynamic and wide range of data aggrigators and services, dynamic DBs, and live insight.<br><br><br>'),
	
	new Project('Millenial Finder', 
					'https://ronerlihstudio.com/Images/static1.squarespace.jpg', 
					'https://weareblkbox.com/technology/',
					'local demographic segmentation tool to uncover key insights around the millennial target throughout the country.<br>'),
	
	new Project('vera', 
					'https://ronerlihstudio.com/Images/Vera-Technology-Hero.jpg', 
					'https://weareblkbox.com/technology/',
					'content assement toolAnalyze content in real time for rating based on brand equity, audience, location and timing.'),
	new Project('market finder', 
					'https://ronerlihstudio.com/Images/whitespacefinder-lightt.jpg', 
					'',
					'find vauable market spaces using quaterly reports aggrigation compared with google and twitter trends'),
	new Project('aws buckets management', 
					'https://ronerlihstudio.com/Images/aws-buckets.jpg', 
					'',
					'aws buckets and policy managemnet tool<br><br><br>'),
	new Project('developing now', 
					'https://ronerlihstudio.com/Images/dev-now.jpg', 
					'https://www.developingnow.com/',
					'cto and architecht <br>of a wide range of product and services for developingNow.'),

		new Project('googleMirror.net', 
					'https://ronerlihstudio.com/Images/12z01beings%2B3.jpg', 
					'http://googlemirror.net',
					'browser based google crawler (2012).<br><br>'),
//		new Project('',
//					'',
//					'',
//					'')


	];
	