function roadKill(photo){
//console.log(photo);

  var ANIMALS3 = [ 'ardvark',
    'aligator',
    'armadilo',
    'babon',
    'buterfly',
    'girafe',
    'gibon',
    'hipopotamus',
    'jelyfish',
    'kangaro',
    'kiwi',
    'koala',
    'kilerwhale',
    'lama',
    'mose',
    'mercat',
    'oter',
    'octopus',
    'orangutan',
    'penguin',
    'panther',
    'parot',
    'pig',
    'quail',
    'quoka',
    'quol',
    'racon',
    'reinder',
    'rabit',
    'squirel',
    'shep',
    'walaby',
     ];

  var ANIMALS2 = [ 'ardvark',
    'aligator',
    'armadilo',
    'antelope',
    'babon',
    'bear',
    'bobcat',
    'buterfly',
    'cat',
    'camel',
    'cow',
    'chameleon',
    'dog',
    'dolphin',
    'duck',
    'dragonfly',
    'eagle',
    'elephant',
    'emu',
    'echidna',
    'fish',
    'frog',
    'flamingo',
    'fox',
    'goat',
    'girafe',
    'gibon',
    'gecko',
    'hyena',
    'hipopotamus',
    'horse',
    'hamster',
    'insect',
    'impala',
    'iguana',
    'ibis',
    'jackal',
    'jaguar',
    'jelyfish',
    'kangaro',
    'kiwi',
    'koala',
    'kilerwhale',
    'lemur',
    'leopard',
    'lama',
    'lion',
    'monkey',
    'mouse',
    'mose',
    'mercat',
    'numbat',
    'newt',
    'ostrich',
    'oter',
    'octopus',
    'orangutan',
    'penguin',
    'panther',
    'parot',
    'pig',
    'quail',
    'quoka',
    'quol',
    'rat',
    'rhinoceros',
    'racon',
    'reinder',
    'rabit',
    'snake',
    'squirel',
    'shep',
    'seal',
    'turtle',
    'tiger',
    'turkey',
    'tapir',
    'unicorn',
    'vampirebat',
    'vulture',
    'wombat',
    'walrus',
    'wildebeast',
    'walaby',
    'yak',
    'zebra' ];

    var gap = false;

    for ( var i = 1; i < photo.length - 1; i++){
        if ( photo[i] == ' '){
        gap = true;
        }
    }
    if (gap) return '??';
   /*
    var array = photo.split('=');

array = array.filter(function(word){
  return word != '';})

if (array.length == 1)
 return '??';
 */


var photo2 = photo.replace(/[=()\s]/g, ''); // removes equal signs
/*
for ( var i = 0; i < ANIMALS3.length; i++){  // checks for when single letters before word has been changed.
    if (photo2 == ANIMALS3[i]){
    wordTrick = true;
    break;
    }
}
if (wordTrick) return '??';

*/



for ( var i = 0 ; i < photo2.length -1 ; i++){   //removes duplicates letters
    if ( photo2[i] == photo2[i+1]){
      photo2 = photo2.slice(0, i) + photo2.slice(i+1);
      i--;
    }
  //var str = "Hello World";
//str = str.slice(0, 3) + str.slice(4);
}

for ( var i = 0; i < ANIMALS2.length; i++){  // checks for when double letters are missing
    if (photo2 == ANIMALS2[i]){
      if (photo2 == 'aligator'){
        photo2 == '??';
        break;
      }
    photo2 = ANIMALS[i];
    break;
    }
}

for ( var i = 0; i < ANIMALS2.length; i++){ // checks for double letters when word is reversed
    if (photo2.split('').reverse().join('') == ANIMALS2[i]){
    photo2 = ANIMALS[i];
    break;
    }

}

for ( var i = 0; i < ANIMALS.length; i++){
  if (ANIMALS[i] == photo2){
  return photo2;
  }
}

for ( var i = 0; i < ANIMALS.length; i++){
  if (ANIMALS[i] == photo2.split('').reverse().join('')){
  return photo2.split('').reverse().join('');
  }
}
return '??';




}
