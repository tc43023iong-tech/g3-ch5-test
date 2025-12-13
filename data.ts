import { QuestionType, QuizQuestion } from './types';

export const QUESTIONS: QuizQuestion[] = [
  // --- SECTION A: Fill in the blanks (Shuffled) ---
  {
    id: 'a3',
    section: 'A',
    instruction: 'Fill in the blanks with Ch.5 vocabulary.',
    type: QuestionType.FILL_BLANK,
    parts: ['I love eating ', ' so much! They are good for our body.'],
    answer: 'vegetables',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a12',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['Let’s ', ' some fresh apples.'],
    answer: 'pick',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a7',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['My brother likes to take ', ' of the birds.'],
    answer: 'photos',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a1',
    section: 'A',
    instruction: 'Fill in the blanks with Ch.5 vocabulary.',
    type: QuestionType.FILL_BLANK,
    parts: ['My mum gives me a ', ' to use for calling my grandma.'],
    answer: 'phone',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a9',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['Can I use your mobile ', ' ?'],
    answer: 'phone',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a14',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['Green ', ' are healthy for you.'],
    answer: 'vegetables',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a5',
    section: 'A',
    instruction: 'Fill in the blanks with Ch.5 vocabulary.',
    type: QuestionType.FILL_BLANK,
    parts: ['Lily picks flowers and takes some ', ' under the tree.'],
    answer: 'photos',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a10',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['Do you have a ', ' for the holiday?'],
    answer: 'plan',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a2',
    section: 'A',
    instruction: 'Fill in the blanks with Ch.5 vocabulary.',
    type: QuestionType.FILL_BLANK,
    parts: ['Don’t ', ' the rabbits in the garden.'],
    answer: 'feed',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a6',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['We can ', ' strawberries at the organic farm.'],
    answer: 'pick',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a15',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['It is a good ', ' to visit the museum.'],
    answer: 'plan',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a4',
    section: 'A',
    instruction: 'Fill in the blanks with Ch.5 vocabulary.',
    type: QuestionType.FILL_BLANK,
    parts: ['Our ', ' is going to the zoo this Sunday.'],
    answer: 'plan',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a11',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['Grandpa wants to ', ' the little pigs.'],
    answer: 'feed',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a8',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['Please eat more ', ' like carrots and corn.'],
    answer: 'vegetables',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },
  {
    id: 'a13',
    section: 'A',
    instruction: 'Fill in the blanks.',
    type: QuestionType.FILL_BLANK,
    parts: ['She is looking at the ', ' on the wall.'],
    answer: 'photos',
    options: ['plan', 'phone', 'feed', 'pick', 'photos', 'vegetables']
  },

  // --- SECTION B: Rearrange (Shuffled) ---
  {
    id: 'b5',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['My sister', 'ride a horse.', 'wants to'],
    correctOrder: ['My sister', 'wants to', 'ride a horse.'],
    displayAnswer: 'My sister wants to ride a horse.'
  },
  {
    id: 'b12',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['The dog', 'wants to', 'run.'],
    correctOrder: ['The dog', 'wants to', 'run.'],
    displayAnswer: 'The dog wants to run.'
  },
  {
    id: 'b2',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['have a picnic.', 'First,', 'want to', 'I'],
    correctOrder: ['First,', 'I', 'want to', 'have a picnic.'],
    displayAnswer: 'First, I want to have a picnic.'
  },
  {
    id: 'b8',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['Tom', 'pick fruit.', 'wants to'],
    correctOrder: ['Tom', 'wants to', 'pick fruit.'],
    displayAnswer: 'Tom wants to pick fruit.'
  },
  {
    id: 'b1',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['the farm.', 'I', 'go to', 'want to'],
    correctOrder: ['I', 'want to', 'go to', 'the farm.'],
    displayAnswer: 'I want to go to the farm.'
  },
  {
    id: 'b10',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['First,', 'we', 'want to', 'take photos.'],
    correctOrder: ['First,', 'we', 'want to', 'take photos.'],
    displayAnswer: 'First, we want to take photos.'
  },
  {
    id: 'b4',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['want to', 'I', 'do not', 'look at shells.'],
    correctOrder: ['I', 'do not', 'want to', 'look at shells.'],
    displayAnswer: 'I do not want to look at shells.'
  },
  {
    id: 'b14',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['Does', 'Ben', 'want to', 'play football?'],
    correctOrder: ['Does', 'Ben', 'want to', 'play football?'],
    displayAnswer: 'Does Ben want to play football?'
  },
  {
    id: 'b7',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['They', 'build a sandcastle.', 'want to'],
    correctOrder: ['They', 'want to', 'build a sandcastle.'],
    displayAnswer: 'They want to build a sandcastle.'
  },
  {
    id: 'b3',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['want to', 'Finally,', 'feed animals.', 'I'],
    correctOrder: ['Finally,', 'I', 'want to', 'feed animals.'],
    displayAnswer: 'Finally, I want to feed animals.'
  },
  {
    id: 'b13',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['Mary', 'does not', 'want to', 'sing.'],
    correctOrder: ['Mary', 'does not', 'want to', 'sing.'],
    displayAnswer: 'Mary does not want to sing.'
  },
  {
    id: 'b6',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['He', 'does not', 'want to', 'go swimming.'],
    correctOrder: ['He', 'does not', 'want to', 'go swimming.'],
    displayAnswer: 'He does not want to go swimming.'
  },
  {
    id: 'b9',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['Do', 'you', 'want to', 'fly a kite?'],
    correctOrder: ['Do', 'you', 'want to', 'fly a kite?'],
    displayAnswer: 'Do you want to fly a kite?'
  },
  {
    id: 'b11',
    section: 'B',
    instruction: 'Rearrange the words.',
    type: QuestionType.REARRANGE,
    words: ['Next,', 'she', 'wants to', 'buy a pen.'],
    correctOrder: ['Next,', 'she', 'wants to', 'buy a pen.'],
    displayAnswer: 'Next, she wants to buy a pen.'
  },

  // --- SECTION C: Translation (Shuffled) ---
  {
    id: 'c4',
    section: 'C',
    instruction: 'Translate into English.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: '首先，我想餵飼動物。',
    options: [
      { label: 'First, I want to look at animals.', value: '1', isCorrect: false },
      { label: 'Next, I want to feed animals.', value: '2', isCorrect: false },
      { label: 'First, I want to feed animals.', value: '3', isCorrect: true }
    ]
  },
  {
    id: 'c12',
    section: 'C',
    instruction: 'Translate into English.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: '最後，媽媽想要買菜。',
    options: [
      { label: 'Finally, mum want to buy vegetables.', value: '1', isCorrect: false },
      { label: 'Finally, mum wants to buy vegetables.', value: '2', isCorrect: true },
      { label: 'First, mum wants to buy vegetables.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c1',
    section: 'C',
    instruction: 'Translate into Chinese.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'First, I want to go to the beach.',
    options: [
      { label: '首先，我想去海灘。', value: '1', isCorrect: true },
      { label: '最後，我想去公園。', value: '2', isCorrect: false },
      { label: '首先，我想去農場。', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c14',
    section: 'C',
    instruction: 'Translate into English.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: '我不想要摘花。',
    options: [
      { label: 'I do not want to pick flowers.', value: '1', isCorrect: true },
      { label: 'I does not want to pick flowers.', value: '2', isCorrect: false },
      { label: 'I do not want to pick fruit.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c7',
    section: 'C',
    instruction: 'Translate into English.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: '我們想要去郊野公園。',
    options: [
      { label: 'We want to go to the farm.', value: '1', isCorrect: false },
      { label: 'We want to go to the country park.', value: '2', isCorrect: true },
      { label: 'We wants to go to the country park.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c3',
    section: 'C',
    instruction: 'Translate into English.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: '最後，我想摘水果。',
    options: [
      { label: 'Finally, I want to pick fruit.', value: '1', isCorrect: true },
      { label: 'First, I want to pick fruit.', value: '2', isCorrect: false },
      { label: 'Finally, I want to eat fruit.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c10',
    section: 'C',
    instruction: 'Translate into English.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: '接著，我們想要騎單車。',
    options: [
      { label: 'First, we want to ride a bike.', value: '1', isCorrect: false },
      { label: 'Next, we want to ride a bike.', value: '2', isCorrect: true },
      { label: 'Next, we want to ride a horse.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c5',
    section: 'C',
    instruction: 'Translate into English.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: '他不想要游泳。',
    options: [
      { label: 'He does not want to go swimming.', value: '1', isCorrect: true },
      { label: 'He do not want to go swimming.', value: '2', isCorrect: false },
      { label: 'I does not want to go swimming.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c13',
    section: 'C',
    instruction: 'Translate into Chinese.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Does the dog want to run?',
    options: [
      { label: '這隻貓想要跑嗎？', value: '1', isCorrect: false },
      { label: '這隻狗想要跑嗎？', value: '2', isCorrect: true },
      { label: '這隻狗想要吃嗎？', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c2',
    section: 'C',
    instruction: 'Translate into Chinese.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Next, I want to ride a horse.',
    options: [
      { label: '接著，我想拍照。', value: '1', isCorrect: false },
      { label: '接著，我想騎馬。', value: '2', isCorrect: true },
      { label: '最後，我想看動物。', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c9',
    section: 'C',
    instruction: 'Translate into Chinese.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Tom does not want to take photos.',
    options: [
      { label: 'Tom 不想要拍照。', value: '1', isCorrect: true },
      { label: 'Tom 不想要畫畫。', value: '2', isCorrect: false },
      { label: 'Tom 想要拍照。', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c6',
    section: 'C',
    instruction: 'Translate into English.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: '我的姊姊想要堆沙堡。',
    options: [
      { label: 'My sister want to build a sandcastle.', value: '1', isCorrect: false },
      { label: 'My sister wants to build a sandcastle.', value: '2', isCorrect: true },
      { label: 'My brother wants to build a sandcastle.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c11',
    section: 'C',
    instruction: 'Translate into Chinese.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'They want to look at shells.',
    options: [
      { label: '他們想要看貝殼。', value: '1', isCorrect: true },
      { label: '我們想要看貝殼。', value: '2', isCorrect: false },
      { label: '他們想要撿貝殼。', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'c8',
    section: 'C',
    instruction: 'Translate into Chinese.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Do you want to have a barbecue?',
    options: [
      { label: '你想要去游泳嗎？', value: '1', isCorrect: false },
      { label: '你想要去野餐嗎？', value: '2', isCorrect: false },
      { label: '你想要燒烤嗎？', value: '3', isCorrect: true }
    ]
  },

  // --- SECTION D: Grammar & Vocab (Shuffled) ---
  {
    id: 'd5',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: '',
    grammarOptions: ['Do', 'Does'],
    correctGrammar: 'Does',
    midText: ' she want to ',
    vocabOptions: ['plant', 'go', 'feed', 'ride', 'build', 'look'],
    correctVocab: 'feed',
    postText: ' animals?'
  },
  {
    id: 'd12',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: '',
    grammarOptions: ['Do', 'Does'],
    correctGrammar: 'Does',
    midText: ' he want to ',
    vocabOptions: ['take', 'make', 'cake', 'lake'],
    correctVocab: 'take',
    postText: ' photos?'
  },
  {
    id: 'd2',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'Susan ',
    grammarOptions: ['want', 'wants'],
    correctGrammar: 'wants',
    midText: ' to ',
    vocabOptions: ['plant', 'go', 'feed', 'ride', 'build', 'look'],
    correctVocab: 'build',
    postText: ' a sandcastle.'
  },
  {
    id: 'd15',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'You ',
    grammarOptions: ['want', 'wants'],
    correctGrammar: 'want',
    midText: ' to ',
    vocabOptions: ['look', 'see', 'watch', 'listen'],
    correctVocab: 'look',
    postText: ' at shells.'
  },
  {
    id: 'd8',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: '',
    grammarOptions: ['Do', 'Does'],
    correctGrammar: 'Do',
    midText: ' you want to ',
    vocabOptions: ['play', 'do', 'make', 'sing'],
    correctVocab: 'play',
    postText: ' football?'
  },
  {
    id: 'd10',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'My dog ',
    grammarOptions: ['don’t', 'doesn’t'],
    correctGrammar: 'doesn’t',
    midText: ' want to ',
    vocabOptions: ['walk', 'talk', 'write', 'draw'],
    correctVocab: 'walk',
    postText: ' in the rain.'
  },
  {
    id: 'd3',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'Tim ',
    grammarOptions: ['don’t', 'doesn’t'],
    correctGrammar: 'doesn’t',
    midText: ' want to ',
    vocabOptions: ['plant', 'go', 'feed', 'ride', 'build', 'look'],
    correctVocab: 'go',
    postText: ' swimming.'
  },
  {
    id: 'd14',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'The bird ',
    grammarOptions: ['want', 'wants'],
    correctGrammar: 'wants',
    midText: ' to ',
    vocabOptions: ['sing', 'swim', 'run', 'drive'],
    correctVocab: 'sing',
    postText: ' a song.'
  },
  {
    id: 'd1',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'I am at the farm. I ',
    grammarOptions: ['want', 'wants'],
    correctGrammar: 'want',
    midText: ' to ',
    vocabOptions: ['plant', 'go', 'feed', 'ride', 'build', 'look'],
    correctVocab: 'plant',
    postText: ' vegetables.'
  },
  {
    id: 'd7',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'The cats ',
    grammarOptions: ['want', 'wants'],
    correctGrammar: 'want',
    midText: ' to ',
    vocabOptions: ['sleep', 'read', 'draw', 'cook'],
    correctVocab: 'sleep',
    postText: ' on the sofa.'
  },
  {
    id: 'd11',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'We ',
    grammarOptions: ['want', 'wants'],
    correctGrammar: 'want',
    midText: ' to ',
    vocabOptions: ['have', 'has', 'do', 'did'],
    correctVocab: 'have',
    postText: ' a picnic.'
  },
  {
    id: 'd4',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'We ',
    grammarOptions: ['don’t', 'doesn’t'],
    correctGrammar: 'don’t',
    midText: ' want to ',
    vocabOptions: ['plant', 'go', 'feed', 'ride', 'build', 'look'],
    correctVocab: 'ride',
    postText: ' a horse.'
  },
  {
    id: 'd9',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'Mary and Jane ',
    grammarOptions: ['don’t', 'doesn’t'],
    correctGrammar: 'don’t',
    midText: ' want to ',
    vocabOptions: ['eat', 'drink', 'run', 'read'],
    correctVocab: 'eat',
    postText: ' ice cream.'
  },
  {
    id: 'd6',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'My brother ',
    grammarOptions: ['want', 'wants'],
    correctGrammar: 'wants',
    midText: ' to ',
    vocabOptions: ['fly', 'ride', 'swim', 'eat'],
    correctVocab: 'fly',
    postText: ' a kite.'
  },
  {
    id: 'd13',
    section: 'D',
    instruction: 'Choose the correct answers.',
    type: QuestionType.GRAMMAR_SELECT,
    preText: 'I ',
    grammarOptions: ['don’t', 'doesn’t'],
    correctGrammar: 'don’t',
    midText: ' want to ',
    vocabOptions: ['build', 'plant', 'feed', 'pick'],
    correctVocab: 'build',
    postText: ' a sandcastle.'
  },

  // --- SECTION E: Locations (Shuffled) ---
  {
    id: 'e3',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'The boys want to feed animals and pick fresh tomatoes.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: true },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e11',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Mum wants to buy fresh organic vegetables.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: true },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e7',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'The children want to build a sandcastle.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: true },
      { label: 'Farm 🚜', value: 'B', isCorrect: false },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e1',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'I want to look at shells and play with sand.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: true },
      { label: 'Farm 🚜', value: 'B', isCorrect: false },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e14',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'She wants to swim.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: true },
      { label: 'Farm 🚜', value: 'B', isCorrect: false },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e5',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'I want to plant strawberries.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: true },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e9',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'I want to fly a kite in a big open place.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: false },
      { label: 'Country Park 🌳', value: 'C', isCorrect: true }
    ]
  },
  {
    id: 'e2',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'They want to ride a bike and have a picnic.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: false },
      { label: 'Country Park 🌳', value: 'C', isCorrect: true }
    ]
  },
  {
    id: 'e12',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'We want to play volleyball on the sand.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: true },
      { label: 'Farm 🚜', value: 'B', isCorrect: false },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e6',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Dad wants to have a barbecue with friends.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: false },
      { label: 'Country Park 🌳', value: 'C', isCorrect: true }
    ]
  },
  {
    id: 'e10',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'They want to feed the rabbits.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: true },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e4',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'We want to swim in the sea and feel the wind.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: true },
      { label: 'Farm 🚜', value: 'B', isCorrect: false },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e13',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'He wants to ride a horse.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: true },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },
  {
    id: 'e8',
    section: 'E',
    instruction: 'Where are you?',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'We want to see sheep and cows.',
    options: [
      { label: 'Beach 🏖️', value: 'A', isCorrect: false },
      { label: 'Farm 🚜', value: 'B', isCorrect: true },
      { label: 'Country Park 🌳', value: 'C', isCorrect: false }
    ]
  },

  // --- SECTION Last Round: Short Answers (Original Bonus + 10 New) ---
  {
    id: 'h1',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Do you have a pen? 🖊️',
    options: [
      { label: 'Yes, I do.', value: '1', isCorrect: true },
      { label: 'Yes, I am.', value: '2', isCorrect: false },
      { label: 'No, I cannot.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h2',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Are you Mary? 👧',
    options: [
      { label: 'No, I do not.', value: '1', isCorrect: false },
      { label: 'No, I am not.', value: '2', isCorrect: true },
      { label: 'No, she is not.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h3',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Can the girls sing? 🎤',
    options: [
      { label: 'Yes, they do.', value: '1', isCorrect: false },
      { label: 'Yes, they are.', value: '2', isCorrect: false },
      { label: 'Yes, they can.', value: '3', isCorrect: true }
    ]
  },
  {
    id: 'h4',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Can Mike ride a horse? 🐎',
    options: [
      { label: 'No, he does not.', value: '1', isCorrect: false },
      { label: 'No, he cannot.', value: '2', isCorrect: true },
      { label: 'No, I cannot.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h5',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Is Sam a good boy? 👦',
    options: [
      { label: 'Yes, he does.', value: '1', isCorrect: false },
      { label: 'Yes, he is.', value: '2', isCorrect: true },
      { label: 'Yes, I am.', value: '3', isCorrect: false }
    ]
  },
  // New Last Round Questions
  {
    id: 'h6',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Does she like apples? 🍎',
    options: [
      { label: 'Yes, she do.', value: '1', isCorrect: false },
      { label: 'Yes, she does.', value: '2', isCorrect: true },
      { label: 'Yes, she is.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h7',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Can we play here? 🎮',
    options: [
      { label: 'No, we cannot.', value: '1', isCorrect: true },
      { label: 'No, we do not.', value: '2', isCorrect: false },
      { label: 'No, we are not.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h8',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Is it a cat? 🐱',
    options: [
      { label: 'No, it does not.', value: '1', isCorrect: false },
      { label: 'No, it is not.', value: '2', isCorrect: true },
      { label: 'No, it cannot.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h9',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Are they brothers? 👬',
    options: [
      { label: 'Yes, they are.', value: '1', isCorrect: true },
      { label: 'Yes, they do.', value: '2', isCorrect: false },
      { label: 'Yes, they can.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h10',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Do they have a car? 🚗',
    options: [
      { label: 'No, they are not.', value: '1', isCorrect: false },
      { label: 'No, they cannot.', value: '2', isCorrect: false },
      { label: 'No, they do not.', value: '3', isCorrect: true }
    ]
  },
  {
    id: 'h11',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Can a bird fly? 🐦',
    options: [
      { label: 'Yes, it can.', value: '1', isCorrect: true },
      { label: 'Yes, it does.', value: '2', isCorrect: false },
      { label: 'Yes, it is.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h12',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Is she your teacher? 👩‍🏫',
    options: [
      { label: 'Yes, she does.', value: '1', isCorrect: false },
      { label: 'Yes, she is.', value: '2', isCorrect: true },
      { label: 'Yes, she can.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h13',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Do we have homework? 📚',
    options: [
      { label: 'Yes, we do.', value: '1', isCorrect: true },
      { label: 'Yes, we are.', value: '2', isCorrect: false },
      { label: 'Yes, we can.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h14',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Does Tom run fast? 🏃',
    options: [
      { label: 'No, he is not.', value: '1', isCorrect: false },
      { label: 'No, he does not.', value: '2', isCorrect: true },
      { label: 'No, he cannot.', value: '3', isCorrect: false }
    ]
  },
  {
    id: 'h15',
    section: 'Last Round',
    instruction: 'Answer the question.',
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: 'Are you happy? 😊',
    options: [
      { label: 'Yes, I am.', value: '1', isCorrect: true },
      { label: 'Yes, I do.', value: '2', isCorrect: false },
      { label: 'Yes, I can.', value: '3', isCorrect: false }
    ]
  }
];