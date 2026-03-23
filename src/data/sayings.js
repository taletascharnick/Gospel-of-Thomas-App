// Base sayings data — all 114 sayings.
// Sayings 1–5 include full reflections, concepts, and contemplation prompts.
// Sayings 6–20 include saying texts and contemplation prompts.
// Sayings 21–114 are stubs ready to fill in via the admin panel.
//
// To add your own content permanently, edit via the admin panel,
// export the JSON, and paste the overrides back into this file.

export const baseSayings = [
  // ─────────────────────────────────────────────────────────────
  // SAYINGS 1–5  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    number: 1,
    text: 'These are the hidden sayings that the living Jesus spoke, and which Didymos Judas Thomas wrote down. And he said: Whoever finds the interpretation of these sayings will not taste death.',
    reflection: `The Gospel of Thomas opens not with a narrative but with a declaration of stakes: whoever finds the interpretation of these sayings will not taste death. This is the invitation — and also the warning — for what follows demands interpretation, not mere reading.

The word "hidden" does not mean deliberately withheld. It means concealed within, like a seed inside a fruit. These sayings have a surface and a depth. Most of us spend our lives on the surface.

The phrase "the living Jesus" is significant. The text presents these as the words of one who is alive — not a past teacher but a present reality. This invites us to read not as scholars of history but as people listening for a voice that speaks into this moment.

"Will not taste death" resonates through mystical traditions worldwide. It points not to physical immortality but to a shift in identification — from the mortal, constructed self to something deeper that was never born and will never die. The promise is not escape from physical death but freedom from the tyranny of it.`,
    contemplationPrompt: 'What would change in how I live if I truly knew myself to be beyond death? What is it in me that already knows this?',
    concepts: [
      {
        term: 'Hidden sayings',
        definition: 'The Coptic word (pshot) suggests something concealed within, requiring inner searching to uncover — like the kernel within a shell. Not secret from others, but secret until the moment of genuine encounter.'
      },
      {
        term: 'Living Jesus',
        definition: 'The Gospel of Thomas presents Jesus not as a historical figure of the past but as a present, living source of wisdom — accessible in the moment of genuine seeking.'
      },
      {
        term: 'Interpretation',
        definition: 'These sayings are not meant to be understood immediately. They work like koans — the mind must wrestle with them until a deeper knowing opens.'
      }
    ],
    relatedSayings: [2, 18, 111],
    published: true
  },
  {
    id: 2,
    number: 2,
    text: 'Jesus said: Let the one who seeks not stop seeking until they find. When they find, they will be troubled. When they are troubled, they will marvel — and they will reign over all.',
    reflection: `This saying maps the spiritual journey with extraordinary honesty: seek → find → be troubled → marvel → reign. Notice that the path passes directly through trouble before arriving at wonder. This is crucially different from traditions that promise only comfort.

What troubles us? The things we genuinely find when we seek with openness. We find that our sense of who we are is more constructed, more fragile, more borrowed from others than we thought. We find that certainties we relied on dissolve under scrutiny.

But the saying does not stop at trouble. Through trouble comes marvel — the awe of encountering something vastly larger than the self we thought we were. And through marvel comes what the text calls "reigning over all." This is not power over others. It is sovereignty: the settled freedom of one who has found what cannot be taken.

The sequence matters. Do not skip the trouble. Do not protect yourself from the finding that disturbs you. The text suggests this is exactly where the path narrows to what you are truly seeking.`,
    contemplationPrompt: 'What have I been seeking but afraid to find? What troubling discovery have I been protecting myself from?',
    concepts: [
      {
        term: 'Troubled',
        definition: 'The Greek word underlying the Coptic (tarasso) carries a sense of being deeply stirred, shaken up — like water disturbed from the bottom. Not anxiety, but transformation.'
      },
      {
        term: 'Marvel',
        definition: 'Awe that arises when the ordinary self encounters something beyond its comprehension. It is an opening, not an overwhelm.'
      },
      {
        term: 'Reign over all',
        definition: 'Not mastery over external things, but inner sovereignty — the freedom that comes when one is no longer enslaved by searching for what one already has.'
      }
    ],
    relatedSayings: [1, 3, 92, 94],
    published: true
  },
  {
    id: 3,
    number: 3,
    text: "Jesus said: If your leaders say to you, 'The Kingdom is in the sky,' then the birds will get there before you. If they say, 'It is in the sea,' then the fish will arrive first. No — the Kingdom is within you and it is around you. When you know yourselves, you will be known, and you will understand that you are children of the living Father. But if you do not know yourselves, you live in poverty — and you are that poverty.",
    reflection: `Perhaps no single saying in the Gospel of Thomas is more foundational than this one. It directly challenges the most common spiritual strategy there is: looking outward for what can only be found inward.

The Kingdom is not a place to travel to, not a future state to wait for, not a reward to earn. The Kingdom is here, now, within and around us — and the only reason we do not see it is that we have not yet come to know ourselves.

The second half of the saying is even more pointed. Not knowing yourself is not merely a neutral gap in knowledge. You live in poverty. You are that poverty. The anguish, restlessness, and chronic sense of lack that characterises ordinary human life is not circumstantial — it is a direct consequence of not knowing what you are.

What bridges the two halves? Self-knowledge. "When you know yourselves, you will be known, and you will understand that you are children of the living Father." The journey inward does not lead to isolation — it leads to a recognition of shared being with the ground of all existence.`,
    contemplationPrompt: 'Where am I currently looking for the Kingdom outside myself? What would it mean to look within right now, in this very moment?',
    concepts: [
      {
        term: 'Kingdom',
        definition: "In the Gospel of Thomas, 'Kingdom' (Coptic: mntero) does not refer to a future heavenly realm but to a present state of awareness — a mode of being fully awake to what is."
      },
      {
        term: 'Know yourselves',
        definition: 'Self-knowledge here means more than psychological insight. It means recognising the deepest nature of what you are — the awareness in which all experience appears.'
      },
      {
        term: 'Children of the living Father',
        definition: 'A relational metaphor for the recognition that individual consciousness is not separate from but intimately connected to the ground of all being.'
      }
    ],
    relatedSayings: [113, 51, 1],
    published: true
  },
  {
    id: 4,
    number: 4,
    text: 'Jesus said: An elderly person will not hesitate to ask a seven-day-old infant about the place of life — and that person will live. For many who are first will become last, and they will become a single one.',
    reflection: `This saying overturns every hierarchy of knowledge we take for granted. An elder — bearer of years, experience, social status, accumulated wisdom — goes to a seven-day-old infant with the deepest question a human being can carry: Where is the place of life?

Why an infant? The child has not yet been thoroughly formed by structures of language, social identity, and accumulated self-concept. The child is still, in some sense, closer to the source — not because of superior intelligence, but because less has been layered between original being and the world.

This resonates with a theme found in many traditions: the beginner's mind, the fool's wisdom, the innocence that precedes and perhaps also follows the long middle journey of becoming and forgetting.

The closing phrase — "they will become a single one" — appears throughout the Gospel. It points to a non-dual recognition: the separation we feel, the hierarchy between knower and known, elder and child, self and other, gradually reveals itself as a construction. Underneath it, there is a unity that was never divided.`,
    contemplationPrompt: 'What in me is still new — not yet hardened by habit and certainty? Can I bring my deepest questions from that place of genuine not-knowing?',
    concepts: [
      {
        term: 'Seven-day-old infant',
        definition: 'A symbol of original being — consciousness before it has been fully shaped into a social person. Not ignorant, but prereflective, still near the source.'
      },
      {
        term: 'Place of life',
        definition: 'A recurring question in mystical literature: where is the source? Where does genuine aliveness come from? Not a geographic question but an ontological one.'
      },
      {
        term: 'A single one',
        definition: "Coptic: oua ouōt — literally 'one alone' or 'a single one.' Appears many times in Thomas. Points toward non-dual awareness, the undivided ground beneath apparent multiplicity."
      }
    ],
    relatedSayings: [22, 106, 23],
    published: true
  },
  {
    id: 5,
    number: 5,
    text: 'Jesus said: Know what is before your face, and what is hidden from you will be revealed to you. For there is nothing hidden that will not become known.',
    reflection: `This saying teaches that clarity of perception is the entire practice. Not some special technique, not a distant revelation, not an earned insight — simply: know what is before your face.

What keeps us from knowing what is before our face? The gap between experience and interpretation. We rarely see what is here; we see our story about what is here. We see our projections, our fears, our wishes, our habitual patterns — all laid over the actual present moment like a transparency. The saying gently insists: see this.

The promise that follows is extraordinary: from radically honestly looking at what is immediate and obvious, the hidden will reveal itself. The hidden is not elsewhere. It is here, embedded in what is present, waiting for the one who looks with full attention.

The final line — there is nothing hidden that will not become known — has both a comforting and uncomfortable resonance. What we seek is not locked away; it will come to light. But also: what we avoid seeing, what we suppress and push out of awareness — this too is continuously moving toward revelation. We can cooperate with this movement or resist it. But we cannot stop it.`,
    contemplationPrompt: 'What is directly before my face right now that I am not fully seeing? Can I give this moment my complete, unjudging attention?',
    concepts: [
      {
        term: 'Before your face',
        definition: 'The immediate, present reality — not something abstract or distant. This saying grounds the whole spiritual practice in direct present-moment attention.'
      },
      {
        term: 'Nothing hidden',
        definition: 'The universe is not concealing from us what we seek. The barriers are within our own seeing. When the seeing clears, what was concealed reveals itself naturally.'
      }
    ],
    relatedSayings: [6, 108, 92],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 6–20  Texts + prompts (add reflections via admin)
  // ─────────────────────────────────────────────────────────────
  {
    id: 6, number: 6,
    text: 'His disciples questioned him and said: Do you want us to fast? How should we pray? Should we give alms? What kind of diet should we keep?\n\nJesus said: Do not lie, and do not do what you hate. For all things are revealed before heaven. There is nothing hidden that will not be made known. Nothing covered will remain undisclosed.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What do I do out of obligation or performance that I actually hate? What would authentic practice look like for me?',
    concepts: [], relatedSayings: [14, 5], published: true
  },
  {
    id: 7, number: 7,
    text: 'Jesus said: Blessed is the lion that a person eats — and the lion becomes human. And cursed is the person that a lion eats — and the lion becomes human.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What in my nature am I consuming and transforming by awareness? What is consuming me instead?',
    concepts: [
      { term: 'Lion', definition: 'Often read as a symbol of the instinctual, passionate, or lower nature — that which must be integrated into consciousness rather than suppressed or surrendered to.' }
    ],
    relatedSayings: [8], published: true
  },
  {
    id: 8, number: 8,
    text: 'And he said: People are like a wise fisherman who cast his net into the sea and drew it up full of small fish. Among them the wise fisherman found one large, fine fish. He returned all the small fish to the sea and chose the large fish without hesitation. Anyone who has ears to hear, let them hear.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What is the one large, fine thing I am being called to choose? What smaller things am I holding onto that prevent me from choosing it fully?',
    concepts: [], relatedSayings: [107], published: true
  },
  {
    id: 9, number: 9,
    text: 'Jesus said: A sower went out and scattered seeds. Some fell on the road — and the birds ate them. Others fell on rock, found no root in the soil, and produced no grain. Others fell on thorns that choked them. And others fell on good soil and produced good fruit: sixty per measure and one hundred and twenty per measure.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What kind of inner soil am I offering to this saying right now? What would it take for me to become more receptive?',
    concepts: [], relatedSayings: [57], published: true
  },
  {
    id: 10, number: 10,
    text: 'Jesus said: I have cast fire upon the world, and see — I am watching over it until it blazes.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What fire of awakening has been kindled in you — perhaps small, perhaps not yet blazing? Can you tend it today?',
    concepts: [
      { term: 'Fire', definition: 'In contemplative tradition, fire is a symbol of transformative awareness — burning away what is inessential, illuminating what is real.' }
    ],
    relatedSayings: [16, 82], published: true
  },
  {
    id: 11, number: 11,
    text: 'Jesus said: This sky will pass away, and the sky above it will pass away. The dead are not alive, and the living will not die.\n\nIn the days when you ate what is dead, you made it come alive. When you come to dwell in the light, what will you do? On the day when you were one, you became two. But now that you are two, what will you do?',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'I was once one. I have become two. What would it mean to return to oneness — not by going backward, but by going through?',
    concepts: [], relatedSayings: [4, 22], published: true
  },
  {
    id: 12, number: 12,
    text: 'The disciples said to Jesus: We know you will leave us. Who will be our leader?\n\nJesus said: Wherever you are, you are to go to James the Just, for whose sake heaven and earth came into being.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'When the teacher is gone, where do I go? What inner compass do I rely on?',
    concepts: [], relatedSayings: [13], published: true
  },
  {
    id: 13, number: 13,
    text: "Jesus said to his disciples: Make a comparison — tell me who I am like.\n\nSimon Peter said: You are like a just angel.\nMatthew said: You are like a wise philosopher.\nThomas said: Teacher, my mouth cannot bear to say what you are like.\n\nJesus said: I am not your teacher. You have drunk from the bubbling spring that I tend and become intoxicated. He then took Thomas aside and spoke three things to him privately.\n\nWhen Thomas returned, the others asked: What did Jesus say to you? Thomas said: If I tell you even one of the things he told me, you will pick up stones to throw at me — and fire will come from those stones and burn you.",
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What aspect of Jesus — or of this teaching — is beyond my words? Can I sit with the unnamed rather than rushing to a label?',
    concepts: [], relatedSayings: [12, 108], published: true
  },
  {
    id: 14, number: 14,
    text: 'Jesus said: If you fast, you will bring sin upon yourselves. If you pray, you will be condemned. If you give alms, you will harm your spirits.\n\nWhen you enter a territory and travel through the countryside, and people receive you, eat whatever is placed before you. Heal the sick among them. For nothing that enters your mouth will defile you — what comes out of your mouth is what defiles you.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What religious practice have I turned into performance? What does authentic inner action look like, stripped of display?',
    concepts: [], relatedSayings: [6], published: true
  },
  {
    id: 15, number: 15,
    text: 'Jesus said: When you see one who was not born from woman, fall upon your face and worship — that is your Father.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What in my experience was not born — was never created — and therefore cannot die? Can I sense that now?',
    concepts: [], relatedSayings: [46, 101], published: true
  },
  {
    id: 16, number: 16,
    text: "Jesus said: People perhaps think I have come to cast peace upon the world. They do not know that I have come to cast divisions upon the earth: fire, sword, and war. For there will be five in a house: three against two and two against three, father against son and son against father — and they will stand alone.",
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'In what areas of my life is genuine truth creating necessary disruption? What am I being called to stand alone in?',
    concepts: [], relatedSayings: [10, 23], published: true
  },
  {
    id: 17, number: 17,
    text: 'Jesus said: I will give you what eye has not seen, what ear has not heard, what hand has not touched, what has not come into the human heart.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What experience lies beyond the reach of my ordinary senses and thoughts? Can I make space for something entirely new to arrive?',
    concepts: [], relatedSayings: [1, 18], published: true
  },
  {
    id: 18, number: 18,
    text: "The disciples said to Jesus: Tell us, how will our end come?\n\nJesus said: Have you found the beginning, so that you now seek the end? Where the beginning is, the end will also be. Blessed is one who stands at the beginning — that one will know the end and will not taste death.",
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What is the "beginning" that precedes my story, my name, my thoughts? If I could touch that, what would I find?',
    concepts: [], relatedSayings: [19, 1], published: true
  },
  {
    id: 19, number: 19,
    text: 'Jesus said: Blessed is one who came into being before coming into being.\n\nIf you become my disciples and listen to my words, these stones will serve you. For you have five trees in paradise which do not move summer or winter, and their leaves do not fall. Whoever knows them will not taste death.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What exists in me that preceded my birth and will persist beyond my death? Can I rest in that for a moment?',
    concepts: [], relatedSayings: [18, 1, 4], published: true
  },
  {
    id: 20, number: 20,
    text: 'The disciples said to Jesus: Tell us — what is the Kingdom of Heaven like?\n\nHe said to them: It is like a mustard seed, the smallest of all seeds — but when it falls on cultivated soil, it puts forth a great branch and becomes a shelter for birds of heaven.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: 'What small, almost invisible seed of awareness or truth is growing in me right now? Can I give it space?',
    concepts: [], relatedSayings: [96, 97, 98], published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 21–24  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 21,
    number: 21,
    text: `Mary said to Jesus, "What do your disciples resemble?" He said, "What they resemble is children living in a plot of land that is not theirs. When the owners of the land come they will say, 'Surrender our land to us.' They, for their part, strip naked in their presence in order to give it back to them, and they give them their land. Thus I say that the owner of an estate, knowing that a bandit is coming, will keep watch before the bandit comes and not let the bandit break into the house of the estate and steal the possessions. You (plur.), then, be on your guard against the world. Arm yourselves with great power lest the brigands find a way to get to you; for the trouble that you expect will come. Let an experienced person dwell in your midst! When the crop had matured, that person came in haste, sickle in hand, and harvested it. Whoever has ears to hear should listen!"`,
    reflection: `This saying is a cornerstone for understanding the Gnostic leanings often attributed to the Gospel of Thomas.

The Children represent the spiritually enlightened — the disciples. They are "little" because they are innocent of worldly attachments. The Field represents the material world or the physical body; it does not belong to the spirit but is a temporary dwelling. Stripping Naked is not about literal nudity. In the context of Thomas, "undressing" symbolises shedding the material body or discarding worldly identity to return to a purely spiritual state. The Thief — a common motif also found in the New Testament — represents the unexpected arrival of a spiritual crisis, used here to emphasise constant mindfulness.

While the "Thief in the Night" imagery appears in Matthew 24:43 and Luke 12:39, the "Children in the Field" parable is unique to the Gospel of Thomas. It shifts the focus from the Second Coming of Christ to the internal realisation of the soul's detachment from the earth.

In the Thomasine tradition, the "world" is a predatory force that seeks to lull the spirit into a sleep of forgetfulness. To "watch" means to recognise that the material world is a distraction. Your "house" is your inner spirit. If you are not home — that is, if you are not mindful — the "thief" (worldly desires, ego, social pressures) can break in and carry away your goods, your divine spark, your clarity.

Ancient houses in the Near East were often made of mud brick. A thief would not just pick a lock; they would dig through the wall. The vigil is meant to catch the intruder before the structural integrity of your inner life is compromised. If you are not paying attention to what you allow in — toxic information, mindless habits, negative environments — you are leaving the door open.`,
    contemplationPrompt: `What areas of your life are you treating as your "home," even though they are temporary or owned by someone else? If the owners showed up today, how much of your identity would be lost with them?

What "garments" — titles, reputations, past grievances — are you wearing so tightly that they feel like your own skin? Could you stand naked, without your achievements or possessions, and still know who you are?

What is currently digging through your walls? Where is the weak point in your perimeter where you tend to lose your focus or your peace? When you are scrolling through your phone or rushing through your day, who is "at home" in your mind?`,
    concepts: [],
    relatedSayings: [4, 22, 27, 37, 56, 80, 103],
    published: true
  },
  {
    id: 22,
    number: 22,
    text: `Jesus saw some infants who were being suckled. He said to his disciples: "These infants being suckled are like those who enter the kingdom." They said to him: "If we then become children, shall we enter the kingdom?" Jesus said to them: "When you make the two one, and when you make the inside as the outside, and the outside as the inside, and the upper as the lower, and when you make the male and the female into a single one, so that the male is not male and the female not female, and when you make eyes in place of an eye, and a hand in place of a hand, and a foot in place of a foot, an image in place of an image — then shall you enter the kingdom."`,
    reflection: `Jesus points to nursing infants as the ultimate insiders of the kingdom. Why? Because an infant does not yet perceive the world through labels, judgements, or divisions. To them, there is no "me" versus "other," no subject versus object. They exist in a state of undifferentiated wholeness.

To enter the kingdom, Jesus describes a radical re-integration of the opposites that usually define our lives. Making the two into one means moving past the "this vs. that" mentality. Inside and outside: ensuring your internal reality — thoughts, spirit — matches your external reality — actions, body. Upper and lower: bridging the divine and the mundane. Male and female: transcending gendered ego roles to reach a state of oneness where you are not defined by biological or social binaries. You enter the kingdom when you stop slicing the world into pieces and start seeing the underlying unity in everything.

We begin in a state of oneness because we do not know any better. There is no "me" and "not-me" — just existence. It is beautiful, but it is unconscious. Then we enter duality: good vs. evil, male vs. female, success vs. failure. We get lost here because we mistake the divisions for the final truth. The third stage — conscious oneness — is the Kingdom. By finding the divine spark within, we collapse the dualities. We realise the outside and the inside were never actually separate.

The journey is not about becoming something new. It is about remembering what you were before the world told you that you were separate from it.`,
    contemplationPrompt: `Am I excluding half of my potential because I have labelled it as "not me"? The Spark is neither male nor female; it is the source of both.`,
    concepts: [],
    relatedSayings: [3, 11, 50, 106],
    published: true
  },
  {
    id: 23,
    number: 23,
    text: `Jesus said: "I shall choose you, one out of a thousand and two out of ten thousand, and they shall stand as a single one."`,
    reflection: `Choosing someone does not mean they are more worthy; it means they are ready. The ego loves to interpret "chosen" as "special" or "superior." But in the context of deep inner work, being chosen is more like a crop being ready for harvest. A green tomato is not less worthy than a red one — it simply needs more time on the vine. To force the process before the individual is ready is harmful.

In depth psychology — Carl Jung's work on individuation, for instance — facing the unconscious mind, dismantling ego-stories, and looking at our shadows requires a strong, stable internal container. When we are not ready, forcing this work can lead to fragmentation, severe anxiety, or a breakdown. The ego braces against it because it feels threatened.

Some spiritual traditions call this the Bodhisattva path: those who do the arduous inner work do not do it to escape the world, but to return to it and assist others. By facing your own darkness and finding wholeness, you change the energetic blueprint available to those around you. You model a new way of being. You prove that freedom is possible, which quietly gives others permission to seek it when their time comes.

When we are ready, we can observe our inner workings without falling apart. We outgrow our limiting narratives and integrate the difficult parts of ourselves — fulfilling the end of this saying: we stand as a single one. Whole, unified, and integrated.

You are ready when you can choose yourself.`,
    contemplationPrompt: `Where am I still waiting for external permission to choose myself? What specific, outgrown story about my identity am I holding onto just because it makes other people comfortable? When I feel "unready," am I actually just bracing against the process rather than trusting my own wholeness?`,
    concepts: [],
    relatedSayings: [3, 22, 70, 111],
    published: true
  },
  {
    id: 24,
    number: 24,
    text: `His disciples said: "Teach us about the place where you are, for it is necessary for us to seek it." He said to them: "He who has ears, let him hear! There is light within a man of light, and he lights the whole world. If he does not shine, there is darkness."`,
    reflection: `The disciples are looking for a geographical or external spiritual "place" where Jesus resides so they can travel there to find it. Jesus dismisses the idea of a destination out in the world and points them inward instead.

The "person of light" refers to an individual who has awakened to the divine spark within themselves. In the Thomasine tradition, enlightenment is not found by following a leader to a specific location. It is found by recognising the primordial truth that already exists inside you. When this inner light is realised and lived, it naturally radiates outward, giving clarity and light to the rest of the world. Conversely, failing to recognise and live from this inner light leaves the individual — and those around them — in darkness and confusion.

The disciples' question is the same one we ask whenever we look outward for answers that can only be found within: Which teacher should I follow? Which tradition holds the truth? Which method will finally fix me? Jesus turns the question around. The place you are seeking is not somewhere you can travel to. It is what you are looking out from right now.`,
    contemplationPrompt: `Where am I outsourcing my certainty? Are there areas in my life where I look to an external expert, tradition, or trend to tell me what is true or right?

What does my "light" actually look like? If I strip away the expectations of my profession, my culture, and my peers, what are the core, unborrowed truths that remain?

Am I mistaking the map for the territory — spending so much time studying the paths others have walked that I am neglecting to walk my own?`,
    concepts: [],
    relatedSayings: [3, 70, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 25  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 25,
    number: 25,
    text: 'Jesus said: Love your brother as your soul; watch over him like the apple of your eye.',
    reflection: `I. The Nature of the Soul: The Divine Spark

The soul is the Divine Spark — a literal fragment of the Light inhabiting a physical body.

This text immediately reminds of love your neighbour as yourself. But it goes deeper. It is not just "as yourself" — it is "as your soul." The soul is not the ego, the personality, or the social self. It is the divine essence within you that is identical to the divine essence within others.
When we are told to love our brother "as our soul," we are being asked to love him not for what he does or doesn't do, but for the divine essence within him (for who he really is - not what we are seeing on the surface).  
It is a literal instruction to recognise that the person in front of you is not just a separate individual, but a manifestation of the same divine essence that animates you.

Many times we love based on "ego-level" connections—DNA, shared politics, or tribal loyalty. This love is conditional. To love a brother "as your soul" is to look past his personality, flaws, or opinions and recognize the Living Father (the source of all consciousness) animating him. You are loving the essential light within him that is identical to the light within you.

**The "Apple of Your Eye" Metaphor**

The phrase "apple of your eye" is more than an ancient idiom; it is a lesson in biological and spiritual vulnerability.

In antiquity, the pupil was called the "apple" of the eye. It is the literal opening through which light enters the body. While it is the most vital part of our sensory experience, it is also the most fragile.

Consider the blink reflex. If an object moves toward your eye, you don't pause to deliberate. You don't weigh the pros and cons of protection. Your body acts instinctively and instantly.
Protecting your brother should be as reflexive as blinking. His wellbeing and safety is not a "choice" you make; it is a biological necessity for your shared spiritual body.

When you watch over another like the apple of your eye, the rigid boundary between "me" and "you" begins to dissolve. By directing your "eyes" toward another's well-being, you acknowledge that their spiritual safety is tethered to your own.

The Reality of Unity
In a state of unity, the Golden Rule moves from a moral command to a logical fact. You cannot mistreat your brother without simultaneously wounding yourself.

To fail in loving your brother is to cloud your own spiritual vision. If you cannot see the light in him, it probably means you only see darkness in others because you have not yet fully recognised the light within you.

This text becomes more than a command or rule. You don't care for others simply to "stay safe." You do it because you realize that by living this way, you are manifesting a world suited for the Divine Spark, rather than a world built for the competing demands of the ego.`,
    contemplationPrompt: `When I look within or without, do I immediately fixate on my/another's shortcomings, my/another's anxieties, or my/another's unhealed parts? Can I use my inner light to illuminate these shadow aspects without identifying with them? 

When I am interacting with someone—especially someone difficult—where is my focal point? Can I intentionally adjust my depth of field? Practice looking past the immediate static of their ego. Remind yourself that you are looking at an "other-self"—the exact same Source experiencing the universe from a different set of coordinates and through a different complex system of conditioning.

Can I separate the signal from the noise? When someone acts out of ego, can I see it not as who they are, but as a distortion in their lens? Watching over them "like the apple of your eye" means holding the vision of their true nature for them, especially during the moments when they have forgotten it themselves.

Is my recognition of the soul in others becoming a reflex, or does it still require immense mental effort? When I walk past a stranger, is my first instinctual read based on their avatar (their clothes, status, demeanor), or is there a split-second, reflexive honoring of the life force within them?`,
    concepts: [
      {
        term: 'The Eye as a Mirror',
        definition: `When you start to view the eye as a reflective surface rather than just a receptor, the instruction to "watch over him like the apple of your eye" takes on a completely new dimension. You are no longer just guarding the other person; you are guarding the very mechanism through which you understand yourself.

**The Literal Mirror: The Physics of the Cornea**
The cornea—the clear, protective outer layer of the eye—is highly reflective. It functions as a convex mirror. If you stand close enough to look directly into someone else's pupil, the physics of light dictate that you will see a miniature reflection of your own face superimposed over their iris and pupil. You literally cannot look deeply into the "soul" of another person without seeing yourself reflected back in the process.


**The Psychological Mirror: Projection and the Shadow**
We rarely see people exactly as they are. Instead, we see them through the lens of our own preconceived ideas, stories and conditioning. If we carry unresolved anger, we are hyper-vigilant to hostility in others. The people who trigger the strongest emotional reactions in us—whether intense infatuation or deep irritation—are usually holding up a mirror to our own unconscious archetypes. Recognizing this transforms every frustrating interaction into a profound opportunity for self-awareness.


**The Metaphysical Mirror: The "Other-Self"**
If we view reality through the lens of unified consciousness, the separation between "you" and "me" is just a structural illusion necessary for experiencing the universe. The individual soul is not disconnected from the Source; it is a fractal reflection of it. Therefore, every "other" is quite literally an "other-self"—the exact same consciousness peering out from a different set of biological coordinates. When you look into the eye of your brother and recognize the divine spark, the Creator is using your eyes to look at Itself through the eyes of the other. This is the ultimate fulfillment of Saying 22's instruction to make "the inside like the outside."


If the eye is a mirror, then judgment is a form of self-harm, and deep appreciation is a form of self-love. What you refuse to love in the "other-self" is a part of yourself you have exiled into darkness.`
      },
      {
        term: 'Divine Spark',
        definition: 'In Gnostic thought, the Divine Spark is a fragment of the divine light that inhabits the physical body. It is the essential, imperishable nature within each person—identical in source to the light in every other being.'
      },
      {
        term: 'The Blink Reflex',
        definition: 'The unconscious, instantaneous protective reflex that shields the eye from harm. Used in Saying 25 as a model for how protection of the spiritual "brother" should be equally reflexive—not a calculated choice but a natural expression of recognized unity.'
      }
    ],
    relatedSayings: [22, 24, 108],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 26  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 26,
    number: 26,
    text: 'Jesus said: You see the mote which is in your brother\'s eye; but you do not see the beam which is in your own eye. When you cast out the beam from your own eye, then you will see (clearly) to cast out the mote from your brother\'s eye.',
    reflection: `This is a text many of us already know from the Bible (Matthew 7:3-5; Luke 6:41-42). Sometimes passages like these are frequently used as a moralistic weapon — a warning against hypocrisy. Unfortunately, many times we stop here. However, this text is a deep psychological and spiritual tool for self-awareness. It brings us closer to the truth of human nature.

**The "Mote" as a Mirror**

The "mote" acts as a mirror. This is referred to as projection or interacting with our "shadow." We unconsciously take the traits, insecurities, or flaws that we cannot accept within ourselves and project them onto the people around us.

When a minor flaw in someone else triggers a disproportionately large emotional reaction in us — anger, extreme annoyance, or disgust — it is almost always a sign that we are reacting to our own reflection. It causes us to attack the projection rather than seeing the person's soul.

Jesus uses the deliberate image of a massive, load-bearing beam to show the absurdity of trying to fix or point out something that bothers us in another, while we cannot see at all. Our ego protects us from seeing our own massive unhealed wounds, allowing us to hyper-fixate on the microscopic dust in others instead. It is easier for us to try to fix someone else's problem than to sit with our own. However, while we are blind it is not wise to do so.

**The Necessity of Self-Compassion**

One cannot go within blindly and expect to see anything else but darkness. It will be too hard to look at the hurt and the pain within when you only see yourself as the "small self / false self." Identifying with the truth of yourself — really being the divine spark — is how you can enter with love, care, and acceptance. Finding the courage to look inward with a forgiving and compassionate eye immediately softens the lens through which you see everyone else.

This is the crux of true healing. Many people realise they need to look at their own flaws, but they do so with a harsh, judgmental, and punishing inner critic. Fighting inner darkness with more darkness — shame, guilt, self-hatred — only deepens the wound. Real transformation requires radical self-compassion. We have to look at our own "beams" with the same grace and unconditional love that we are ultimately trying to extend to our brother with the "mote."`,
    contemplationPrompt: `**Think of a recent moment when someone's behaviour triggered a strong reaction in you — anger, intense annoyance, or judgment**.


- What was the specific trait or action that bothered me so deeply?
- If I strip away the details of the story, what is the core emotion I felt (e.g., disrespected, unseen, out of control, inadequate)?
- Why does this specific trait or action feel so threatening or offensive to me?
- Can I feel the emotion without identifying with it?


**Now, take the trait that frustrated you in the other person and gently look for it within yourself.**


- Where does this exact trait exist in my own life, even if it shows up in a different context or in a hidden way?
- Is this a part of myself that I deeply dislike, deny, or try to hide from others?
- Am I currently treating myself the way I perceive this person is treating me?


**This is the crucial step of refusing to fight darkness with darkness.**


- When I recognise this "beam" within myself, what is my immediate internal reaction? Do I attack myself, or do I offer myself grace?
- What is the original wound or fear that caused me to develop this flaw or defence mechanism in the first place?
- If I were looking at a dear friend who had this exact same flaw and wound, what compassionate words would I say to them? Can I say them to myself?


**Bring the person who originally triggered you back into your mind's eye.**


- Now that I see they were unknowingly mirroring my own unhealed pain, how does my perspective of them shift?
- Can I see their frustrating behaviour not as an attack on me, but as a symptom of their own struggle or lack of awareness?
- What would it look like to interact with them next time from a place of shared humanity, rather than from a place of defence and projection?`,
    concepts: [
      {
        term: 'Projection (Shadow)',
        definition: 'A psychological process in which we unconsciously attribute to others the traits, insecurities, or impulses we cannot accept within ourselves. Carl Jung called the unacknowledged inner reservoir of these rejected qualities the "shadow." The intensity of our reaction to a flaw in another is often directly proportional to how deeply buried that same quality is within us.'
      },
      {
        term: 'The Beam and the Mote',
        definition: 'Jesus deliberately contrasts a massive load-bearing timber (beam) with a tiny speck of dust (mote). The absurdity of the image is the point: we are constitutionally blind to our own enormous unhealed wounds while our ego grants us perfect vision to detect the smallest imperfections in others.'
      },
      {
        term: 'Radical Self-Compassion',
        definition: 'The practice of turning inward with the same unconditional grace and forgiveness one wishes to extend outward. Without it, self-examination becomes another form of self-harm. True inner sight requires the light of compassion — not the harsh glare of the inner critic — as its lamp.'
      }
    ],
    relatedSayings: [3, 24, 25, 34, 70],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 27–114  Stubs — add text and reflections via admin
  // ─────────────────────────────────────────────────────────────
  ...Array.from({ length: 88 }, (_, i) => ({
    id: i + 27,
    number: i + 27,
    text: `Saying ${i + 27} — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  }))
]
