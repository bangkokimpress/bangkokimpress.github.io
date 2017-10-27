---
layout: subpage
num: 2
title: Bangkok Impress
image: assets/images/bangkok impress final.png
description: หน่วยงานหนึ่งที่สำคัญต่อการผลิตสื่อสร้างสรรค์อย่างมีคุณภาพ โดยมีพันธกิจหลัก คือ การผลิตสารคดี รายการโทรทัศน์  วิดีทัศน์  และสื่อสิ่งพิมพ์  ที่มีเนื้อหาสาระอันดีงามด้านศาสนาและวัฒนธรรม ก่อให้เกิดประโยชน์สุขต่อสังคม และประเทศชาติ 
---
<section>
	<div class="row">
	{% for work in site.data.bangkokimpress %}
		<div class="col-md-3">
			{{ work.description }}<br>
			<div class="thumbnail">
			<a href="#" data-toggle="modal" data-target="#{{ work.youtube }}">
				{% if work.logo %}
					<img src="../../assets/images/{{ work.logo }}" width="100%">
					{% else %}
					<img src="https://img.youtube.com/vi/{{ work.youtube }}/0.jpg" width="100%">
				{% endif %}
			</a>
				<div class="caption">
				<a href="#" data-toggle="modal" data-target="#{{ work.youtube }}">
					<h4>
						{{ work.name}}
					</h4>
				</a>
				</div>
			</div>
		</div>
		<div class="modal fade " id="{{ work.youtube }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel"> {{ work.name }} </h5>
						<button type="button" class="button icon solo fa-times" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<!-- <img src="https://img.youtube.com/vi/{{ work.youtube }}/0.jpg" width="20%"> -->
							<h4>
								{{ work.name}}
							</h4>
							<p>{{ work.description }}</p>
					<ul class="media-list"> 
					    {% for chap in work.chaptor %}
					    <li class="media"> 
					        <a class="pull-left" href="https://www.youtube.com/watch?v={{ chap.youtube }}" target="_blank"> 
					        	{% if work.logo %}
									<img class="media-object" src="../../assets/images/{{ work.logo }}" width="100" >
									{% else %}
					            	<img class="media-object" src="https://img.youtube.com/vi/{{ chap.youtube }}/0.jpg" width="100"> 
				            	{% endif %}
					        </a>         
					        <div class="media-body" style="padding: 0 5px 0 5px"> 
					        	<a class="pull-left" href="https://www.youtube.com/watch?v={{ chap.youtube }}" target="_blank"> 
					            <h4 class="media-heading"></h4>{{ chap.title }}</a>
					            <!-- {{ chap.description }} -->
					        </div>         
					    </li>     
						{% endfor %}
					</ul>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	{% endfor %}
	</div>

</section>
