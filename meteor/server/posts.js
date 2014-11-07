// Seed the posts
Meteor.startup(function() {
            if (Posts.find().count() == 0) {
                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Children's Hospital Oakland Fundraiser Raffle - Win 4 Roundtrip Southwest Airline Tickets",
                    "description": "Hello,\n \nIn my free time, I am the president of Blossom Garden Alameda, a non-profit organization that raises money for Children’s Hospital Oakland.  This year we are having a really great event on October 18th, Moonlight Circus Soiree. \n \nAs we lead up to the event, we are having a raffle where you can win 4 roundtrip southwest airline tickets anywhere in the continental US (details can be found on the link below).  All money raised is sent directly to the hospital.  If you are interested in purchasing raffle tickets, I have them at my desk or you can purchase them here:\n \nhttps://www.raffleriver.com/app/raffle.jsp?raffleID=1485\n \nIf you are interested in attending the event for some classy circus fun, tickets can be purchased here (details in the attached flyer):\n \nhttp://www.brownpapertickets.com/event/830153\n \nThanks in advance for all of your support!  It truly means a lot to me J\n \nNatalie",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "FmeFCtg55HuPK5ngy",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/frjHchAkHgnNRSm2v.jpg",
                    "photos": [{
                        "id": "FmeFCtg55HuPK5ngy",
                        "url": "http://pandaslist.s3.amazonaws.com/images/frjHchAkHgnNRSm2v.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415311744469,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "activities",
                    "location": "Oakland",
                    "title": "Sports Basement Berkeley Holiday Shopping Party for Pandora- 11/19",
                    "description": "Hey All,\n\nSports Basement Berkeley is opening it's newest location in November and they have arranged for a Pandora Holiday Shopping Party to celebrate.  Everything in the store is 20% off.  Come on out for FREE wine, beer and snacks while you get some holiday shopping done. \n\nYou are welcome to invite friends and family as well.  They just ask that all individuals RSVP so they can plan accordingly. \n\nDate:  Wednesday, November 19, 2014\nTime:  6:00 - 8:00 PM \nLocation:  2727 Milvia Street  - Berkeley\n\nRSVP Here:  http://www.eventbrite.com/e/pandora-20-off-holiday-shopping-party-tickets-13621344809\n\nSee you there!\n\nRami\n\n--------\nRami Richards | National Sales Manager - Performance | PANDORA\n2101 Webster St 16th Fl, Oakland, CA 94612\nW 510.740.8546 | M 510.499.1195 rrichards@pandora.com\nGtalk/Skype:  ramirichards",
                    "delivery_method": "goto_seller",
                    "coverPhoto": "xHn8HXox2ZNKvbxqF",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/eZNcBMmosBZ7Cxco4.jpg",
                    "photos": [{
                        "id": "xHn8HXox2ZNKvbxqF",
                        "url": "http://pandaslist.s3.amazonaws.com/images/eZNcBMmosBZ7Cxco4.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415311951196,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "bikes",
                    "location": "Oakland",
                    "title": "Purple Low rider bike",
                    "price": "$200",
                    "description": "I have a Purple low rider bike. 1 gear. almost new, everything works. i'd keep it, but i never ride it and it's taking up space.",
                    "delivery_method": "goto_seller",
                    "coverPhoto": "LktySPxfJJ8GxMsZg",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/QJ4sFQa2ktFRjJNKk.jpg",
                    "photos": [{
                        "id": "LktySPxfJJ8GxMsZg",
                        "url": "http://pandaslist.s3.amazonaws.com/images/QJ4sFQa2ktFRjJNKk.jpg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415315821090,
                    "published": true
                });

                Posts.insert({
                    "category": "Gigs",
                    "subcategory": "labor",
                    "location": "Oakland",
                    "title": "Underwater Basket Weaving Lessons",
                    "price": "barter/trade",
                    "description": "Namaste. \nIf you're interested in learning how the treasured art of underwater basket reed weaving, I am an accomplished teacher. Having spent the greater part of my education at UCSD gaining my masters degree in traditional folk arts and basket weaving, i'm ready to pay it forward onto worthy and eager students.\n\n",
                    "delivery_method": "goto_buyer",
                    "coverPhoto": "tui55moLauRo5aggn",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/228dBYkb7h4xwYdrc.jpeg",
                    "photos": [{
                        "id": "tui55moLauRo5aggn",
                        "url": "http://pandaslist.s3.amazonaws.com/images/228dBYkb7h4xwYdrc.jpeg"
                    }, {
                        "id": "fpxgjoLuoZakuxS8g",
                        "url": "http://pandaslist.s3.amazonaws.com/images/4rFBBj3LNEKsihyRJ.jpg"
                    }, {
                        "id": "YHjXYF7nyeGhDnKkH",
                        "url": "http://pandaslist.s3.amazonaws.com/images/MsyJ6LnbRxPghQYrf.jpg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415316026970,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "other",
                    "location": "Oakland",
                    "title": "WIGS FOR SALE!",
                    "price": "$50 and a wink",
                    "description": "I've got wigs for sale girl!\n\nsexy wigs\nshort wigs\nlong wigs\nblonde wigs\nmans wigs\n\nall kinds of wigs",
                    "delivery_method": "goto_seller",
                    "coverPhoto": "ncQXGqKK8g4ktMA3z",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/DPnxMT4EJqqXCbHRq.jpg",
                    "photos": [{
                        "id": "o2JfAjmdxxcFEkA92",
                        "url": "http://pandaslist.s3.amazonaws.com/images/2b6TMtEcHZ2ojjH7a.jpg"
                    }, {
                        "id": "HgizRKjYAEJ6zSybk",
                        "url": "http://pandaslist.s3.amazonaws.com/images/pcWc4XiYzyPDfLmSy.jpg"
                    }, {
                        "id": "ncQXGqKK8g4ktMA3z",
                        "url": "http://pandaslist.s3.amazonaws.com/images/DPnxMT4EJqqXCbHRq.jpg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415316204038,
                    "published": true
                });

                Posts.insert({
                    "category": "Housing",
                    "subcategory": "apartments/housing",
                    "location": "Oakland",
                    "title": "Affordable Housing situation - CAUSE THE RENT IS TOO DAMN HI",
                    "price": "$500 mo",
                    "description": "I have space in my driveway to rent if you want to cut the crap and just live in a trailer. \n\n\nthe photo is an example, that's not really you.",
                    "delivery_method": "goto_seller",
                    "coverPhoto": "H6RbNkhre35uMoRfo",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/GiRwLvKneMj9pDsor.jpg",
                    "photos": [{
                        "id": "H6RbNkhre35uMoRfo",
                        "url": "http://pandaslist.s3.amazonaws.com/images/GiRwLvKneMj9pDsor.jpg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415316455472,
                    "published": true
                });

                Posts.insert({
                    "title": "psingh1",
                    "category": "For Sale",
                    "price": "131",
                    "location": "Oakland",
                    "description": "dddadaa",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "title": "psingh1",
                    "category": "For Sale",
                    "price": "131",
                    "location": "Oakland",
                    "description": "dddadaa",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "volunteers",
                    "location": "Oakland",
                    "title": "Year Up: Mock Interview Workshop 11/5",
                    "price": "",
                    "description": "Hi everyone,\n\nForwarding this wonderful, rewarding, and easy VTO opportunity to do mock interviews with Year Up students to help them prepare for their future job searches. It’ll only be a few hours in the afternoon, and I always learn something new whenever I participate. \n\nYear Up is a national organization that works with disconnected youth, mostly from underrepresented communities, between the ages of 18 – 24 and trains them in specific skills that are in demand at larger companies. For example, QA, IT, and project management. The program lasts one year, and during the latter six months of the program, the students are placed at a company like Salesforce or Google to do hands-on-training. We’re working with Year Up now to see how we can leverage the org to pipeline for some of our entry-level roles. In the mean time, any other support from us would be greatly appreciated. \n\nAm happy to answer any questions that you might have. Thanks and have a great weekend!\n\nBest,\nLisa \n-- \nLisa Lee | Program Manager | Pandora\n2101 Webster St 16th Fl, Oakland, CA 94612\nw 510.858.3675 | llee@pandora.com\nlisten: Pandora.com\nfollow us: twitter.com/Pandora_Radio\nlike us: facebook.com/Pandora\n\n\nFrom: \"Angeles, Marie\" <MAngeles@YearUp.org>\nDate: October 14, 2014 at 3:47:19 PM PDT\nTo: \"Angeles, Marie\" <MAngeles@YearUp.org>\nCc: \"Lad, Emily\" <ELad@YearUp.org>, \"Andrews, Autumn\" <AAndrews@YearUp.org>, \"Almas, Ariana\" <AAlmas@YearUp.org>, \"Brabant, Kristin\" <KBrabant@YearUp.org>, \"Fiffer, Allie\" <AFiffer@YearUp.org>\nSubject: Year Up: Mock Interview Workshop 11/5\n\nDear Year Up Partners and Volunteers,\n \nI hope this email finds you well!  If you are on this list, you have worked with Year Up graduates in the past, or have expressed interest in participating in volunteering events at Year Up (many of you have volunteered for several cycles now!).\n \nWe will be hosting a Mock Interview Workshop with our interns to help them develop interviewing skills to help them stand out as a top candidate as they enter the job search.  This workshop is an opportunity to work one-on-one with our interns and provide coaching on how they describe their experience, market themselves, and communicate using body language.  In addition, these interns are less than one month away from entering the job market, so if you are a recruiter, this is a great way to make connections with some highly motivated and skilled talent trained in IT help desk, desktop support, QA, or junior project coordination.\n \nDetails on the panel are below, and more logistics will be provided for confirmed volunteers.  If you are able to volunteer your afternoon, please click this link to RSVP by Wednesday, October 29th.  Feel free to forward this email to your colleagues who may be interested in volunteering, and make sure that they RSVP via the link provided.\n \n \n \n \nSan Francisco Campus\nNEW LOCATION: 80 Sutter St. San Francisco, CA 94104\nSilicon Valley Campus\n100 W. San Fernando St. San Jose, CA 95113\nVolunteers Needed:\n·         50-55 volunteers to work with approximately 110 students\n·         17 volunteers to work with approximately 35 students\nDate:\n·         Wednesday, November 5th, 2014\n·         Wednesday, November 5th, 2014\nTime:\n·         2:30pm – 5:30pm\n·         2:00pm – 5:00pm\nAgenda:\n          2:30:    Arrive at Year Up\n2:30-3:00:    Session Orientation\n·         Overview of Year Up program and mock interview process\n3:00-3:05:    Introduction to Interns\n3:05-4:30:    Mock Interview Workshop\n·         Volunteers will be matched with 2 interns and will work with each for 45 minutes at a time\n·         Interns will interview with you using a practice job description that best fits their internship role\n·         Volunteers will ask interview questions based on practice descriptions (questions and practice job descriptions will be provided by Year Up)\n·         Volunteers will complete an interview evaluation form at the end of each interview and hand it back to the interns by the end of the session\n·         We will wrap up and close at 4:30\n4:30-5:30: Celebration and Networking Event\n·         Volunteers are welcome to celebrate and network with the interns after the mock interviews. Light refreshments will be provided.\n \n          2:00:    Arrive at Year Up\n2:00-2:30:    Session Orientation\n·         Overview of Year Up program and mock interview process\n2:30-2:35:    Introduction to Interns\n2:35-4:00:    Mock Interview Workshop\n·         Volunteers will be matched with 2 interns and will work with each for 45 minutes at a time\n·         Interns will interview with you using a practice job description that best fits their internship role\n·         Volunteers will ask interview questions based on practice descriptions (questions and practice job descriptions will be provided by Year Up)\n·         Volunteers will complete an interview evaluation form at the end of each interview and hand it back to the interns by the end of the session\n·         We will wrap up and close at 4:00\n4:00-5:00: Celebration and Networking Event\n·         Volunteers are welcome to celebrate and network with the interns after the mock interviews. Light refreshments will be provided.\n \nThank you so much for your support, and we look forward to hearing from you!\n \nBest,\n \n \nMarie Angeles\nCareer and Alumni Success Coordinator\n \nYUBA\n80 Sutter Street\nSan Francisco, CA 94104\nw: 415-512-7588 ext. 3564\nf: 415-512-7950 \nfbgpIconliIconpng;base642cb59b531fe851c5twIconyt\n \nempowering urban talent to reach their potential\n \nNow accepting applications for March 2015!\n ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "H74yJYcKvR9wyafwa",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/DLeCxetcfqcaJaQBL.jpg",
                    "photos": [{
                        "id": "H74yJYcKvR9wyafwa",
                        "url": "http://pandaslist.s3.amazonaws.com/images/DLeCxetcfqcaJaQBL.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415318826136,
                    "published": true
                });

                Posts.insert({
                    "title": "psingh1",
                    "category": "For Sale",
                    "price": "131",
                    "location": "Oakland",
                    "description": "dddadaa",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "category": "WANTED",
                    "location": "Oakland",
                    "title": "Looking for a used Verizon iPhone",
                    "price": "",
                    "description": "I managed to drop and break my iPhone today and sadly I am 6 months shy of an upgrade with Verizon.  I really don’t want to spend $700 for a new phone, so I thought I would check to see if any of you might have recently upgraded to the new iPhone 6 and want to sell their older version to me?\n\nJennifer L. Campbell | Director, Business Affairs | Pandora\n2101 Webster St., Suite 1650, Oakland, CA 94610\n(: 615.294.4363 8:jcampbell@pandora.com\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "W5T7LTPgcZd96igH8",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/82k9B8afsHxATBjzw.jpg",
                    "photos": [{
                        "id": "W5T7LTPgcZd96igH8",
                        "url": "http://pandaslist.s3.amazonaws.com/images/82k9B8afsHxATBjzw.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415318913508,
                    "published": true
                });

                Posts.insert({
                    "title": "psingh2",
                    "category": "For Sale",
                    "price": "131",
                    "location": "Oakland",
                    "description": "dddadaa",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "free",
                    "location": "Oakland",
                    "title": "Placebo at the Masonic 10/23",
                    "price": "",
                    "description": "Hey Oakland!\n\nOur good friends/ clients at Live Nation have generously offered to hook up free tickets for the Oakland office to the Placebo show this Thursday (10/23) at the Masonic. If you're interested in getting a ticket... Shoot me a note by EOD tomorrow.\n\nSeth Glasman\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "RJFF35upAnhwBPR5Y",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/hc4NBLt4v5fsHJYxt.jpg",
                    "photos": [{
                        "id": "RJFF35upAnhwBPR5Y",
                        "url": "http://pandaslist.s3.amazonaws.com/images/hc4NBLt4v5fsHJYxt.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319091351,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "furniture",
                    "location": "Oakland",
                    "title": "BE THE COUCH you want to sit on in the World!",
                    "price": "200",
                    "description": "e the couch you want to sit on in the world.\n\nAfter years of selfless service, community building, life-coaching and spiritual leadership, the most interesting couch in the world is looking for a new home.\n\nYou may know the couch from any of the following well-known accomplishments:\n\n• Sitting Goodwill Ambassador for the United Nations\n• Executive Director of Sitting for the World Economic Forum (DAVOS)\n• Wood-framed incarnation of Mahavatar Babaji's sukhasana\n• TED Conference sitting Chair\n\nLesser known accomplishments include:\n\n• Seating for Roosevelt's Rough Riders\n• Space X Pilot Seating Consultant\n• Obligatory Simpson's Opening Sequence cameo\n• Practice couch for Tom Cruise's Oprah appearance.\n\nThe couch, version 2.1, is compatible with the following:\n\n• People (All Sitting Styles)\n• Cats (Basic and Advanced)\n• Dogs (Patent Pending)\n• Children (Application Required)\n\nThe most interesting couch in the world will open doors to a new level of existence not known to the new owner. Travel the stars with the couch of the future and the past. What is seating, was seating and will always be seating.\n\nNamaste.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "KLfWhxY3mdYKZMqx5",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/wKaQBgTob7bx9ZwyH.jpg",
                    "photos": [{
                        "id": "KLfWhxY3mdYKZMqx5",
                        "url": "http://pandaslist.s3.amazonaws.com/images/wKaQBgTob7bx9ZwyH.jpg"
                    }, {
                        "id": "HH3r3TAGe38DphTyb",
                        "url": "http://pandaslist.s3.amazonaws.com/images/9AvF4reWRPgQBjTQc.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319132140,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "[Fundraiser SPAM] Camp Reel Stories hosting LUNAFEST, support the Breast Cancer Fund",
                    "price": "",
                    "description": "Hi guys,\n\nI'm sending this email on behalf of Esther Pearl of Camp Reel Stories (who also spoke at Creative Mornings, Oakland a few months ago).\n\nCamp Reel Stories is hosting the LUNAFEST on Nov. 6th at the Humanist Hall. Enjoy great short films while supporting an important community cause. All proceeds go to Camp Reel Stories and the Breast Cancer Fund. Tickets available now at http://www.lunafest.org/oakland.\n\nPlease see attached flyer as well. \n\nCheers,\n-Savio",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319146374,
                    "published": true
                });

                Posts.insert({
                    "category": "WANTED",
                    "location": "Oakland",
                    "title": "Eye Doctor recommendation",
                    "price": "",
                    "description": "Anyone has a good eye doctor to recommend close to the office? \n\nThanks,\nJosephine",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319193047,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "pets",
                    "location": "Oakland",
                    "title": "Kittens need a home",
                    "price": "",
                    "description": "Hi All!\n\nSpamming you with kittens who need a home!\n\nThese two adorable guys need a loving home.  They were feral kittens that I have been taming.  They will still need a LOT more work so an experienced cat parent would be the best choice.  They are also litter mates and a bonded pair so they should go to the same home.  They are currently kept indoors and should remain so since they are still a little wild there could be a chance that they would take off.  A few more details about them below in list form.\n\nMale\nNeutered\nTreated for fleas/worms\nFIV/FELV free\nChipped (record will need updating)\nApprox. 6 months old\n\nPlease hit me up if you are interested or know someone who is.\n\nThanks!\n\nLiz\n\n\nLiz Lazich | Design Production Manager | Pandora\n2101 Webster St., Ste. 1650, Oakland, CA 94612\nw: 510.344.7689 | llazich@pandora.com\nAIM:  lizlazich",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "xqn72Kc9f7Fd5LLyp",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/KY76X2iRmzqTWSsFD.png",
                    "photos": [{
                        "id": "xqn72Kc9f7Fd5LLyp",
                        "url": "http://pandaslist.s3.amazonaws.com/images/KY76X2iRmzqTWSsFD.png"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319213676,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "general",
                    "location": "Oakland",
                    "title": "Pandora Cupcakes in 7th Floor Kitchen",
                    "price": "",
                    "description": "Hi All, \n\nWe have some left over “Pandora” cupcakes from the Road Crew Open House last night. They are in the 7th floor kitchen on the counter. \n\nEnjoy!\n\nWynt Curliano | Talent Brand & Events | Pandora\n2101 Webster St 16th Fl, Oakland, CA 94612\nO 510.858.3532 | M 510.507.9789 | wcurliano@pandora.com\ntwitter:@pandoracareers #ComeBackstage\n\nMy favorite Pandora stations: CHVRCHES, Surfer Blood, Fountains of Wayne, and Hipster BBQ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319279790,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Curtis Bumpy Friday, ZZ Topless Saturday",
                    "price": "",
                    "description": "Hey Funky Pandas. Not one, but two (2) shows to spam you with this weekend. \nI’ll quiet down after this.\n\nFIRST: My inveterate (and quite vertebrate) R&B mashup groove outfit, Curtis Bumpy, concludes its unofficial 2014 residency at Jupiter Brewing Co. in Downtown Berkeley, this Friday night from 8-11 PM under the big redwood tree. Berkeley’s own DJ Delon and Papa Blake will be warming up the scene in tandem from 5PM-on as well. \n\nJupiter has great pizza, salads and beer, and admission is always FREE. All ages early in the evening. The magic usually kicks in for the 9:00 set. It’s supposed to be a glorious and warm night Friday.\nhttp://www.curtisbumpy.com\nhttp://www.jupiterbeer.com\nShattuck @ Center, Berkeley CA\nFRI 8PM / FREE\n\nNEXT: Saturday afternoon, my other band ZZ Topless plays what will likely be its final show, at Oakland’s Oaktoberfest in the Dimond. We did this last October and it was a total blast. We play on the Family Stage (appropriately or not) from 3:55-5:00 PM, officially. What else is there to say except… more beer, more party music, and more outdoor musical enjoyments to be had in the East Bay’s best climate. My bandmates and I, of course, will be wearing black suits and ties. It’s a schtick.\nhttp://www.oaktoberfest.org/\nMacArthur Blvd @ Fruitvale Ave. Oakland CA\nSAT 4PM / FREE\n\nWish me luck!\n\nDamon\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "LkSdQk3jip4WhPvPj",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/KnpKisZCWAZudfiqu.png",
                    "photos": [{
                        "id": "LkSdQk3jip4WhPvPj",
                        "url": "http://pandaslist.s3.amazonaws.com/images/KnpKisZCWAZudfiqu.png"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319302217,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "lost-and-found",
                    "location": "Oakland",
                    "title": "*Found* Clipper Cards ",
                    "price": "",
                    "description": "Hello!\nThere are two clipper cards here at the front desk on the 7th floor.\nOne was found in Ashkenaz & the other in Apollo.\nPlease confirm your card number so that we can determine which one belongs to you.\nThanks!\n \nSarah Irene Mendoza | Facilities Coordinator | Pandora\n2101 Webster St 16th  Fl, Oakland, CA 94612\nw 510.858.3821 |smendoza@pandora.com",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319365003,
                    "published": true
                });

                Posts.insert({
                    "title": "psingh3",
                    "category": "For Sale",
                    "price": "101",
                    "location": "Oakland",
                    "description": "test",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "title": "psingh3",
                    "category": "For Sale",
                    "price": "101",
                    "location": "Oakland",
                    "description": "test",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "appliances",
                    "location": "Oakland",
                    "title": "T-Level Rolltop Backpack",
                    "price": "$225",
                    "description": "Fresh from Korea, I have a red T-Level Rolltop Backpack for sale for $225.  I have a yellow version of this bag that I use when I ride my bike to work, or when I go grocery shopping.\n\nDetails:\n1600D Invista Cordura Fabric,\nT-Aero Cushioning System\nWaterproof Truck Trap Line\nWoojin-Duraflex plastic parts\nFilament US Nylon Webbing\nPolyurethane film coated logo marking\n3M Reflector\nYKK water repellent zipper\n\n-- \nTony Kim\nInstructional Designer, Communications and Org. Development  |  Pandora\n✆ 919.607.6806  | ✉ tonykim@pandora.com\nlearn: advertising.pandora.com\nfollow: twitter.com/PandoraPulse\nlisten: pandora.com\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "JM2NCT7SExAmAz25a",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/MKQPMYhxD44trpjWF.png",
                    "photos": [{
                        "id": "JM2NCT7SExAmAz25a",
                        "url": "http://pandaslist.s3.amazonaws.com/images/MKQPMYhxD44trpjWF.png"
                    }, {
                        "id": "wEifXRt25LeywhCGD",
                        "url": "http://pandaslist.s3.amazonaws.com/images/9NpyKM3AFjdAyJ78B.png"
                    }, {
                        "id": "rLysz2Ft9A7dmfZWj",
                        "url": "http://pandaslist.s3.amazonaws.com/images/HddwGE9hPNFoypDH8.png"
                    }, {
                        "id": "GPSf5qindxLAry4eL",
                        "url": "http://pandaslist.s3.amazonaws.com/images/mjGeGt35EfyoRJLkH.png"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319404826,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Free TBD Fest tickets this weekend",
                    "price": "",
                    "description": "Hi everyone\nA friend of mine works for Loudie and they are giving away free tickets to the TBD Fest in Sac this weekend: http://www.tbdfest.com/\n \nJust email her your full name and she’ll put you on the guest list (until free spots are taken).\nYian@loudie.com\n \nMichael",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319422783,
                    "published": true
                });

                Posts.insert({
                    "title": "psingh3",
                    "category": "For Sale",
                    "price": "101",
                    "location": "Oakland",
                    "description": "test",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "2 tickets to Little Dragon at the Fox tonight",
                    "price": "$83",
                    "description": "2 tickets for the Little Dragon show tonight at the Fox.\n\nI paid $83 for them (incl. fees).\n\nDave\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319454866,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "activities",
                    "location": "Oakland",
                    "title": " Lunchtime Acting Opportunity 11/7",
                    "price": "",
                    "description": "Hey,\nA friend of mine is looking for some female actors/non-actors, see details below:\n\nSeeking actors/non-actors as ensemble “performers” in a futuristic membership for a live event. No experience necessary, however preference will be given to actors over non-actors.\n\n \nDate: Friday, Nov.7th\n\n\n\nTime: 1-2pm\n\n\nLocation: Berkeley Hills, TBD\n\n\nPay: $70\n\n\nGender: All women, including LGBT (trans/cisgender women and transgender men)\n\n\nAge range: 20-30\n\n\nEthnicity: non-white\n\n\nWardrobe: techie-casual; perhaps slightly futuristic (college student; FB employee; hipster, etc.)\n\n\nNote: Please spread the word, we are casting 20-30 individuals for this project.\n\n\nContact: aimee@foggtheatre.org; please specify CASTING in the subject line, and attach a recent snapshot of yourself.\n\n\n\nTyler Brown | Manager Audio Production | Pandora\n2101 Webster St 16th Fl, Oakland, CA 94612\n510.593.2659 | AIM: tylerhbrown | tbrown@pandora.com\n",
                    "delivery_method": "goto_seller",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319572566,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "volunteers",
                    "location": "Oakland",
                    "title": "Oak Hill School Scooter Project Fundraiser",
                    "price": "",
                    "description": "Sending out one more time…\n\nMy friend is the director of community outreach and a teacher at Oak Hill School, a non-profit school for autistic children. They are running a fundraising campaign called “The Scooter Project.” I wanted to pass along the email for asking for donations. I personally volunteer for the school, and the work they do with the kids is absolutely amazing. \n\nPass along to friends and family if you see fit.\n\nCheers!\nDani\n\nPS. If you have a almost new scooter or something similar, shoot me an email. ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "RBiKXADpEptWJQrN8",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/H6iRCnSHqcFMfJLzo.jpeg",
                    "photos": [{
                        "id": "RBiKXADpEptWJQrN8",
                        "url": "http://pandaslist.s3.amazonaws.com/images/H6iRCnSHqcFMfJLzo.jpeg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319617287,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Purgatorio @ The New Parkway tonight",
                    "price": "",
                    "description": "Hi there,\n\nJust wanted to share a film – Purgatorio - that a few friends of mine worked on and shot/directed a few years ago in Mexico. They've been doing the festival circuit and are finally premiering this in Oakland tonight. This provocative documentary about the U.S.-Mexico border is being screened at Oakland's New Parkway Theater at 7pm. You can get your tickets here and get a sneak peek here.\n\nHope to see you there! \n\n----\nWinnie Wong I Associate Producer\nBranded and Custom Content I PANDORA\nmobile:  415.926.3985 \n\n",
                    "delivery_method": "goto_seller",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319631337,
                    "published": true
                });

                Posts.insert({
                    "title": "psingh3",
                    "category": "For Sale",
                    "price": "102",
                    "location": "Oakland",
                    "description": "test",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Warriors Tix",
                    "price": "",
                    "description": "The NBA season is back tonight! Woot.\nWe have some games off our family’s season tix that we can’t make. Hit reply if interested. \n\nSection 214 Row 4, Seats 2-3\n$50 each | $100 for the pair (face value)\n\nWed Nov 5 - Clippers 730 PM\nTue Nov 11 - Spurs 730 PM\nSat Nov 15 - Hornets 730 PM\nFri Nov 21 - Jazz 730 PM\nTue Dec 2 - Magic 730pm\nThu Dec 4 - Pelicans 730pm\n\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "YLavwYTgZ2d39emH2",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/QhEeno8qNtwGh2WcP.jpg",
                    "photos": [{
                        "id": "YLavwYTgZ2d39emH2",
                        "url": "http://pandaslist.s3.amazonaws.com/images/QhEeno8qNtwGh2WcP.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319674335,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Tickets for LORDE at the Greek on Thursday",
                    "price": "",
                    "description": "Hey All,\n\nI have up to 4 tickets available for this Thursday's LORDE concert at the Greek Theatre in Berkeley.  A friend bought these, but can no longer go.  She paid Face Value ($49.50 each), plus processing fee, but is willing to let them go for just FV.  Tickets must be sold as a set or in pairs – $99/pair.\n\nPlease let me know if you're interested.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "dDvh7XxuFtPuKbdpm",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/kmtavXMz5AZvoKKYt.png",
                    "photos": [{
                        "id": "dDvh7XxuFtPuKbdpm",
                        "url": "http://pandaslist.s3.amazonaws.com/images/kmtavXMz5AZvoKKYt.png"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319683756,
                    "published": true
                });

                Posts.insert({
                    "title": "psingh3",
                    "category": "For Sale",
                    "price": "102",
                    "location": "Oakland",
                    "description": "test",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup"
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Tycho @ Fox Theater (10/30)",
                    "price": "$40",
                    "description": "I'm also selling a floor ticket to Tycho for $40, face value. Let me know if you're interested!\n\n---\n\nMax Goh | Online Ad Trafficker, Central | Pandora\n2101 Webster St. 16th Fl, Oakland, CA 94612\n(510) 451-4100 ext. 3014 | mgoh@pandora.com",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319716669,
                    "published": true
                });

                Posts.insert({
                    "category": "Housing",
                    "subcategory": "apartments/housing",
                    "location": "Oakland",
                    "title": "one bedroom apartment in Glenview District, Oakland",
                    "price": "",
                    "description": "1 plus bedroom in desirable Glenview\n\nhttp://sfbay.craigslist.org/eby/apa/4688565329.html\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "oDgKLdkHAL4eQbm69",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/4kBKqZ5FeLMAkEgbN.jpg",
                    "photos": [{
                        "id": "oDgKLdkHAL4eQbm69",
                        "url": "http://pandaslist.s3.amazonaws.com/images/4kBKqZ5FeLMAkEgbN.jpg"
                    }, {
                        "id": "tvck37EakqHiKwyDh",
                        "url": "http://pandaslist.s3.amazonaws.com/images/wQbrW8jRp33tWFZxh.jpg"
                    }, {
                        "id": "c9GEH6Bj2b8qvfXB9",
                        "url": "http://pandaslist.s3.amazonaws.com/images/apscwk4JL5eGkv27M.jpg"
                    }, {
                        "id": "jXzaggryvMKB792j2",
                        "url": "http://pandaslist.s3.amazonaws.com/images/PkmDo6ZGJLXuhMv73.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319758828,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "49ers Tix for Sunday vs. Rams",
                    "price": "$186/each",
                    "description": "A friend of mine is selling her tickets to the 49ers game this Sunday. Information below:\n\nSunday afternoon 11/2 \nTwo (2) Tickets - $186 each\nLower Corner 123\nRow: 21\nSeats: 16,17\n\nLooking at what is going on StubHub right now, these are definitely at the cheaper end for the lower sections. Let me know if you're interested in taking them off her hands.\n\nThanks,\n\nRyan\n\nRyan Lafferty  |  Account Executive – Performance |  Pandora\n2101 Webster St 15th Fl, Oakland, CA 94612\no 510.740.8507  |  rlafferty@pandora.com\n\nMy favorite Pandora Stations: Small Black, CHVRCHES, Black Rebel Motorcycle Club, Junip, Dizzy Gillespie",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "JzgfbP79AgWW8uZmQ",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/gShQYzaBzRCBQQMmC.jpg",
                    "photos": [{
                        "id": "JzgfbP79AgWW8uZmQ",
                        "url": "http://pandaslist.s3.amazonaws.com/images/gShQYzaBzRCBQQMmC.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319773461,
                    "published": true
                });

                Posts.insert({
                    "category": "Services",
                    "subcategory": "other",
                    "location": "Oakland",
                    "title": "Josephine - home cooked meals - East Bay",
                    "price": "",
                    "description": "I've been using this local service to meet neighbors and score delicious food at a reasonable price. If you're in the E Bay you might like it too… \n\n\nHere' a message from the nice folks at Josephine:\n\nHello Pandora people!\n\nMy name is Charley and I work for a company called Josephine - a marketplace for home cooked meals. For the uninitiated, we're a local company that features cooks in Oakland/Berkeley making their favorite homestyle meals for you and your family to pick up. You can browse meals and RSVP online with your cell phone number and then pick up the food to-go during a designated pick-up window at the cook's home. \n\nThe idea is to eventually have a robust marketplace of offerings in different locations and different price points, but for now we're mostly in North Oakland/Berkeley and our meals are between $7-10. The portions are hearty and the food is made with love by some seriously awesome chefs, mothers, urban homesteaders, and community advocates. Chris Horgan has been to a few of our meals and Will Gotshall Maxon's wife was actually one of our very first cooks, so we actually owe Pandora a good amount of credit for helping us get off the ground.\n\nCome check out one of our meals and mention you work at Pandora and we'll throw in a free fresh pressed juice or a dessert with your meal :)\n\n-- \n\nHere are our upcoming meals:\n\nJapanese Hot Pot – Seafood Yosenabe with Vegetables ($9)\nTuesday, September 30\nNorth Oakland (near 66th and Shattuck)\nMas' Yosenabe made with a miso based broth and bite-sized ingredients including salmon, manila clams, prawns, scallops, squid, napa cabbage, mushrooms, snow peas as well as some tofu. The dish will be filled out with udon noodles.\nMoms Beef Stew with Root Veggies and Buttered Green Beans ($10)\nWednesday, October 1 5-7pm\nWest Berkeley (near San Pablo and University)\nTerry's mom's beef stew recipe, made with Niman Ranch pork, onions, garlic, bay leaf, carrots, parsnips and potatoes. The stew is served over buttered noodles with a side of buttered green beans with tarragon, and will be gluten free since it will be thickened with brown rice flour.\nGet in touch if you have any questions. Number is 973 879 6447 and email is charley@josephine.com\n\nThanks and cheers!",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319829656,
                    "published": true
                });

                Posts.insert({
                    "category": "Gigs",
                    "subcategory": "creative",
                    "location": "Oakland",
                    "title": "Amazing show",
                    "price": "",
                    "description": "Amazing show",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "rte3xscKuPMYFt8ep",
                    "creationDate": 1415319890931,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "electronics",
                    "location": "Oakland",
                    "title": "Free to a good home - XBOX 360 + PSONE + Dreamcast",
                    "price": "",
                    "description": "Hi,\n \nI’ve got an XBOX 360, PSONE, and a Dreamcast free to a good home.\n \nEach include whatever games, and controllers I have.\n \nBest,\n \nPaul T",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319894017,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "PERGs",
                    "location": "Oakland",
                    "title": "Tennis Perg ",
                    "price": "",
                    "description": "Hello Pandas,\n\nWant to play tennis in a beautiful ravine while deer graze in the background? Competitive or casual players are welcome. \n\n\"The depressing thing about tennis is that no matter how good I get, I'll never be as good as a wall.” - Mitch Hedberg via Nagui Yassa\n\nWhen? \nEvery Thursdays 5:30-7:30pm. Next 3 dates:\n10/30 – 2 courts\n11/6 – 2 courts\n11/13 – 2 courts\nWhere?\nDavie Tennis Stadium \n198 Oak Road\nPiedmont, CA 94610\nRoute from office here\n\nHow to Join\nAdd yourself to the \"Perg – Tennis\" email distro. See instructions here.\nSince it's a physically active PERG, all members must complete a PERG Acknowledgment Form and return to employeegroups@pandora.com. If you've completed one already, you don’t need to fill out another.\nLet us know if you prefer to play singles or doubles along with your self-rating here. \n\n-Sohana & Grace",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "ydo2fA8rxEfDzw4Jz",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/TwDFBE9rEQmyvAPpb.jpg",
                    "photos": [{
                        "id": "ydo2fA8rxEfDzw4Jz",
                        "url": "http://pandaslist.s3.amazonaws.com/images/TwDFBE9rEQmyvAPpb.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319926500,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Calling all CAL alums!",
                    "price": "",
                    "description": "Participate in Cal Alumni’s “bring a student to work” day. Great opportunity to give back to your alma mater and to spread the Pandora love, especially since we’re kicking off our Road Crew internship program for 2015. I just signed up.\n\nMore details here: https://career.berkeley.edu/externships/sponsor.stm ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415319945499,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Fundraiser/Celebration - Congential Heart Defects",
                    "price": "",
                    "description": " \nDear Pandas:\n \nHeart defects are the number one birth defect, affecting one out of every hundred babies born.  In the United States alone, that’s 400,000!  Riley Norton was an 11 ½ year old boy who passed away on October 20, 2014.  Suzanne Galante (Mother-In-Chief) wrote about Riley and his struggle in her blog, which can be found here:  http://www.motherinchief.com/search/label/kids%20in%20hospital .    Suzanne wrote that Riley was born with a single ventricle heart that was on the wrong side of his chest.  Many of his organs were in the wrong place, and he was also born without a spleen.  (I had no idea that you needed your spleen to fight infections).  Anyway, Riley had five surgeries to create a way for his blood to move oxygen around his body.  In spite of all of those surgeries, there was nothing that could be done to really “fix” it.\n\nI’m reaching out today to seek your support to celebrate the life of Riley Norton.  His short, but well-lived, life will be celebrated on Saturday, November 1, 2014 at Brittan Acres Elementary School, where he was a student, from 2:30 – 4:30 pm.  His family asks that everyone wear green, as it was Riley’s favorite color.  (details below)\n \nhttp://www.rileynorton.com/celebrate/\n \n\nRiley’s story hits close to home for my family, as my stepdaughter had a heart transplant last year.  While her condition didn’t begin like Riley’s, her condition was also congenital, based on a gene that she and her father share.  My stepdaughter grew up in San Carlos, and that community is very close-knit, so she’s asked that I share Riley’s story and celebration with you.  I’m hopeful that anyone who happens to be in the Peninsula on Saturday is able to join this celebration of life.  If you are unable to join, please consider donating to Camp Taylor – or donating some of your time and a pint of blood.  Additional details can be found here:  http://www.rileynorton.com/give/\n \nThanks for reading!\n \nResa",
                    "delivery_method": "goto_seller",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415319970498,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Econo Jam Records Halloween party/1 Year Anniversary",
                    "price": "",
                    "description": "Hello,\nI am playing in a Wipers cover band called Ypres Friday evening.\nIt is free and nearby over at the record store I work at on the weekends, Econo Jam Records.\nhttps://www.facebook.com/events/537096313091186/\n\n6 pm! Free\nAlso friends that do a one-woman Wire cover act and a Guided By Voices cover band!\nIt's also the anniversary of the shop! There will be some coupons and a costume discount of 15%.\nGeorge",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320016881,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "PERGs",
                    "location": "Oakland",
                    "title": "HOOPS: Oakland Corporate League on Tuesday Nights",
                    "price": "",
                    "description": "Hi Everyone,\n\nI would normally send these emails to the HOOPS alias, but wanted to open this up in case there are new employees that aren't on the Perg distribution list.\n\nThere is an opportunity to play in a corporate league here in Oakland at a new venue called JAMTOWN (located in Jack London Square).  The flier is below/attached with a little more detail, but I wanted to see if anyone was interested in playing.  Games would be on Tuesday nights, 7pm-10pm, starting on 10/14 and ending on 12/9.  We may already have enough to form one team, but ideally we would have two teams, especially since they offered us a discount for multiple teams.\n\nSend me a message directly if you're interested.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "xokt4oemeKHZdKXPQ",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/oezXd6W5khnyt5QQK.png",
                    "photos": [{
                        "id": "xokt4oemeKHZdKXPQ",
                        "url": "http://pandaslist.s3.amazonaws.com/images/oezXd6W5khnyt5QQK.png"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320040461,
                    "published": true
                });

                Posts.insert({
                    "category": "Services",
                    "subcategory": "other",
                    "location": "Oakland",
                    "title": "Offering amazing snuggy dancing",
                    "price": "100",
                    "description": "I will come to your house and dance in my snuggy",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "2zFCedwNhCLMRp5fD",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/GNaQSi88f7H7ST3Xt.gif",
                    "photos": [{
                        "id": "2zFCedwNhCLMRp5fD",
                        "url": "http://pandaslist.s3.amazonaws.com/images/GNaQSi88f7H7ST3Xt.gif"
                    }, {
                        "id": "4qTFcYorvpnFKsPXa",
                        "url": "http://pandaslist.s3.amazonaws.com/images/2w37TxC2jmw4qW4fE.gif"
                    }],
                    "createdBy": "rte3xscKuPMYFt8ep",
                    "creationDate": 1415320042860,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "volunteers",
                    "location": "Oakland",
                    "title": "Volunteer DJ for Breast Cancer Fair",
                    "price": "",
                    "description": "Hi all,\n\nMy wife works at one of San Francisco's Department of Public Health Clinics. Knowing that I work at Pandora, they asked her whether I could convey the following message:\n\n\"We need to find a D.J for the Breast Cancer Fair on Oct. 25.2014, 9am to 4pm. The target audience we are focusing on are African American/Black women ages 40-70. We will rent our own P.A system, but need the D.J. to bring his/her own equipment. \"\n\nLet me know if anyone is interested and I can put you in touch.\n\nThanks,\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320073938,
                    "published": true
                });

                Posts.insert({
                    "category": "WANTED",
                    "location": "Oakland",
                    "title": "Need a last-minute cat-sitter!",
                    "price": "",
                    "description": "Hi all!  I’m going out of town tomorrow afternoon, and my cat sitting plans have fallen through at the *very* last minute.  I’m looking for someone who could cat sit from tomorrow up until October 6th.\n \nAs this is a last minute pickle I’m extremely flexible on the arrangement, meaning I’m looking for anything from references for reliable cat-sitting services in SF to people interested in cat sitting themselves.  This can be a paid gig, but either way cuddles are free.\n \nIf anyone is interested or may have any leads, I would greatly appreciate them!  Thanks everyone!\n \n-Jessica",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "a7jzD9GHiakXD4tWR",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/NzizLgbv6mQa4PMSZ.png",
                    "photos": [{
                        "id": "a7jzD9GHiakXD4tWR",
                        "url": "http://pandaslist.s3.amazonaws.com/images/NzizLgbv6mQa4PMSZ.png"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320117800,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "49ers and RedZone Rally Tickets for Sunday vs. Rams 11/2",
                    "price": "",
                    "description": "Hi all,\n \nAlso selling tickets for the Niners game against the Rams on Sunday.  Have a total of four, will sell either 2 or all 4.\n \nTickets are section 109, row 22, seats 9-10, as well as row 21, seats 9-10.   Also have 4 tickets to the Great America Redzone rally (starts at 10am), which contains unlimited food and drink, as well as a sportsbar with 45 tv’s to watch all the early games.  RedZone rally face value is $90/person.   Link about the rally as well as view from seats below.\n \nPRICES:\n \nTwo tickets: $350\nTwo tickets + redzone rally: $400\nFour tickets: $675\nFour tickets + redzone rally: $725\n \n \nHurry, these prices won’t last!  (These prices will totally last)\n \n \n \nhttp://aviewfrommyseat.com/photo/35565/Levi%27s+Stadium/section-109/row-20/seat-4/\n \n \nhttp://www.levisstadium.com/great-america-pavilion/",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "ycmXydjp43PQgwwWA",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/Fxk2eK9PKy7cq2cng.jpg",
                    "photos": [{
                        "id": "ycmXydjp43PQgwwWA",
                        "url": "http://pandaslist.s3.amazonaws.com/images/Fxk2eK9PKy7cq2cng.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320125593,
                    "published": true
                });

                Posts.insert({
                    "category": "WANTED",
                    "location": "Oakland",
                    "title": "Cajon for Whiteboard Session?",
                    "price": "",
                    "description": "Hi All -\n\nAnother instrument request! Looking for a cajon to borrow for a WBS next month. If you have one we could use, please send me a note.\n\nGracias!\n\nMontse",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320161788,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "November/December GSW Tickets For Sale",
                    "price": "",
                    "description": "Dub Nation,\n\nBelow are the November-December home games I have available.  Amounts are 20% off of Face Value.  Tickets come in a pair and include 1 parking pass (valued at $30).\n\nSection 223, Row 3, Seats 1-2 (aisle)\nWednesday, 11/5 vs. LA Clippers - $96\nThursday, 11/13 vs. Brooklyn Nets - $56\nSaturday, 11/15 vs. Charlotte Hornets - $80\nFriday, 11/21 vs. Utah Jazz - $80\nWednesday, 12/10 vs. Houston Rockets - $84\nThursday, 12/18 vs. Oklahoma City Thunder - $120\n\nThanks,\n\nJerome Atendido | Account Executive | Pandora\n2101 Webster St 16th Fl, Oakland, CA 94612\nw 510.858.3283 | jatendido@pandora.com\n\nWhat makes Pandora a must buy radio station: http://butlertill.com/pov/what-makes-pandora-a-must-buy-radio-station/",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "o7s8Tm6PfhupBDvqE",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/yRj4Nwrd4JG5Q92An.png",
                    "photos": [{
                        "id": "o7s8Tm6PfhupBDvqE",
                        "url": "http://pandaslist.s3.amazonaws.com/images/yRj4Nwrd4JG5Q92An.png"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320188246,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Bay Area Record Fair (BARF) this Saturday",
                    "price": "",
                    "description": "Hey All, \n\nI know there are quite a few record collectors here at Pandora. I wanted to pass along this even that's happening this Saturday the 27th. \n\nMany local labels show up to offer albums from their label, distro, used and personal collections, and more. \n\nYou must RSVP and it's FREE. \n\nhttps://bayarearecordfair.squarespace.com/",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "Gd3jszTEWnDv3ksCk",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/JECxddq282unFWdqa.png",
                    "photos": [{
                        "id": "Gd3jszTEWnDv3ksCk",
                        "url": "http://pandaslist.s3.amazonaws.com/images/JECxddq282unFWdqa.png"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320230741,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Parking Pass Up for Grabs in Downtown Oakland",
                    "price": "$160",
                    "description": "Hi All!\n \nI have a monthly parking pass at the YMCA garage on 23rd and Webster. I pay $160 a month, but will no longer need the pass by mid-November. Unfortunately it is already paid for through the end of the month and they will not give me a refund. I was wondering if someone wanted to take on this pass from 11/17-11-30, your cost would be $80 or best offer. This comes out to $8 a day which is “cheap” parking around here. Please let me know if you are interested! Thanks!\n \nJustine Glenn | Facilities | Pandora\n2100 Franklin Street 7th Floor, Oakland, CA 94612\nw 510.858.3333 | jglenn@pandora.com\n ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "k3FZShLASHBqgLjLC",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/zkDsNjyEgSf8oiJ88.jpg",
                    "photos": [{
                        "id": "k3FZShLASHBqgLjLC",
                        "url": "http://pandaslist.s3.amazonaws.com/images/zkDsNjyEgSf8oiJ88.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320239972,
                    "published": true
                });

                Posts.insert({
                    "category": "Housing",
                    "subcategory": "sublets/temporary",
                    "location": "Oakland",
                    "title": "Sublease available - Lake Merritt",
                    "price": "",
                    "description": "I am looking for a\ntenant to sublease my furnished large one bedroom apartment with parking, laundry and utilities paid. The apartment has\n a fresh coat of paint, is updated and modern inside and will come fully furnished. It is located right on Grand Ave in the Lake Merritt neighborhood. The rent is $1800 and is an incredibly great rental price for the neighborhood, since that's what most places\n in that neighborhood go for without furnishing! This spot is super clean, super safe and right in short walking distance to bars, restaurants, farmers market, etc.\nThis apartment is large enough and is great for a couple!\nThe landlord and I need the new renter or renters to meet all income requirements and have a clean background check. The new renters must sign a year lease but should also\n interested in staying more long term if necessary. I don't want to leave since I love it so much but I am subleasing it furnished because I may be back to Oakland at another point in time. \n\n\nThis apartment will go quick! I am showing it by appointment only if the description meets your needs. Please send an email to malfitanod@gamil.com if interested. \n\nThank You, \nDaniella Malfitano",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320282341,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Drew Holcomb and the Neighbors - Nov 7th The Chapel SF",
                    "price": "$15",
                    "description": "Hey Oakland, \n\nA long time friend of mine, Drew Holcomb, and his band are playing at The Chapel in SF this Friday. I would love to have some fellow Pandas check out the show. Tickets are $13 adv / $15 door.\n\nThis is their first West Coast tour and their most recent album, Good Life, reached #7 overall on iTunes. Should be a good time… \n\nPandora Station\n\nYoutube Link \n\nSee you at the show.\n\n\nSteve Wharton | Sr. Account Executive | PANDORA\n2101 Webster St. 15th Fl, Oakland, CA 94612\nw: 510.858.3055 | m: 925.330.8717 | gchat: sjwharton1 | swharton@pandora.com\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "GdbraXqudcrJLi2nv",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/YuZ3rWsfzwLZBPvZN.jpg",
                    "photos": [{
                        "id": "GdbraXqudcrJLi2nv",
                        "url": "http://pandaslist.s3.amazonaws.com/images/YuZ3rWsfzwLZBPvZN.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320297508,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "lost-and-found",
                    "location": "Oakland",
                    "title": "Found jacket on 6th floor",
                    "price": "",
                    "description": "There's a black fleece Pandora jacket, size Small,  in the R-booth of the 6th floor kitchen. (It was here yesterday too.) I'm going to leave it here, so if it's yours come on by. \n\n-Sara\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320317204,
                    "published": true
                });

                Posts.insert({
                    "category": "WANTED",
                    "location": "Oakland",
                    "title": "Acoustic guitar for WBS tomorrow?",
                    "price": "",
                    "description": "Hi All -\n\nThe band's bus broke down and some of their gear won't make it. Looking for a good acoustic guitar they could borrow for the Whiteboard session tomorrow. If you have one and are willing to bring it to the office tomorrow, please send me an email!\n\nMany thanks!\n\nMontse",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320343630,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Cal vs BYU tickets",
                    "price": "$80",
                    "description": "I bought tickets to the wrong game. My mistake is your gain!\n\n\n2 tickets to BYU @ Cal on November 29th.\nSection TT\nRow 4\nSeats 3 and 4\n\nSelling for $80 for the pair on CL.\n$65 for the pair to Pandora employees\n\nPaypal accepted.\n\n\n\n     \n\nChris Horgan | Senior Music Analyst | Pandora\n2101 Webster St 16th Fl, Oakland, CA94612\nm 415.794.3786 | chorgan@pandora.com\n\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "ikNFRM5pgQct3xMD8",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/BfLqn9MBq9x2QkHfL.jpg",
                    "photos": [{
                        "id": "ikNFRM5pgQct3xMD8",
                        "url": "http://pandaslist.s3.amazonaws.com/images/BfLqn9MBq9x2QkHfL.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320348739,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Chvrches at the Fox tonight",
                    "price": "",
                    "description": "My group just bailed. 4 tix, $20 each. Assuming they'll go on around 9/9:30.  Let me know if any interest.\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320385913,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "rideshare",
                    "location": "Oakland",
                    "title": "Drive me home on FRIDAY",
                    "price": "",
                    "description": "It's Friday, Friday\nGotta get down on Friday\nEverybody's lookin' forward to the weekend, weekend\nFriday, Friday\nGettin' down on Friday\nEverybody's lookin' forward to the weekend\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "cTNH3NouXcum3Agzt",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/FH3P2bYHuSYpfYsjo.gif",
                    "photos": [{
                        "id": "cTNH3NouXcum3Agzt",
                        "url": "http://pandaslist.s3.amazonaws.com/images/FH3P2bYHuSYpfYsjo.gif"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415320422197,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "lost-and-found",
                    "location": "Oakland",
                    "title": "Bart Ticket on 6th Floor",
                    "price": "",
                    "description": "HI All,\n\nI found a bart ticket on the 6th floor today near the IT vending machine with a value of slightly under $2.  Not much, but if there are no claimers it may be used transport me to an A's game in the near future.  For now I'll hold onto it at my desk, which is also located near the 6th floor IT vending machine.\n\nJimmy ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320425183,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "free",
                    "location": "Oakland",
                    "title": "Free A's Game Ticket - Tonight",
                    "price": "",
                    "description": "Hi friends, \n\nI have a ticket to tonight's A's game against the Rangers at 7 PM up for grabs (for free). I'm heading out early, so the first person to grab it from my desk wins (6th floor Comms corner). \n\nEnjoy!\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320504324,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "1 GA ticket, Tears For Fears, 9/24",
                    "price": "",
                    "description": "Hi everyone\nI have 1 extra ticket I need to sell for the Tears for Fears show next Wednesday (9/24) at the Fox Theater. This is a GA/standing ticket that is currently sold out.\nSelling for face + fees = $62.\n \nTicket is a digital/printable version.\n \nMichael",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320545613,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "local news",
                    "location": "Oakland",
                    "title": "TruMaker custom fitted shirts for men",
                    "price": "",
                    "description": "Hey Oakland!\n\nMy cousin Nicole just started working for TruMaker, a local San Francisco company that aims to take the pain out of shopping for men’s clothing. They have an Outfitter come to you to take your measurements, you select from tons of different styles, patterns, fabrics, and fits, and then they create the clothing and send it to you. Your own bespoke shirts, ties, and eventually jackets for business or casual. \n\nFrom their website:\nSometimes the best way to approach new problems is to rethink old solutions.\n\nMade-to-measure—or as we call it, built-to-fit—has its roots in a different era of personal style, when clothes were cut and sewn to fit individuals and be worn for years, not fill discount shelves and wear out after a season. But to fit into our modern lives, we needed the service to be accessible, convenient, and easy. It had to combine the integrity of yesterday’s techniques with the innovations of today’s technology. It had to enable men to spend less time worrying about their wardrobes and more time doing what they love.\n\nWe wanted a brand that spoke to our relationship with the changing world; a method steeped in tradition but empowered by new industry. We wanted ruggedly-refined and classic styles made to men’s exact measurements, with all the benefits of local, personalized service and all the ease of online ordering.\n\nWe wanted better products. We wanted a better experience. We wanted a better way to shop.\n\nSo we created Trumaker.\n\nIf you’re interested in a fitting session please don’t hesitate to email her at nfletcher@trumakeroutfitter.com and tell her Nick sent you. \n\nThanks!\n\nNick",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "JKyr6xYgx6qELBf9c",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/WzDvF4nyrLF9MnnGS.jpg",
                    "photos": [{
                        "id": "JKyr6xYgx6qELBf9c",
                        "url": "http://pandaslist.s3.amazonaws.com/images/WzDvF4nyrLF9MnnGS.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320549795,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "free",
                    "location": "Oakland",
                    "title": "4 Pairs of Free Tickets to Summersalt",
                    "price": "",
                    "description": "Hi there -\n\nI have 4 pairs of FREE tix (8 total) to Saturday's Summersalt Music Festival featuring Big Gigantic, G-Easy, Keys N Krates & more at Pier 70 in SF.  \n\nIn addition, EyeHeartSF would like to extend the friends & family discount to Pandora, (once the 8 free tix go) please feel free to use this link for 15% off: https://summersalt2014.eventbrite.com/?discount=Pandora\n\nAdditional Info:\nSummersalt Music & Arts Festival is happening this weekend on Saturday, September 13th at the historic Pier 70 Shipyard in San Francisco. This festival is one of the Bay Area's most unique outdoor music events, boasting an incredible mix of Electronic & Hip-Hop artists. This year's lineup features Live sets by BIG GIGANTIC, G-EAZY, KEYS N KRATES, GASLAMP KILLER, SALVA, AMPLIVE, GRANDTHEFT, ANA SIA, JAY ANT, DIMOND SAINTS, and many more. Plus food, drinks, games, and art by APEXER. Gates open at 1pm. Event is all ages.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320584987,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "other",
                    "location": "Oakland",
                    "title": "PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA ",
                    "price": "$1",
                    "description": "COME TO DAVIDS PIZZA",
                    "delivery_method": "goto_buyer",
                    "coverPhoto": "t4XjWep949cwizcPk",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/XPHga2T7Nr6BYBcB3.gif",
                    "photos": [{
                        "id": "t4XjWep949cwizcPk",
                        "url": "http://pandaslist.s3.amazonaws.com/images/XPHga2T7Nr6BYBcB3.gif"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415320621864,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "electronics",
                    "location": "Oakland",
                    "title": "Sonos Play:5 Speaker ",
                    "price": "$350",
                    "description": "Hi Everyone-\n\nSelling my Sonos Play:5 speaker with the needed bridge. I've had it for less than a year and used it probably 3 times, so it's basically brand new. The Play:5 retails for $400 and the Bridge for $50 (total of $450)\n\nSelling both for $350 total OBO.  Let me know if you're interested.\n\nThanks,\n\nRyan\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "ka73hrfcSphjEqXjh",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/pweca3LzuyryuzTMD.png",
                    "photos": [{
                        "id": "ka73hrfcSphjEqXjh",
                        "url": "http://pandaslist.s3.amazonaws.com/images/pweca3LzuyryuzTMD.png"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320626711,
                    "published": true
                });

                Posts.insert({
                    "category": "Services",
                    "subcategory": "household",
                    "location": "Oakland",
                    "title": "Interior Design",
                    "price": "",
                    "description": "Happy Hump Day Pandas!\n \nLooking to spice up your spot? A friend of mine is an interior designer based in San Francisco. She’s recently started to break away from the firm she works for to grow her own client base. Here’s a link to check out some of the work she’s done through LOCZIdesign.  I've also attached some images and a brief portfolio of her designs.\n \nHer rate is $60/hr, with a free initial 1 hour consultation. Here’s a list of services she provides:\n \n·         Onsite Design Consultation\n·         Paint Consultation\n·         Self “Shopping List”\n·         Purchasing\n·         Customized Style Guides, Mood Boards\n·         Element Price Guide\n·         Comprehensive Design Program\n·         Space Plan (furniture arrangement)\n·         Soft Furnishing Suggestions\n·         Floor Plans + working drawings\n·         Custom Furniture and Case-good Design\n·         Oversight of installations\n·         Project management\n·         Coordination with architects, contractors, and vendors,\n·         Budget management\n·         Architectural consulting\n·         Sustainable methods\n·         Building Exterior aesthetics\n \nTo schedule a consultation, she can be reached at placestudioSF@gmail.com or 408.348.1109.\n \nCheers\nDre\n ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "6wer8WBeJoDuu35R2",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/3zSPJwuNmPoQ4J4tu.jpg",
                    "photos": [{
                        "id": "6wer8WBeJoDuu35R2",
                        "url": "http://pandaslist.s3.amazonaws.com/images/3zSPJwuNmPoQ4J4tu.jpg"
                    }, {
                        "id": "YCkz5mjsfSusLgXG5",
                        "url": "http://pandaslist.s3.amazonaws.com/images/ts4tZrnLDcN5iS5yD.JPG"
                    }, {
                        "id": "h72SSs9eYqzHTsBg5",
                        "url": "http://pandaslist.s3.amazonaws.com/images/KfpNY6ciuHbcPqbrn.JPG"
                    }, {
                        "id": "YJgMaKTvvCRorW5SS",
                        "url": "http://pandaslist.s3.amazonaws.com/images/ZgPqoqmYzQ5sbBwi4.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320708387,
                    "published": true
                });

                Posts.insert({
                    "category": "WANTED",
                    "location": "Oakland",
                    "title": "2 Rhye Tkts @Fox 11/9?",
                    "price": "",
                    "description": "Looking for 2 Rhye Tickets at the Fox this Sunday. LMK. Thnx!\n\nGrace",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "sDZcmKW5gseiNjGWE",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/3f8G3CY9fXFa2x8Gd.jpg",
                    "photos": [{
                        "id": "sDZcmKW5gseiNjGWE",
                        "url": "http://pandaslist.s3.amazonaws.com/images/3f8G3CY9fXFa2x8Gd.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320747765,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "lost-and-found",
                    "location": "Oakland",
                    "title": "Lost my iPad Mini",
                    "price": "",
                    "description": "Hey everyone,\n\nI left my red iPad Mini somewhere on the 6th or 7th floor this afternoon. It has monkey on the lock screen. If you know where it is, please let me know!",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320766177,
                    "published": true
                });

                Posts.insert({
                    "category": "Services",
                    "subcategory": "lessons",
                    "location": "Oakland",
                    "title": "CHILL OUT",
                    "price": "",
                    "description": "Learn to chill out in 3 easy steps.\n\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "h8jGMwWbwinAKXLSu",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/Wjvurjcktztku4CTF.gif",
                    "photos": [{
                        "id": "h8jGMwWbwinAKXLSu",
                        "url": "http://pandaslist.s3.amazonaws.com/images/Wjvurjcktztku4CTF.gif"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415320774779,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Ice Cream Social 9/9/14 ",
                    "price": "",
                    "description": "Center 21 will be having its annual Ice Cream Social on September 9th, 2014, in the atrium lobby between 2:00-3:30pm. Ice cream and sorbet will be served. Come on over and have a scoop!\n ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320848853,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "\"Dig\" A Solo Art Show by Lexx Valdez @ SoleSpace",
                    "price": "",
                    "description": "Hey Friends,\n\nI'd like to invite you all to a solo art show for my friend Lexx Valdez, this Friday, at SoleSpace: http://youtu.be/5n1WxEhtVK0.  If you were already planning on being at First Friday, you should come through.\n\n----------\n\nFriday, November 7th, 2014 • 7pm -10:30pm \n\n\"DIG\" - A Solo Show by Oakland-based graphic designer and collage artist, Lexx Valdez. \n\nSoleSpace: Shoe Gallery & Creative Lab\n(((Celebrating it's 2 YEAR Anniversary)))\n1714 TELEGRAPH AVE OAKLAND CA.\n\nSounds by:\n• DJ Bluz (ConnectFlow Radio) \n• DjCentipede (CHANGE THE BEAT/ CB Records/ MOPHONO)\n• DJ Haylow (Roy Ayers Project / Distortion 2 Static))\n\nwith a special LIVE performance by Dirty Boots!\n\n----------\n\nLexx is an Oakland-based graphic designer who has done design work for many artists, events and organizations.  In fact, some of you may recognize her work from the most recent Oakland Music Festival:\n\n\n\n\nJerome Atendido | Account Executive | Pandora\n2101 Webster St 16th Fl, Oakland, CA 94612\nw 510.858.3283 | jatendido@pandora.com\n\nWhat makes Pandora a must buy radio station: http://butlertill.com/pov/what-makes-pandora-a-must-buy-radio-station/",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320853778,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Pandora U Happy Hour 7th Floor",
                    "price": "",
                    "description": "Hi Oakland –\n \nThe Pandora U Happy Hour will be starting at 5:00pm in the 7th Floor Kitchen. Come join us for beer and snacks!\n \nSee you there! J",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320888949,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "free",
                    "location": "Oakland",
                    "title": "Free bike trainer",
                    "price": "",
                    "description": "I'm offloading my old bike trainer. It works well for lighter riders, but for heavy people (like me) it has a little lean to it. If interested, let me know and I'll bring it to the office. ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "ZFcbsybHA6i9H2hvw",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/jFbBnWJ3LNQXreYwa.jpg",
                    "photos": [{
                        "id": "ZFcbsybHA6i9H2hvw",
                        "url": "http://pandaslist.s3.amazonaws.com/images/jFbBnWJ3LNQXreYwa.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320940238,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "lost-and-found",
                    "location": "Oakland",
                    "title": "Lost Sunglasses",
                    "price": "",
                    "description": "Has anyone seen a sunglasses case (with sunglasses inside) lying around the office? The sunglasses inside are prescription aviator type sunglasses.\n\nThanks,\n\nAri\n\nSent from....",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "5hnxNxXrtCrZrJngd",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/6bNxKQcPQsyZFFcpS.jpg",
                    "photos": [{
                        "id": "5hnxNxXrtCrZrJngd",
                        "url": "http://pandaslist.s3.amazonaws.com/images/6bNxKQcPQsyZFFcpS.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415320945689,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Outside Lands Ticketsa",
                    "price": "$80",
                    "description": "1 outside lands ticket for sale.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "eDSuSQ4WQqTreN6Cm",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/LRNkzqnrTrhS4pC5s.jpg",
                    "photos": [{
                        "id": "eDSuSQ4WQqTreN6Cm",
                        "url": "http://pandaslist.s3.amazonaws.com/images/LRNkzqnrTrhS4pC5s.jpg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415320971804,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "electronics",
                    "location": "Oakland",
                    "title": "Selling my TV",
                    "price": "200",
                    "description": "$200 instead for Pandora folks:\nhttp://sfbay.craigslist.org/sfc/ele/4649737904.html\n\nThanks,\nJoe",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415320996699,
                    "published": true
                });

                Posts.insert({
                    "category": "Housing",
                    "subcategory": "rooms/shared",
                    "location": "Oakland",
                    "title": "Room Available in Mission Apartment ",
                    "price": "",
                    "description": "Happy Friday!\n\nI’ve got a room opening up in a great apartment in the Mission one block from Dolores Park. Check out the craigslist post here: http://sfbay.craigslist.org/sfc/roo/4653758272.html\n\nIf you’re interested or know someone who might be a good fit, please reach out to me directly.\n\nThanks!",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321053320,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "free",
                    "location": "Oakland",
                    "title": "Free California King Bed Frame from IKEA",
                    "price": "",
                    "description": "Hi Everyone,\n\nTrying to make room around the house, so we've decided to part ways with our MALM bed frame (low).  It's a California King-sized frame, so slightly larger than your regular  King-sized beds.  Here's a link to the actual product on the IKEA website, although the actual color of this piece is no longer available: http://www.ikea.com/us/en/catalog/products/S99849843/.\n\nBelow is a photo from Google Images to give you a better idea of what the color looks like.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "HvZPGoWZbiMsGrTTY",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/br453jCeTRWJ4ApqP.png",
                    "photos": [{
                        "id": "HvZPGoWZbiMsGrTTY",
                        "url": "http://pandaslist.s3.amazonaws.com/images/br453jCeTRWJ4ApqP.png"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321104542,
                    "published": true
                });

                Posts.insert({
                    "category": "Housing",
                    "subcategory": "apartments/housing",
                    "location": "Oakland",
                    "title": "Duplex for Rent on West Oakland/Downtown Oakland Border ($1,750/month)",
                    "price": "",
                    "description": "Hello Pandas!\n\nA friend has a duplex for rent (she is the landlord) on the West Oakland/Downtown Oakland border and is looking for a stellar tenant! \n\nDetails are below - please contact her directly for a tour or more information. \n\nThanks!\n\n788 12th Street (cross street is West) - Oakland, CA\n$1,750 per month (one-year minimum lease), with $2,500 deposit\n2 BR/1 BA\nIn-unit washer/dryer\nLarge backyard\nOpen floor plan\nHardwood floors\nBalcony\nFenced yard\nOff-street parking\nClose to 12th St. BART and easy-access to all major freeways\nNo pets\nPlease contact Delane at (510) 692-9239 for more information and a tour!\n_____________________\n\nAshley Mercier | Pandora \nSupervisor, Client Services\nDirect/Fax: 510-858-3359\n\namercier@pandora.com\nwww.pandora.com",
                    "delivery_method": "goto_seller",
                    "coverPhoto": "GWLvmH2fjCjCGoXMA",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/rMDaNXpHYdpS8Gk7B.jpg",
                    "photos": [{
                        "id": "GWLvmH2fjCjCGoXMA",
                        "url": "http://pandaslist.s3.amazonaws.com/images/rMDaNXpHYdpS8Gk7B.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415321104214,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "PERGs",
                    "location": "Oakland",
                    "title": "Requesting your vote for the Photography PERG contest for August",
                    "price": "",
                    "description": "Hey Panda's….\n\nOn behalf of the Photography PERG, I’d like to introduce you to the August photo contest entries .…….Please read the instructions below to vote so we can establish a winner.\n\nThe theme for August was “Letters or Numbers” \n\n….please take a couple of minutes to review these awesome photos and vote for your favorite one!\nThe winning photographer gets their picture printed and displayed in the Oakland Office!\n\nClick this link to see photos:  August Photos\n\nThen Vote: (voting is open now through Friday 9/5)\nThere are two ways you can vote.\n1) Click this link VOTE HERE– (in order to vote, make sure you are logged in the google Docs through Pandora, One Log in, if you are logged in under your personal gmail account, you will not be able to access the voting form)\n\n2) If the form does not work, please send me your vote via email:  justin@pandora.com)\n\nP.S.  If you like to take pictures and would like to participate in the next photo contest, let me know and I will add you to the photography PERG distribution list.  The theme for September is  “ Framed – frame your subject with another subject such as a window, chain fence, bars etc”   --- To submit your photo, email it to justin@pandora.com\n\n\nIf you are interested in seeing the winning photos from previous months you can see them here or back stage on the wall next to the Ping Pong table: \nJanuary  Photo 6\nFebruary Photo 12\nMarch  Photo 4\nApril Photo 4\nMay Photo 6\nJune Photo 1\nJuly Photo 2\nAugust  Photo 7\nSeptember Photo 3\nOctober Photo 6\nNovember Photo 3\nDecember Photo 7\nJanuary Photo 12\nFebruary Photo 3\nApril  Photo 5\nMay  Photo 5\nJune Photo 4\nJuly Photo 1\n\nThanks\n\n-Photography Perg",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321148268,
                    "published": true
                });

                Posts.insert({
                    "category": "WANTED",
                    "location": "Oakland",
                    "title": "Web Programmer",
                    "price": "",
                    "description": "Hi Oakland Friends,\n\nMy brother is looking for a web programmer to be the \"webmaster and designer\" for his “Zillow for solar - the best solar opportunities for commercial property” site. He works for a small Solar company, Borego (located in Pandora’s old building at 21st and Webster). \n\nI figured with all of the top tech talent at Pandora, we might have a few leads for him :) Please ping me if you know anyone great who might be interested. \n\nThanks!\nKatherine\n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321202438,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Outside Lands tickets BRO!",
                    "price": "$100 each",
                    "description": "I've got a few extra Outside Lands tickets available bro! First come first serve. ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "mfPGXSdWgrirWhqRN",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/gnb5WudSLfDuyTEEL.jpg",
                    "photos": [{
                        "id": "mfPGXSdWgrirWhqRN",
                        "url": "http://pandaslist.s3.amazonaws.com/images/gnb5WudSLfDuyTEEL.jpg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415321210208,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "2 Outside Lands Tickets",
                    "price": "$180",
                    "description": "2 outside lands tickets for sale.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "o9qydj9q3g9oqyrd2",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/z8FterprLG83v3sHf.jpg",
                    "photos": [{
                        "id": "o9qydj9q3g9oqyrd2",
                        "url": "http://pandaslist.s3.amazonaws.com/images/z8FterprLG83v3sHf.jpg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415321246322,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "PERGs",
                    "location": "Oakland",
                    "title": "FREE Soul Cycle!",
                    "price": "",
                    "description": "Dear Oakland,\n\nThe Soul Cycle PERG is excited to announce that for the first two weeks in September, Pandora employees will be able to ride for FREE! Just mention that you work here and bring your ID (or anything else that shows you work at Pandora) and sign up during the times mentioned in the attached flyer.\n\nShoe rental is also included.\n\nGet ready to ride!",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "EzcM4Pqe7YL2PiBvC",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/hbYiRq2GN3vKjy676.jpg",
                    "photos": [{
                        "id": "EzcM4Pqe7YL2PiBvC",
                        "url": "http://pandaslist.s3.amazonaws.com/images/hbYiRq2GN3vKjy676.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321264120,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "6 tickets to Raiders-Broncos this Sunday!",
                    "price": "",
                    "description": "I have 6 tickets so Raiders-Broncos that I need to get rid of. Will sell individually or all together or somewhere in between. Here is the info:\n\nDenver Broncos at Oakland Raiders at O.co Coliseum, Oakland, CA\nSun, 11/09/2014, 1:05 p.m. PDT\nUpper Reserved 301 | 6 tickets\nRow 11 |  Seats 04, 05, 06, 07, 08, 09\n\nSelling them for exactly what I paid - $60.75 per ticket.\n\nLet me know if interested! Cash/Paypal/Venmo are all good.\n\nThanks,\n\nMatt",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "EbArx28QKL26tJtCB",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/BvCByeAzZt8RXai3B.png",
                    "photos": [{
                        "id": "EbArx28QKL26tJtCB",
                        "url": "http://pandaslist.s3.amazonaws.com/images/BvCByeAzZt8RXai3B.png"
                    }, {
                        "id": "vhF5X583KAPTWhGt5",
                        "url": "http://pandaslist.s3.amazonaws.com/images/Gf2gTtsvNrCaQFpta.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415321278224,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "OUTSIDELANDSTICKETS",
                    "price": "$100 each",
                    "description": "SPECIAL PASS WITH TRANSPORTATION INCLUDED FOR 4 PEOPLE. SUPER AWESOME",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "Chubn73HhiMENwvc3",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/GdFi489hMSQudyk4K.jpeg",
                    "photos": [{
                        "id": "Chubn73HhiMENwvc3",
                        "url": "http://pandaslist.s3.amazonaws.com/images/GdFi489hMSQudyk4K.jpeg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415321310976,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "free",
                    "location": "Oakland",
                    "title": "Free Drawstring Backpacks in Backstage!",
                    "price": "",
                    "description": "Help yourself to a free drawstring “workout” backpack, boxes are Backstage on 16.\n \nThanks!",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321318761,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "PERGs",
                    "location": "Oakland",
                    "title": "Brazilian Jiu Jitsu PERG",
                    "price": "",
                    "description": "Hi Pandas,\n\nSo, to start things off, I’d like to invite all Pandas interested in joining, or re-joining, to  our Friday class from 12pm to 1pm in School (6th floor)\n\nI know what you’re thinking. “Jiu-jitsu looks really cool, but I’m not sure it’s for me.” I guarantee that jiu-jitsu is for you. How do I know? Because jiu-jitsu is for everyone! \n\nAre you a small/skinny guy that needs a confidence boost? Learn jiu-jitsu.\n\nAre you a women who needs to be able to defend herself? Learn jiu-jitsu.\n\nAre you a bit older, and want to look like you did in your prime? Learn jiujitsu.\n\nAre you a musclebound, six foot tall badass who thinks he doesn’t need to learn jiu-jitsu? You definitely need to learn jiujitsu.\n\nAs you can see jiu-jitsu is for everyone. It’s a martial art designed to work for everyone, not just the big and strong. Anyone can learn how to defend themselves in a real life situation with Brazilian jiu-jitsu. Unfortunately there’s no magic death touch/psychic chi blast (which apparently doesn’t work on BJJ students anyway), but somehow I think you’ll manage. So if you’ve been thinking about starting, but are unsure, here’s some  reasons to take the leap:\n\nDiscipline. Probably a cliche when it comes to martial arts, but if you can be disciplined about your training, this will carry over to other aspects of your life. Judging from the rampant levels of procrastination, I’m sure we could all use a little more of this in our lives.\n\nLack of confidence. So you’re not that confident in yourself? Jiu-jitsu builds your self esteem in a way that few things can. When you first start, almost all of the concepts are completely foreign to you. As you continue to train over time, you become more familiar and more comfortable with all of the techniques, and your understanding grows. As your jiu-jitsu grows, your confidence in your jiu-jitsu grows with it, and this translates to higher self-esteem even outside of the dojo.\n\nYou’re stressin’ out. You’re really stressed out, and you need someway to get rid of it? Exercise comes highly recommended in terms of stress relief, and jiu-jitsu takes that to the next level. Whereas other forms of exercise only focus on a few areas, jiu-jitsu utilizes every part of your body, leaving you cool as a cucumber when you’re done.\n\nGood habits. Jiu-jitsu often forces us to create not only good habits, but healthy habits. You’ll start waking up early, going to bed early, eating healthy, doing even more exercise outside of jiu-jitsu, reading more. Heck, you might even quit smoking. Don’t believe jiu-jitsu can do all that? Start training and tell me how those Big Macs are working out for you.\n\nSelf defense. The best reason to learn jiu-jitsu is for self defense. It was created for that purpose, to level the playing field, so that smaller and weaker people could handle themselves against bigger and stronger opponents.\n\nThe best way to find out if you’ll like it is simply to go our Friday practice  from 12pm to 1pm. We have  folks who have been practicing Judo and Jiu Jitsu for many years and have competed in numerous competitions.  What you learn from jiu-jitsu can be implemented in so many other areas of your life.\n\nCome practice with us!\n\nIf you have any questions or want more info.  please contact Janet Kenmotsu  or BJJ PERG",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321359182,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "events",
                    "location": "Oakland",
                    "title": "Pandora Pride: Upcoming Events",
                    "price": "",
                    "description": "Hey Oakland!\n\nWe’ve been busy over here in the Pandora Pride Community and wanted to share some of the exciting things we’ve been working on to celebrate Pride: \n\nOakland Pride\n\nWe are incredibly excited to be one of the top sponsors of Oakland Pride 2014! Oakland Pride is dedicated to educating the greater community, promoting equality, civic involvement and responsibility within Oakland and neighboring communities. The organization will celebrate their 5th year Anniversary with a parade down Broadway, and we are thrilled to march and show Pandora’s support of Oakland and our LGBTQ community. We have also created an Oakland Pride Radio station to help spread awareness of the festivities, and the station has already seen 25,470 station adds and 6,860 listening hours. The station features a diverse range of Oakland Pride headliners over the past 5 years, including Chaka Khan, En Vogue and this year’s headliner, Sheila E, in addition to several other talented artists in similar musical genres. To listen to Oakland Pride Radio on Pandora, click here. Additionally, our Artist Partnerships team has also helped Oakland Pride secure talent for the main stage, including NYC rapper and and producer Le1f. \n\nIf you are free to march this Sunday, please sign up here! \n\nPride Office Cupcakes & Champagne Happy Hour\n\nSince not everyone can make it out this Sunday, we’re hosting a Cupcake & Champagne Happy Hour in the office this afternoon. We will also be passing out t-shirts for the Oakland Pride marchers at the happy hour, today from 4pm-6pm on the 7th floor. Everyone’s welcome! If you’re not marching, we will hand out t-shirts when you attend Pride events. \n\nStartOut Awards\n\nPride’s steering committee and members of Pandora’s leadership, including Tim Westergren, will be attending the Third Annual StartOut Awards. The evening, hosted by Lance Bass, is held to celebrate and highlight exceptional and innovative entrepreneurs in the LGBT Community. This years’ honorees include George Takei, Amy Errett, Dave McClure, and Li Han Chan. \n\nOut for Undergrad Technology Conference\n\nTogether with University Recruiting, we’re one of the sponsors for the Out for Undergrad Technology Conference that will take place at the Twitter HQ this year. It’s a great recruiting opportunity for us for both Road Crew 2015 and entry level roles. We’re still looking for speakers and volunteers, so if you’re interested, email Lisa Lee at llee@pandora.com.\n\nIf you’re interested in joining Pandora Pride, please add yourself to our email list by following the instructions here. If you’re interested in getting more involved from a leadership level, please let me know! \n",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321402970,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": " Charlie Hunter Tonight @ Yoshi's",
                    "price": "$22",
                    "description": "Hi All,\n\nI rarely do this but he asked me to spread the word.  If you haven’t seen Charlie before he plays a 7 string guitar (lead and bass at one time) and has amazing stage presence.  He’s also a Bay are native :)\n\nBest Part tickets are only $22!!!!  I bought mine last night and they said there were less than 100 left.  Let’s sell it out for them!\n\nCheck out this video for more - \nhttp://www.youtube.com/watch?v=d5-QCHai_u4\n\nAbout Omaha Diner\nfeaturing Charlie Hunter, Steven Bernstein, Bobby Previte & Skerik\n\nOmaha Diner is many things: the world’s definitive virtuoso of the seven-string guitar, the pioneer of saxophonics, a recipient of the 2012 Guggenheim Fellowship for composition, and a Grammy nominee. Omaha Diner is at home in all situations in and beyond the world of music – not only scoring one of the films of legendary director Robert Altman, but performing in another one as well.\n\nIn its 125 years of experience the Diner has worked in some capacity with an unlikely and astonishing array of artists: Aretha Franklin, Sting, John Mayer, Levon Helm, John Adams, Roswell Rudd, Linda Ronstadt, Pearl Jam, Elton John, My Morning Jacket, Courtney Love, The San Francisco Ballet, Sam Rivers, Marianne Faithfull, The Moscow Circus, Roger Waters, Lou Reed, Iggy Pop, Michael Tilson-Thomas, R.E.M., Johnny Copeland, Bonnie Raitt, Lukas Foss, The Meters, Ween, D’Angelo, Les Claypool, Alvin Ailey, Digable Planets, Sonny Sharrock, Ryuichi Sakamoto, and Tom Waits.\n\nOmaha Diner has toured every continent with the (possible) exception of Antarctica, playing rock arenas, iconic Jazz clubs, Carnegie Hall, and hardscrabble Kentucky roadhouses. The Diner turns up in other places as well – author of the liner notes to Miles Davis’ ‘In Concert’ record, actor on Saturday Night Live, dancer, sous-chef, teacher.\n\nSitting in a diner in Omaha, Nebraska in 1954, Todd Storz noticed that a teen-age waitress selected the same song on the jukebox over and over. At that moment, Top 40 radio was born, joining the TV dinner, the Reuben sandwich, the bobby pin, the ski lift, and (some claim) fuzzy dice on the list of famous and infamous inventions from the city that sits atop the Strategic Air Command.\n\nNow comes the latest invention, OMAHA DINER – four storied musicians attempting to re-define a format that forever perverted the way we experience music. You may love Top 40 (doubtful), you may hate it (probable), you may not care about it at all (liar), but you cannot escape it.\n\nTop 40 as you’ve never heard it before – OMAHA DINER.\n\nOMAHA DINER is:\n\nSteven Bernstein – trumpets\nCharlie Hunter – seven-string electric guitar\nBobby Previte – drums\nSkerik – tenor saxophone",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "ZQfLAMTAeDj68xLPE",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/dvsv47XixrrvyeZxo.jpg",
                    "photos": [{
                        "id": "ZQfLAMTAeDj68xLPE",
                        "url": "http://pandaslist.s3.amazonaws.com/images/dvsv47XixrrvyeZxo.jpg"
                    }],
                    "createdBy": "ErjC8vDfkkbkhspC8",
                    "creationDate": 1415321410075,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "volunteers",
                    "location": "Oakland",
                    "title": "Alzheimer's Walk",
                    "price": "",
                    "description": "Hi All,\n\nA few days ago, my family decided to join the Alzheimer’s Association Walk to End Alzheimer’s®.  We’re a part of the September 6th event in Modesto, CA.  After attending the Alive Inside screening, I was inspired to reach out to see if anybody would like to participate/donate.  All donations go to the Alzheimer’s Association to fund Alzheimer’s care, services, programs, and research.\n\nThanks a ton!\n\n-Team Dory (Disney reference, anybody?)\n\nTo donate:\nhttps://act.alz.org/site/Donation2?idb=361475242&df_id=21886&21886.donation=form1&FR_ID=4958&PROXY_ID=9547249&PROXY_TYPE=20\n\nTo join our team:\nhttps://act.alz.org/site/TRR/Walk2014/CA-NorthernCaliforniaandNorthernNevada/212180624?pg=utype&fr_id=4958\n\n“Together, we will end Alzheimer’s”.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321542780,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "tickets",
                    "location": "Oakland",
                    "title": "Coachella Tickets and Headdresses for sale",
                    "price": "$150 each",
                    "description": "Coachella Tickets\nIndian headdresses",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "NZRvBQ9vMr35XzHv5",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/NTPgggn6K7DzmZ5X8.gif",
                    "photos": [{
                        "id": "NZRvBQ9vMr35XzHv5",
                        "url": "http://pandaslist.s3.amazonaws.com/images/NTPgggn6K7DzmZ5X8.gif"
                    }, {
                        "id": "B69WrhGBzXbBeQHW5",
                        "url": "http://pandaslist.s3.amazonaws.com/images/Rr74w8t8sAR2GokBM.jpg"
                    }, {
                        "id": "CGBWHSD7dGECCgiW9",
                        "url": "http://pandaslist.s3.amazonaws.com/images/XwuogKuvEWbSzcSbN.jpg"
                    }, {
                        "id": "RPn25CjRFDgHJdQsc",
                        "url": "http://pandaslist.s3.amazonaws.com/images/rzKZxjr7gdvcXEgwd.jpg"
                    }],
                    "createdBy": "Wr8moLuYWGeyY2nRZ",
                    "creationDate": 1415321552599,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "other",
                    "location": "Oakland",
                    "title": "FLEX Gym membership promo ",
                    "price": "",
                    "description": "Hi Pandas,\nI have negotiated a special Pandora employee membership rate at FLEX Gym. Please see attached flier for details. \n\nFlex is located at:\n3925 PIEDMONT AVENUE \nOAKLAND CA 94611 \n510-653-3539 \nwww.flexcircuitgym.com \n\nStay Fit!",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321619178,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "PERGs",
                    "location": "Oakland",
                    "title": "New Tennis PERG",
                    "price": "",
                    "description": "Hi Pandas,\n\nTennis anyone? Sohana and I are happy to invite you to the new Oaktown Tennis PERG. Whether you are a beginner or a semi-pro, all are welcome. \n\nWhen\nEvery 2nd and 4th Thursdays from 6-8pm (TBC)\n\nWhere\n9/11 - Davie Tennis Stadium in Piedmont (RSVP by 9/8)\n9/25 - TBD\n10/9 - TBD\n\nHow to Join\nSince it's a physically active PERG, all members must complete a PERG Acknowledgment Form and return to employeegroups@pandora.com. If you've completed one already, you don’t need to fill another one out. \nAdd yourself to the email list tennis@pandora.com. See instructions here.\nLet us know if you prefer to play singles or doubles along with your self-rating here. \n\nBest,\nSohana and Grace",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321660533,
                    "published": true
                });

                Posts.insert({
                    "category": "WANTED",
                    "location": "Oakland",
                    "title": "Goat wanted for Rap video",
                    "price": "",
                    "description": "Hello, Me and my group of Colleges are looking for a Goat owner to let us use/come see their goat for a video we are making. No this isint a joke. we would like to put \"bling\" in the style of a clock chain and some avaitor shades on the Goat and \"pop bottles\" with the goat present. Yes, seriously",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415321939813,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "free",
                    "location": "Oakland",
                    "title": " FREE -- ROBOT that makes Rice",
                    "price": "",
                    "description": "This Robot is built by me. You send a tweet to the Robot and it cooks rice accordingly. It will tweet you back when rice is ready. Those who are interested in it as an experimental project or want to do enhancement, take it for free from me",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "b5ErFEZFwxXozuxDW",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/zrmnEMMFXgyBihPNx.jpg",
                    "photos": [{
                        "id": "b5ErFEZFwxXozuxDW",
                        "url": "http://pandaslist.s3.amazonaws.com/images/zrmnEMMFXgyBihPNx.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322043784,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "cars/trucks",
                    "location": "Oakland",
                    "title": "1998 honda accord 3.0 v-tech dually",
                    "price": "",
                    "description": "alright for sale is something that you will never see again \nand might have to see to believe. its a highly customized 1998 honda accord.\nit has 198k on it. there is a long list of custom work \n\n\nwhelen off road spot lights \n44 inch off road spot and flood bar \nchevy visor \ncab lights \n8 cb wips \nback up beeper\nboat air horns \ncustom paint \npa speaker \nsmoke stack exhaust \npintle hitch \nrear dually and deally fenders. \ndodge tow mirrors \n\nthere is nothing wrong with the car just want to see if i can sell it for anything. \nwill trade or consider reasonable offers.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "sQeiLQ57TbYNDEhF2",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/7JSwT27sWBPuKTBrS.jpg",
                    "photos": [{
                        "id": "sQeiLQ57TbYNDEhF2",
                        "url": "http://pandaslist.s3.amazonaws.com/images/7JSwT27sWBPuKTBrS.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322160006,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "motorcycles",
                    "location": "Oakland",
                    "title": "Redneck DEATHTRAP! tiff mower",
                    "price": "",
                    "description": "It's your lucky day! you are looking at the \"redneck DEATHTRAP\". The steerable 3hp McLane tiff mower with a brand new (well, slightly used) bright red hand truck attached as a sled. You'll be the coolest guy in the Wal-Mart parking lot when you pull up in your new ride to pick-up some more PBR. This baby will do a (barely controllable) 20+mph but drives comfortably at 10mph. Bring good shoes because it has no brakes... You also get a beautiful re-purposed brown and white kitchen dinette arm chair (an heirloom from my mother) The seat is adjustable to accommodate the rider's height. If you choose this \"deathtrap\" you also get the optional seating, catcher basket! $150.00 . HURRY, there's only one.... John Deer cap, not included.\n\n\nYoutube video\nhttps://www.youtube.com/watch?v=-55MK7ppo7E",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "46FpjDR5AApdHJmnf",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/smmMmKYrya32DrvHT.jpg",
                    "photos": [{
                        "id": "46FpjDR5AApdHJmnf",
                        "url": "http://pandaslist.s3.amazonaws.com/images/smmMmKYrya32DrvHT.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322222646,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "furniture",
                    "location": "Oakland",
                    "title": "Chair that looks like toaster",
                    "price": "",
                    "description": "I built this chair that looks like a toaster. The piece of toast can come out. The toast upper downer handle can move up and down (a bit tough to do though) and it lights up red from the inside. The outside is made of aluminum. It's not super comfortable to sit on but I like to set my laptop on it and listen to music or something. \n\nMore of a novelty. I'm moving and need to get it off my hands. If anyone is interested it's for free or for any artist donations you'd like to give.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "6DP7WJbLjHGxHXXeA",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/rcagJWuwgGyrfAADK.jpg",
                    "photos": [{
                        "id": "6DP7WJbLjHGxHXXeA",
                        "url": "http://pandaslist.s3.amazonaws.com/images/rcagJWuwgGyrfAADK.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322275420,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "auto parts",
                    "location": "Oakland",
                    "title": "V-1 SPEEDIE DELIVERY ROCKET JET VAN!....PARTING OUT...",
                    "price": "",
                    "description": "WE HAVE FOR SALE A JET POWERED FORD E350 VAN....LAND SPEED BONNEVILLE SALTFLATS RECORD HOLDER...SUPER SEXY CHICK MAGNET TOO!..ASK ANY SMELLY-HOOKER-PIRATE...LOOM LARGE IN YOUR OWN LEGEND!....EASY SPRINGTIME FAMILY FUN RESTO PROJECT....DAILY DRIVER IS CHEAP TO INSURE...PILOT THIS BOMB DOWN TO THE LOCAL CAR SHOW!....SAVE THIS HISTORIC SLED FROM THE SCREAMING FRYING PAN OF SMELTER DEATH...TIRES MAY HAVE AIR. THINK OF THE AWSOME NEUTRAL DROPS!...PULSEJET V-1 FLYING BOMB MOTOR WITH DUAL EXHAUST...ANGRY WIFE APPROVED!...SHE WOULD BE LUVVIN YOU BIGTIME WITH THIS SITTIN IN THE DRIVEWAY....TOM JONES SANG \"SHES A WEINER\"..HONEST...CONN DEATH CERTIFICATE INCLUDED WITH POST MORTIM MARTI REPORT..GONNA WIN THIS RACE SANG ELVIS AS HE STUFFED HIS FACE EATING DONUTS AS HE FELL OF THE TOILET...LETS GO PILEHUNTING!.JOHNSON! CATCH IT ON TUESDAY NIGHTS AT 8PM ON COX CABLE 15..TOAST CITY HERE WE COME ...MARCIA BRADY MOANED IN EXTACY AS SAM REPLIED TO ALICE'I AM NOT SAM I AM A BUTCHER'...QUESTIONS-SURE!.. I PROMISE TO GIVE YOU A DUMB LOOK AND SCRATCH MY HEAD AND MUMBLE SOMETHING THAT NUTHIN TO DO WITH CHECKERS...FRANCO IS STILL DEAD.JEFF CLARK PICKIN AT HIS TOOTIE... CHOKE WAGON-DOGS LOVE IT!...ALWAYS FANCIED BEING A ELECTRICION BUT KEPT BLOWING UP TOASTERS...QUINCY SAYS I AM DETERMINED.....call [number]..ASK FOR NU-NU-PORKEY...thanks..",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "SMgEMP8h8tEbsm3fq",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/LK2bmyC7KetcQsaBr.jpg",
                    "photos": [{
                        "id": "SMgEMP8h8tEbsm3fq",
                        "url": "http://pandaslist.s3.amazonaws.com/images/LK2bmyC7KetcQsaBr.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322388920,
                    "published": true
                });

                Posts.insert({
                    "category": "Gigs",
                    "subcategory": "talent",
                    "location": "Oakland",
                    "title": "Seeking a Meowgician",
                    "price": "",
                    "description": "It's Ambrosia's tenth birthday on April 20th and we're looking for a meowgician to purrrform. \nDo you gatos what it takes? \n\nThis is fur real. Serious inquiries only. ",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "Rniemgudqej9tygiP",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/N399fXg6oJ8xYNQCf.jpg",
                    "photos": [{
                        "id": "Rniemgudqej9tygiP",
                        "url": "http://pandaslist.s3.amazonaws.com/images/N399fXg6oJ8xYNQCf.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322475253,
                    "published": true
                });

                Posts.insert({
                    "category": "For Sale",
                    "subcategory": "arts & crafts",
                    "location": "Oakland",
                    "title": "Beautiful Wedding Book Arch",
                    "price": "",
                    "description": "I'm selling this book arch that was the centerpiece of our wedding ceremony. It was custom built from sturdy metal tubing legs with welded feet, an aluminum top arch, and a wooden base to keep it steady. The books have all been drilled out to fit on the frame.\n\nIt is currently in pieces (books are heavy and it would be virtually impossible to move fully assembled), but the price includes the frame, base and the 4 large rubbermaid bins of books. It takes a little work to put together, but totally worth it. Before building this ourselves, we looked into having it made for us, and were quoted upwards of $3000. \n\nSo if you are having a literary wedding, or if you deal in wedding rentals and are interested in purchasing, don't hesitate to contact me with questions. \n\nCash only, must pick up, no trades, no returns.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "vjkCaWiTwCWZTdx3u",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/Ex8X7weNtm2io7tca.jpg",
                    "photos": [{
                        "id": "vjkCaWiTwCWZTdx3u",
                        "url": "http://pandaslist.s3.amazonaws.com/images/Ex8X7weNtm2io7tca.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322570282,
                    "published": true
                });

                Posts.insert({
                    "category": "Gigs",
                    "subcategory": "writing",
                    "location": "Oakland",
                    "title": "$40k a year to attend Harvard University as me",
                    "price": "",
                    "description": "You must have either a 4.0 GPA in high school, or a 3.5 or higher GPA from a university to get hired for this.\n\nYour age does not matter, but you must be a male since I have a male name.\n\nI am looking for someone to attend Harvard University pretending to be me for four years, starting August 2014. I will pay for your tuition, books, housing, transportation, and living expenses and pay $40,000 a year with a $10,000 bonus after graduation. All you have to do is attend all classes, pass all tests, and finish all assigned work, while pretending you are me.\n\nYou do not need to worry about being accepted, I have already taken care of that.\n\nIf interested please email me a little info about yourself, and we can meet in person to discuss further.\n\nWhen we meet you will be asked to sign a non disclosure agreement, so you can not reveal who I am or any further information, whether you're selected or not.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": null,
                    "coverPhotoUrl": null,
                    "photos": [

                    ],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322687235,
                    "published": true
                });

                Posts.insert({
                    "category": "Housing",
                    "subcategory": "real estate for sale",
                    "location": "Oakland",
                    "title": "Hippie Palace",
                    "price": "",
                    "description": "This is the perfect place for you and all your hippie friends. Great views. Covered Porch. Dry. \nUtilities included. Dogs & smoking Allowed. \n\nThis spacious mobile abode is the perfect set up for people looking for a simplistic lifestyle while experiencing the natural environment.\nIf you decide that you need a change of alignment you can pack all of your belongings into the unit and move to a more appreciable local. \nThere is no water, electricity or heat so you can be sure that you are not contributing to the destruction of mother earth.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "mXSz4DwunoeSDhqLM",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/taaXcRXTsPKLYKmhv.jpg",
                    "photos": [{
                        "id": "mXSz4DwunoeSDhqLM",
                        "url": "http://pandaslist.s3.amazonaws.com/images/taaXcRXTsPKLYKmhv.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322808013,
                    "published": true
                });

                Posts.insert({
                    "category": "Community",
                    "subcategory": "pets",
                    "location": "Oakland",
                    "title": "HELL CAT NEEDS HOME",
                    "price": "",
                    "description": "My friend asked me if I wanted a cat a few months ago, I told her no and then came home to find that she had trapped it in between my windows with a bag of cat food and a litter box. She is very much crazy, she scratches my furniture to hell, bites me when I try to pet her, but follows me to bed every night. She likes to go outside but then when she wants back in, she climbs on my screen door and hangs there ans meows till I let her in. She is ruining all my shit, I really dont want to take her to the shelter, but I dont want her, didnt ask for her and figure maybe some kind of cat whisperer is out there and just maybe there is a small chance someone would take her before she very likely meets her death at the pound. If you think this cat is the one for you, please please please let me know! I hate her, but there is someone out there for every animal, right? But we arent a match and my friend is a real asshole.",
                    "delivery_method": "office_pickup",
                    "coverPhoto": "z6fNTzg6P3KurfTJG",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/PdYgA52H58ggYCuhY.jpg",
                    "photos": [{
                        "id": "z6fNTzg6P3KurfTJG",
                        "url": "http://pandaslist.s3.amazonaws.com/images/PdYgA52H58ggYCuhY.jpg"
                    }],
                    "createdBy": "bDmQDa5kof62GFBmp",
                    "creationDate": 1415322862859,
                    "published": true
                });

                Posts.insert({
                    "photos": [{

                    }],
                    "title": "bottle",
                    "category": "For Sale",
                    "price": "1",
                    "location": "Oakland",
                    "description": "Meh",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup",
                    "user_id": "dfsdf"
                });

                Posts.insert({
                    "photos": [{
                        "id": "5dqnjR9YWw63jFzHC",
                        "url": "http://pandaslist.s3.amazonaws.com/images/b62368ba-4fcd-4752-bd56-8ae0786028b3.png"
                    }],
                    "title": "android",
                    "category": "For Sale",
                    "price": "2",
                    "location": "Oakland",
                    "coverPhoto": "5dqnjR9YWw63jFzHC",
                    "description": "Cool",
                    "subcategory": "antiques",
                    "delivery_method": "Office Pickup",
                    "user_id": "dfsdf",
                    "coverPhotoUrl": "http://pandaslist.s3.amazonaws.com/images/b62368ba-4fcd-4752-bd56-8ae0786028b3.png"
                });
            }});