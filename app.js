// your code here!

$(function(){

	function getUniqueWordArray(wordArray){
		var uniqueWordArray = [];

		for(var i = 0; i < wordArray.length; i++){
			if ( $.inArray(wordArray[i], uniqueWordArray) === -1 ){
				uniqueWordArray.push(wordArray[i]);
			}
		}

		return uniqueWordArray;
	};

	function getaverageWordLength(wordArray){
		
		var LengthCount = 0;
		
		for(var i = 0; i < wordArray.length; i++){
			LengthCount += wordArray[i].length;	
		}

		return LengthCount / wordArray.length;
	}

	$('#analyze').submit(function(event){
		event.preventDefault();
		var userText = $('#user-text').val();
		var wordArray = userText.split(' ');
		var uniqueWordArray = getUniqueWordArray(wordArray);
		var averageWordLength = getaverageWordLength(wordArray);

		$('.js-wordcount').text(wordArray.length);
		$('.js-unique-wordcount').text(uniqueWordArray.length);
		$('.js-average-wordcount').text(averageWordLength);

		$('.text-report').removeClass('hidden');
	});



});