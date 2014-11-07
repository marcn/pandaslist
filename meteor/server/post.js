// Seed the posts
Meteor.startup(function() {
    if (Posts.find().count() == 0) {
        Posts.insert({
            "title": "Apt for rent",
            "description": "Mission Street Apt for rent",
            "category": "Housing",
            "subCategory": "apartments/housing"
        });

        Posts.insert({
            "title": "Apt for rent",
            "description": "Mission Street Apt for rent",
            "category": "Housing",
            "subCategory": "apartments/housing"
        });

        Posts.insert({
            "title": "Eye Doctor recommendation",
            "description": "Anyone has a good eye doctor to recommend close to the office? \n\nThanks,\nJosephine",
            "category": "Community"
        });

        Posts.insert({
            "title": "Curtis Bumpy Friday, ZZ Topless Saturday",
            "description": "Hey Funky Pandas. Not one, but two (2) shows to spam you with this weekend. \nI’ll quiet down after this.\n\nFIRST: My inveterate (and quite vertebrate) R&B mashup groove outfit, Curtis Bumpy, concludes its unofficial 2014 residency at Jupiter Brewing Co. in Downtown Berkeley, this Friday night from 8-11 PM under the big redwood tree. Berkeley’s own DJ Delon and Papa Blake will be warming up the scene in tandem from 5PM-on as well. \n\nJupiter has great pizza, salads and beer, and admission is always FREE. All ages early in the evening. The magic usually kicks in for the 9:00 set. It’s supposed to be a glorious and warm night Friday.\nhttp://www.curtisbumpy.com\nhttp://www.jupiterbeer.com\nShattuck @ Center, Berkeley CA\nFRI 8PM / FREE\n\nNEXT: Saturday afternoon, my other band ZZ Topless plays what will likely be its final show, at Oakland’s Oaktoberfest in the Dimond. We did this last October and it was a total blast. We play on the Family Stage (appropriately or not) from 3:55-5:00 PM, officially. What else is there to say except… more beer, more party music, and more outdoor musical enjoyments to be had in the East Bay’s best climate. My bandmates and I, of course, will be wearing black suits and ties. It’s a schtick.\nhttp://www.oaktoberfest.org/\nMacArthur Blvd @ Fruitvale Ave. Oakland CA\nSAT 4PM / FREE\n\nWish me luck!\n\nDamon",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "TruMaker custom fitted shirts for men",
            "description": "Hey Oakland!\n\nMy cousin Nicole just started working for TruMaker, a local San Francisco company that aims to take the pain out of shopping for men’s clothing. They have an Outfitter come to you to take your measurements, you select from tons of different styles, patterns, fabrics, and fits, and then they create the clothing and send it to you. Your own bespoke shirts, ties, and eventually jackets for business or casual. \n\nFrom their website:\nSometimes the best way to approach new problems is to rethink old solutions.\n\nMade-to-measure—or as we call it, built-to-fit—has its roots in a different era of personal style, when clothes were cut and sewn to fit individuals and be worn for years, not fill discount shelves and wear out after a season. But to fit into our modern lives, we needed the service to be accessible, convenient, and easy. It had to combine the integrity of yesterday’s techniques with the innovations of today’s technology. It had to enable men to spend less time worrying about their wardrobes and more time doing what they love.\n\nWe wanted a brand that spoke to our relationship with the changing world; a method steeped in tradition but empowered by new industry. We wanted ruggedly-refined and classic styles made to men’s exact measurements, with all the benefits of local, personalized service and all the ease of online ordering.\n\nWe wanted better products. We wanted a better experience. We wanted a better way to shop.\n\nSo we created Trumaker.\n\nIf you’re interested in a fitting session please don’t hesitate to email her at nfletcher@trumakeroutfitter.com and tell her Nick sent you. \n\nThanks!\n\nNick",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "TruMaker custom fitted shirts for men",
            "description": "Hey Oakland!\n\nMy cousin Nicole just started working for TruMaker, a local San Francisco company that aims to take the pain out of shopping for men’s clothing. They have an Outfitter come to you to take your measurements, you select from tons of different styles, patterns, fabrics, and fits, and then they create the clothing and send it to you. Your own bespoke shirts, ties, and eventually jackets for business or casual. \n\nFrom their website:\nSometimes the best way to approach new problems is to rethink old solutions.\n\nMade-to-measure—or as we call it, built-to-fit—has its roots in a different era of personal style, when clothes were cut and sewn to fit individuals and be worn for years, not fill discount shelves and wear out after a season. But to fit into our modern lives, we needed the service to be accessible, convenient, and easy. It had to combine the integrity of yesterday’s techniques with the innovations of today’s technology. It had to enable men to spend less time worrying about their wardrobes and more time doing what they love.\n\nWe wanted a brand that spoke to our relationship with the changing world; a method steeped in tradition but empowered by new industry. We wanted ruggedly-refined and classic styles made to men’s exact measurements, with all the benefits of local, personalized service and all the ease of online ordering.\n\nWe wanted better products. We wanted a better experience. We wanted a better way to shop.\n\nSo we created Trumaker.\n\nIf you’re interested in a fitting session please don’t hesitate to email her at nfletcher@trumakeroutfitter.com and tell her Nick sent you. \n\nThanks!\n\nNick",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "*Found* Clipper Cards ",
            "description": "Hello!\nThere are two clipper cards here at the front desk on the 7th floor.\nOne was found in Ashkenaz & the other in Apollo.\nPlease confirm your card number so that we can determine which one belongs to you.\nThanks!",
            "category": "Community"
        });

        Posts.insert({
            "title": "Cal vs BYU tickets",
            "description": "I bought tickets to the wrong game. My mistake is your gain!\n\n\n2 tickets to BYU @ Cal on November 29th.\nSection TT\nRow 4\nSeats 3 and 4\n\nSelling for $80 for the pair on CL.\n$65 for the pair to Pandora employees\n\nPaypal accepted.\n",
            "category": "For Sale",
            "subCategory": "tickets"
        });

        Posts.insert({
            "title": "Free TBD Fest tickets this weekend",
            "description": "Hi everyone\nA friend of mine works for Loudie and they are giving away free tickets to the TBD Fest in Sac this weekend: http://www.tbdfest.com/\n \nJust email her your full name and she’ll put you on the guest list (until free spots are taken).\nYian@loudie.com\n \nMichael",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Josephine - home cooked meals - East Bay",
            "description": "I've been using this local service to meet neighbors and score delicious food at a reasonable price. If you're in the E Bay you might like it too… \n\n\nHere' a message from the nice folks at Josephine:\n\nHello Pandora people!\n\nMy name is Charley and I work for a company called Josephine - a marketplace for home cooked meals. For the uninitiated, we're a local company that features cooks in Oakland/Berkeley making their favorite homestyle meals for you and your family to pick up. You can browse meals and RSVP online with your cell phone number and then pick up the food to-go during a designated pick-up window at the cook's home. \n\nThe idea is to eventually have a robust marketplace of offerings in different locations and different price points, but for now we're mostly in North Oakland/Berkeley and our meals are between $7-10. The portions are hearty and the food is made with love by some seriously awesome chefs, mothers, urban homesteaders, and community advocates. Chris Horgan has been to a few of our meals and Will Gotshall Maxon's wife was actually one of our very first cooks, so we actually owe Pandora a good amount of credit for helping us get off the ground.\n\nCome check out one of our meals and mention you work at Pandora and we'll throw in a free fresh pressed juice or a dessert with your meal :)\n\n-- \n\nHere are our upcoming meals:\n\nJapanese Hot Pot – Seafood Yosenabe with Vegetables ($9)\nTuesday, September 30\nNorth Oakland (near 66th and Shattuck)\nMas' Yosenabe made with a miso based broth and bite-sized ingredients including salmon, manila clams, prawns, scallops, squid, napa cabbage, mushrooms, snow peas as well as some tofu. The dish will be filled out with udon noodles.\nMoms Beef Stew with Root Veggies and Buttered Green Beans ($10)\nWednesday, October 1 5-7pm\nWest Berkeley (near San Pablo and University)\nTerry's mom's beef stew recipe, made with Niman Ranch pork, onions, garlic, bay leaf, carrots, parsnips and potatoes. The stew is served over buttered noodles with a side of buttered green beans with tarragon, and will be gluten free since it will be thickened with brown rice flour.\nGet in touch if you have any questions. Number is 973 879 6447 and email is charley@josephine.com\n\nThanks and cheers!\n\nChris Horgan | Senior Music Analyst | Pandora\n2101 Webster St 16th Fl, Oakland, CA94612\nm 415.794.3786 | chorgan@pandora.com\n\n\n",
            "category": "Services",
            "subCategory": "household"
        });

        Posts.insert({
            "title": "Drew Holcomb and the Neighbors",
            "description": "Hey Oakland, \n\nA long time friend of mine, Drew Holcomb, and his band are playing at The Chapel in SF this Friday. I would love to have some fellow Pandas check out the show. Tickets are $13 adv / $15 door.\n\nThis is their first West Coast tour and their most recent album, Good Life, reached #7 overall on iTunes. Should be a good time… \n\nPandora Station\n\nYoutube Link \n\nSee you at the show.",
            "category": "Community"
        });

        Posts.insert({
            "title": "Free to a good home - XBOX 360 + PSONE + Dreamcast",
            "description": "Hi,\n \nI’ve got an XBOX 360, PSONE, and a Dreamcast free to a good home.\n \nEach include whatever games, and controllers I have.\n \nBest,\n \nPaul T",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Parking Pass Up for Grabs in Downtown Oakland",
            "description": "Hi All!\n \nI have a monthly parking pass at the YMCA garage on 23rd and Webster. I pay $160 a month, but will no longer need the pass by mid-November. Unfortunately it is already paid for through the end of the month and they will not give me a refund. I was wondering if someone wanted to take on this pass from 11/17-11-30, your cost would be $80 or best offer. This comes out to $8 a day which is “cheap” parking around here. Please let me know if you are interested! Thanks!",
            "category": "Community"
        });

        Posts.insert({
            "title": "<Warriors SPAM> November/December GSW Tickets For Sale",
            "description": "Dub Nation,\n\nBelow are the November-December home games I have available.  Amounts are 20% off of Face Value.  Tickets come in a pair and include 1 parking pass (valued at $30).\n\nSection 223, Row 3, Seats 1-2 (aisle)\nWednesday, 11/5 vs. LA Clippers - $96\nThursday, 11/13 vs. Brooklyn Nets - $56\nSaturday, 11/15 vs. Charlotte Hornets - $80\nFriday, 11/21 vs. Utah Jazz - $80\nWednesday, 12/10 vs. Houston Rockets - $84\nThursday, 12/18 vs. Oklahoma City Thunder - $120\n\nThanks!",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Participate in Cal Alumni’s “bring a student to work” day",
            "description": "Participate in Cal Alumni’s “bring a student to work” day. Great opportunity to give back to your alma mater and to spread the Pandora love, especially since we’re kicking off our Road Crew internship program for 2015. I just signed up.",
            "category": "Community"
        });

        Posts.insert({
            "title": " 49ers and RedZone Rally Tickets",
            "description": "Hi all,\n \nAlso selling tickets for the Niners game against the Rams on Sunday.  Have a total of four, will sell either 2 or all 4.\n \nTickets are section 109, row 22, seats 9-10, as well as row 21, seats 9-10.   Also have 4 tickets to the Great America Redzone rally (starts at 10am), which contains unlimited food and drink, as well as a sportsbar with 45 tv’s to watch all the early games.  RedZone rally face value is $90/person.   Link about the rally as well as view from seats below.\n \nPRICES:\n \nTwo tickets: $350\nTwo tickets + redzone rally: $400\nFour tickets: $675\nFour tickets + redzone rally: $725\n \n \nHurry, these prices won’t last!  (These prices will totally last)\n \n \n \nhttp://aviewfrommyseat.com/photo/35565/Levi%27s+Stadium/section-109/row-20/seat-4/\n \n \nhttp://www.levisstadium.com/great-america-pavilion/",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Volunteer DJ for Breast Cancer Fair",
            "description": "Hi all,\n\nMy wife works at one of San Francisco's Department of Public Health Clinics. Knowing that I work at Pandora, they asked her whether I could convey the following message:\n\n\"We need to find a D.J for the Breast Cancer Fair on Oct. 25.2014, 9am to 4pm. The target audience we are focusing on are African American/Black women ages 40-70. We will rent our own P.A system, but need the D.J. to bring his/her own equipment. \"\n\nLet me know if anyone is interested and I can put you in touch.\n\nThanks,\n\nAbbas Hachem | Sr. Software Engineer\nPandora Internet Radio\n2101 Webster Street, Suite 1650 | Oakland, CA 94612\n415.716.3025 | ahachem@pandora.com",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "Econo Jam Records Halloween party/1 Year Anniversary",
            "description": "Hello,\nI am playing in a Wipers cover band called Ypres Friday evening.\nIt is free and nearby over at the record store I work at on the weekends, Econo Jam Records.\nhttps://www.facebook.com/events/537096313091186/\n\n6 pm! Free\nAlso friends that do a one-woman Wire cover act and a Guided By Voices cover band!\nIt's also the anniversary of the shop! There will be some coupons and a costume discount of 15%.\nGeorge",
            "category": "Community"
        });

        Posts.insert({
            "title": "Zakir Hussain at SFJAZZ, Oct 9-12",
            "description": "I’m going to this one on Friday Oct 10: https://www.sfjazz.org/events/2014-15/oct10/sangam\n \nThere are shows on Oct 9, 11 and 12 as well.\n ",
            "category": "Community"
        });

        Posts.insert({
            "title": "Fundraiser/Celebration - Congential Heart Defects",
            "description": "Dear Pandas:\n \nHeart defects are the number one birth defect, affecting one out of every hundred babies born.  In the United States alone, that’s 400,000!  Riley Norton was an 11 ½ year old boy who passed away on October 20, 2014.  Suzanne Galante (Mother-In-Chief) wrote about Riley and his struggle in her blog, which can be found here:  http://www.motherinchief.com/search/label/kids%20in%20hospital .    Suzanne wrote that Riley was born with a single ventricle heart that was on the wrong side of his chest.  Many of his organs were in the wrong place, and he was also born without a spleen.  (I had no idea that you needed your spleen to fight infections).  Anyway, Riley had five surgeries to create a way for his blood to move oxygen around his body.  In spite of all of those surgeries, there was nothing that could be done to really “fix” it.\n\nI’m reaching out today to seek your support to celebrate the life of Riley Norton.  His short, but well-lived, life will be celebrated on Saturday, November 1, 2014 at Brittan Acres Elementary School, where he was a student, from 2:30 – 4:30 pm.  His family asks that everyone wear green, as it was Riley’s favorite color.  (details below)\n \nhttp://www.rileynorton.com/celebrate/\n \n\nRiley’s story hits close to home for my family, as my stepdaughter had a heart transplant last year.  While her condition didn’t begin like Riley’s, her condition was also congenital, based on a gene that she and her father share.  My stepdaughter grew up in San Carlos, and that community is very close-knit, so she’s asked that I share Riley’s story and celebration with you.  I’m hopeful that anyone who happens to be in the Peninsula on Saturday is able to join this celebration of life.  If you are unable to join, please consider donating to Camp Taylor – or donating some of your time and a pint of blood.  Additional details can be found here:  http://www.rileynorton.com/give/\n \nThanks for reading!",
            "category": "Community"
        });

        Posts.insert({
            "title": "Cajon for Whiteboard Session?",
            "description": "Hi All -\n\nAnother instrument request! Looking for a cajon to borrow for a WBS next month. If you have one we could use, please send me a note.\n\nGracias!\n\nMontse",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "Tennis Perg ",
            "description": "Hello Pandas,\n\nWant to play tennis in a beautiful ravine while deer graze in the background? Competitive or casual players are welcome. \n\n\"The depressing thing about tennis is that no matter how good I get, I'll never be as good as a wall.” - Mitch Hedberg via Nagui Yassa\n\nWhen? \nEvery Thursdays 5:30-7:30pm. Next 3 dates:\n10/30 – 2 courts\n11/6 – 2 courts\n11/13 – 2 courts\nWhere?\nDavie Tennis Stadium \n198 Oak Road\nPiedmont, CA 94610\nRoute from office here\n\nHow to Join\nAdd yourself to the \"Perg – Tennis\" email distro. See instructions here.\nSince it's a physically active PERG, all members must complete a PERG Acknowledgment Form and return to employeegroups@pandora.com. If you've completed one already, you don’t need to fill out another.\nLet us know if you prefer to play singles or doubles along with your self-rating here. ",
            "category": "Community"
        });

        Posts.insert({
            "title": "2 Clean Bandit Tickets @ Fillmore, Saturday",
            "description": "Selling my 2 tickets to Clean Bandit on Saturday night.\nGeneral Admission.\nSelling for face + fees I paid = $65 total",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "49ers Tix for Sunday vs. Rams",
            "description": "A friend of mine is selling her tickets to the 49ers game this Sunday. Information below:\n\nSunday afternoon 11/2 \nTwo (2) Tickets - $186 each\nLower Corner 123\nRow: 21\nSeats: 16,17\n\nLooking at what is going on StubHub right now, these are definitely at the cheaper end for the lower sections. Let me know if you're interested in taking them off her hands.\n\nThanks,",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Sublease available - Lake Merritt",
            "description": "I am forwarding this on from someone\n outside of Pandora\n\n\n*********\n\n\nI am looking for a\ntenant to sublease my furnished large one bedroom apartment with parking, laundry and utilities paid. The apartment has\n a fresh coat of paint, is updated and modern inside and will come fully furnished. It is located right on Grand Ave in the Lake Merritt neighborhood. The rent is $1800 and is an incredibly great rental price for the neighborhood, since that's what most places\n in that neighborhood go for without furnishing! This spot is super clean, super safe and right in short walking distance to bars, restaurants, farmers market, etc.\nThis apartment is large enough and is great for a couple!\nThe landlord and I need the new renter or renters to meet all income requirements and have a clean background check. The new renters must sign a year lease but should also\n interested in staying more long term if necessary. I don't want to leave since I love it so much but I am subleasing it furnished because I may be back to Oakland at another point in time. \n\n\nThis apartment will go quick! I am showing it by appointment only if the description meets your needs. Please send an email to malfitanod@gamil.com if interested. \n\nThank You, \nDaniella Malfitano",
            "category": "Housing",
            "subCategory": "apartments/housing"
        });

        Posts.insert({
            "title": "Tycho @ Fox Theater (10/30)",
            "description": "I'm also selling a floor ticket to Tycho for $40, face value. Let me know if you're interested!",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Warriors Tix",
            "description": "The NBA season is back tonight! Woot.\nWe have some games off our family’s season tix that we can’t make. Hit reply if interested. \n\nSection 214 Row 4, Seats 2-3\n$50 each | $100 for the pair (face value)\n\nWed Nov 5 - Clippers 730 PM\nTue Nov 11 - Spurs 730 PM\nSat Nov 15 - Hornets 730 PM\nFri Nov 21 - Jazz 730 PM\nTue Dec 2 - Magic 730pm\nThu Dec 4 - Pelicans 730pm\n\n",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Found jacket on 6th floor",
            "description": "There's a black fleece Pandora jacket, size Small,  in the R-booth of the 6th floor kitchen. (It was here yesterday too.) I'm going to leave it here, so if it's yours come on by. \n\n-Sara\n",
            "category": "Community"
        });

        Posts.insert({
            "title": "Acoustic guitar for WBS tomorrow?",
            "description": "Hi All -\n\nThe band's bus broke down and some of their gear won't make it. Looking for a good acoustic guitar they could borrow for the Whiteboard session tomorrow. If you have one and are willing to bring it to the office tomorrow, please send me an email!\n\nMany thanks!\n\nMontse",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "Purgatorio @ The New Parkway tonight",
            "description": "Hi there,\n\nJust wanted to share a film – Purgatorio - that a few friends of mine worked on and shot/directed a few years ago in Mexico. They've been doing the festival circuit and are finally premiering this in Oakland tonight. This provocative documentary about the U.S.-Mexico border is being screened at Oakland's New Parkway Theater at 7pm. You can get your tickets here and get a sneak peek here.\n\nHope to see you there! ",
            "category": "Community"
        });

        Posts.insert({
            "title": "Chvrches at the Fox tonight",
            "description": "My group just bailed. 4 tix, $20 each. Assuming they'll go on around 9/9:30.  Let me know if any interest.\n\nSent from my iPhone",
            "category": "For Sale"
        });

        Posts.insert({
            "title": " Lunchtime Acting Opportunity ",
            "description": "Hey,\nA friend of mine is looking for some female actors/non-actors, see details below:\n\nSeeking actors/non-actors as ensemble “performers” in a futuristic membership for a live event. No experience necessary, however preference will be given to actors over non-actors.\n\n \nDate: Friday, Nov.7th\n\n\n\nTime: 1-2pm\n\n\nLocation: Berkeley Hills, TBD\n\n\nPay: $70\n\n\nGender: All women, including LGBT (trans/cisgender women and transgender men)\n\n\nAge range: 20-30\n\n\nEthnicity: non-white\n\n\nWardrobe: techie-casual; perhaps slightly futuristic (college student; FB employee; hipster, etc.)\n\n\nNote: Please spread the word, we are casting 20-30 individuals for this project.\n\n\nContact: aimee@foggtheatre.org; please specify CASTING in the subject line, and attach a recent snapshot of yourself.\n\n",
            "category": "Services"
        });

        Posts.insert({
            "title": "Bart Ticket on 6th Floor",
            "description": "HI All,\n\nI found a bart ticket on the 6th floor today near the IT vending machine with a value of slightly under $2.  Not much, but if there are no claimers it may be used transport me to an A's game in the near future.  For now I'll hold onto it at my desk, which is also located near the 6th floor IT vending machine.\n\nJimmy ",
            "category": "Community"
        });

        Posts.insert({
            "title": "2 tickets to Little Dragon at the Fox ",
            "description": "2 tickets for the Little Dragon show tonight at the Fox.\n\nI paid $83 for them (incl. fees).\n\nDave\n",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Mariachi Flor De Toloache Performance Today at 4pm in The Park, 6th Floor",
            "description": "Hi All,\n\nJust a reminder that we have a performance from an outstanding mariachi today in The Park on 6!\n\nhttp://www.mariachinyc.com/",
            "category": "Community"
        });

        Posts.insert({
            "title": "T-Level Rolltop Backpack",
            "description": "Fresh from Korea, I have a red T-Level Rolltop Backpack for sale for $225.  I have a yellow version of this bag that I use when I ride my bike to work, or when I go grocery shopping.\n\nDetails:\n1600D Invista Cordura Fabric,\nT-Aero Cushioning System\nWaterproof Truck Trap Line\nWoojin-Duraflex plastic parts\nFilament US Nylon Webbing\nPolyurethane film coated logo marking\n3M Reflector\nYKK water repellent zipper\n",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Free A's Game Ticket - Tonight",
            "description": "Hi friends, \n\nI have a ticket to tonight's A's game against the Rangers at 7 PM up for grabs (for free). I'm heading out early, so the first person to grab it from my desk wins (6th floor Comms corner). \n\nEnjoy!",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Pandora Cupcakes in 7th Floor Kitchen",
            "description": "Hi All, \n\nWe have some left over “Pandora” cupcakes from the Road Crew Open House last night. They are in the 7th floor kitchen on the counter. \n\nEnjoy!",
            "category": "Community"
        });

        Posts.insert({
            "title": "W. Kamau Bell tickets (+ Cynic Cave plugs) ",
            "description": "Hi,\nFormer Pandora Comedy Analyst and TV STAR W. Kamau Bell has been doing a residency at a show I run on Saturdays in September.\nhttp://uptownalmanac.com/2014/09/w-kamau-bell-returns-tonight-cynic-cave\nWhile advance tickets have been selling out, a chunk of people for the 6 pm shows have NOT been showing up. \nIf you wanted to see him and come at 5:45 on Saturday afternoon, you will almost definitely be able to get in on the waiting list.\nIn fact, as of this moment, one ticket is still available via eventbrite for this Saturday's 6 pm show.\nYou can grab it here : http://wkamaubellcave.eventbrite.com/ for $15 (plus service fee)\n\nAlso:\nTonight it's the last of a series I run that is improvised movie-riffing (in the vein of Mystery Science Theater 3000) called \"High Dudgeon\"\nWe will be watching the universally-panned BIRDEMIC: SHOCK AND TERROR tonight at 8 pm at Lost Weekend Video.\nhttp://hdbirdemic.eventbrite.com/\n\nThanks!\nGeorge\n",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Kittens need a home",
            "description": "Hi All!\n\nSpamming you with kittens who need a home!\n\nTwo adorable guys need a loving home.  They were feral kittens that I have been taming.  They will still need a LOT more work so an experienced cat parent would be the best choice.  They are also litter mates and a bonded pair so they should go to the same home.  They are currently kept indoors and should remain so since they are still a little wild there could be a chance that they would take off.  A few more details about them below in list form.\n\nMale\nNeutered\nTreated for fleas/worms\nFIV/FELV free\nChipped (record will need updating)\nApprox. 6 months old\n\nPlease hit me up if you are interested or know someone who is.\n\nThanks!\n",
            "category": "Community"
        });

        Posts.insert({
            "title": "1 GA ticket, Tears For Fears, 9/24",
            "description": "Hi everyone\nI have 1 extra ticket I need to sell for the Tears for Fears show next Wednesday (9/24) at the Fox Theater. This is a GA/standing ticket that is currently sold out.\nSelling for face + fees = $62.\n \nTicket is a digital/printable version.\n \nMichael",
            "category": "For Sale"
        });

        Posts.insert({
            "title": " Camp Reel Stories hosting LUNAFEST, support the Breast Cancer Fund",
            "description": "Hi guys,\n\nI'm sending this email on behalf of Esther Pearl of Camp Reel Stories (who also spoke at Creative Mornings, Oakland a few months ago).\n\nCamp Reel Stories is hosting the LUNAFEST on Nov. 6th at the Humanist Hall. Enjoy great short films while supporting an important community cause. All proceeds go to Camp Reel Stories and the Breast Cancer Fund. Tickets available now at http://www.lunafest.org/oakland.\n\nPlease see attached flyer as well. \n",
            "category": "Community"
        });

        Posts.insert({
            "title": "Old Crow Medicine Show",
            "description": "Hi Oakland!\n \nI am selling my tickets to the Old Crow Medicine Show this Saturday, 9/20, at the Masonic in SF.\n \nSEC: 9BAL Seats 11 & 12\n \nSelling for $100 for the pair. (I have the actual tickets to hand off).\n \nLet me know if anyone is interested!\n \nThanks,\nKim",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "(FREE ticket) Placebo at the Masonic 10/23",
            "description": "Hey Oakland!\n\nOur good friends/ clients at Live Nation have generously offered to hook up free tickets for the Oakland office to the Placebo show this Thursday (10/23) at the Masonic. If you're interested in getting a ticket... Shoot me a note by EOD tomorrow.\n\nSeth Glasman",
            "category": "Community"
        });

        Posts.insert({
            "title": "Kelly Anneken Comedy Album Release!",
            "description": "Hey there, FYI’ers!\n \nIn April, I recorded a comedy album called “Twenty Minutes to Sell,” and it’s available to purchase today!  It’s $2.99 on Bandcamp, but if you use the special Pandora-only discount code genome, you can get it half price!  Check it out—it’s short and funny, just like me!  If you aren’t ready to commit, you can now create a Kelly Anneken station on Pandora! Wow, what are you waiting for?!\n \nThanks, and if you’re in Oakland, you can catch me tonight at the Layover.  8:30 PM, free show!  Don’t worry, LA, Chicago, and NYC, I will be in your city soon!  My full schedule is available here, and if you really want to be a Fanneken, you can join my mailing list.\n \nKeep laughing,\n \nKA",
            "category": "Community"
        });

        Posts.insert({
            "title": "Found $19.50 Bart Ticket (16th Fl Women's Bathroom)",
            "description": "Hello,\n \nI found a $19.50 Bart ticket in the women’s bathroom on the 16th floor.  If it’s yours, it’s on my desk (I sit in front of Fox conference room).\n \nIf you don’t claim it, I’ll be taking a field trip on Bart.\n \nAda",
            "category": "Community"
        });

        Posts.insert({
            "title": "Looking for a used Verizon iPhone",
            "description": "I managed to drop and break my iPhone today and sadly I am 6 months shy of an upgrade with Verizon.  I really don’t want to spend $700 for a new phone, so I thought I would check to see if any of you might have recently upgraded to the new iPhone 6 and want to sell their older version to me?",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "Roommate Needed for Apt Near Pandora Offices",
            "description": "Hi,\nMy house guest, Sharmani, just landed a sweet apartment near the Pandora office. And, she is looking for a roommate. So I wanted to pass along the details and her info. \n\nSharmani is a recent transplant from NYC. She is working as a graphic designer for a start up in SF. As a roommate, she is friendly, considerate, clean in the kitchen and easy to hang out with. Below is the information on the apartment and some photos are attached.\n\n————\n\nLooking for 1 other roommate - room's over at 22nd st & it's 1000 bucks a mth (not including utilities). If you're fairly sane, clean and responsible with paying bills on time, you should totally send me your info. Otherwise, please don't. \n\nThe place is pretty sweet. Comes with a backyard and 2 living rooms - I'm planning of making one of them into an office/art studio. So if you make art or just want more space for working this would be perfect. \n\nI'm sure you're familiar with the routine. Send me details about yourself (1500 word essays would be pushing it, but a paragraph or two would be cool) and we can take it from there!\n\nEmail me at sharm.d88@gmail.com.\n————\n\nGood luck!\n",
            "category": "Housing",
            "subCategory": "house swap"
        });

        Posts.insert({
            "title": "Zoviet France Ticket",
            "description": "I have an extra ticket for Zoviet France tonight in SF. Let me know if you are interested.\n\nDavid",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "[VTO Spam] Year Up: Mock Interview Workshop",
            "description": "Hi everyone,\n\nForwarding this wonderful, rewarding, and easy VTO opportunity to do mock interviews with Year Up students to help them prepare for their future job searches. It’ll only be a few hours in the afternoon, and I always learn something new whenever I participate. \n\nYear Up is a national organization that works with disconnected youth, mostly from underrepresented communities, between the ages of 18 – 24 and trains them in specific skills that are in demand at larger companies. For example, QA, IT, and project management. The program lasts one year, and during the latter six months of the program, the students are placed at a company like Salesforce or Google to do hands-on-training. We’re working with Year Up now to see how we can leverage the org to pipeline for some of our entry-level roles. In the mean time, any other support from us would be greatly appreciated. \n\nAm happy to answer any questions that you might have. Thanks and have a great weekend!",
            "category": "Community"
        });

        Posts.insert({
            "title": "Daniel Popsicle at Friday Nights at the de Young",
            "description": "Hi Oakland Pandas,\n\nDan Plonsey's \"Daniel Popsicle\" large-ish band (of which I'm a part) is playing tonight at the DeYoung Museum in Golden Gate Park as part of their \"Friday Nights at the de Young\" series:\n\nhttp://deyoung.famsf.org/calendar/friday-nights-de-young-curated-artist-fellow-lexa-walsh\n\nThere will also be art viewing, art making, a film screening, and more music by the Neil Young tribute band \"Kneel\".  It all sounds like fun and I hope you can attend!\n\nMyra\n",
            "category": "Gigs",
            "subCategory": "music"
        });

        Posts.insert({
            "title": "Sports Basement Berkeley Holiday Shopping Party for Pandora- 11/19",
            "description": "Hey All,\n\nSports Basement Berkeley is opening it's newest location in November and they have arranged for a Pandora Holiday Shopping Party to celebrate.  Everything in the store is 20% off.  Come on out for FREE wine, beer and snacks while you get some holiday shopping done. \n\nYou are welcome to invite friends and family as well.  They just ask that all individuals RSVP so they can plan accordingly. \n\nDate:  Wednesday, November 19, 2014\nTime:  6:00 - 8:00 PM \nLocation:  2727 Milvia Street  - Berkeley\n\nRSVP Here:  http://www.eventbrite.com/e/pandora-20-off-holiday-shopping-party-tickets-13621344809\n\nSee you there!",
            "category": "Community"
        });

        Posts.insert({
            "title": "Phillies vs A's - Sat, 9/20 @ 1PM",
            "description": "Hi all,\n\nSelling:\n\nField infield 3rd-base side (approx section 124 row 25). I have physical tickets.\n\nSat 09/20 PHI 1pm: $60 for the pair\n\nCash or PayPal are fine. Let me know if you’re interested.\n\nThanks,\nWill",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Star's Crazy Deals - Late 2008 Macbook pro - $240  - 64gb At&t iPhone 5s still available $300",
            "description": "Hi there, \n\nThis is the last deal for a long while, so grab them while you can ( Bike and iPad have sold) . We can talk during lunch or after work. \n\n** iPhone 5s 64 GB AT&T (can’t be unlocked)-  $300 \n\nMACBOOK INFO $240: \n\nLate 2008 Macbook pro \nModel Name: MacBook Pro\nModel Identifier: MacBookPro3,1\nProcessor Name: Intel Core 2 Duo\nProcessor Speed: 2.4 GHz \nMemory: 4 GB\n\n250gb HD – Has Mavericks and you can install Yosemite when It is available (I’ve already tested it) \n\nPretty much everything on this computer works as new!\nOnly issues are the following:\nMouse button is a little finicky, still works though.\nCD/DVD drive is a little loud when in use, but who uses CD's any more :) in all seriousness, it still works perfect, but just loud\n\nScreen is beautiful. No dead pixels. \nComes with original Apple power cable & extension cord. \n\nOutside shell has a bit of normal wear - just a few scratches, nothing major. \n\nThanks for playing. \n\nStar",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "4 Pairs of Free Tickets to Summersalt",
            "description": "Hi there -\n\nI have 4 pairs of FREE tix (8 total) to Saturday's Summersalt Music Festival featuring Big Gigantic, G-Easy, Keys N Krates & more at Pier 70 in SF.  \n\nIn addition, EyeHeartSF would like to extend the friends & family discount to Pandora, (once the 8 free tix go) please feel free to use this link for 15% off: https://summersalt2014.eventbrite.com/?discount=Pandora\n\nAdditional Info:\nSummersalt Music & Arts Festival is happening this weekend on Saturday, September 13th at the historic Pier 70 Shipyard in San Francisco. This festival is one of the Bay Area's most unique outdoor music events, boasting an incredible mix of Electronic & Hip-Hop artists. This year's lineup features Live sets by BIG GIGANTIC, G-EAZY, KEYS N KRATES, GASLAMP KILLER, SALVA, AMPLIVE, GRANDTHEFT, ANA SIA, JAY ANT, DIMOND SAINTS, and many more. Plus food, drinks, games, and art by APEXER. Gates open at 1pm. Event is all ages.",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Raybans left backstage",
            "description": "Ping me if you’re the proud owner who left these stylish foldable specs’ backstage today.",
            "category": "Community"
        });

        Posts.insert({
            "title": "Interior Design",
            "description": "Happy Hump Day Pandas!\n \nLooking to spice up your spot? A friend of mine is an interior designer based in San Francisco. She’s recently started to break away from the firm she works for to grow her own client base. Here’s a link to check out some of the work she’s done through LOCZIdesign.  I've also attached some images and a brief portfolio of her designs.\n \nHer rate is $60/hr, with a free initial 1 hour consultation. Here’s a list of services she provides:\n \n·         Onsite Design Consultation\n·         Paint Consultation\n·         Self “Shopping List”\n·         Purchasing\n·         Customized Style Guides, Mood Boards\n·         Element Price Guide\n·         Comprehensive Design Program\n·         Space Plan (furniture arrangement)\n·         Soft Furnishing Suggestions\n·         Floor Plans + working drawings\n·         Custom Furniture and Case-good Design\n·         Oversight of installations\n·         Project management\n·         Coordination with architects, contractors, and vendors,\n·         Budget management\n·         Architectural consulting\n·         Sustainable methods\n·         Building Exterior aesthetics\n \nTo schedule a consultation, she can be reached at placestudioSF@gmail.com or 408.348.1109.\n \nCheers\nDre",
            "category": "Services"
        });

        Posts.insert({
            "title": "Lost my iPad Mini",
            "description": "Hey everyone,\n\nI left my red iPad Mini somewhere on the 6th or 7th floor this afternoon. It has monkey on the lock screen. If you know where it is, please let me know!",
            "category": "Community"
        });

        Posts.insert({
            "title": "Ticket for Jimmy Eat World",
            "description": "1 Ticket to see Jimmy Eat World's \"Futures\" 10-Year Anniversary tour, at Oakland Metro on October 4. $25.",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "49ers vs Chicago Bears tickets for 9/14 5:30pm",
            "description": "Selling for this weekend’s game:\n \n49ers vs Chicago Bears tickets for 9/14 @ 5:30pm\nSection 234, Row 6 – got 3 seats together.  Selling for $300 per ticket. \n \n \nThanks!\nRosalina",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Ice Cream Social 9/9/14 ",
            "description": "Center 21 will be having its annual Ice Cream Social on September 9th, 2014, in the atrium lobby between 2:00-3:30pm. Ice cream and sorbet will be served. Come on over and have a scoop!",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "Pandora U Happy Hour 7th Floor",
            "description": "Hi Oakland –\n \nThe Pandora U Happy Hour will be starting at 5:00pm in the 7th Floor Kitchen. Come join us for beer and snacks!\n \nSee you there! J",
            "category": "Gigs",
            "subCategory": "party"
        });

        Posts.insert({
            "title": "Selling my TV",
            "description": "$200 instead for Pandora folks:\nhttp://sfbay.craigslist.org/sfc/ele/4649737904.html\n\nThanks,\nJoe",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Room Available in Mission Apartment ",
            "description": "Happy Friday!\n\nI’ve got a room opening up in a great apartment in the Mission one block from Dolores Park. Check out the craigslist post here: http://sfbay.craigslist.org/sfc/roo/4653758272.html\n\nIf you’re interested or know someone who might be a good fit, please reach out to me directly.\n\nThanks!\n",
            "category": "Housing"
        });

        Posts.insert({
            "title": "The Head & The Heart",
            "description": "Hi all, \n\nI have 4 tickets to The Head & The Heart at the Greek tomorrow night. $45/each or best offer. \n\nIf you're interested, let me know!\n\nKatie",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "FOR SALE - Sonos Play:5 Speaker ",
            "description": "Hi Everyone-\n\nSelling my Sonos Play:5 speaker with the needed bridge. I've had it for less than a year and used it probably 3 times, so it's basically brand new. The Play:5 retails for $400 and the Bridge for $50 (total of $450)\n\nSelling both for $350 total OBO.  Let me know if you're interested.\n\nThanks,\nRyan",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Free California King Bed Frame from IKEA",
            "description": "Hi Everyone,\n\nTrying to make room around the house, so we've decided to part ways with our MALM bed frame (low).  It's a California King-sized frame, so slightly larger than your regular  King-sized beds.  Here's a link to the actual product on the IKEA website, although the actual color of this piece is no longer available: http://www.ikea.com/us/en/catalog/products/S99849843/.\n\nBelow is a photo from Google Images to give you a better idea of what the color looks like.",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "Requesting your vote for the Photography PERG contest for August",
            "description": "Hey Panda's….\n\nOn behalf of the Photography PERG, I’d like to introduce you to the August photo contest entries .…….Please read the instructions below to vote so we can establish a winner.\n\nThe theme for August was “Letters or Numbers” \n\n….please take a couple of minutes to review these awesome photos and vote for your favorite one!\nThe winning photographer gets their picture printed and displayed in the Oakland Office!\n\nClick this link to see photos:  August Photos\n\nThen Vote: (voting is open now through Friday 9/5)\nThere are two ways you can vote.\n1) Click this link VOTE HERE– (in order to vote, make sure you are logged in the google Docs through Pandora, One Log in, if you are logged in under your personal gmail account, you will not be able to access the voting form)\n\n2) If the form does not work, please send me your vote via email:  justin@pandora.com)\n\nP.S.  If you like to take pictures and would like to participate in the next photo contest, let me know and I will add you to the photography PERG distribution list.  The theme for September is  “ Framed – frame your subject with another subject such as a window, chain fence, bars etc”   --- To submit your photo, email it to justin@pandora.com\n\n\nIf you are interested in seeing the winning photos from previous months you can see them here or back stage on the wall next to the Ping Pong table: \nJanuary  Photo 6\nFebruary Photo 12\nMarch  Photo 4\nApril Photo 4\nMay Photo 6\nJune Photo 1\nJuly Photo 2\nAugust  Photo 7\nSeptember Photo 3\nOctober Photo 6\nNovember Photo 3\nDecember Photo 7\nJanuary Photo 12\nFebruary Photo 3\nApril  Photo 5\nMay  Photo 5\nJune Photo 4\nJuly Photo 1\n\nThanks\n\n-Photography Perg",
            "category": "Community"
        });

        Posts.insert({
            "title": "Free food in 16th floor kitchen ",
            "description": "We had yet another potluck. We made more than we can eat, again.",
            "category": "Community"
        });

        Posts.insert({
            "title": "Web Programmer",
            "description": "Hi Oakland Friends,\n\nMy brother is looking for a web programmer to be the \"webmaster and designer\" for his “Zillow for solar - the best solar opportunities for commercial property” site. He works for a small Solar company, Borego (located in Pandora’s old building at 21st and Webster). \n\nI figured with all of the top tech talent at Pandora, we might have a few leads for him :) Please ping me if you know anyone great who might be interested. \n\nThanks!\nKatherine",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "PERGs: FREE Soul Cycle!",
            "description": "Dear Oakland,\n\nThe Soul Cycle PERG is excited to announce that for the first two weeks in September, Pandora employees will be able to ride for FREE! Just mention that you work here and bring your ID (or anything else that shows you work at Pandora) and sign up during the times mentioned in the attached flyer.\n\nShoe rental is also included.\n\nGet ready to ride!",
            "category": "Community"
        });

        Posts.insert({
            "title": "PERGs: Brazilian Jiu Jitsu",
            "description": "Hi Pandas,\n\nSo, to start things off, I’d like to invite all Pandas interested in joining, or re-joining, to  our Friday class from 12pm to 1pm in School (6th floor)\n\nI know what you’re thinking. “Jiu-jitsu looks really cool, but I’m not sure it’s for me.” I guarantee that jiu-jitsu is for you. How do I know? Because jiu-jitsu is for everyone! \n\nAre you a small/skinny guy that needs a confidence boost? Learn jiu-jitsu.\n\nAre you a women who needs to be able to defend herself? Learn jiu-jitsu.\n\nAre you a bit older, and want to look like you did in your prime? Learn jiujitsu.\n\nAre you a musclebound, six foot tall badass who thinks he doesn’t need to learn jiu-jitsu? You definitely need to learn jiujitsu.\n\nAs you can see jiu-jitsu is for everyone. It’s a martial art designed to work for everyone, not just the big and strong. Anyone can learn how to defend themselves in a real life situation with Brazilian jiu-jitsu. Unfortunately there’s no magic death touch/psychic chi blast (which apparently doesn’t work on BJJ students anyway), but somehow I think you’ll manage. So if you’ve been thinking about starting, but are unsure, here’s some  reasons to take the leap:\n\nDiscipline. Probably a cliche when it comes to martial arts, but if you can be disciplined about your training, this will carry over to other aspects of your life. Judging from the rampant levels of procrastination, I’m sure we could all use a little more of this in our lives.\n\nLack of confidence. So you’re not that confident in yourself? Jiu-jitsu builds your self esteem in a way that few things can. When you first start, almost all of the concepts are completely foreign to you. As you continue to train over time, you become more familiar and more comfortable with all of the techniques, and your understanding grows. As your jiu-jitsu grows, your confidence in your jiu-jitsu grows with it, and this translates to higher self-esteem even outside of the dojo.\n\nYou’re stressin’ out. You’re really stressed out, and you need someway to get rid of it? Exercise comes highly recommended in terms of stress relief, and jiu-jitsu takes that to the next level. Whereas other forms of exercise only focus on a few areas, jiu-jitsu utilizes every part of your body, leaving you cool as a cucumber when you’re done.\n\nGood habits. Jiu-jitsu often forces us to create not only good habits, but healthy habits. You’ll start waking up early, going to bed early, eating healthy, doing even more exercise outside of jiu-jitsu, reading more. Heck, you might even quit smoking. Don’t believe jiu-jitsu can do all that? Start training and tell me how those Big Macs are working out for you.\n\nSelf defense. The best reason to learn jiu-jitsu is for self defense. It was created for that purpose, to level the playing field, so that smaller and weaker people could handle themselves against bigger and stronger opponents.\n\nThe best way to find out if you’ll like it is simply to go our Friday practice  from 12pm to 1pm. We have  folks who have been practicing Judo and Jiu Jitsu for many years and have competed in numerous competitions.  What you learn from jiu-jitsu can be implemented in so many other areas of your life.\n\nCome practice with us!\n\nIf you have any questions or want more info.  please contact Janet Kenmotsu  or BJJ PERG\n",
            "category": "Community"
        });

        Posts.insert({
            "title": "Treats in 15th floor kitchen",
            "description": "We have some tasty treats left over from our Noteworthy event today-feel free to help yourself!",
            "category": "Community"
        });

        Posts.insert({
            "title": "Pandora Pride: Upcoming Events",
            "description": "Hey Oakland!\n\nWe’ve been busy over here in the Pandora Pride Community and wanted to share some of the exciting things we’ve been working on to celebrate Pride: \n\nOakland Pride\n\nWe are incredibly excited to be one of the top sponsors of Oakland Pride 2014! Oakland Pride is dedicated to educating the greater community, promoting equality, civic involvement and responsibility within Oakland and neighboring communities. The organization will celebrate their 5th year Anniversary with a parade down Broadway, and we are thrilled to march and show Pandora’s support of Oakland and our LGBTQ community. We have also created an Oakland Pride Radio station to help spread awareness of the festivities, and the station has already seen 25,470 station adds and 6,860 listening hours. The station features a diverse range of Oakland Pride headliners over the past 5 years, including Chaka Khan, En Vogue and this year’s headliner, Sheila E, in addition to several other talented artists in similar musical genres. To listen to Oakland Pride Radio on Pandora, click here. Additionally, our Artist Partnerships team has also helped Oakland Pride secure talent for the main stage, including NYC rapper and and producer Le1f. \n\nIf you are free to march this Sunday, please sign up here! \n\nPride Office Cupcakes & Champagne Happy Hour\n\nSince not everyone can make it out this Sunday, we’re hosting a Cupcake & Champagne Happy Hour in the office this afternoon. We will also be passing out t-shirts for the Oakland Pride marchers at the happy hour, today from 4pm-6pm on the 7th floor. Everyone’s welcome! If you’re not marching, we will hand out t-shirts when you attend Pride events. \n\nStartOut Awards\n\nPride’s steering committee and members of Pandora’s leadership, including Tim Westergren, will be attending the Third Annual StartOut Awards. The evening, hosted by Lance Bass, is held to celebrate and highlight exceptional and innovative entrepreneurs in the LGBT Community. This years’ honorees include George Takei, Amy Errett, Dave McClure, and Li Han Chan. \n\nOut for Undergrad Technology Conference\n\nTogether with University Recruiting, we’re one of the sponsors for the Out for Undergrad Technology Conference that will take place at the Twitter HQ this year. It’s a great recruiting opportunity for us for both Road Crew 2015 and entry level roles. We’re still looking for speakers and volunteers, so if you’re interested, email Lisa Lee at llee@pandora.com.\n\nIf you’re interested in joining Pandora Pride, please add yourself to our email list by following the instructions here. If you’re interested in getting more involved from a leadership level, please let me know! \n",
            "category": "Community"
        });

        Posts.insert({
            "title": "Alzheimer's Walk",
            "description": "Hi All,\n\nA few days ago, my family decided to join the Alzheimer’s Association Walk to End Alzheimer’s®.  We’re a part of the September 6th event in Modesto, CA.  After attending the Alive Inside screening, I was inspired to reach out to see if anybody would like to participate/donate.  All donations go to the Alzheimer’s Association to fund Alzheimer’s care, services, programs, and research.\n\nThanks a ton!\n\n-Team Dory (Disney reference, anybody?)\n\nTo donate:\nhttps://act.alz.org/site/Donation2?idb=361475242&df_id=21886&21886.donation=form1&FR_ID=4958&PROXY_ID=9547249&PROXY_TYPE=20\n\nTo join our team:\nhttps://act.alz.org/site/TRR/Walk2014/CA-NorthernCaliforniaandNorthernNevada/212180624?pg=utype&fr_id=4958\n\n“Together, we will end Alzheimer’s”.",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "Looking for your keys?",
            "description": "If these are yours – let me know :)",
            "category": "Community"
        });

        Posts.insert({
            "title": "Curtis Bumpy :: Soul @ Jupiter, Berkeley :: Friday :: FREE",
            "description": "Happy Hump Day, East Bay Pandas.\n\nMy all-star R&B mashup groove outfit, Curtis Bumpy, continues its unofficial residency at Jupiter Brewing Co. in Downtown Berkeley, this Friday night starting at 8PM under the big redwood tree. Berkeley’s own DJ Delon will be warming up the scene from 5PM-on as well.\n\nJupiter has great pizza, salads and beer, and admission is always FREE. All ages early in the evening. The magic usually kicks in for the 9:00 set.\nhttp://www.jupiterbeer.com/events/curtis-bumpy-8/\n\nBumpity boom,\n\nDamon\nhttp://www.curtisbumpy.com",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "Want to live close to work?",
            "description": "Hi!\n \nThe landlord dropped by today wanting to give Pandora employees a first look at these apartments for rent before he put them up on Craigslist. It is in walking distance of work. Thought I would pass this along. Thank you!",
            "category": "Housing"
        });

        Posts.insert({
            "title": "PERGs: Cuban Style Lessons",
            "description": "Updated calendar invite for next Tuesday. Sorry!",
            "category": "Community"
        });

        Posts.insert({
            "title": "The General @ Connecticut Yankee TOMORROW NIGHT!",
            "description": "Hi Oakland Pandas,\n\nApologies for the FYI-OAK spam, but I wanted to give you all a heads-up that 3 of your musical colleagues – Steve Berkeley, Tyler Brown, and myself – will be playing with our band The General tomorrow night @ 9:30 p.m. @ The Connecticut Yankee over in Potrero Hill. This is our first gig through an actual booking agency, and we're excited to play a solid set of folk-rock and alt-country. We want to get as many Pandas in the door as possible! Hope to see you there.\n\nFacebook invite here,\nand tickets available here.\n\nListen to The General on Pandora! <-- This is our first album; we've since \"gone electric\" and pumped up the energy and volume a bit. Rock out!\n\nThanks for supporting your local musicians!\n-JZ",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "The General @ Connecticut Yankee TOMORROW NIGHT!",
            "description": "Hi Oakland Pandas,\n\nApologies for the FYI-OAK spam, but I wanted to give you all a heads-up that 3 of your musical colleagues – Steve Berkeley, Tyler Brown, and myself – will be playing with our band The General tomorrow night @ 9:30 p.m. @ The Connecticut Yankee over in Potrero Hill. This is our first gig through an actual booking agency, and we're excited to play a solid set of folk-rock and alt-country. We want to get as many Pandas in the door as possible! Hope to see you there.\n\nFacebook invite here,\nand tickets available here.\n\nListen to The General on Pandora! <-- This is our first album; we've since \"gone electric\" and pumped up the energy and volume a bit. Rock out!\n\nThanks for supporting your local musicians!\n-JZ",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "More Highfive Learning in Backstage",
            "description": "We are doing a “lunch and learn” in Backstage for those of you who missed the HighFive demo this morning. We have the device hooked up to the big TV in backstage. Come on by and learn about this new videoconference and room display system we are testing.\n \nThanks\n-Darren",
            "category": "Services"
        });

        Posts.insert({
            "title": "HighFive Breakfast at Whiteboard (free breakfast!)",
            "description": "Hi Panda’s\n \nWe are having a launch breakfast for a new video conference technology we are testing. We have breakfast sandwiches, coffee and most importantly swag! Having a keynote at 9 to explain how it works and how you can use it soon.\n \nThanks\n-Darren",
            "category": "Services"
        });

        Posts.insert({
            "title": "Gentle PSA",
            "description": "Just a gentle reminder that both outlook on a pc and on a mac allow you to set up filters based on who the email is “sent to”.  You can set up filters to move emails to separate folders if it is sent to fyi-oak.\n\nThis will mitigate the emails that may be distracting, so even if someone forgets to put spam in the email.  It can still be filtered.\n\nIf you need help creating a filter, please open a ticket by sending an email to help@pandora.com",
            "category": "Community"
        });

        Posts.insert({
            "title": "Doggie To A Good Home ",
            "description": "Max is an 8 year old Puggle, who currently resides in Boynton Beach, Florida.\n \nHe is chipped and has been neutered.  He is up to date on all his shots. He is trained and only requires minimal exercise.  Max is friendly, loyal, obedient and affectionate. He gets along with other dogs and has lived with a female Puggle for the last 2 years, he lost the house in the divorce settlement J. He gets along with children and is not aggressive.  However he has separation anxiety and gets nervous when there is too much commotion or people coming in and out all day.  He enjoys laying on the couch and snuggling with stuffed animal toys.  He is not destructive but gets quite nervous when he feels like he's being left alone.\n \nHe would do best in a calm low stress environment.  If you’re interested, we can get him to California.",
            "category": "Community"
        });

        Posts.insert({
            "title": "PERGs: Broball!",
            "description": "Hey Oakland!\n\nI’m excited to announce a new PERG called Broball!  This PERG is for any Panda that is interested in having fun, learning a new sport, and getting some exercise in the process.\n\nWhat is broball you ask? It’s a game of skill and agility.  You can read up on the BROfficial rules in the BROchure, check out the video tutorial,  see what’s cookin in the BROn apetite section, or take listen to the BROball theme songs.  \n\nOnce I gauge interest and availability, I’ll send out an email with game schedule details.  Hope you join! It’s a really fun game.\n\nTo join, use the Pandora List Manager , or email dist-broball@pandora.com.  \n\nDetails on how to join lists can be found here.  Or, you can just respond to this email and I’ll add you to the list!\n\nPlease do not reply all to this email.\n\nFAQ:\nQ: How do I play?\nA: For a basic overview of the game, you can watch the video tutorial.  For the complete set of rules, please refer to the BROchure.\n\nQ: Do I have to be a “bro” to play?\nA: Absolutely not.  The broball PERG is open to any and all that want to play.  Guys and Gals are equally welcome!\n\nQ: Do I need to buy anything to play?\nA: Nope.  Everything needed to play, which is really only a broball, will be provided through the PERG.\n\nBroball PERG\nMeeting at least once a month to play a game of agility and skill. Great team building game. Check out the sport here: http://broball.com\nContact: Brian Ostreicher\nAlias: dist-broball@pandora.com",
            "category": "Community"
        });

        Posts.insert({
            "title": "Great Job Ali White!!",
            "description": "It gives me great pleasure to let you all know that as of today Alison White is now our Director of Business Development for Consumer Electronics. \n\nWhen Ali started 3.5 years ago, she had A LOT of work to do. I presented her with the challenge of not only managing the day-to-day relationships with some of our most important partners but also asked her to figure out how to manage all of the information and data associated with hundreds of approved partners, thousands (if not more) of potential partners, thousands of device implementations and millions of users listening for upwards of 3 hours a day (which then accounted for ~3% of all Pandora LH). And, just to keep it interesting, I also told her that she should find some time to not only stay ahead of innovations and developments in the CE space but to also set the overall strategy for our CE business and then put us on a path to achieve those strategic objectives. \n\nIn case it wasn't clear what I presented to Ali was not a small undertaking in any way but she has delivered in every way that we've asked. Since Ali took the reigns, our CE business has grown by leaps and bounds. CE LH are now well over 6% of total Pandora listening and total CE users has grown from ~3M to just about ~20M. Most importantly, since Ali started managing the business we have not only maintained our lead in the space but I'd argue that we've increased that lead. On top of all that, Ali (working hand-in-hand with Carl Edwards and his team) is creating a long-term vision for our Consumer Electronics business and is working on making that vision a reality. \n\nFor all these reasons and many more, It gives me great pleasure to announce this promotion. Please make to sure to give her a high 5, pat on the back, firm handshake, etc… the next time you see her. \n\nCongratulations Ali!! Well deserved.\n\n-ian",
            "category": "Community"
        });

        Posts.insert({
            "title": "Join us in Marching at Oakland Pride 2014!",
            "description": "Hello Pandas,\n\nWe're proud to announce that Pandora is a top sponsor of this year's Oakland Pride Parade & Festival!\n\nWe invite you to join in marching in the Oakland Pride Parade on Sunday, August 31st.\nThe parade begins at 10:30am near Broadway & 14th Street. Space is limited, so be sure to sign up early.\nClick here to sign up.",
            "category": "Community"
        });

        Posts.insert({
            "title": "Daycare Recommendations",
            "description": "Wondering if anyone has any daycare recommendations in Oakland/Alameda. \n\nMy wife & I contacted a few but all seem pretty full.\n\nIf you have any leads please email me, and not the group.\n\nThanks,\nDavid",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "Apartment Hunt",
            "description": "Greetings Pandoaklandians,\n \nMy roommate and I are in the market for a new home/apt for rent. We are looking in Oakland and surrounding environs (without crossing a bridge or entering a tunnel) and have to settle by August 31st.\n \nIf you know of anything, please reply here. Craigslist searching can be a bit of a competitive nightmare these days, so I thought I’d reach out to the office network.\n \nSome metadata…\nMe: Male 30’s technology professional\nMy roommate: F 30’s elementary school teacher\nBudget: <= $1,800.00 per 2 bedrooms\n \nThanks for your time,\n \nErik",
            "category": "Housing"
        });

        Posts.insert({
            "title": "Farewell at Era this Thursday",
            "description": "Fellow Pandas!\n\nThank you for making the ride at Pandora an enjoyable one. Both Anjuli Felix and I are moving on effective this Friday so we are having a two birds with one stone kind of party. Feel free to stop by Era this Thursday, 8/7 around 5pm or so to say farewell. \n\nAll the best,\nKrista & Anjuli \n\nanjuli.felix@gmail.com\nwww.linkedin.com/in/anjulicfelix\n\nbauer.krista@gmail.com\nhttps://www.linkedin.com/profile/view?id=5767180&trk=nav_responsive_tab_profile",
            "category": "Community"
        });

        Posts.insert({
            "title": "Single Day OSL Tickets! (even if you have a 3-day pass)",
            "description": "Hey guys,\n \nDo you have an electronic 3-day pass to Outside Lands, but only interested in attending one or two days? If so, I have some friends in town that are really interested in Saturday (maybe Sunday) and are willing to pay around $90 for a single-day ticket.\n \nSince you only have one ticket for the whole event, you’d have to trust someone to only attend the day you want them to. This would be hard to facilitated on Craigslist/StubHub, but what about a fully accountable co-worker? Let me know if you’d be willing to part with Saturday and/or Sunday, and maybe we can make a deal!\n \nThanks,",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "JAY-Z & BEYONCE Tickets",
            "description": "Hi Pandas,\n\nThere are (2) extra tickets for the On the Run concert tomorrow, Tuesday 8/5 at AT&T Park – Row 2, Section Lower Field for $290 each.\n\nPlease reply directly to me if you’re interested.\n\nThanks!\nA.",
            "category": "For Sale",
            "subCategory": "concert"
        });

        Posts.insert({
            "title": "16th floor kitchen",
            "description": "Sorry for the late notice, but we have internship final presentations happening backstage today from 9-10am. Please use the 15th floor kitchen if possible.",
            "category": "Community"
        });

        Posts.insert({
            "title": "Housing Help",
            "description": "Happy Friday Pandas!\n \nI'm looking for a one bedroom in San Francisco/Berkeley and would love any leads should you know of anything. I'm dearly looking to avoid the craigslist nightmare, open house stampedes and general housing bonanza!\n \nGracias!",
            "category": "Housing"
        });

        Posts.insert({
            "title": "Mexican Tortilla Soup on 6th near Park",
            "description": "There's mexican tortilla soup on the table if anyone wants it. Pretty sure it has dairy in it, which is why I'm not eating it. ",
            "category": "Community"
        });

        Posts.insert({
            "title": "Money Management Educators Financial Seminar: Wills, Trusts and Estate Planning.",
            "description": "When: Thursday, July 31, 2014 12:00 PM-1:00 PM. (UTC-08:00) Pacific Time (US & Canada)\nWhere: Conf-Oak The Shop (6 FL, 30PPL, TV)\n\n*~*~*~*~*~*~*~*~*~*\nPumped! Invites you to the Money Management Educators Financial Seminar: Wills, Trusts and Estate Planning.\n \nWhen: Thursday, July 31, 2014\nTime: 12:00 - 01:00 PM PST\nLocation: The Shop\n\nTopic: Financial Seminar \nDate: Thursday, July 31, 2014 \nTime: 12:00 pm, Pacific Daylight Time (San Francisco, GMT-07:00) \nMeeting Number: 921 220 712 \nMeeting Password: (This meeting does not require a password.) \nHost Key: 934595 \n\n------------------------------------------------------- \nTo start the online meeting \n------------------------------------------------------- \n1. Go to https://pandora-us.webex.com/pandora-us/j.php?ED=298782037&UID=505603422&RT=MiM0 \n2. If you are not logged in, log in to your account. \n\n------------------------------------------------------- \nTeleconference information \n------------------------------------------------------- \nProvide your phone number when you join the meeting to receive a call back. Alternatively, you can call: \nCall-in toll-free number: 1-8884075610  (US) \nShow global numbers: https://webexap-noram.conferencing-tools.com/GlobalNum.aspx?TollNum=&TollNumCC=1&TollFreeNum=8884075610&TollFreeNumCC=1&ParticipantCode=79778676 \nModerator Pin Code: 435 693 82 \nParticipant Pin Code: 797 786 76 \n\nTo check whether you have the appropriate players installed for UCF (Universal Communications Format) rich media files, go to https://pandora-us.webex.com/pandora-us/systemdiagnosis.php \n\nhttp://www.webex.com \n\n",
            "category": "Services"
        });

        Posts.insert({
            "title": "Missing Moleskin Notebook",
            "description": "All,\nSorry for the mass email, but I’m missing my important Moleskin Notebook that was left in the kitchen (15th floor) or surrounding conference rooms.  If you find it, please let me know.  \n\nThanks in advance.",
            "category": "Community"
        });

        Posts.insert({
            "title": "leftover food on 7",
            "description": "Hi All!\n \nWe have a huge platter of paninis and salad waiting to be eaten in the 7th floor kitchen!",
            "category": "Community"
        });

        Posts.insert({
            "title": "\"Women Who Code - East Bay\" @Pandora August 6",
            "description": "Hi Pandas, \n\nNext Wednesday evening Pandora will be hosting Women Who Code for its East Bay Chapter’s inaugural meeting. The theme is “Hack Night” and our own Laura Leaverton will be doing a lightening talk to kick things off. \n\nYou might be interested in attending if: \nYou’ve always wanted to learn more about coding but didn’t know where to start. Women Who Code has some great teachers who are always down to teach, and great resources for online modules/tutorials to get you started. \nYou have some work to do and plan to stay late anyway, tech or non-tech. Come “hack” with a community instead of sitting alone at your desk. \nYou’ve been reading about the lack of (gender) diversity in tech and feel motivated to do something about it. \nOakland is a budding tech community. Everyone’s welcome, including children/teens. Ping me to get an Outlook invite!\n\nBest,\nLisa ",
            "category": "Community"
        });

        Posts.insert({
            "title": "Kittens need a home",
            "description": "Hi All!\n\nSpamming you with kittens who need a home!Kittens need a home",
            "category": "Community"
        });

        Posts.insert({
            "title": "Thirdi South Asian Film Festival, Nov 6-15",
            "description": "http://www.thirdi.org/events/category/festivals/2014/films-2014/\n \nMy friend and I are going to watch “Dukhtar” on Nov 8. Trailer: http://vimeo.com/100581493",
            "category": "Gigs"
        });

        Posts.insert({
            "title": "FREE BodyRok Class in SF on 11/20 @ 7p",
            "description": "Hi all -\n\nMy friends at BodyRok Studio in SF have offered to host Pandora for a FREE 50min SCULPT & CYCLE class on 11/20 @7p. There will be light bites & refreshments (champagne, etc) afterwards. The catch is that the studio can host up to 24 people – so this invite is open to the first 24 people who respond to me. Those who sit close to me know how much I love this studio, so I am excited to share this op with other Pandas!!\n\nIn their own words: Our 50 minute Sculpt and Cycle classes combine core-focused strength training and cardio on reformers and bikes, a high-intensity workout that's low intensity on your body and joints. This incredible workout is set to upbeat current music, and taught in our modern light filled studio.  Our trainers goal is to inspire your team to sweat, bond, and grow together through this ROK'n experience. \n\nPlease respond to me, directly – don’t reply all, if you are interested. This is available to the first 24 respondents. \n\nCheers\nMeagan\n",
            "category": "Services"
        });

        Posts.insert({
            "title": "Looking for a Bay Area Band",
            "description": "Greetings all,\n\nI am looking for a band for my wedding next year. I was given the singular responsibly of picking an awesome band and I do not want to mess it up. I figure there is no one more in the know about local music than my fellow Pandas!\n\nHere are some of our desires for the band:\nCatalogue of R&B, Funk, and Soul songs ranging from the 60’s through present, including but not limited to such artists as: James Brown, Marvin Gaye, Al Green, Curtis Mayfield, Prince\nHorn section\nVocals\nAny New Orleans music is a plus\nWedding details:\nLocation: Santa Cruz\nDate: late July or early Aug 2015\nAny recommendations would be incredibly appreciated!\n\nThanks!\n\n-Matt\n",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "Need a last-minute cat-sitter!",
            "description": "Hi all!  I’m going out of town tomorrow afternoon, and my cat sitting plans have fallen through at the *very* last minute.  I’m looking for someone who could cat sit from tomorrow up until October 6th.\n \nAs this is a last minute pickle I’m extremely flexible on the arrangement, meaning I’m looking for anything from references for reliable cat-sitting services in SF to people interested in cat sitting themselves.  This can be a paid gig, but either way cuddles are free.\n \nIf anyone is interested or may have any leads, I would greatly appreciate them!  Thanks everyone!\n \n-Jessica",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "Food Drive August 11th  - 25th",
            "description": "For all the animal lovers! Our building is holding a pet food drive, please see below.",
            "category": "Community"
        });

        Posts.insert({
            "title": "one bedroom apartment in Glenview District, Oakland",
            "description": "1 plus bedroom in desirable Glenview\n\nhttp://sfbay.craigslist.org/eby/apa/4688565329.html",
            "category": "Housing"
        });

        Posts.insert({
            "title": "Seeking a Pixar Contact / Make Daddy Look Cool",
            "description": "Hi,\n\nSorry for the spam, but I ‘m on a mission to find a contact at Pixar for my daughter’s kindergarten class. Please let me know if you can help out.  Thanks! \n\nWhat: Looking for a personal contact at Pixar\n(For) Who: My daughters’s kindergarten class [North Oakland Community Charter School]\nWhy #1:  I am planning a walking field trip of the school’s neighborhood and Pixar is across the street\nWhy #2: Make daddy look cool\nWhere:  The school is located in West Oakland/Emeryville @ 40th and San Pablo\nWhen:  October 30th\nReward: Eternal gratitude (negotiable)\n\nThanks,\nDamon",
            "category": "Wanted"
        });

        Posts.insert({
            "title": "Pandora Hosts Women 2.0",
            "description": "When: Thursday, November 06, 2014 6:30 PM-8:30 PM. (UTC-08:00) Pacific Time (US & Canada)\nWhere: Backstage\n\n*~*~*~*~*~*~*~*~*~*\nHi Everybody,\n\nThis will be our last Women 2.0 meet-up this year at Pandora.  There are some great speakers scheduled for this event, Poornima Vijayshanker (Founder of Femgineer & Bizeebee) and Arum Kang (Co-Founder and CEO of Coffee Meets Bagel).  We will be providing food and drinks, so just bring your smiling faces and come share the Pandora culture with some of these great potential candidates. \n\n\n\n***Employees do not need to register for the event!***\n\n\n\nAgenda:\n\n6:30 Networking and check in\n\n7:00 Intro by Women 2.0 Team member\n\n7:10 Poornima Vijayshanker, Founder of Femgineer & Bizeebee \n7:20 Arum Kang, Co-Founder & CEO of Coffee Meets Bagel\n\n7:30 Q&A with Speakers with audience\n\n7:45 Networking\n\n\nAttendees:\n\nThe attendees typically range from technical women to women who work in tech in other non-technical functions.\n\n\nAbout City Meetup:\n\nWomen 2.0 City Meetup creates an inclusive community for anyone working, innovating, or investing in technology. Women 2.0 City Meetup is open to both women and men. \n\n\nAbout Women 2.0:\n\nWomen 2.0 is an event/content platform that aims to increase more women in tech and increase more women founders. http://women2.com \n\n\nHow/Why is Pandora involved: \n\nWomen 2.0 City Meetup is currently in 17 cities, including Oakland. For the first time, City Meetup is happening in Oakland and we’re proud to be the first-ever venue sponsor (location, snacks, bev). Increasing women in tech is important to Pandora and we’ve committed to hosting six of these meetups from April onwards. ",
            "category": "Community"
        });

        Posts.insert({
            "title": "Looking for a nanny?",
            "description": "My excellent friend Susannah is looking for her next nanny gig. She's good people. Info below.\n\n\nHello, my name is Susannah and I have over 15 years of experience\nworking creatively with infants and children. As a caregiver it was a\npleasure to be part of raising an amazing (now) teenager from the time\nshe was 4 1/2 months old until she was 10 years old. As a nanny, I\nbring a nurturing, creative and playful spirit. My communication style\nis clear, gentle and direct. I am comfortable supporting parents who\nseek to build consistency and boundaries. In 2003 I earned my teaching\ncertificate with an emphasis in Early Childhood Development and I have\nan M.A. in Counseling Psychology with a focus in Expressive Arts\nTherapy. I am CPR/First Aid certified and have experience working with\nphysical/learning disabilities. I am open to doing errands, cooking,\nlight cleaning/laundry, driving kiddos to activities,\ncreating/facilitating art, music, dance projects, dog walking, helping\nwith homework, and using my Professional Organizing skills to make\nlife easier for families. My rate is $23-$30 an hour. Starting 9/1/14\nI am committed to caring for your infant, child(ren) over the next 11\nmonths. Ideally I'd like to nanny 2 full weekdays (preferably Monday &\nTuesday) with 1 evening or weekend day: 18-24 hrs a week total. In\naddition to nannying, I will be working 3 days a week, unpaid in an\nagency with families as I earn the required hours for my Marriage and\nFamily Therapist license. Please email me if you think I'd be a good\nmatch for your family. I look forward to hearing from you :) My\ncontact info: mostoutoflife@gmail.com\n\n\n-Rain\n",
            "category": "Services"
        });

        Posts.insert({
            "title": "TruMaker custom fitted shirts for men",
            "description": "Hey Oakland!\n\nMy cousin Nicole just started working for TruMaker, a local San Francisco company that aims to take the pain out of shopping for men’s clothing. They have an Outfitter come to you to take your measurements, you select from tons of different styles, patterns, fabrics, and fits, and then they create the clothing and send it to you. Your own bespoke shirts, ties, and eventually jackets for business or casual. \n\nFrom their website:\nSometimes the best way to approach new problems is to rethink old solutions.\n\nMade-to-measure—or as we call it, built-to-fit—has its roots in a different era of personal style, when clothes were cut and sewn to fit individuals and be worn for years, not fill discount shelves and wear out after a season. But to fit into our modern lives, we needed the service to be accessible, convenient, and easy. It had to combine the integrity of yesterday’s techniques with the innovations of today’s technology. It had to enable men to spend less time worrying about their wardrobes and more time doing what they love.\n\nWe wanted a brand that spoke to our relationship with the changing world; a method steeped in tradition but empowered by new industry. We wanted ruggedly-refined and classic styles made to men’s exact measurements, with all the benefits of local, personalized service and all the ease of online ordering.\n\nWe wanted better products. We wanted a better experience. We wanted a better way to shop.\n\nSo we created Trumaker.\n\nIf you’re interested in a fitting session please don’t hesitate to email her at nfletcher@trumakeroutfitter.com and tell her Nick sent you. \n\nThanks!\n\nNick",
            "category": "Services"
        });

        Posts.insert({
            "title": "VTO: Year Up: Mock Interview Workshop 11/5",
            "description": "Hi everyone,\n\nForwarding this wonderful, rewarding, and easy VTO opportunity to do mock interviews with Year Up students to help them prepare for their future job searches. It’ll only be a few hours in the afternoon, and I always learn something new whenever I participate. \n\nYear Up is a national organization that works with disconnected youth, mostly from underrepresented communities, between the ages of 18 – 24 and trains them in specific skills that are in demand at larger companies. For example, QA, IT, and project management. The program lasts one year, and during the latter six months of the program, the students are placed at a company like Salesforce or Google to do hands-on-training. We’re working with Year Up now to see how we can leverage the org to pipeline for some of our entry-level roles. In the mean time, any other support from us would be greatly appreciated. \n\nAm happy to answer any questions that you might have. Thanks and have a great weekend!\n\nBest,\nLisa ",
            "category": "Community"
        });

        Posts.insert({
            "title": "VTO: Looking for pod leaders for Out for Undergrad Tech Conference!",
            "description": "Hi Pandas, \n\nWe're a sponsor again for this year's Out for Undergrad Tech Conference that's happening on 10/18 at the Twitter HQ in SF. This is a great recruiting and diversity opportunity for us. We have some great folks lined up to represent Pandora in speaking sessions and at the career fair, but we do still need two people to serve as \"pod leaders\" at the conference.  \n\nIn a nutshell, Project Pods are a way for our attendees to form strong ties and collaborate on big ideas. Groups of 8\nstudents work together prior to OUTC (through teleconferences and webinars) to develop an idea for a product, app, company, etc. The students then meet in-person for the first time at OUTC in October. After working throughout the weekend, each pod pitches an ideas to volunteer representatives of VC firms and incubators, including Y Combinator, New Enterprise Associates, Fog Creek, Harvard Business School, Venture Out, Andreessen Horowitz, Stanford GSB, and more.\n\nAs a Pod Leader, your role is to facilitate outcome-driven discussion, manage participants with different communication styles, resolve conflict, and serve as the pod’s point person. Attendance on Sunday is optional, and a separate document will be sent to Pod Leaders with expectations and responsibilities.\n\nTechnical volunteers preferred, and you don't have to identify as LGBTQ to volunteer! More info attached.\n\nIf you're interested, please little r me! \n\nBest,\nLisa ",
            "category": "Community"
        });

        Posts.insert({
            "title": "Ride to Tiburon needed",
            "description": "Hey Everybody,\n\nI am going to an art reception in Tiburon this evening and am looking for a ride. I wanted to know if any Pandas commute to Marin? Shoot me a message if you're planning on driving to the Mill Valley/Sausalito/Tiburon area after work.\n\nThanks!",
            "category": "Community"
        });

        Posts.insert({
            "title": "Got 2 Rhye Tkts @Fox 11/9?",
            "description": "Looking for 2 Rhye Tickets at the Fox this Sunday. LMK. Thnx!",
            "category": "For Sale"
        });

        Posts.insert({
            "title": "<First Friday Spam> \"Dig\" A Solo Art Show by Lexx Valdez @ SoleSpace",
            "description": "Hey Friends,\n\nI'd like to invite you all to a solo art show for my friend Lexx Valdez, this Friday, at SoleSpace: http://youtu.be/5n1WxEhtVK0.  If you were already planning on being at First Friday, you should come through.\n\n----------\n\nFriday, November 7th, 2014 • 7pm -10:30pm \n\n\"DIG\" - A Solo Show by Oakland-based graphic designer and collage artist, Lexx Valdez. \n\nSoleSpace: Shoe Gallery & Creative Lab\n(((Celebrating it's 2 YEAR Anniversary)))\n1714 TELEGRAPH AVE OAKLAND CA.\n\nSounds by:\n• DJ Bluz (ConnectFlow Radio) \n• DjCentipede (CHANGE THE BEAT/ CB Records/ MOPHONO)\n• DJ Haylow (Roy Ayers Project / Distortion 2 Static))\n\nwith a special LIVE performance by Dirty Boots!\n\n----------\n\nLexx is an Oakland-based graphic designer who has done design work for many artists, events and organizations.  In fact, some of you may recognize her work from the most recent Oakland Music Festival:\n\n\n\n\nJerome Atendido | Account Executive | Pandora\n2101 Webster St 16th Fl, Oakland, CA 94612\nw 510.858.3283 | jatendido@pandora.com\n\nWhat makes Pandora a must buy radio station: http://butlertill.com/pov/what-makes-pandora-a-must-buy-radio-station/",
            "category": "Community"
        });

        Posts.insert({
            "title": "Left Over sandwiches & salad ",
            "description": "Hi Everyone,\n \nWe have some left over sandwiches and salad  -  7th floor kitchen.\n \nThanks.\n ",
            "category": "Community"
        });
    }
});