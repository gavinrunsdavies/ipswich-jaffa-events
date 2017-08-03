export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  
  this.get('/pages', function() {
    return {
      data: [{		   
		"id": 4646,
		"date": "2015-04-10T13:56:33",
		"date_gmt": "2015-04-10T12:56:33",
		"guid": {
			"rendered": "http:\/\/test.ipswichjaffa.org.uk\/?p=4646"
		},
		"modified": "2015-04-10T13:56:33",
		"modified_gmt": "2015-04-10T12:56:33",
		"slug": "gavin",
		"status": "publish",
		"type": "pages",
		"link": "http:\/\/test.ipswichjaffa.org.uk\/gavin\/",
		"title": {
			"rendered": "gavin"
		},
		"content": {
			"rendered": "",
			"protected": false
		},
		"excerpt": {
			"rendered": "",
			"protected": false
		},
		"author": 1,
		"featured_media": 0,
		"comment_status": "open",
		"ping_status": "closed",
		"sticky": false,
		"template": "",
		"format": "standard",
		"meta": [],
		"categories": [1],
		"tags": [],
		"_links": {
			"self": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts\/4646"
				}
			],
			"collection": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts"
				}
			],
			"about": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/types\/post"
				}
			],
			"author": [{
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/users\/1"
				}
			],
			"replies": [{
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/comments?post=4646"
				}
			],
			"version-history": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts\/4646\/revisions"
				}
			],
			"wp:attachment": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/media?parent=4646"
				}
			],
			"wp:term": [{
					"taxonomy": "category",
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/categories?post=4646"
				}, {
					"taxonomy": "post_tag",
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/tags?post=4646"
				}
			],
			"curies": [{
					"name": "wp",
					"href": "https:\/\/api.w.org\/{rel}",
					"templated": true
				}
			]
		}
	}, {
		"id": 4114,
		"date": "2014-01-08T12:30:33",
		"date_gmt": "2014-01-08T11:30:33",
		"guid": {
			"rendered": "http:\/\/test.ipswichjaffa.org.uk\/?p=4114"
		},
		"modified": "2014-01-08T12:30:33",
		"modified_gmt": "2014-01-08T11:30:33",
		"slug": "enter",
		"status": "publish",
		"type": "pages",
		"link": "http:\/\/test.ipswichjaffa.org.uk\/enter\/",
		"title": {
			"rendered": "Enter"
		},
		"content": {
			"rendered": "\n<p>On-line entry for the 2014 Ipswich Friday 5 will open in the New Year. Please enter in advance and on-line as there will only be limited entries on the night which closes at 6:45pm prompt.<\/p>\n<p>Entry fees for on-the-night are as follows<\/p>\n<ul>\n<li>\u00a312 Affiliated<\/li>\n<li>\u00a314 Non affiliated<\/li>\n<\/ul>\n<p>Please arrive early to avoid disappointment.<\/p>\n",
			"protected": false
		},
		"excerpt": {
			"rendered": "<p>On-line entry for the 2014 Ipswich Friday 5 will open in the New Year. Please enter in advance and on-line as there will only be limited entries on the night which closes at 6:45pm prompt. Entry fees for on-the-night are<span class=\"ellipsis\">&hellip;<\/span> <a href=\"http:\/\/test.ipswichjaffa.org.uk\/enter\/\"><\/p>\n<div class=\"read-more\">Read more &#8250;<\/div>\n<p><!-- end of .read-more --><\/a><\/p>\n",
			"protected": false
		},
		"author": 1,
		"featured_media": 0,
		"comment_status": "open",
		"ping_status": "closed",
		"sticky": false,
		"template": "",
		"format": "standard",
		"meta": [],
		"categories": [16],
		"tags": [],
		"_links": {
			"self": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts\/4114"
				}
			],
			"collection": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts"
				}
			],
			"about": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/types\/post"
				}
			],
			"author": [{
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/users\/1"
				}
			],
			"replies": [{
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/comments?post=4114"
				}
			],
			"version-history": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts\/4114\/revisions"
				}
			],
			"wp:attachment": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/media?parent=4114"
				}
			],
			"wp:term": [{
					"taxonomy": "category",
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/categories?post=4114"
				}, {
					"taxonomy": "post_tag",
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/tags?post=4114"
				}
			],
			"curies": [{
					"name": "wp",
					"href": "https:\/\/api.w.org\/{rel}",
					"templated": true
				}
			]
		}
	}, {
		"id": 4112,
		"date": "2014-01-08T12:29:46",
		"date_gmt": "2014-01-08T11:29:46",
		"guid": {
			"rendered": "http:\/\/test.ipswichjaffa.org.uk\/?p=4112"
		},
		"modified": "2014-01-08T12:29:46",
		"modified_gmt": "2014-01-08T11:29:46",
		"slug": "the-race",
		"status": "publish",
		"type": "pages",
		"link": "http:\/\/test.ipswichjaffa.org.uk\/the-race\/",
		"title": {
			"rendered": "The Race"
		},
		"content": {
			"rendered": "<p>Ipswich <acronym title=\"Jogging And Fitness For All\">JAFFA<\/acronym> host one of the highly prestigious Friday FIVE series of summer races. The series is long established with events being held by Felixstowe Road Runners, Stowmarket Striders, Bury St. Edmunds Pacers, Great Bentley Running Club and Ipswich JAFFA Running Club. Each race is 5 miles long and take place on a Friday evening between May and July.<\/p>\n<p>The current home of the Ipswich JAFFA course is at St Joseph\u2019s College in south Ipswich. The event has been held here since 2004 and has previously been held at Claydon.<\/p>\n<p>The Ipswich event like many of the other events incorporates a children&#8217;s Fun Run. The Fun Run is held all within the ground of St Joseph&#8217;s College and is about a mile to a mile and a half long.<\/p>\n<h5>2014 Friday 5 Race<\/h5>\n<p>This years race (UK:A Permit Number 2014-XXXX) will take place on Friday 30th May, starting at 7:30pm (main race) and the Fun Run starting at 7:00pm. The 5 mile multi-terrain course is run under UK:A rules. It is am accurately measured course which has downhill and uphill parts as well as farm track. Sadly the course is unsuitable for wheel chair athletes.<\/p>\n<p>Again for 2014 we are using <strong><span style=\"text-decoration: underline;\">Chip Timing<\/span><\/strong> provided by Mucky Races.<\/p>\n<p>Refreshments and changing facilities are provided in the grounds of the school.<\/p>\n<p>Entry information is available on the <a title=\"Enter\" href=\"http:\/\/events.ipswichjaffa.org.uk\/friday-5\/enter\/\">Enter <\/a>page.<\/p>\n<h5>2014 Prizes<\/h5>\n<p>Prizes are awarded to the first three male and female finishers. A team prize for UKA affiliated clubs is given to the first three male and female runners.<\/p>\n<p>The age prize categories are:<\/p>\n<ul>\n<li>Male Juniors (under 17 i.e. 15 to 16 years old)<br \/>\n(The minimum age to compete in a Friday 5 mile race is 15 years on the day of the race).<\/li>\n<li>Female Juniors (under 17 i.e. 15 to 16 years old)<\/li>\n<li>Male Senior<\/li>\n<li>Female Senior<\/li>\n<li>Female Master 35<\/li>\n<li>Male Master 40<\/li>\n<li>Female Master 40<\/li>\n<li>Male Master 45<\/li>\n<li>Female Master 45<\/li>\n<li>Male Master 50<\/li>\n<li>Female Master 50<\/li>\n<li>Male Master 55<\/li>\n<li>Female Master 55<\/li>\n<li>Male Master 60<\/li>\n<li>Female Master 60+<\/li>\n<li>Male Master 65+<\/li>\n<\/ul>\n<h5>2014 Friday 5 Series<\/h5>\n<p>As well as the individual races the five races compromise a race series. To qualify for the series you must complete 4 of the 5 races. Each result from any of the events is automatically entered in to the series. At the end of the series those that have finished 4 out of the 5 races qualify for a series medal.<\/p>\n<p>The series results are divided into age categories and points are award for each category. A UKA club competition is also ran for the local clubs which pits the best local men and women against each other in this fun series.<\/p>\n<p>The <em>series<\/em> age categories are:<\/p>\n<ul>\n<li>Male Juniors (under 20 ie 15 to 19 years old)<br \/>\n(The minimum age to compete in a Friday 5 mile race is 15 years on the day of the race).<\/li>\n<li>Female Juniors (under 20 ie 15 to 19 years old)<\/li>\n<li>Male Senior<\/li>\n<li>Female Senior<\/li>\n<li>Female Master 35<\/li>\n<li>Male Master 40<\/li>\n<li>Female Master 40<\/li>\n<li>Male Master 45<\/li>\n<li>Female Master 45<\/li>\n<li>Male Master 50<\/li>\n<li>Female Master 50<\/li>\n<li>Male Master 55<\/li>\n<li>Female Master 55+<\/li>\n<li>Male Master 60+<\/li>\n<\/ul>\n<p>When a runner moves into a new age category during the series, the age category for the first Friday 5 race completed will be adopted for the overall Friday 5 series results.<\/p>\n<p>100 points is awarded to the first person in each age category, 99 points to the second person and so on. The best 4 of 5 race scores will be used as the final score in the series. This means that if you complete all 5 races, your worst score will not be used.<\/p>\n<p>When there are more than 100 runners in an age category in a race, 150 points will be awarded to the first person, 149 to the second person and so on. This situation arose for the Male Senior category in the Ipswich Friday 5. 150 points will be used as the starting point for the Senior Male age category in all the Friday 5 races.<\/p>\n<p>When there is a tie for a position, the runner with the most points scored in the races when both ran will be awarded the higher place.<\/p>\n<h5>UKA Club Teams<\/h5>\n<p>The team points are calculated by awarding points to the finishing position. First place is awarded 500 points, 499 points to second place and so on. There is a race limit of 500 persons so the last place will get 1 point for a capacity race.<\/p>\n<p>A team consists of the first five men and first five ladies in a UKA affiliated club to finish the race. If a club does not have the required number of men or ladies, then no points will be scored.<\/p>\n<p>The best 4 of 5 race scores are used as the final team score in the series.<\/p>\n",
			"protected": false
		},
		"excerpt": {
			"rendered": "<p>Ipswich JAFFA host one of the highly prestigious Friday FIVE series of summer races. The series is long established with events being held by Felixstowe Road Runners, Stowmarket Striders, Bury St. Edmunds Pacers, Great Bentley Running Club and Ipswich JAFFA<span class=\"ellipsis\">&hellip;<\/span> <a href=\"http:\/\/test.ipswichjaffa.org.uk\/the-race\/\"><\/p>\n<div class=\"read-more\">Read more &#8250;<\/div>\n<p><!-- end of .read-more --><\/a><\/p>\n",
			"protected": false
		},
		"author": 1,
		"featured_media": 0,
		"comment_status": "open",
		"ping_status": "closed",
		"sticky": false,
		"template": "",
		"format": "standard",
		"meta": [],
		"categories": [16],
		"tags": [],
		"_links": {
			"self": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts\/4112"
				}
			],
			"collection": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts"
				}
			],
			"about": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/types\/post"
				}
			],
			"author": [{
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/users\/1"
				}
			],
			"replies": [{
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/comments?post=4112"
				}
			],
			"version-history": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/posts\/4112\/revisions"
				}
			],
			"wp:attachment": [{
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/media?parent=4112"
				}
			],
			"wp:term": [{
					"taxonomy": "category",
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/categories?post=4112"
				}, {
					"taxonomy": "post_tag",
					"embeddable": true,
					"href": "http:\/\/test.ipswichjaffa.org.uk\/wp-json\/wp\/v2\/tags?post=4112"
				}
			],
			"curies": [{
					"name": "wp",
					"href": "https:\/\/api.w.org\/{rel}",
					"templated": true
				}
			]
		}
	}
]
    };
  });
}