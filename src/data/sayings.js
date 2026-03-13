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
  // SAYINGS 21–114  Stubs — add text and reflections via admin
  // ─────────────────────────────────────────────────────────────
  ...Array.from({ length: 94 }, (_, i) => ({
    id: i + 21,
    number: i + 21,
    text: `Saying ${i + 21} — add the text via the admin panel.`,
    reflection: 'Reflection to be added. Use the admin panel to write your own.',
    contemplationPrompt: '',
    concepts: [],
    relatedSayings: [],
    published: false
  }))
]
