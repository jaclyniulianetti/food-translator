var dictionary = [
  {"english":"appetizers", "haverfood":"apps"},
  {"english":"Appetizers", "haverfood":"Apps"},
  {"english":"appetizer", "haverfood":"app"},
  {"english":"Appetizer", "haverfood":"App"},

  {"english":"appetizers", "haverfood":"apps"},
  {"english":"Appetizers", "haverfood":"Apps"},
  {"english":"dessert", "haverfood":"zert"},
  {"english":"Dessert", "haverfood":"Zert"},

  {"english":"entrées", "haverfood":"trée-trées"},
  {"english":"Entrées", "haverfood":"Trée-trées"},
  {"english":"entrée", "haverfood":"trée-trée"},
  {"english":"Entrée", "haverfood":"Trée-trée"},
  {"english":"entrees", "haverfood":"trée-trées"},
  {"english":"Entrees", "haverfood":"Trée-trées"},
  {"english":"entree", "haverfood":"trée-trée"},
  {"english":"Entree", "haverfood":"Trée-trée"},

  {"english":"sandwiches", "haverfood":"Adam Sandlers"},
  {"english":"Sandwiches", "haverfood":"Adam Sandlers"},
  {"english":"sandwich", "haverfood":"Adam Sandler"},
  {"english":"Sandwich", "haverfood":"Adam Sandler"},

  {"english":"air conditioners", "haverfood":"cool blasterz"},
  {"english":"Air conditioners", "haverfood":"Cool blasterz"},
  {"english":"air conditioner", "haverfood":"cool blaster"},
  {"english":"Air conditioner", "haverfood":"Cool blaster"},

  {"english":"cakes", "haverfood":"big ol' cookies"},
  {"english":"Cakes", "haverfood":"Big ol' cookies"},
  {"english":"cake", "haverfood":"big ol' cookie"},
  {"english":"Cake", "haverfood":"Big ol' cookie"},

  {"english":"noodles", "haverfood":"long-ass rice"},
  {"english":"Noodles", "haverfood":"Long-ass rice"},
  {"english":"noodle", "haverfood":"long-ass rice"},
  {"english":"Noodle", "haverfood":"Long-ass rice"},

  {"english":"chicken", "haverfood":"chicky-chick"},
  {"english":"Chicken", "haverfood":"Chicky-chick"},

  {"english":"fried chicken", "haverfood":"fry-fry chicky-chick"},
  {"english":"Fried chicken", "haverfood":"Fry-fry chicky-chick"},

  {"english":"chicken parmesan", "haverfood":"chicky-chicky parm-parm"},
  {"english":"Chicken Parmesan", "haverfood":"Chicky-chicky Parm-parm"},
  {"english":"chicken parm", "haverfood":"chicky-chicky parm-parm"},
  {"english":"Chicken parm", "haverfood":"Chicky-chicky parm-parm"},

  {"english":"chicken cacciatore", "haverfood":"chicky catch"},
  {"english":"Chicken cacciatore", "haverfood":"Chicky catch"},

  {"english":"eggs", "haverfood":"pre-birds"},
  {"english":"Eggs", "haverfood":"Pre-birds"},
  {"english":"egg", "haverfood":"pre-bird"},
  {"english":"Egg", "haverfood":"Pre-bird"},

  {"english":"rootbeers", "haverfood":"super waters"},
  {"english":"Rootbeers", "haverfood":"Super waters"},
  {"english":"rootbeer", "haverfood":"super water"},
  {"english":"Rootbeer", "haverfood":"Super water"},

  {"english":"tortillas", "haverfood":"bean blankies"},
  {"english":"Tortillas", "haverfood":"Bean blankies"},
  {"english":"tortilla", "haverfood":"bean blankie"},
  {"english":"Tortilla", "haverfood":"Bean blankie"},

  {"english":"forks", "haverfood":"food rakes"},
  {"english":"Forks", "haverfood":"Food rakes"},
  {"english":"fork", "haverfood":"food rake"},
  {"english":"Fork", "haverfood":"Food rake"}
];

// get all elements of the document
var all_elements = document.getElementsByTagName('*');

findText(all_elements);

// iterate through all elements to find text
function findText(all_elements) {
  for (var i = 0; i < all_elements.length; i++) {
    var element = all_elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];
      // if this nodeType is text
      if (node.nodeType === 3) {
        translateText(node);
      }
    }
  }
}

// translate text according to dictionary
function translateText(node) {
  var text = node.nodeValue;
  for (var k = 0; k < dictionary.length; k++) {
    var engRegEx = new RegExp(dictionary[k].english, "g");
    var replacedText = text.replace(engRegEx, dictionary[k].haverfood);
    node.nodeValue = replacedText;
    text = node.nodeValue;
  }
}