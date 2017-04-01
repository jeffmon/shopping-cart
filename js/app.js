var products = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"]

console.log(products[0].product);

var targetContent = document.getElementById("content");
function addNames(name, img){
  for(var i = 0; i<name.length; i++){
    var createEmpty = document.createElement("div");
    createEmpty.className = "empty";
    targetContent.appendChild(createEmpty);
    var createName = document.createElement("div");
    createName.className = "shoppingName";
    createName.innerHTML = name[i].product;
    createEmpty.appendChild(createName);
    var createImage = document.createElement("img");
    createImage.className = "image";
    createImage.src = img[i];
    createEmpty.appendChild(createImage);
    createImage.width = 120;
  }
}

addNames(products, images);

