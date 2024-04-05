const MembersModal=({memberId})=>{
    const members=[
        {},
        {
            name:     "Maya Rotenberg",
            pronoun:  "she/her",
            voicePart:"Tenor 1",
            Majorminor :"Data Science",
            Bsemster : "6th",
            Nsemster : "2nd",
            interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
            bio: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal).",
            q1 : "sup.",
            q2 : "Oh, sing it now!, You know I want you.",
            photo: "maya.jpg"
        },
        {
            name:     "Amanda Sakimura",
            pronoun:  "she/her",
            voicePart:"Tenor 1",
            Majorminor :"English/Art History, Creative Writing Minor",
            Bsemster : "2nd",
            Nsemster : "2nd",
            interests: "bees, movies, b-movies, making media comm regret not putting a word limit for bio",
            bio: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little.",
            q1 : "please check out applerankings.com",
            q2 : "Option 14, wehhhh, You know I want you.",
            photo : "amanda.jpg"
        },
        {
            name:     "Alex Pease",
            pronoun:  "please don't thanks",
            voicePart:"Bass",
            Majorminor :"Chemistry Major, Data Science + Music minors",
            Bsemster : "4th",
            Nsemster : "3rd",
            interests: "Singing, gaming, complaining, no longer cyberbullying the managers on discord since they started posting in announcements! We love progress!",
            bio: "I’ve been drafting my bio with some other people and ran out of ideas, but I got some pretty funny feedback in the process:\n “You’re not funny”\n “You’re doing great”\n“No.”\n “I love long stories”\n “Yo wanna do NYT Connections”\n“Wordle?”\n“Wait you got 6”\nAnyways I give up I’m too tired for this. This is Alex and you’ve been watching Disney channel.\n“Alex you need to work on this”\naslfjasdlkasdfl;kjflsjka I’ll get better ideas next semester I swear trust\" ~Alex, Fall 2023\nI unfortunately did not get better ideas next semester (now), so I'll just copy paste and make fun of myself I guess? Seems about right.",
            q1 : "Sharetea doe go tones",
            q2 : "Yes, No, Oh, sing it now!, All around the world!, What the hell does that mean, Option 14, true, false, wehhhh, You know I want you.",
            photo : "alex.jpg"
        },
        {
            name:     "Bhaskar Roberts",
            pronoun:  "He/Him",
            voicePart:"Tenor 2",
            Majorminor :"Computer Science",
            Bsemster : "No one knows",
            Nsemster : "3rd",
            interests: "Dropping out of school to try and make it on Broadway",
            bio: "A few years ago, I was driving alone on the highway at cruising speed. The road was straight and the sun was hot, and the moment felt right to sing my heart out. Car singing is way more fun than shower singing because in the car, I really let loose. So I was reaching the climax of a favorite Broadway showstopper, belting with all my heart, when I glanced out my right window. There was a car driving alongside me, and inside was a woman staring at me with an expression that said, “Does he think the car is soundproof?” We locked eyes, sharing the moment when I realized that she was watching me not realize that she heard me. We both looked away quickly. It was awkward for both of us.\nThere has to be a moral to this story somehow. Maybe it’s that singing should be emotive without inhibition. Sing for yourself and sing from the heart. Or maybe the moral is that you should never make eye contact with people because if they’re already looking at you it’ll be twice as awkward as not making eye contact. Yeah, I think that’s the moral.",
            q1 : "",
            q2 : "Yes, You know I want you.",
            photo : "bhaskar.jpg"
        },
        {
            name:     "Ellington Chen",
            pronoun:  "He/Him",
            voicePart:"Baritone",
            Majorminor :"In order from favorite to least favorite I'd probably go C,G,E♭, B, F#, D♭, A♭,A,A#... Take with that as you will. If I missed on of your favorites let me know in the comments below!",
            Bsemster : "4th",
            Nsemster : "4th",
            interests: "In order from most to least favourite I'd have to go tech, pharmaceuticals, consumer staples, materials, real estate, government bonds, APY, debt, and crypto. Wait no, switch debt and crypto. Yeah, yeah, that looks better. Hey what ever happened to NFTs?",
            bio: "In order from least favorite bits to most favorite bits:\nHEY HEY YA!, \"So I have no idea what to write for my bio, but I’m in a funny and silly™ mood so I’ll tell some jokes and you’ll have to get the punchline from me in-person\", T1cest, 1..2...3..., Albania,  me personally, that was my nickname in highschool, sooooo, I don't get it, BEEEET, YOUUUUUUUUUUUUU, [redacted], COME?!, hickeys (ft. Eddie & Steph), you know I want you, *moans*, Eddie being racist, baricest, WAAAA D:",
            q1 : "uwu",
            q2 : "You know I want you.",
            photo : "ellington.jpg"
        },
        {
            name:     "Justin Wong",
            pronoun:  "He/Him",
            voicePart:"Baritone",
            Majorminor :"CS",
            Bsemster : "8th",
            Nsemster : "2nd",
            interests: "Skiing, Climbing, Youtube Shorts, Karaoke, Basketball",
            bio: "Justin Wong is a baller. He shoots cause he's a shooter; sings because he's a singer; eats cause he's an eater. He once told me, \"wow, that\'s cool\" and was right. Legend has it that he\'s a real main character, or at the very least definitely a character. It was once said, \"Before they met Justin Wong, the Black Eyed Peas were simply known as \'The Peas.\'" ,
            q1 : "Hi mom",
            q2 : "Oh, sing it now!",
            photo : "justin.jpg"
        },
        {
            name:     "jerry",
            pronoun:  "He/Him",
            voicePart:"Baritone",
            Majorminor :"Chemical Engineering / Theater",
            Bsemster : "8th",
            Nsemster : "3rd",
            interests: "Video Games, uhhhhhhh, Acapella, uhhhhhhhhh, Working Out, uhh oh and Acting",
            bio: "The same one from before is good thanksssssssssssssssssssssssss" ,
            q1 : "no",
            q2 : "Yes, You know I want you.",
            photo : "jerry.jpg"
        },
        {
            name:     "Athena Liu",
            pronoun:  "they/he",
            voicePart:"Tenor 1",
            Majorminor :"Chemistry",
            Bsemster : "2nd",
            Nsemster : "2nd",
            interests: "crochet, machine girl, laoganma, kim kitsuragi, chemistry, daniel radcliffe's left ear, crustacean, steamed hams",
            bio: "THE PESTO.....!!!!!!!!!!! YAY THE PESTO!!!!!!!!!!!!!! WHEEEEEEEEEEE!!!!!! :3333333 xoxo UwU !!!LOBOTOMIZER BEAM GO!!! ..... .... [reboot] ... [3] ... [2] ... [1] ... [liftoff] ... ... ... how do you feel? ........ x xxrs xxxxxssxxxxxxxgggggrrrrfffffhhhh hhh h a a ab abc i am yes no up down tom bottom strange charm i. i. ... i....... i kick miette's body like a football there are cathedrals everywhere for those with eyes to see mlp infection au neil banging out the tunes eggs bacon grits sausage nyc diner serves coca-cola the old fashioned way meth lab oompa loompa reddit's worst volume control ui mogging mewing road work ahead i sure hope it does ebony darkness dementia raven way dogecoin neuralink coquette spiders georg mom sold me to one direction and ............ [signal lost]" ,
            q1 : "sometimes",
            q2 : "Oh, sing it now!, All around the world!, wehhhh, You know I want you.",
            photo : "athena.jpg"
        },
        {
            name:     "Stephanus Yang",
            pronoun:  "he/him",
            voicePart:"Tenor 2",
            Majorminor :"Chemistry",
            Bsemster : "4th",
            Nsemster : "4th",
            interests: "Ellington Chen",
            bio: "Have you ever asked AI to generate an image of a really really good-looking teenage Taiwanese male UC Berkeley student who is also in acappella? Well if you have, then you don't need to read the rest of my bio, because the image you saw was indeed an image of me. Now some of you might argue that there are actually no good-looking individuals on the campus of this school, and every student just has so-called \"Berkeley Goggles\". I would agree with you... if I didn't look in the mirror every morning. And hey, since you already bothered to come all the way to this website, scroll down to find the most fit-looking young man on this page, and begin reading this bio, I thought I would share a special treat with you. I have decided to finally publish my highly curated highly personalized day-to-day routines to live by in order to look almost as good as me.1. Be Taiwanese. I recommend looking into RCTA if necessary.\n2. Dye your hair. It doesn't have to be the ones on your head.\n3. Spend at least 4 hours a day with Ellington. Doing what? That I won't share." ,
            q1 : "I was writing this bio and looked up some examples and they were so funny they got me dead 2 3 4.If anyone has free meal swipes please donate them to me",
            q2 : "Oh, sing it now!, wehhhh, You know I want you.",
            photo : "stephanus.jpg"
        },
        {
            name:     "Kian Chou",
            pronoun:  "he/him",
            voicePart:"Bass",
            Majorminor :"MEB",
            Bsemster : "2nd",
            Nsemster : "2nd",
            interests: "my girlfriend, kpop, gym, premed, cookie run kingdom, webtoons, birds aren't real",
            bio: "Kian (pronounced like the pepper), a member of the shadowy \"mega evil brigade,\" keeps his true goals shrouded in mystery. While some whisper of world domination, others suspect a more nefarious plot involving...birds? Is Kian a misunderstood environmentalist or a cunning avian overlord? Only time will tell!\nIn his free time, Kian enjoys a variety of musical genres, including kpop and edm. When not plotting (or protecting the skies from feathered robotic fiends), you can find Kian at the gym, playing cookie run, hanging out with his girlfriend, calling his girlfriend, or sleeping. One thing is certain: Kian's presence guarantees an element of the unexpected, so keep your eyes peeled and your tinfoil hats handy!\nNoteworthy Achievements:\n- Successfully infiltrated Noteworthy for two semesters without revealing his true identity\n- Maintains an astounding record of mega bopping during vocal rehearsals (or is he using some sort of mind control device?)\n- Ranked highest for \"bird\" government tracking chips collected\n- Has a low spice tolerance despite having a name pronounced like a pepper\nQuestions Kian Would Like Answered:\n- Are birds real?\n- Do I have Alzheimer's?\n- Was I crazy once?\n- Hotel? \n- Do I have Alzheimer's?\nQuestions Kian Would Like Answered:\n- Do I have Alzheimer's?\nQuestions Kian Would Like Answered:\n- Do I have Alzheimer's?",
            q1 : "you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you you know i want you ",
            q2 : "Oh, sing it now!, All around the world!, You know I want you.",
            photo : "kian.jpg"
        },
        {
            name:     "Eddie Cekici",
            pronoun:  "he/him",
            voicePart:"Bass and Vocal Percussion",
            Majorminor :"Chem Bio and Stats Double Major",
            Bsemster : "8th",
            Nsemster : "6th",
            interests: "Being Albanian, Olive Oil, Gipsy Kings, Outer Wilds, Jon Bois, Two Words",
            bio: "It is 5:15 AM as I write this and I genuinely believe my soul has the mandate of heaven. I'm like if the Jimmy Timmy Power Hour was a person. I'm like if you averaged every white guy in your local mall between the ages of 16 and 24. I'm like Warren Buffet with Benjamin Button disease. I'm like if the infinite monkeys were trying to write High School Musical 2 instead. I'm Carlton Banks minus the money, plus a gambling addiction.\nOk time for a real bio. Hi, my name is Eddie!!! You can tell it's me because of the way I am. In lieu of actual facts about me, here are some banger tweets I've made over the years:\"one must imagine the itsy bitsy spider happy\"\n\"Dating is so easy all you have to do is send her any photo and then say 'us'\"\n\"The 5 W's of owl journalism: who who who who who\"\n\"Gotta be crazy to be like oh hey that guy from my cancer support group i wonder how hes doing JOHN KRAMER DID WHAT NOW\"\n\"Group project partner just called me edwin how do i kill him\"\n\"NOTEWORTHY? Ermmm, this is epic! Come on boys, lets do a song! *Pulls out pitch pipe*\"\n\"the irony of arranging im just ken while my girlfriend sleeps soundly in my own bed is not lost on me\"\n\"Gf keeps saying i have a slutty little waist\"\"(Guy whose been in a coma for 40 years): Wow this is EXACTLY like 1984\"\n\"When they say something so agoraphobic that you gotta hit them with that extrovert stare\"\n\"Testing my physiognomy skills by seeing who gets off of the tirana-barcelona plane and immediately deciding their ethnicity\"\n\"She Beastie on my Boys till im Intergalactic\"\"Ok at this point the mission is quite possible\"\n\"What if you were making out n they say... ALL HAIL PLANKTON... thatd be so f***ed up 😥\"\n\"...i would like to remind everyone about the time i was matched against someone in a hazbin hotel shirt during a magic the gathering tournament and after i beat him he proceeded to drink straight from a 2 liter bottle of pepsi\"\n\"insanely proud of my sister for getting into med school but now i have an issue because she is becoming the ideal immigrant child so i think i have to Highlander her\"\n\"they feed us poison (college parties) so we buy their \"cures\" (red solo cup beer) while they suppress our medicine (nyquil from the cap)\"\n\"Calling each of my asian friends with a dynastic last name a nepo baby\"\n\"Me when im thinking: Wow this is just like Disco Elysium\"\n\"God the costco pumpkin pie is so efficient it makes me weep tears of euphoria\"\n\"Dodging the discord furry allegations\"\n\"Ok wise guy lets see YOU take a crack addict\"\nQuil Squared recipe:\nOne part DayQuil\nOne part NyQuil\nOne part Olive Oil\nOne part Everclear\nI'm like slam poetry but not bad. I'm like Abraham Lincoln if he never became president. I'm Joe Rogan with hair. I am NOT okay. I'm going to sleep.\n\n\n\n\n\nI'm Phineas AND Ferb.",
            q1 : "no",
            q2 : "You know I want you.",
            photo : "eddie.jpg"
        },
        {
            name:     "Andrew Tran",
            pronoun:  "he/him",
            voicePart:"Tenor 2",
            Majorminor :"Chemical Engineering",
            Bsemster : "6th",
            Nsemster : "4th",
            interests: "Stephanus Yang, Evan Yang, Evanus Yang, Stephie, Steph Anus, Steph, Mr. President, My President 👨‍❤️‍💋‍👨, Steph Curry",
            bio: "Here are some random book quotes that go hard:\n\n- \"At least seventy three.\"\n- \"What?\"\n- \"Canes? Canes!?!?! CAAANEEEES!!!!!\"\n- 나는 사나이\n점잖아 보이지만 놀 땐 노는 사나이\n때가 되면 완전 미쳐 버리는 사나이\n근육보다 사상이 울퉁불퉁한 사나이\n그런 사나이\n- “I’m atheist, gay, and Chinese. I’m not seeing heaven.”\n- \"I could fit AT LEAST seventy in there.\"\n- \"George looked into Franks chocolate orbs.\"\n- \"Everything the light touches is mine you fuck.\"- \"Hup! Hap! Hup! Hyah!\"\n- “Add to the stack! Add to the stack!!",
            q1 : "ur mom",
            q2 : "You know I want you.",
            photo : "Andrew.jpg"
        },
        {
            name:     "Ethan Jang",
            pronoun:  "he/him",
            voicePart:"Bass",
            Majorminor :"Undeclared (Intended Applied Math) (questionable on the intended part)",
            Bsemster : "2nd",
            Nsemster : "1st",
            interests: "lore dumps in presentation format, listening to the same song for an entire day, telling myself I will start that new show today, being Korean, laughing to hide the fact that I didn’t hear you, pooja what is this behavior, stan loona for clearer skin",
            bio: "Oh my god vogue you caught me at a great time! I was just skinning a guinea pig I found in my piano! No time to waste (literally I have an hour to write this bio), let’s get started:\n\nWhat is your favorite childhood memory?\nWatching the Ghost Stories dub at 3am on a school night\nWhat’s your go-to comfort food?\nCaviar\nHow much alcohol would it take for you to sleep with the pope?\nSecret ;)\nDo you prefer coffee or tea?\nTea? As in…bubble….teabobabobabobabobaobaobaobaobaobaobaob\n  What’s your favorite hobby?\nServing camp realness while under mental duress\nWhat’s the most adventurous thing you’ve done?\nBeing gay\nWhat’s your dream job?\nMarrying rich\nWhat’s your favorite thing about yourself?\nMy humongous, throbbing, pulsating heart <3\nDo you have any hidden talents?\nYes, in fact I still yet have to find them, can you help me on my search? *You feel an outside force pushing your head up and down in a nodding motion*\nHow many countries have you taken a shit in?\n  3, 4 if you include the moon\n      What’s your favorite way to relax after a long day?\n    Bed\n     What’s something you’ve always wanted to try but haven’t yet?\n   Tom Welling\n What’s your favorite type of weather?\n  Acid Rain\n        What’s the scariest movie you’ve ever seen?\n   Har har harhar har har harhar harhar har har harhar har har harhar\n What’s your favorite thing to do in the rain?\n  Eat the rain\n If you could witness any historical event, what would it be?\n  The space race in the perspective of a flat earther\n  Y/N (amazed): Lastly, where are you REALLY from?\n …I didn’t want to have to be the one to tell you but…I’m your step bro, Y/N…Your parents- I mean… OUR parents they… they wanted to hide the affair between our dad and jungkook to secure your place as the newest CEO of Noteworthy Evil Inc. but I just can’t stay on this toxic gossip train any longer. I need to break my silence and reveal to the world the true me! \n  *I jump Mario style and slowly start phasing out of existence, leaving you alone with my partly skinned hamster*",
            q1 : "freaky fishy fishy I’m so freaky fishy fishy I’m so freaky fishy fishy I’m so freaky i can tank em all freaky fishy fishy I’m so freaky fishy fishy I’m so freaky fishy fishy I’m so freaky i can tank em all freaky fishy fishy I’m so freaky fishy fishy I’m so freaky fishy fishy I’m so freaky i can tank em all freaky fishy fishy I’m so freaky fishy fishy I’m so freaky fishy fishy I’m so freaky i can tank em all \n\n*in a British accent*\nOnce I make my move, then you’re free, to check the king 😔\nNo, Ron no 😩\nHwhat is it? 😧\nHe’s gawing chew sacrifice himself 😭👉\nNo you KAnt 😭 there must be another way!! 😭\nYew wanna stop Snape from gittin that stone or nAWt 🫢\nHarry, it’s yew that has to gowon, i KNOWet! 🥺👉\nNot me 😣, not hermining 😓, YEW 😩👉",
            q2 : "Option 14",
            photo : "ethan.jpg"
        },
        {
            name:     "Tom Guan",
            pronoun:  "he/him",
            voicePart:"Baritone",
            Majorminor :"Psychology",
            Bsemster : "8th",
            Nsemster : "4th",
            interests: "sports, working out, going flat, fixed interest, compound interest, playing video games, being sober at parties, kian chou, ellington chen, eddie cekici, bari sectionals, WEEEEEEEEEEEEEHHHHH ",
            bio: "So people (rightfully) say that I talk about myself too much, so I'll talk about every other person in this lovely group! i dont really know their names very well though, so i'll give describing features about their personality and whatnot.\n\n1. listens to me yap endlessly, most boomer boomer, t1s say they're ugly, one of the biggest scandals in american history\n2. absent parent that we all love, the mouse to my cat, eternally sick and busy, lives on a pretty street\n3. teddy bear, strong desire for \"you\", did someone say nice?, day 1 chiller, day 100 lover uwu\n4. \"where'd [name] go?\", direct and blunt, noteworthy’s trailblazer\n5. Goat ragecager, most severe case of fomo in nw, quick-witted, “you picked THAT in customs???”\n6. blue paper, true day 1, brother that i wish i had, lover that i have, 600 point gap is crazy, sweetheart but rarely shows it\n7. loves preaching, man (not a muppet), giver of great hugs, *joins nw* “wait, they actually joined??” \n8. most hater and supporter, limps, always there (minus midterm season), best banter, a king, \n9.  7 years ago, old parent gang, social liaison between old and new, leaving/left to get 牛乳, loves the color mint\n10. nw on the side, darkest hair in nw, most chaotic evil, always brings positive vibes, trying to steal my man :(\n11. chomp, intellectual crackhead, pop culture encyclopedia with some pages missing, computer \n12. ADHD (awesome dad, high dAmount of Talking), did it, smoochies, old but not, nw's rock <3\n13. literally uc berkeley, iconic smile, super kind but with a mean twang, aspiring alcoholic, undying hatred towards the vests  \n14. meanest nice person in nw, gee enabler, always witnesses me doing stupid stuff and silently judges me\n15. least overconfident ragecager, prolly has no panties anymore, photographer goat, has a sick bike \n16. Goat ragecager (drinks all the cups), sweet and spicy (super kind, but sassy), chorale to nw pipeline goes strong \n17. most zoomer boomer, also the absent parent that we all love, most bro-y in nw, fire on the aux  \n18. barely, *throws it back while crying*, most boomer zoomer, super caring, makes me wish i had a younger sibling \n\nIf you made it this far... of course I actually know all of these people by name! here's the answer key if you're interested! (https://docs.google.com/spreadsheets/d/1-z0StcsrOEBwbYJ1b6dYT0SiaZGe32NioXSbjEd8no0/edit?usp=sharing)\nTo the first person to correctly guess all 18 people, I'll buy you boba :)",
            q1 : "media-comm best comm",
            q2 : "You know I want you",
            photo : "tom.jpg"
        },
        {
            name:     "Madlen Jalalyan",
            pronoun:  "she/her",
            voicePart:"Tenor 1",
            Majorminor :"English, Slavic Languages and Literatures (major)",
            Bsemster : "6th",
            Nsemster : "1st",
            interests: "singing, cooking, reading, writing, being Armenian, plotting the demise of my enemies, ending things on a cliffhanger, Sherlock Holmes, solving escape room puzzles",
            bio: "When people find out I’m an English major, they immediately assume I’m an amazing story teller. But I’m so much more than that! An absolute menace during rage cage, a cinnamon roll that would actually kill you, a chronic overthinker/daydreamer, a holy mother, your personal close-reading machine that will illuminate things you didn’t know about yourself (and look pretty doing it).\nBut now. Let me tell you a little story about myself. I’m Madlen, (not Madeleine, or Madelyn, and definitely not Madlyn). Bet you haven’t seen that spelling before... Why is my name spelled like that, you may wonder? Well, it all started when my mom met my dad, and they fell in love and they had me. It was at this time… after casting a single gaze upon me that they knew…\n…\n …\nCliffhanger! Tune in next week for the update.\n…\n…\nWait, what do you mean there won’t be an update? NOOOOOOOOO…",
            q1 : "Excited for the website! (I don’t know what else to say here!)",
            q2 : "Oh, sing it now!, All around the world!, What the hell does that mean, Option 14, true, false, wehhhh, You know I want you.",
            photo : "madlen.jpg"
        },
        {
            name:     "Christopher Yuan",
            pronoun:  "he/him",
            voicePart:"Tenor 2",
            Majorminor :"Microbial Biology",
            Bsemster : "8th",
            Nsemster : "1st",
            interests: "(3+15)/2=9",
            bio: "you know the hard part about writing this bio is making it sound interesting and funny like everyone else's and pretending like i'm not the token basic bitch here, so here, have some of my historical quotes of all time:\n\naccording to all known laws of physics, bees shouldn't be able to fly and you shouldn't be that ugly. but here i am eating honey nut cheerios \n\n--richard nixon\n\ndo you think god stays in heaven because they, too, live in fear of what they have created? haha nukes go brrrrr \n--conversation between oppenheimer and his sleep paralysis demon\n\nthe only way to heal pop music is to have olivia and sabrina get married on my private jet with joshua as the minister so i can get a tax writeoff as a religious institution\n--taylor swift",
            q1 : "if you knew then i would have to fuck you",
            q2 : "Yes, No, Oh, sing it now!, All around the world!, What the hell does that mean, Option 14, true, false, wehhhh, You know I want you.",
            photo : "christopher.jpg"
        },
    ];
    const Id=`membersModal${memberId}`;
    console.log(memberId);
    const member=members[memberId];
    console.log(member);
    const Photo=`img/members/${member.photo}`;
    console.log(Photo);
    
    return (
        <dialog id={Id} className="modal">
            <div className="modal-box w-500">
                <div className="h-screen w-500 flex justify-center items-center gap-20 bg-base-200 hero">
                    <div className="fade-in hero-content flex-col px-[15%] gap-20">
                        <img
                        src={Photo}
                        className="max-w-md rounded-lg shadow-2xl md:hidden lg:block"
                        alt=""
                        />
                        <div>
                            <h1 className="text-5xl font-bold">{member.name}</h1>
                            <ul className="list-disc word-break:break-all">
                                <li><b>Pronoun: </b>{member.pronoun}</li>
                                <li><b>Voice Part: </b>{member.voicePart}</li>
                                <li><b>Major(s)/Minor(s): </b>{member.Majorminor}</li>
                                <li><b>Semester in Berkeley: </b>{member.Bsemster}</li>
                                <li><b>Semester in Noteworthy: </b>{member.Nsemster}</li>
                                <li><b>Interests: </b>{member.insterests}</li>
                                <li className="work-break:break-all"><b>Bio: </b>{member.bio}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}

export default MembersModal;