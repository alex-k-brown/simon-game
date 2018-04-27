var data = {
    title: 'The Wand',
    description: 'You\'re walking through the woods & you find a wand on the ground.',
    question: 'Do you pick it up or leave it?',
    choices: [
        {
            answer: 'Pick it up',
            description: 'You pick it up & try to decide what you\'re going to do with it.',
            question: 'Do you break it or use it?',
            choices: [
                {
                    answer: 'Break it',
                    description: 'You snap it in half & die a sudden death.',
                },
                {
                    answer: 'Use it',
                    description: 'You use the wand to cast a spell & become the most powerful being in the universe.'
                }
            ]
        },
        {
            answer: 'Leave it',
            description: 'You leave it where you saw it & head home.',
            question: 'Once you get home do you relax & forget about it or do you call your friend to have him drive you back to the wand?',
            choices: [
                {
                    answer: 'Relax & forget about it',
                    description: 'You forget about the wand & live your best life.',
                },
                {
                    answer: 'Drive back',
                    description: 'You drive back but the wand is not there anymore. You go back home & toss & turn & then die in your sleep.'
                }
            ]
        }
    ]
}