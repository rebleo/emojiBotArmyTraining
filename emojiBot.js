// rebecca (marks) leopold, 2017
// itp camp, 2017
// https://itp.nyu.edu/camp2017/

//import the twit library w/ node.
var theTwit = require('twit');
//get developer data from config file
var theConfig = require('./config.js');
//connect to twitter
var T = new theTwit(theConfig);

// our palette

var red = ['😡','👹','💄','💋','👠','🦀','🌹', '🍎', '🍒','🍓','🌶','🍟','🍷','🏓','🎸','🚨','🚘','☎️','🎈','📕','🖍','📌','❤️','💔','❣️','❌','⭕️','⁉️','🚫','🔴','🚩']

var orange = ['🎃', '👘', '🦁', '🦊', '🐡', '🔥', '💥', '☄️', '🍊', '🍑', '🍤', '🥕', '🍺','🥃', '🏀', '🌅', '🌇','🏮', '📙', '☢️', '📳', '📴','✴️','🔶'];

var yellow = ['😀','🙂','🙃','😑','😓','🤓', '😎', '😐', '🙌','👍','👆','👦','👧','👨', '👩','🤦‍♀️', '👳‍♀️','💏', '👩‍❤️‍💋‍👩','👨‍❤️‍💋‍👨','🐤','🐯','🐝','🌕','⭐️','☀️','🌤','🍋', '🍌', '🧀', '🚕','💡','🛎','📒','✏️', '💛', '⚠️', '🚸']

var green = ["💚", "🌱", "🌲", "🌳", "🌴", "🌵", "🌿", "🍀", "🌾", "🍃", "🐉", "🐲", "🐊", "🐍", "🐢", "🐸", "🐛", "🍏", "🍐", "🎄", "🎍", "🎾", "⛳️", "♻️"];

var blue = ["🐳", "🐬", "🐟", "🌀", "🌐", "🐋", "🐠", "🗻", "💧", '🔵', "💙", '🎽', '🎠', '🚙', '🛃', '🛅', '🌃', '📪', '📘', '🔂', '🆕', '🆗', '🆙', '🚹'];

var purple = ["🌸", "💜", "🍆", "🍇", "👾", "🔮", "👿", '😈', "♎️", '🆔', '🚺']

// choose random emoji from color set
var theG = green[Math.floor(Math.random()*green.length - 1 )];
var theB = blue[Math.floor(Math.random()*blue.length - 1 )];

// call the function when the program is run
makeEmojiArt();

function makeEmojiArt() {
	// need to hardcode an array so the characters
	// appear in a grid and not a long line of text
	var emojis = [
		[' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ']
	];

	// create a blank string to Tweet
	var theTweetString = '';
	// loop through the emoji array of arrays
	// y for emojis on the y axis
	// x for the emojis on the x axis
	for (var y = 0; y < emojis.length; y++){
		for (var x = 0; x < emojis.length; x++){
			emojis[y][x] = theB;
			// emojis[0][2] = theG;
			// emojis[2][4] = theG;

			emojis[y][6] = "\n";
		}
		// split the string so there is a space btw each emojis
		// you may not need this line
		theTweetString += emojis[y].join(' ');

	}

	console.log(theTweetString)
	// post the unicode-formated string to Twitter
	T.post('statuses/update', {status: theTweetString});

}
