---
layout: page
title: contact
permalink: /contact/
image: assets/images/mainLogo.png
description: “OUR PRIDE”  Let us  be a part of your success
---

<!-- <div id="footer" action="https://formspree.io/{{ site.email }}" method="POST"> -->
<div id="footer">
	<section>
		<form name="contact" action="thank-you" netlify>
		<div class="field">
		    <label>Your Name: <input type="text" name="name"></label>   
		</div>
		<div class="field">
		    <label>Your Email: <input type="email" name="email"></label>
		</div>
		<div class="field">
		    <label>Message: <textarea name="message"></textarea></label>
		</div>
		<div class="field">
		    <button type="submit">Send</button>
		</div>
		</form>
		<!-- <form method="post" action="#">
			<div class="field">
				<label for="name">Name</label>
				<input type="text" name="name" id="name" />
			</div>
		<div class="field">
			<label for="email">Email</label>
			<input type="text" name="_replyto" id="email" />
		</div>
		<div class="field">
			<label for="message">Message</label>
			<textarea name="message" id="message" rows="3"></textarea>
		</div>
		<ul class="actions">
			<li><input type="submit" value="Send Message" /></li>
		</ul>
		</form> -->
	</section>
	
<section class="split contact">
	
<section class="alt">
	<h3>Address</h3>
	<p>{{ site.street_address }}<br />
    {{ site.city }}, {{ site.state }} {{ site.zip_code }}</p>
</section>

<section>
	<h3>Phone</h3>
	<p><a href="#">{{ site.phone }}</a></p>
</section>

<section>
	<h3>Email</h3>
	<p><a href="#">{{ site.email }}</a></p>
	
</section>

<section>
	<p style="font-size: 28pt; text-align: center; vertical-align: middle; align-self: center;">
	<a href="http://www.facebook.com/{{ site.facebook }}/"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
	<a href="https://www.instagram.com/{{ site.instagram }}/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
	<a href="https://twitter.com/{{ site.twitter }}/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
	</p>
</section>