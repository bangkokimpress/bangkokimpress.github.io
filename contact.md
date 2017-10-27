---
layout: page
title: contact
permalink: /contact/
image: assets/images/mainLogo.png
description: “OUR PRIDE”  Let us  be a part of your success
---

<div id="footer" action="https://formspree.io/{{ site.email }}" method="POST">
	<section>
		<form method="post" action="#">
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
		</form>
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