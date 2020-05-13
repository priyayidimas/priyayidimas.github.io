/*
Icons made by <a href="http://www.freepik.com/?__hstc=57440181.302ba91a17249560ef16f25e4cd4a31d.1589205397849.1589205397849.1589205397849.1&__hssc=57440181.3.1589205397850&__hsfp=978066780" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
*/

function initComponents() { 
	var sidenav = document.querySelectorAll('.sidenav');
	var carousel = document.querySelectorAll('.carousel');
	var slider = document.querySelectorAll('.slider');
	var tabs = document.querySelectorAll('.tabs');
	
	M.Sidenav.init(sidenav);
	M.Carousel.init(carousel,{
		dist:0,
		shift:25,
		padding:10,
		numVisible: 3,
		indicators: true,
	});
	M.Slider.init(slider);
	M.Tabs.init(tabs);
}


document.addEventListener('DOMContentLoaded', function() {
	loadNav();

	function loadNav()
	{
		document.querySelectorAll('.sidenav a, .topnav a').forEach(function(el){
			el.addEventListener('click', function(ev){
				var sidenav = document.querySelector('.sidenav');
				M.Sidenav.getInstance(sidenav).close();
				
				page = ev.target.getAttribute('href').substr(1);
				loadPage(page);
			});
		});
	}
	
	var page = window.location.hash.substr(1);
	if(page == '') page = 'home';
	loadPage(page);

	function loadPage(page)
	{
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (this.readyState == 4){
				var content = document.querySelector(".content");
				if(this.status == 200) {
					content.innerHTML = xhr.responseText;
					initComponents();
				} else if(this.status == 404) {
					content.innerHTML = "<p>Not Found</p>";
				} else {
					content.innerHTML = "<p>Forbidden</p>";
				}
			}
		};
		xhr.open("GET", 'pages/'+page+'.html', true);
		xhr.send();
	}
});

