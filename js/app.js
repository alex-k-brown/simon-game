var placeholder = data.choices;

function choice(input) {
    
    placeholder = input;

    if (!placeholder.question) {
        $('#story').removeClass('active');
        $('#end').addClass('active');

        $('#end-description').html(placeholder.description);
    } else {
        $('#description').html(placeholder.description);
        $('#question').html(placeholder.question);
        $('#answer-1').html(placeholder.choices[0].answer);
        $('#answer-2').html(placeholder.choices[1].answer);

        placeholder = placeholder.choices;
    }
}

function startStory() {
    $('#intro').removeClass('active');
    $('#story').addClass('active');

    $('#description').html(data.description);
    $('#question').html(data.question);
    $('#answer-1').html(data.choices[0].answer);
    $('#answer-2').html(data.choices[1].answer);
}

$('.answer').on('click', function() {
    var userInput = parseInt($(this).attr('val'));
    choice(placeholder[userInput]);
});

$('#title').html(data.title);

$('#intro').on('click', startStory);

$('#redo').on('click', function() {
    console.log('redo');
    location.reload();
});