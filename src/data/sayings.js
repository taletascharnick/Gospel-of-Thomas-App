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

- **The Children** represent the spiritually enlightened — the disciples. They are "little" because they are innocent of worldly attachments.
- **The Field** represents the material world or the physical body; it does not belong to the spirit but is a temporary dwelling.
- **Stripping Naked** is not about literal nudity. In the context of Thomas, "undressing" symbolises shedding the material body or discarding worldly identity to return to a purely spiritual state.
- **The Thief** — a common motif also found in the New Testament — represents the unexpected arrival of a spiritual crisis, used here to emphasise constant mindfulness.

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

To enter the kingdom, Jesus describes a radical re-integration of the opposites that usually define our lives:

- **Making the two into one** — moving past the "this vs. that" mentality.
- **Inside and outside** — ensuring your internal reality (thoughts, spirit) matches your external reality (actions, body).
- **Upper and lower** — bridging the divine and the mundane.
- **Male and female** — transcending gendered ego roles to reach a state of oneness where you are not defined by biological or social binaries.

You enter the kingdom when you stop slicing the world into pieces and start seeing the underlying unity in everything.

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
    reflection: `### I. The Nature of the Soul: The Divine Spark

This text immediately reminds of love your neighbour as yourself. But it goes deeper. It is not just "as yourself" — it is "as your soul." The soul is not the ego, the personality, or the social self. It is the divine essence within you that is identical to the divine essence within others.
When we are told to love our brother "as our soul," we are being asked to love him not for what he does or doesn't do, but for the divine essence within him (for who he really is - not what we are seeing on the surface).  
It is a literal instruction to recognise that the person in front of you is not just a separate individual, but a manifestation of the same divine essence that animates you.

Many times we love based on "ego-level" connections—DNA, shared politics, or tribal loyalty. This love is conditional. To love a brother "as your soul" is to look past his personality, flaws, or opinions and recognize the Living Father (the source of all consciousness) animating him. You are loving the essential light within him that is identical to the light within you.

### The "Apple of Your Eye" Metaphor

The phrase "apple of your eye" is more than an ancient idiom; it is a lesson in biological and spiritual vulnerability.

In antiquity, the pupil was called the "apple" of the eye. It is the literal opening through which light enters the body. While it is the most vital part of our sensory experience, it is also the most fragile.

Consider the blink reflex. If an object moves toward your eye, you don't pause to deliberate. You don't weigh the pros and cons of protection. Your body acts instinctively and instantly.
Protecting your brother should be as reflexive as blinking. His wellbeing and safety is not a "choice" you make; it is a biological necessity for your shared spiritual body.

When you watch over another like the apple of your eye, the rigid boundary between "me" and "you" begins to dissolve. By directing your "eyes" toward another's well-being, you acknowledge that their spiritual safety is tethered to your own.

### The Reality of Unity

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

### 1. The Literal Mirror: The Physics of the Cornea

The cornea — the clear, protective outer layer of the eye — is highly reflective. It functions as a convex mirror. If you stand close enough to look directly into someone else's pupil, the physics of light dictate that you will see a miniature reflection of your own face superimposed over their iris and pupil. You literally cannot look deeply into the "soul" of another person without seeing yourself reflected back in the process.

### 2. The Psychological Mirror: Projection and the Shadow

We rarely see people exactly as they are. Instead, we see them through the lens of our own preconceived ideas, stories, and conditioning. If we carry unresolved anger, we are hyper-vigilant to hostility in others. The people who trigger the strongest emotional reactions in us — whether intense infatuation or deep irritation — are usually holding up a mirror to our own unconscious archetypes. Recognising this transforms every frustrating interaction into a profound opportunity for self-awareness.

### 3. The Metaphysical Mirror: The "Other-Self"

If we view reality through the lens of unified consciousness, the separation between "you" and "me" is just a structural illusion necessary for experiencing the universe. The individual soul is not disconnected from the Source; it is a fractal reflection of it. Therefore, every "other" is quite literally an "other-self" — the exact same consciousness peering out from a different set of biological coordinates. When you look into the eye of your brother and recognise the divine spark, the Creator is using your eyes to look at Itself through the eyes of the other. This is the ultimate fulfilment of Saying 22's instruction to make "the inside like the outside."

---

If the eye is a mirror, then judgement is a form of self-harm, and deep appreciation is a form of self-love. What you refuse to love in the "other-self" is a part of yourself you have exiled into darkness.`
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
        definition: 'A psychological process in which we unconsciously attribute to others the traits, insecurities, or impulses we cannot accept within ourselves. Carl Jung called the unacknowledged inner reservoir of these rejected qualities the "shadow." The intensity of our reaction to a flaw in another is often directly proportional to how deeply buried that same quality is within us. Note that the quality may not be bad. We also bury good qualities that we are afraid to claim. Projection can be positive or negative, but it always distorts our perception of others and ourselves.'
      },
      {
        term: 'The Beam and the Mote',
        definition: 'Jesus deliberately contrasts a massive load-bearing timber (beam) with a tiny speck of dust (mote). The absurdity of the image is the point: we are constitutionally blind to our own unhealed wounds while our ego grants us perfect vision to detect the smallest imperfections in others. The ego is not bad. It tries to protect us, but it harms ourselves and others when we try to fix others without first doing the inner work to see ourselves clearly.'
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
  // SAYING 27  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 27,
    number: 27,
    text: 'Jesus said, If you do not fast as regards the world, you will not find the kingdom. If you do not observe the Sabbath as a Sabbath, you will not see the father.',
    reflection: `### Fasting

Fasting is not about performance or the literal aspects of fasting (such as physical starvation). "Fasting as regards" the world is a necessary detachment from external noise, anxiety and the pursuit of validation.

### The Internal Kingdom

The kingdom cannot be found in the world but is found within. It is important to find the space where you can close the door behind you and go within.

Sometimes we believe that if we work hard enough, we will earn enough and then we will be able to rest. The invitation is to live now. To meet the kingdom now.

If you seek peace outside of yourself, you won't find it.

True authority must come from within rather than being surrendered to external forces. For example, waiting for the politicians to change the constitution before you can feel at peace or waiting for a person to call you before you don't feel alone.

### Sabbath

Jesus talks about observing the Sabbath. Keeping the Sabbath is not a rigid law, but is about having a mandatory pause from striving, producing and surviving. It is a space designed for receiving rather than acting.

The Gnostics didn't keep laws for law's sake. The Sabbath was a day of rest. This was the day that one didn't create (not create wealth or other things) but rested like the Creator did. If the Creator needed rest, why wouldn't we. This rest is necessary to see the father. We can't see what is really important to us, while we are striving and performing. 

### Balance

The goal isn't to become a permanent ascetic or to remain silent forever. In fact, it is not a goal to achieve. It is about recognising your wholeness and being present. One cannot strive or become it. You are already it. You just need to be reminded of it. These practices help us to engage with the world and create from a place of inner abundance, rather than from a frantic state of survival.

In our hyper-connected, productivity-obsessed culture, the idea of "running away from silence" is a very real epidemic. Jesus' words are an invitation to take a step back, to "fast from the world". It is not a punishment but a necessary recalibration to make us feel "safe or at home" in our own minds.`,
    contemplationPrompt: `What specific "noise" (expectations, media, opinions) am I currently giving authority over my own inner peace?

If I were to truly "fast" from the world for one hour today — closing the door and embracing silence — what am I most afraid of encountering, and what am I hoping to find?

In what ways am I performing my strength or goodness for others, rather than quietly cultivating it for myself?

What internal conditions need to be met for me to truly feel "safe or at home" within my own mind and body?

If I stopped trying to earn my place in the world, what would naturally emerge from me?`,
    concepts: [
      {
        term: 'Fasting',
        definition: `Literal Definition: The willing abstinence or reduction from some or all food, drink, or both, for a period of time. It is traditionally practiced for religious observances, health reasons, or ethical protests.

Spiritual/Metaphorical Definition: Deliberately stripping away distractions, comforts, or habits (such as social media, negative thinking, or material consumption) to cultivate inner discipline, clear the mind, and focus on spiritual or personal growth. In the context of this saying, it means starving the ego or the "world's" demands to feed the inner self.`
      },
      {
        term: 'Sabbath',
        definition: `Literal Definition: A day of religious observance and abstinence from work. In Judaism, it is observed from Friday evening to Saturday evening. In most Christian traditions, it is observed on Sunday. The concept originates from the biblical creation story, where God rested on the seventh day.

Spiritual/Metaphorical Definition: A dedicated, intentional period of rest and renewal. It is a boundary set against the endless cycle of producing, consuming, and achieving. It represents a state of "being" rather than "doing," allowing a person to reconnect with themselves, their community, or the divine without the pressure to create value or wealth.`
      }
    ],
    relatedSayings: [3, 70, 89, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 28  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 28,
    number: 28,
    text: 'Jesus said: I stood in the midst of the world, and I appeared to them in the flesh. I found them all drunk; I found none of them thirsting, and my soul was afflicted for the sons of men; for they are blind in their heart, and they do not see that they came empty into the world, (and) empty they seek to leave the world again. But now they are drunk. When they have thrown off their wine, they will repent.',
    reflection: `### The Incarnate Teacher and the Burden of Flesh

Jesus speaks here from the perspective of an awakened consciousness that has actively entered the human experience ("appeared to them in the flesh"). By taking on a physical form, he became subject to the same biological, root-level realities—hunger, thirst, fatigue—as the rest of humanity. Yet, his affliction is not physical; it is a profound grief over the collective unconsciousness of those around him.

### Drunkenness vs. The Necessity of Thirst

To be "drunk" in this context is to be completely intoxicated by the material world and the ego's endless loop of desires. Jesus laments finding no one "thirsting." Spiritual thirst is the vital prerequisite for seeking; it is the deep, unsettling realization that mundane life is not enough. A thirsty soul seeks the "living water" of truth and connection to the divine source. When humanity loses this thirst and settles for the numbing effects of worldly indulgence, the collective state of the world descends into suffering and illusion.

### Blindness of the Heart and the "Sons of Men"

By calling them the "sons of men," Jesus highlights how deeply people have identified with their mortal, physical lineage, entirely forgetting their divine origins. To be "blind in their heart" points to a severe spiritual disconnection. They are operating purely from their base survival instincts and egoic drives (the root), completely bypassing the heart—the center of true spiritual vision, empathy, and recognition of the interconnected whole.

### The Unconscious Cycle of Emptiness

Coming into the world "empty" and leaving "empty" describes a state of total spiritual amnesia. It speaks to the tragedy of moving through an entire incarnation—arriving without the memory of one's divine spark, and leaving the physical realm having gained no self-knowledge, despite having spent a lifetime accumulating fleeting, material illusions.

### Sobering Up: The True Meaning of Repentance

"Throwing off their wine" represents a deliberate detoxification from societal conditioning and material obsession. It is the reclamation of spiritual sovereignty. Crucially, "they will repent" is not a demand for moral groveling or guilt over sins. In the esoteric sense, this reflects metanoia—a fundamental, radical transformation of mind and heart. It is the exact moment the soul shakes off its amnesia, steps out of the dream-state, and makes the active, conscious choice to wake up to its true nature.`,
    contemplationPrompt: 'What do I need to give up/shed/let go of to recognize the reality of my wholeness? Many times we belief that we must add something to ourselves to be whole. But in reality, we need to take away the things that are covering our wholeness.',
    concepts: [
      {
        term: 'Drunk',
        definition: `In this specific spiritual framework, "Drunk" is not a reference to alcohol, but a metaphor for a profound lack of spiritual sobriety. It signifies a soul that has become so entangled in the material world that it has lost its connection to its divine origin. It can be broken down into three key aspects:

Forgetfulness (Amnesia): The soul "forgets" its heavenly home and its true identity as a spark of the divine. It becomes preoccupied with the needs and desires of the body.

Unconsciousness: This refers to living on "autopilot." People are physically awake but spiritually asleep, unaware of the deeper reality or the presence of the Light within them.

Ignorance (Agnoia): In Gnostic thought, ignorance is the primary "sin." It is the failure to recognize that the material world is a temporary illusion.`
      }
    ],
    relatedSayings: [],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 29  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 29,
    number: 29,
    text: 'Jesus said: If the flesh came into existence because of the spirit, it is a marvel. But if the spirit (came into existence) because of the body, it is a marvel of marvels. But as for me, I wonder at this, how this great wealth made its home in this poverty.',
    reflection: `This saying reminds us of our hidden potential, or the divine spark within. We are capable of being and doing great things. However, we often choose to remain in a cage rather than embracing the opportunity we have here and now.

The saying frames the tension between our eternal nature and our temporary human experience. People frequently argue about the nature of existence: are we spiritual beings having a human experience, or is the spirit simply born from the physical (the materialist view)? Jesus doesn't express disgust at the physical body; he expresses amazement. He says, "it is a wonder of wonders." He is marvelling at the sheer paradox of incarnation—how the infinite, limitless spirit managed to squeeze itself into a finite, fragile, physical form.

Jesus plays with the question of which came first—the body or the spirit. By calling it a "wonder of wonders" if the spirit came from the body (the materialist view), he is gently pointing out the absurdity of thinking that the profound depth of human consciousness could merely be a byproduct of physical matter.

The word "but" acts as a wake-up call. Jesus points to a truth that goes much deeper than a religious or philosophical debate. By pointing out the stark contrast between our internal "wealth" and external "poverty," the saying invites us to stop living as beggars chasing worldly scraps when we hold the treasury of the universe within us.`,
    contemplationPrompt: `Is there more to me than what I have been led to believe?

Am I chasing temporary highs to ignore a deeper calling? We often use the fleeting distractions of the material world to numb the profound, and sometimes overwhelming, truth of our own divine spark. Chasing these highs is not just a search for pleasure; it is often a defense mechanism. It is a way to safely remain asleep in the cage rather than stepping into the immense responsibility, and ultimate freedom, of being a co-creator.`,
    concepts: [
      {
        term: 'Flesh vs. Spirit',
        definition: 'In the original Greek language often used to discuss these texts, Sarx refers to the physical flesh/human nature and the temporary, material world. Pneuma is the breath, the spirit, or the divine spark. The saying highlights the ultimate paradox of these two opposing forces occupying the same space.'
      },
      {
        term: 'Great Wealth / The Fullness / Pleroma',
        definition: 'In early mystical and Gnostic Christian traditions, the spiritual realm is often referred to as the Pleroma, meaning "fullness" or absolute abundance. This is the "great wealth" Jesus mentions—our true home, our infinite potential, and our co-creative power.'
      },
      {
        term: 'Poverty (The Emptiness / Kenoma)',
        definition: 'Conversely, the material world is seen as a place of lack, decay, and limitation. The physical body is the poverty that temporarily houses the wealth of the spirit. It is impoverished not because it is evil, but because it is finite and relies on "temporary highs" rather than eternal substance.'
      }
    ],
    relatedSayings: [3, 28, 70, 112],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 30  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 30,
    number: 30,
    text: 'Jesus said: Where there are three gods, they are gods; where there are two or one, I am with him.',
    reflection: `Saying 30 offers a striking counterpoint to the canonical promise of Matthew 18:20: "For where two or three gather in my name, there am I with them" (NIV). While the traditional gospel champions the institutional ideal of community fellowship, the Gnostic text suggests something far more intimate: that the divine presence is profoundly accessible to the solitary individual or a unified pair. This anti-institutional stance is not merely a theological shift; it acknowledges the inherent difficulty of maintaining true, unguarded spiritual connection within larger gatherings.

### The Weight of the Collective

Groups operate differently from individuals. When a larger group forms (like three people), a collective consciousness takes over. The need to "fit the mold" activates our deeply ingrained survival mechanisms, causing the persona (the mask we wear for society) to eclipse our authentic inner voice. In this environment, vulnerability becomes a risk. We tend to leave our bodies (become disembodied) and shift our focus entirely to the external. The solitary state, or the safety of one-on-one connection, strips away the static of group convention, allowing the true Self to emerge.

### The Fractal Self

The individual is also a community and that pattern repeats in nature. It is a fractal view of existence, where the microcosm perfectly mirrors the macrocosm. Just as a complex system is made of interconnected layers and feedback loops that reflect the behaviour of the whole, the individual psyche is a multiplicity of experiences, unconscious drives, and archetypes unified into a single being. You do not need an external crowd to be part of a gathering; you are already a rich, complex community within yourself.

### Omnipresence

Another saying (77) ends with: "Split a piece of wood, and I am there. Lift up the stone, and you will find me there" — allowing for more context to the above text.

If the divine permeates absolutely everything — from the quiet solitude of a single mind to the physical matter of the earth itself — then the rigid boundaries between being "in the church" and walking one's own path completely dissolve. It neutralizes the need to judge how others seek connection, recognizing that no one can ever truly be separated from the whole.`,
    contemplationPrompt: 'When will we stop limiting the divine?',
    concepts: [
      {
        term: 'The Process of Individuation (Jung)',
        definition: 'In Jungian terms, moving from the "three" or "two" (fragmentation, conflict, or duality of the conscious and unconscious) toward the "one" represents the integration of the psyche. The "I am with him" can be viewed as the realization of the Self — the divine spark or organizing principle within.'
      },
      {
        term: 'The Law of One',
        definition: 'The overarching concept that all things are ultimately expressions of a single, unified creator, echoing the idea that the divine is most fully realized in unity ("where there is one").'
      }
    ],
    relatedSayings: [77, 108],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 31  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 31,
    number: 31,
    text: "Jesus said, \"A prophet is not acceptable in that prophet's own native town. A physician does not heal people who are acquainted with that physician.\"",
    reflection: `### See also: Luke 4:22–30

> All spoke well of Him and marveled at the gracious words that came from His lips. "Isn't this the son of Joseph?" they asked. Jesus said to them, "Surely you will quote this proverb to Me: 'Physician, heal yourself! Do here in Your hometown what we have heard that You did in Capernaum.'" Then He added, "Truly I tell you, no prophet is accepted in his hometown. But I tell you truthfully that there were many widows in Israel in the time of Elijah, when the sky was shut for three and a half years and great famine swept over all the land. Yet Elijah was not sent to any of them, but to the widow of Zarephath in Sidon. And there were many lepers in Israel in the time of Elisha the prophet. Yet not one of them was cleansed — only Naaman the Syrian." On hearing this, all the people in the synagogue were enraged. They got up, drove Him out of the town, and led Him to the brow of the hill on which the town was built, in order to throw Him over the cliff. But Jesus passed through the crowd and went on His way.

---

### "Who Do You Think You Are?"

This passage is about the human condition. It brings two very relatable, human questions to the surface: *Who do you think you are?* and *Why would a person, like me, be able to do something that is perceived to be miraculous?* We often experience a deep sense of doubt about our own inner knowing. This doubt stems directly from the misconception that we are mere physical beings, which leads to a fundamental misunderstanding of who we truly are.

### The Trap of Familiarity and Separation

When you grow up in a small town, people "know" the human version of you. They see you as a child, a friend, or simply a person who makes mistakes. Because of this familiarity, they can easily become blind to the reality that Source is found within you — just as it is found within them.

This highlights our human tendency to separate the mundane from the miraculous:

- **The Illusion of Separation:** We habitually separate our oneness with God/Source from our everyday human life.
- **Limiting the Divine:** We operate under the assumption that a "mere human" shouldn't be able to perform miracles or do the work that is supposedly reserved only for God.

While this separation gives us the unique, tangible experience of being a person in a physical body, it also deeply hurts us. It closes us off to healing because we refuse to remain open to it. We fail to believe that an ordinary person can assist us, and worse, we fail to believe that we possess the power to heal ourselves.

### The Conditions We Place on Grace

In this space of separation and closed-mindedness, we miss out on the grace that is available to us daily — simply because we don't want to receive it in the form it takes.

We place strict conditions on miracles:

- **The "Right" Package:** We expect divine help to look a certain way and to come exclusively from the outside.
- **The Demand for a Spectacle:** We act as if God is far away, believing that if a miracle isn't spectacular and witnessed by everyone, it isn't real.
- **Missing the Quiet Miracles:** We struggle to accept that profound healing can happen in the quiet, mundane spaces of our own homes, or through the hands of people we already know.

Ultimately, we have been conditioned to limit our possibilities. And by insisting on those limitations, we are forced to constantly experience them.`,
    contemplationPrompt: `**1. Examining Internal Blocks**
What thoughts or beliefs do I hold that close me off to assistance or healing in a specific form? Reflect on times you may have rejected help or growth because it didn't come in the "package" you expected. How does the illusion of separation keep you from receiving grace?

**2. Shifting Perspective**
Can I find miracles in the mundane and within myself? Consider the quiet, everyday moments where Source is present. How can you better recognize the divine in your ordinary human experience without needing a grand spectacle?

**3. Projecting Limitations**
Do I make others feel like nothing good can come from them because I expect the miraculous to only come from something "out of the ordinary"? Examine how you view the people closest to you. Are you guilty of the "hometown crowd" mentality — limiting the potential of your friends, family, or community because you are too familiar with their human flaws?`,
    concepts: [
      {
        term: 'Physician, heal thyself',
        definition: 'An ancient proverb, famously quoted in Luke 4:23, advising people to fix their own faults or problems before trying to correct others. It suggests that advisors should first apply their wisdom to themselves — similar to "charity begins at home" or "people in glass houses shouldn\'t throw stones."'
      },
      {
        term: 'The Illusion of Separation',
        definition: 'The limiting belief that the divine (God/Source) and the physical human experience are divided. This misconception leads us to search for miracles exclusively in spectacular, external events, causing us to miss the inherent grace, oneness, and healing power present within ourselves and the mundane world.'
      }
    ],
    relatedSayings: [],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 32  Stub
  // ─────────────────────────────────────────────────────────────
  {
    id: 32, number: 32,
    text: 'Saying 32 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 33  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 33,
    number: 33,
    text: 'Jesus said, "Whatever you (sing.) hear with your ear, proclaim upon your (plur.) rooftops into the other ear. Indeed, no one lights a lamp and puts it under a vessel, nor puts it in a hidden place. Rather it is put on a lampstand so that each who enters and leaves might see its light."',
    reflection: `### I. The Mystery of the Two Ears

In this passage, Jesus describes a cycle of resonance.

- **The First Ear (The Download):** This is the inner, receptive ear. It's that high-pitched "ringing" in the ear or the sudden "download" of insight. It is the moment truth enters the soul.
- **The Waiting Period:** We wait for this "ringing" to become conscious so we can actually live it.
- **The Second Ear (The Reflection):** Interestingly, the text suggests the "other ear" needs to hear it again. When we proclaim the truth on the "rooftops" of our lives, we hear it back. The inner listening and the outer experience become symmetrical. We broadcast the truth, and in doing so, we confirm it within ourselves.

We carry a divine spark within us, but we often mistake the "vessel" for the light itself.

- **The Identity Crisis:** If we take on the identity of the vessel (our ego, our social form, our physical appearance), we are essentially trying to hide our true self.
- **Form vs. Truth:** Sometimes the "form" of a message — the rituals, the rules, or the rigid structures — actually takes away from the truth of the message.
- **The Lampstand:** The lampstand represents the interaction. When the spark is placed on the lampstand, it is no longer hidden. Everyone who "enters and leaves" can see it. The truth is meant to be functional, not just internal.

### III. The Shadow of Secrecy (The Hidden Places)

Historically, many societies kept wisdom only to themselves. Groups like the ancient Mystery Schools or even certain religious hierarchies believed the light was "too bright" for the common person, so they put the lamp in "hidden places."

Jesus' instruction is a radical departure from this gatekeeping. He argues that truth isn't a secret to be hoarded by an elite few; it is a reality to be shared with anyone walking through the door.

### IV. Integration: The Whole Brain & The Whole Life

To truly move the light from the vessel to the lampstand, we must listen with both sides (the left and right hemispheres of the brain).

When we integrate our logic and our intuition, the light burns in such a way that we physically cannot keep it within our vessel.

Repeating for importance: just as a message repeated is a sign of its importance, the repetition of our inner truth through our outer actions creates a life of integrity.

### V. The Embodied Light (The Dish-Washing Moment)

The ultimate goal of this "rooftop proclamation" is not a sermon; it is embodiment. When the light is on the lampstand, it shows up in the most mundane, real-life moments:

- It shows in our dancing.
- It shows in our lips and how we speak to others.
- It shows in the way we wash the dishes.`,
    contemplationPrompt: `When you stop identifying as the "vessel" and start identifying as the "spark," what changes about the way you handle your daily chores or your interactions with others?

---

*May we have the patience to sit with the "ringing" until it becomes a clear word. May we have the courage to take the lid off our vessels and let the divine spark be placed on the lampstand. Let our inner listening and our outer living become a perfect, symmetrical reflection of the Light.*`,
    concepts: [
      {
        term: 'The Vessel',
        definition: "It's necessary for carrying the oil, but if you put it over the flame, the flame dies from lack of oxygen. When we over-identify with our \"form\" (our status, our body, our fears), we smother the light."
      },
      {
        term: 'Left Ear / Right Brain',
        definition: 'Often associated with intuition, holism, and "hearing" the divine spark.'
      },
      {
        term: 'Right Ear / Left Brain',
        definition: 'Often associated with logic, speech, and "proclaiming" the word. By "listening with both sides," you are essentially describing congruence. When what we know internally matches what we do externally, the "vessel" becomes transparent.'
      }
    ],
    relatedSayings: [22, 24, 70],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 34  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 34,
    number: 34,
    text: 'Jesus said: If a blind man leads a blind man, they both fall into a pit.',
    reflection: `### From Proverb to Paradox

The saying, "If a blind man leads a blind man, they both fall into a pit," functions as both a warning and a psychological mirror. While often interpreted as a call for religious leaders to have a "correct" understanding of scripture, the teaching goes far deeper than professional competency. It speaks to the source of the light we use to navigate our lives.

### The Internal Blind Leader

We often act as our own blind guides. When we try to "fix" a personal struggle using the "darkness" of shame, guilt, or self-judgment, we are essentially a blind person trying to lead a blind person. You cannot use the energy of the problem (judgment) to find the energy of the solution (growth). To look at your own "darkness" with more darkness only ensures that you remain in the pit. Growth requires a shift in frequency — moving from the blindness of "fixing" to the sight of "understanding."

### The Specialist's Blindness

In our society, we often defer to "experts" or "specialists." However, a specialist who only treats symptoms is oblivious to the holistic flow of life. If a guide — whether a doctor, a CEO, or a spiritual teacher — is blind to the deeper laws of how the world works, they may lead us toward a temporary fix that results in a greater fall later. This is why the inner listening is so vital; it acts as a secondary verification for the "expert" advice we receive.

### The Symmetry of Sight

This saying also points to the Reflective Symmetry of our lives. The leaders we follow and the "pit" we fall into are often reflections of our own internal state of consciousness. If we carry "divine light" within, we become sensitive to when a path is leading nowhere. Like the parable of the harvest, where the master sees the readiness of the wheat while the workers see only the surface, true sight allows us to perceive the timing and fruitfulness of a situation.

### Conclusion

Remaining true to our "inner knowing" is not an act of rebellion, but an act of sight. It is the refusal to follow a promise that doesn't align with the truth we see in the light of our own expanded consciousness.`,
    contemplationPrompt: `Is the voice currently guiding my self-improvement one of sight (compassion and clarity) or one of blindness (shame and urgency)?

Where in my life am I following an "expert" simply because I am afraid to trust my own internal light?

Am I rushing toward a destination simply because I fear the stillness required to see a better path?

If I were to stop following my "old ways" today, what part of my inner light would finally have the space to speak?`,
    concepts: [
      {
        term: 'The Mirror of Reflective Symmetry',
        definition: 'This is the principle that our external reality and the leaders we choose are often direct reflections of our internal state of consciousness. When the "inner listening" is ignored, the "outer experience" becomes chaotic or misdirected, leading both the follower and the guide into a pit. True sight begins when we recognise that the world doesn\'t just happen to us; it reflects the clarity or the blindness we carry within. To change the direction of the "fall," one must first illuminate the inner landscape so that the outer path becomes clear.'
      },
      {
        term: 'Spiritual Discernment (The Single Eye)',
        definition: 'This refers to the ability to see beyond the "symptoms" or the surface-level promises of a leader. While a specialist may have intellectual knowledge, spiritual discernment is a holistic state of being where one\'s internal light is strong enough to detect when a path will not bear fruit. It is the refusal to use "darkness to look at darkness," meaning it rejects shame, guilt, and ignorance as tools for growth, opting instead for the "one-eyed" perspective of the heart that sees the Divine even when the world is blind.'
      }
    ],
    relatedSayings: [3, 5, 24, 91],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 35–114  Stubs — add text and reflections via admin
  // ─────────────────────────────────────────────────────────────
  {
    id: 35, number: 35,
    text: 'Saying 35 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 36  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 36,
    number: 36,
    text: 'Jesus said: Be not anxious from morning to evening and from evening to morning about what you shall put on.',
    reflection: `### See also: Luke 12:22–28

> "Consider how the wild flowers grow. They do not labor or spin. Yet I tell you, not even Solomon in all his splendor was dressed like one of these."

At first glance this text is about not worrying about basic needs — to trust that you will be taken care of (which is true). But unfortunately it may also lead us to think that we should wait on something or someone outside of us to provide for us. We don't see ourselves as part of, or a participant in, the process — and we don't understand that we create what we don't want to create when we worry about these things day and night. Furthermore, it may also point to how we worry about being perceived by others. This scarcity/fear mindset steals from our inner peace and knowing.

This verse may therefore remind us to embody abundance and not lack. When our minds are busy with worries all the time, there is not much space to see the potential, opportunities and love that surrounds us. Our perspective and thought patterns shape our world view. This is why creating space in the mind — being quiet — is so helpful, as it brings us back to center, where all lives and is possible, making us hear our inner guidance and living from oneness.`,
    contemplationPrompt: 'What generational or childhood pattern are you carrying that is affecting your perception of the world?',
    concepts: [
      {
        term: 'Spinning',
        definition: `Literal Definition: The ancient manual process of twisting raw fibers (such as wool or flax) into thread or yarn using a spindle and distaff. This was a mandatory, labor-intensive precursor to weaving cloth.

Symbolic Meaning:
- Anxiety & Materialism: Represents the restless human effort to provide for future physical needs and the "manufacture" of one's own security.
- The Fabricated Self: In Gnostic thought, it symbolizes the "weaving" of the material body or the ego — external layers that hide the true, divine spirit.

Theological Application: To "not spin" is an exhortation to abandon worldly worry and return to a state of "primordial nakedness," relying on one's inherent spiritual nature rather than human-made protections.`
      }
    ],
    relatedSayings: [37, 21],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 37  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 37,
    number: 37,
    text: 'His disciples said: On what day will you be revealed to us, and on what day shall we see you? Jesus said: When you unclothe yourselves and are not ashamed and take your garments and lay them beneath your feet like the little children (and) trample on them, then [you will see] the Son of the Living One, and you will not be afraid.',
    reflection: `At first glance, we are reminded of Jesus' resurrection and what the disciples believed would be his return. They asked: "On what day will you be revealed to us?" Just like the disciples, our minds and egos seek assurance. We want to know the date and time, as we struggle with uncertainty. There are two questions here: one is about revelation, and the other is about seeing Jesus again. In a sense, the disciples realise that they can't see Jesus as he is yet, and they want to know when they will know who he is or see the real being. The second question relates to seeing him physically again. Many Christians also await the second coming of Christ, where Jesus will return in the flesh.

Jesus' answer is that when we have shed our egos and stories — when we no longer identify with them — and when we are no longer ashamed about who we are as we have learned who we truly are, if we are willing to lay our "garments (armour)" down and trample on them like children (being free of the guilt, shame, and old identities that don't fit), not yet being so enmeshed with our worldly role and story — we will see Christ. We will see the Son of the Living One, meaning that we will recognize ourselves as sons of the Living One, and we will no longer be afraid as we will recognize our oneness and the Christ within. Christ's return happens within us when we, as the sons of the living Father, arise to the truth.

> *Baptism was a symbol of clothing yourself with Christ and leaving the old "false" self behind.*`,
    contemplationPrompt: 'How do you personally practice laying down that "armour" in your daily life?',
    concepts: [
      {
        term: 'Disrobe / Take up your garments',
        definition: 'In many Gnostic texts, "garments" or "clothing" symbolize the physical body or the flesh. To disrobe is to shed attachment to the physical world and the limitations of mortal existence. Clothing also represents societal constructs, identity, status, and the ego. Stripping these away means letting go of the false self to reveal the true, divine spark within.'
      },
      {
        term: 'Reversing the Fall',
        definition: 'This is a direct reference to the Garden of Eden in Genesis. Before the Fall, Adam and Eve were naked and felt no shame (Genesis 2:25). After eating from the Tree of Knowledge, they realized they were naked, felt shame, and made clothes (Genesis 3:7). To disrobe without shame is to return to a pre-Fall state of original innocence and unity with the divine.'
      },
      {
        term: 'Mastery over the Material',
        definition: 'Trampling the garments underfoot symbolizes conquering or mastering the physical world and the flesh, rather than being ruled by them.'
      }
    ],
    relatedSayings: [21, 46],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 38  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 38,
    number: 38,
    text: 'Jesus said: Many times have you desired to hear these words which I speak to you, and you have no other from whom to hear them. Days will come when you will seek me (and) you will not find me.',
    reflection: `Similar texts:
- **Luke 17:22:** Jesus tells his disciples, "The time is coming when you will long to see one of the days of the Son of Man, but you won't see it."
- **John 7:34:** Jesus tells the religious leaders, "You will look for me, but you will not find me; and where I am, you cannot come."

This text may point to the reality of life where we experience moments of clarity due to having a teacher or higher consciousness that guides and calms us. But when the teacher is no longer there to guide or calm, it won't help to seek him, as you won't find him in this way. This shows just how important it is for the student to cultivate the light within. There will come challenges on your path where no teacher is available, and where you have to walk the road "seemingly" alone. As you progress in your development, there also comes a time when other people may not be able to help you, as they may not have grown to a place where they can assist. You will then have to figure things out on your own or in a different way. When a student relies solely on an external source for light, the absence of a guide leaves them in utter darkness.

We can, therefore, move from a place of seeking outer guidance to finding the guidance within — guidance that has been internalized. The text further serves as a reminder to be present. The disciples have a rare opportunity to hear words that they would normally not hear. If they are truly present to hear and integrate the words spoken, it may assist them when they no longer have a teacher with them. "Days will come" indicates that this is not forever, but the student will experience a time when they feel alone and there is no clarity for moving forward.

Even in our modern age, there are times when we may wish for guidance from Jesus about what he meant or the path ahead. This is a process of seeking and finding. However, there comes a time when seeking doesn't bring answers anymore, and one may then find the strength to go within and discover what was there all along.`,
    contemplationPrompt: 'What happens when the person who guided you is gone? Have you integrated their wisdom enough to walk the road without them? Can you remind yourself of your own light?',
    concepts: [
      {
        term: 'Internalization',
        definition: 'The process by which an external source of comfort, guidance, or wisdom (like a teacher or mentor) is fully absorbed into your own psyche. The teacher\'s voice becomes your own intuition.'
      },
      {
        term: 'The Divine Spark (or Inner Light)',
        definition: 'The concept that a fragment of higher consciousness or divine wisdom resides inherently within every person, requiring only cultivation and awareness to illuminate one\'s path in times of darkness.'
      },
      {
        term: 'Projection',
        definition: 'The act of seeing your own unconscious qualities — such as your own latent wisdom, strength, or "light" — in someone else. When a student reveres a teacher, they are often projecting their own unacknowledged inner light onto that person until they are ready to claim it for themselves.'
      }
    ],
    relatedSayings: [24, 70],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 39  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 39,
    number: 39,
    text: 'Jesus said: The Pharisees and the scribes have taken the keys of knowledge (gnosis) (and) have hidden them. They did not go in, and those who wished to go in they did not allow. But you, be wise as serpents and innocent as doves.',
    reflection: `Another translation: ['Jesus says, "The Pharisees and the scribes have] re[ceived the keys] of [knowledge and have] hid[den them; neither have they] enter[ed nor permitted those who would] enter. [But you] bec[ome wi]se a[s the serpents and g]uileless [as the dov]es' (see also Hennecke and Schneemelcher: 1.112-113)." (In Fragments, p. 33)

Similar texts:
- **Luke 11:52:** Woe to you experts in the law, because you have taken away the key to knowledge. You yourselves have not entered, and you have hindered those who were entering.
- **Matthew 10:16:** I am sending you out like sheep among wolves. Therefore be as shrewd [discerning] as snakes and as innocent as doves.

Historically, we have seen how knowledge that could help people gain understanding and improve their lives has been burned, hidden, or kept by a select few who believed only they could interpret the texts. Jesus points out how the lawmakers (the authorities) received the knowledge to improve their own lives and the lives of others, yet chose not to enter the kingdom. Some chose to control others by keeping the knowledge to themselves.

They have not "permitted those who would enter" to do so, meaning that people who were seeking knowledge and open to it were actively kept from it by the authorities. People, who wanted the knowledge to be freely available for everyone (whether they were scientists or religious leaders), have been attacked or killed. They were seen as a threat to the authorities' perceived control.

Jesus reminds us to be as wise, shrewd, and discerning as snakes. Snakes are careful creatures; they hide when people are near and do not reveal themselves, ensuring they are not killed when a person strikes at them out of fear. There are, in fact, many snakes in our surrounding, but we don't know that they are there. This allows them to work under the radar.

Jesus also says to be as innocent as doves. This highlights the complex nature of the world. One must be vigilant because there are real dangers — forces and people who seek to withhold growth and light from others. However, we must still maintain our innocence to be able to hear the kingdom within. When we fight those who seek to destroy us, we risk becoming entangled in worldly affairs and we fight darkness with more darkness. Ultimately, this is about being smart and strategic so that we can remain innocent while living in this world. If we feel, for example, that a situation or action is not good for our soul, we should listen to that inner guidance.`,
    contemplationPrompt: '',
    concepts: [
      {
        term: 'The Keys of Knowledge',
        definition: 'A metaphor for the tools, teachings, or insights required to unlock spiritual understanding and access the "kingdom."'
      },
      {
        term: 'Shrewd / Discerning (Wise as serpents)',
        definition: 'Having sharp powers of judgment; being highly observant, strategic, and cautious. It means being aware of your surroundings and potential dangers so you aren\'t needlessly harmed.'
      },
      {
        term: 'Guileless / Innocent (Innocent as doves)',
        definition: 'Devoid of deception, manipulation, or malice. In your reflection, this means maintaining the purity of your soul and not becoming corrupted, bitter, or vengeful, even when facing hostile forces.'
      }
    ],
    relatedSayings: [3, 5, 102, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 40  Stub
  // ─────────────────────────────────────────────────────────────
  {
    id: 40, number: 40,
    text: 'Saying 40 — add the text via the admin panel.',
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 41  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 41,
    number: 41,
    text: 'Jesus said: He who has in his hand, to him shall be given; and he who has not, from him shall be taken even the little that he has.',
    reflection: `This statement may seem unfair to some, as many people believe that those who do not have will inherit everything and those who do have will lose what they have — which speaks to a jealous nature, one that seeks others to suffer as they suffer. They don't yet see a world where all can thrive. Some want to believe that if they struggle and possess fewer things now, they will receive a nice, big reward when they get to heaven. This is a scarcity perspective. It views resources and grace as finite, allowing a competitive nature to possess us.

If we solely view the material world as a place of "haves" and "have-nots," we actively create that reality. I have often found that people who have many things to be grateful for frequently focus only on what they lack, and in doing so, create even more lack in their lives. This idea challenges us to understand that when we have something to give (when there is something "in our hand"), that is more than material possessions. We are the divine spark. We are thus not losing something by giving it away.

Conversely, when we say that we have nothing to give, we are denying the gift of our divine spark. By looking only at our possessions and believing that they define us, we inevitably create more lack. We lose what we have because we do not live from our inner light. Things will change. Furniture may break. Material items may get lost or stolen, but it can't touch our light.

Some equate this teaching with working hard in the material world to gain more, not realising that it is not about hard work either. In fact, many people work tirelessly due to a scarcity mindset — constantly feeling behind the curve or believing they never have enough yet.

Interestingly, the material and mental worlds are deeply connected. As another commentator noted: to enter the Kingdom means to see the real world behind mental concepts. Such a person truly "possesses," and will therefore be given more — all the joy of life one can accept, which is Life itself. Those who continue to view the world through their mental concepts do not "possess." They live in their minds and are thus condemned to lose what they have, since what they have is subject to the law of change and perishes in the end.

Ultimately, our inner attitude and perspective shape our world. We can try to make great choices, do everything right, and work incredibly hard, yet still feel like victims if we haven't dug up the treasure within and started living from Source.`,
    contemplationPrompt: 'Our perception of the world and ourselves shapes what we do or don\'t see. Do you hold onto any beliefs or identities that keep you tethered to old patterns you have actually outgrown?',
    concepts: [
      {
        term: 'Spiritual Abundance vs. Scarcity Mindset',
        definition: 'The understanding that true wealth is an internal state of being rather than a collection of material assets. When a person operates from spiritual abundance — recognising their connection to Source or the "divine spark" — they experience the world as limitless, which naturally cultivates more grace, peace, and joy. Conversely, a scarcity mindset operates on the illusion of separation and finite resources. It breeds fear, jealousy, and competition, creating a self-fulfilling prophecy of lack, regardless of how much material wealth a person actually possesses.'
      },
      {
        term: 'Gnosis (Self-Knowledge) / The Divine Spark',
        definition: 'In the context of the Gospel of Thomas, salvation or "entering the Kingdom" is not about a future reward, but about waking up to your true nature right now. To "have in your hand" means to possess this direct, experiential knowledge (gnosis) of your own inner light. When you know who you truly are, you cannot lose yourself. When you lack this self-knowledge (identifying only with your body, mind, or possessions), you live in a state of spiritual poverty and are subject to losing even the fleeting things you think you own.'
      },
      {
        term: 'Mental Concepts vs. Direct Reality (Non-Attachment)',
        definition: 'The practice of seeing the world as it is, rather than through the filters, labels, and judgements created by the ego. Clinging to mental concepts creates a false reality that is entirely subject to the law of change and decay. To let go of these mental constructs is a form of non-attachment. By dropping the conceptual mind, a person "possesses" the present moment and Life itself, rather than being possessed by their thoughts and anxieties.'
      }
    ],
    relatedSayings: [3, 29, 70, 109, 113],
    published: true
  },

  {
    id: 42,
    number: 42,
    text: 'Jesus said: Become passers-by!',
    reflection: `Other related texts:
- **Romans 12:2:** Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will.
- **John 17:14:** I have given them your word and the world has hated them, for they are not of the world any more than I am of the world.

**Scholarly Quote:**

Marvin Meyer writes: "This saying may also be translated 'Be wanderers'; compare descriptions in early Christian literature of wandering teachers and missionaries. Another possible but less likely translation is, 'Come into being as you pass away'; compare the use of the same word parage as 'pass away' in the first riddle in saying 11, and other statements similar to this translation of saying 42 (for example, 2 Corinthians 4:16; Acts of John 76: 'Die so that you may live'). Tjitze Baarda, 'Jesus Said: Be Passers-By,' suggests yet another possible translation, 'Be Hebrews,' with the understanding of Philo of Alexandria that the word 'Hebrews' may be taken as 'migrants.' A medieval author, Petrus Alphonsi, preserves a saying much like saying 42 in his Clerical Instruction: 'This world is, as it were, a bridge. Therefore, pass over it, only do not lodge there.'"

Jesus is guiding his followers to be in the world without being of the world. Though brief, the text is rich with meaning. Becoming a "passer-by" requires a level of detachment, but this does not mean we cannot enjoy life or engage with society. Instead, it means remaining true to our inner light, even when pressured to conform to mainstream thought. We are meant to experience this world, learn from it, and then move forward. Often, we remain stuck — refusing to grow after learning new truths — because we fear becoming too different and losing our sense of belonging. Yet, if our true identity was not created here, it makes perfect sense to feel like a foreigner. You may feel as though you do not fit in; you are not meant to.

This philosophy does not require nihilism or living in isolation; it simply requires staying true to the light within. The world, our personalities, our jobs, the weather, and other people will inevitably change, but our inner light is a constant. It provides the stability we need to avoid fear and hatred when we feel threatened by change. Society constantly tempts us to adopt false identities to fit a specific mold, and speaking the truth often leads to judgment or rejection. Our primal fear of rejection frequently prevents us from embracing our truth and following our inner guidance. However, when we live from Source, we learn to trust our inner world more than our external circumstances — and in doing so, we change the world around us. Not by forcing others to see what we see, but by living it. Conversely, when we allow ourselves to be ruled by the external world, our inner world fractures, trapping us in a cycle of chaos.

The meaning of this text also shifts depending on the listener. For a disciple who has not yet realized their true nature and views Jesus primarily as an external Savior, becoming a "passer-by" might mean adhering to strict rules or dietary laws that others ignore. However, for those who understand they are not of this world, this text serves as a profound reminder of how to navigate earthly life.`,
    contemplationPrompt: 'Where do you feel pressured to conform to the world\'s expectations? Have you noticed how certain worldly attachments naturally lose their pull once you have outgrown them?',
    concepts: [
      {
        term: 'Passers-by (Detachment)',
        definition: 'The practice of moving through the physical world — experiencing, learning, and engaging with it — without becoming deeply attached to it or conforming to its transient identities and expectations. It is the state of being in the world but not of the world.'
      },
      {
        term: 'The Light Within (Source)',
        definition: 'The constant, unchanging spiritual essence or true identity inside a person. It provides internal stability, guidance, and a sense of home that anchors an individual against the chaos, fears, and shifting nature of the external world.'
      }
    ],
    relatedSayings: [21, 56, 80, 110, 111],
    published: true
  },

  {
    id: 43,
    number: 43,
    text: `His disciples said to him: Who are you, that you say these things to us? <Jesus said to them:> From what I say to you, do you not know who I am? But you have become like the Jews; for they love the tree (and) hate its fruit, and they love the fruit (and) hate the tree.`,
    reflection: `There is a tension between who Jesus is and what people expected him to be. This is still true today. We often cannot see in others what we refuse to recognize within ourselves. Because the disciples did not recognize their own inner light, they couldn't reconcile Jesus' humanity with his divinity. They were expecting a conventional, worldly king – and therefore missed the reality of seeing the divine in the ordinary. This speaks to a common human blind spot: we struggle to accept extraordinary truths when they come in ordinary packages.

Jesus compares his disciples to the Jews (you can replace Jews with any school of thought). The Jews hoarded knowledge. They loved being the teacher or the knowledgeable one. However, actually carrying the fruit – living the wisdom daily – requires stripping away the ego, engaging in deep self-reflection and fundamentally changing how one lives. It takes time, patience and requires change.

We often split the tree and the fruit into palatable and unpalatable parts.

- **Loving the fruit, hating the tree:** We might love the art, the philosophy, or the benefits someone provides, but we despise the flawed, plain, or complex human being who produced it.
- **Loving the tree, hating the fruit:** We might love a person for their familiarity or plainness, but resent them when they grow, speak hard truths, or challenge our world view ("Who do you think you are?").

By separating the tree and the fruit, we are avoiding the challenging reality of oneness. True wisdom is not just the words spoken or the person speaking them – it is the living integration of the two.`,
    contemplationPrompt: `Considering this dynamic of "splitting" the tree and the fruit, where else in modern life or society do you see people struggling to accept the whole picture because they prefer to separate the message from the messenger?`,
    concepts: [
      {
        term: 'Embodiment ("Carrying the Fruit")',
        definition: 'The physical and practical manifestation of spiritual knowledge. It is the demanding process of moving beyond the mere intellectual hoarding of information to actively integrating, living, and reflecting that wisdom in everyday life through continuous change.'
      },
      {
        term: 'Non-dualism (Oneness)',
        definition: "The recognition that the source (the tree) and its output (the fruit) are an integrated, indivisible whole. It is the rejection of the ego's tendency to fragment reality into separate, opposing categories—such as dividing a person's ordinary humanity from their profound wisdom."
      }
    ],
    relatedSayings: [3, 5, 24, 45, 52, 91, 108, 113],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 44  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 44,
    number: 44,
    text: 'Jesus said: He who blasphemes against the Father will be forgiven, and he who blasphemes against the Son will be forgiven; but he who blasphemes against the Holy Spirit will not be forgiven, either on earth or in heaven.',
    reflection: `### Understanding Some Context

**The Meaning of Forgiveness**

In orthodox dogma, "forgiveness" is often viewed as a legal pardon from a judge. But in esoteric, Gnostic, and psychological traditions, forgiveness is closer to its original Greek root in the New Testament, aphesis, which means "release," "letting go," or "return to wholeness." It is returning to wholeness from a state of separation. If we look at sin as ignorance or a state of fragmentation, then being "forgiven" means being successfully reintegrated. It is the restoration of balance.

**The Holy Spirit (Ruach)**

Ruach in Hebrew means "spirit," "wind," or "breath." The Spirit is literally what births/gives life. Ruach is grammatically feminine in Hebrew. Rucha (Aramaic) is feminine. Many early Christian authors — in particular those belonging to so-called "Jewish Christianity" — spoke of the Holy Spirit as Mother. The Greek translation for Spirit is "Pneuma," which is a neutral noun. In the Catholic Church, the Holy Spirit is referred to in English as "He." This may also point to how people relate to aspects of the All.

For this saying, in particular, it is important to understand the significance of the Holy Spirit as "Mother," "divine feminine," or feminine in nature. The Holy Spirit represents the animating life force, the inner connective tissue, the dark stillness (internal), the receptive womb of transformation. It is the subtle, internal voice of the Divine moving over the "waters" of our subconscious (see Genesis). The Father and Son (Masculine/Logos/Light) represent external manifestations of the Divine — structure, the law, the spoken word, the intellect, and the historical figure of Jesus.

Therefore, if you reject, slander, or completely close yourself off to the internal, life-giving connective force (the Holy Spirit / Divine Feminine), you are severing the very mechanism of healing and wholeness. It is "unforgivable" not because God is too angry to forgive you, but because entirely shutting out the inner connective Spirit is like locking the door from the inside.

**In Jungian Terms**

If a person purely operates from the masculine principle (intellect, logic, structure, outward action) and totally rejects the feminine principle (intuition, feeling, the unconscious, receptivity), they become rigid and fragmented. If you make a mistake in the external world (the domain of the animus), the psyche can correct it. But if you blaspheme — meaning to hold in utter contempt and deny the existence of your own unconscious/anima (the inner feminine) — you block the path to wholeness.

> *Note: In environments that overvalue the masculine, women often face intense pressure to exile their feminine essence, moulding themselves to fit a society that fails to nurture receptivity and intuition.*

**The Collective Wound**

The collective story has trampled on the feminine aspect. When cultures or religions suppress the Divine Mother, Sophia, or the Ruach, they create highly dogmatic, rigid, and ultimately destructive systems that lack empathy, inner connection, and oneness. A society that blasphemes its own feminine nature cannot find peace ("forgiveness") because it has destroyed the very principle of harmony.

Jesus' warning in Saying 44 can be read as a law of spiritual physics. You can misunderstand the external teachings (the Son) or the abstract concept of God (the Father) and still find your way back to balance. But if you fundamentally reject the inner, connective, nurturing, and transformative life-force (the Divine Feminine/Holy Spirit), you remain in a state of eternal fragmentation — "unforgiven" — because you have rejected the only force capable of making the two into one.`,
    contemplationPrompt: 'Where in my current routine am I treating stillness, sensitivity, or intuition as a vulnerability rather than the foundation of my own power?',
    concepts: [
      {
        term: 'The Primordial Matrix (The Mother)',
        definition: 'In both archetypal psychology and ancient cosmology, the feminine principle represents the primordial state of unmanifested potential. She is the darkness, the stillness, the void, and the "waters of the deep." She is the container — the infinite womb of creation — that must exist before anything specific can be formed within it. Psychologically, this mirrors the vast, collective unconscious out of which the conscious mind eventually emerges.'
      },
      {
        term: 'The Active Spark (The Father)',
        definition: 'If The Mother is the infinite, dark potential, The Father represents the active, differentiating spark. He is the "Let there be light," the structure, the spoken word (Logos), and the conscious ego — the masculine spark interacting with the feminine waters to initiate life, form, and order.'
      },
      {
        term: 'Reversing the Orthodox Hierarchy',
        definition: 'Traditional religious structures often place the Father first, treating the feminine as secondary or derived. By restoring the older, mystical understanding that the Divine Feminine — the Ruach or Holy Spirit — is the fundamental root of all things, we recognise that rejecting or "blaspheming" her means destroying the very foundation upon which the rest of the psyche and creation is built. This is not a hierarchy — it is a divine flow. The Mother does not rank above the Father; rather, she is the primordial ground from which the active spark of the Father naturally arises. One is the womb; the other is the seed. Together they form an unbroken, cyclical movement of creation rather than a ladder of authority.'
      }
    ],
    relatedSayings: [22, 101, 106],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYING 45  Full content
  // ─────────────────────────────────────────────────────────────
  {
    id: 45,
    number: 45,
    text: 'Jesus said, "Grapes are not harvested from thorn trees, nor are figs gathered from thorn bushes, for those do not bear fruit. Good people produce good from their store. Evil people produce wicked things from their evil store within their hearts, and say wicked things. For out of the heart\'s abundance they produce wicked things."',
    reflection: `### See also: Matthew 7:15–20

This saying teaches us a valuable life lesson where one judges (knows) someone by the fruit they bear rather than by outward appearance. People are identified by the consequences of their actions ("you will know them by their fruits"), rather than their outward appearance.

One will not/cannot expect to harvest grapes from thorn trees, or gather figs from thorn bushes. These trees/bushes do not produce fruit. Therefore, it is important to discern whether a person produces from wholeness or fragmentation. It is not about judging others for being good or bad. Someone doing evil is not necessarily a malicious soul choosing the dark over the light; rather, they are acting out of ignorance of who they truly are. It is about understanding that someone who is hurt and in pain won't offer fruit from the abundance of their heart, because they have invested in pain, hurt, and suffering, and therefore deliver thorns.

Fruit is simply the visible result of the unseen root system and the health of the soil. If a tree is drawing from depleted soil — or in human terms, a storehouse of unexamined pain, resentment, or trauma — it cannot produce nourishing fruit. It produces thorns as a defence mechanism, or spoiled fruit as a symptom of internal disease. The tree is not consciously choosing to be "wicked"; the output is a direct, systemic result of what it is being fed.

The type of tree refers to the inner nature or character of a person. The fruit refers to the actions, works, teaching, or lifestyle that flow from the inner nature of the person. One won't create pain from a place of joy, gratefulness, and love.

False prophets draw attention away from our inner light. While a false prophet can be an external person, it can also be understood as a fragmented voice within ourselves. A voice of ego, fear, or unresolved pain can easily masquerade as protection or wisdom (sheep's clothing). Ultimately, however, it acts as a wolf — devouring our energy, distracting us from the quiet, grounded truth of our actual nature, and making it harder to have the energy to bear fruit.`,
    contemplationPrompt: `Think of a recent moment in your life where you reacted with frustration, defensiveness, or exhaustion — a moment where you felt yourself producing "thorns."

When you pause and look quietly at the root of that reaction, is the voice driving it coming from your grounded center, or is it an old, fragmented fear dressed up as self-protection? What does that specific, hidden root need in order to integrate, so it no longer drains your energy and distracts from your inner light?`,
    concepts: [
      {
        term: 'Ponēros (Evil/Bad)',
        definition: 'In the context of the Greek New Testament, this goes beyond a simple moral failing. It signifies an actively destructive force or behavior born from being "burdened by toil." It represents the outward, harmful manifestation (the spoiled fruit) of an inner life that is in turmoil and burdened by unresolved pain.'
      },
      {
        term: 'Fragmentation',
        definition: 'A state of inner division where a person is operating from a place of unintegrated pain, trauma, or hurt (the "depleted soil"). In this state, a person\'s actions are often defensive and disconnected from their true nature, leading them to produce "thorns" rather than the nourishing fruit that comes from a state of wholeness and joy.'
      }
    ],
    relatedSayings: [24, 70],
    published: true
  },

  // ─────────────────────────────────────────────────────────────
  // SAYINGS 46–114  Stubs — add text and reflections via admin
  // ─────────────────────────────────────────────────────────────
  ...Array.from({ length: 69 }, (_, i) => ({
    id: i + 46,
    number: i + 46,
    text: `Saying ${i + 46} — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  }))
]
