import './design.scss';
import './app.scss';

export function init() {
  const root = document.createElement("div");
  root.innerHTML = displayWebPage();
  document.body.appendChild(root);
  [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  	img.setAttribute('src', img.getAttribute('data-src'));
  	img.onload = function() {
    	img.removeAttribute('data-src');
  	};
  });
}

function displayWebPage() {
	return `
		<header class="row">
			<div class="col-2">
				<img data-src="./src/logo.png" alt="burger" />
			</div>
			<div class="col-6 text-center">
				<div class="main-select">
					<span class="menu menu-desktop">
						<span>Burger</span>
						<span>Sausage</span>
						<span>Kebab</span>
						<span>Shawarma</span>
						<span>Cabbage</span>
					</span>
					<select class="menu-mobile">
						<option>Burger</option>
						<option>Sausage</option>
						<option>Kebab</option>
						<option>Shawarma</option>
						<option>Cabbage</option>
					</select>
				</div>
				<div class="sub-select menu-desktop">
					<span>BEEF</span>
					<span>MUTTON</span>
					<span>RABBIT</span>
					<span>CHICKEN</span>
					<span>EGG</span>
					<span>ASK US</span>
				</div>
				<select class="menu-mobile">
					<option>BEEF</option>
					<option>MUTTON</option>
					<option>RABBIT</option>
					<option>CHICKEN</option>
					<option>EGG</option>
					<option>ASK US</option>
				</select>
			</div>
			<div class="col-2 text-right user-profile">
				<span>Log-in</span>
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
		</header>
		<div class="img1 pos-rel">
			<div class="pos-abs img1-content">
				<div>
					Me, Myself & Food
				</div>
				<div> 
					I Love to eat. Everyday I eat. I can't live <br>
					without eating. Please give me food!
				</div>
				<a href="">
					Let's eat with me
				</a>
			</div>
		</div>
		<div class="row">
			<div class="col pos-rel">
				<div class="pos-abs img2-content">
					<div>THIS IS FOOD</div>
					<div>Burger, put it on a Table</div>
					<p>Create the tweets dynamically using JSON (can be hard-coded in JavaScript, no need to implement a backend) and make use of any JavaScript framework</p>
				</div>
			</div>
			<div class="col">
				<img data-src="./src/img_2.jpg" alt="burger" class="burg-img" />
			</div>
		</div>
		<div class="img3 pos-rel text-center">
			<div class="pos-abs img3-content">
				<div>TEST, test, test</div>
				<div>Just testing</div>
			</div>
		</div>
		<video controls>
			  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
		</video>
	`;
}