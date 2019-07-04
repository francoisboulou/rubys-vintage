<!DOCTYPE html>
<html lang="en">
<head>
<title>Ruby's Vintage Jewelry</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Ruby's Vintage Jewelry - Unique Vintage Jewelry Items">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="styles/css/index.css">
</head>
<body>

	<!-- Header -->
	<header id="header">
		<a id="nav_logo_img" href="index.php"></a>
		<nav class="main_nav">
			<ul>
				<li><a href="#">home</a></li>
				<li><a href="about.php">about</a></li>
				<li><a href="https://www.etsy.com/shop/rubysvintagejewelry?ref=condensed_trust_header_title_items" target="_blank">store</a></li>
				<li><a href="contact.php">contact</a></li>
			</ul>
		</nav>
		<div id="burger_container" class="menu_mm"><div></div><div></div><div></div></div>
	</header>


		<!--Mobile Menu -->
	<aside>
		<div id="menu" class="menu_mm">
			<div id="menu_close_container"><div id="menu_close"><div></div><div></div></div></div>
			<h1 id="burger_logo" class="menu_mm"><img id="burger_logo_img" src='images/logo.jpg'></h1>
			<nav id="menu_nav">
				<ul>
					<li><a href="index.php">home</a></li>
					<li><a href="about.php">about</a></li>
					<li><a href="https://www.etsy.com/shop/rubysvintagejewelry?ref=condensed_trust_header_title_items">store</a></li>
					<li><a href="#S">contact</a></li>
				</ul>
			</nav>
		</div>
	</aside>

	<!-- Contact Form -->

	<main>
		<article>
			<section id="review_form_container">
				<h1 class="section_title">get in touch</h1>
				<form action="contact_handler.php" method="POST">
				  <div>
				    <input class="review_form_input" type="text" id="name" name="visitor_name" placeholder="  Name" pattern=[A-Z\sa-z]{3,20} required>
				  	<input class="review_form_input" type="email" id="email" name="visitor_email" placeholder="  Email" required>
				    <input class="review_form_input" type="text" id="title" name="email_title" required placeholder="  Subject" pattern=[A-Za-z0-9\s]{8,60}>
				  </div>
				  <textarea id="message" name="visitor_message" required></textarea>
				  <button class="button" type="submit">Send Message</button>
				</form>
			</section>
		</article>
	</main>

<!-- Footer -->

	<footer>
		<a href="index.php">Ruby's Vintage Jewelry</a>
		<nav>
			<ul>
				<li><a href="index.php">home</a></li>
				<li><a href="about.php">about</a></li>
				<li><a href="https://www.etsy.com/shop/rubysvintagejewelry?ref=condensed_trust_header_title_items">store</a></li>
				<li><a href="#">contact</a></li>
			</ul>
		</nav>
		<ul id="social">
			<li><a href="https://www.facebook.com/rubylayneandtiffany/"><i class="fa fa-facebook" aria hidden+"true"></i></a></li>
			<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
		</ul>
		<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made by Francois Boulou</p>
	</footer>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/custom.js"></script></body>
</html>
