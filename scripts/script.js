var images = {

    Stockholm: ['./images/sweden/1.jpg', './images/sweden/2.jpg', './images/sweden/3.jpg', './images/sweden/4.jpg', './images/sweden/5.jpg', './images/sweden/6.jpg',
'./images/sweden/7.jpg','./images/sweden/8.jpg','./images/sweden/9.jpg','./images/sweden/10.jpg','./images/sweden/11.jpg','./images/sweden/12.jpg',
'./images/sweden/13.jpg','./images/sweden/14.jpg','./images/sweden/15.jpg','./images/sweden/16.jpg',
],
    NewYork: ['./images/new_york/2.jpg', './images/new_york/5.jpg', './images/new_york/6.jpg', './images/new_york/8.jpg',
 './images/new_york/16.jpg', './images/new_york/17.jpg', './images/new_york/18.jpg', './images/new_york/21.jpg', './images/new_york/23.jpg',
'./images/new_york/25.jpg', './images/new_york/26.jpg', './images/new_york/27.jpg', './images/new_york/28.jpg'],
    Paris: ['./images/paris/1.jpg', './images/paris/2.jpg', './images/paris/3.jpg', './images/paris/4.jpg', './images/paris/5.jpg',
'./images/paris/6.jpg', './images/paris/7.jpg', './images/paris/8.jpg', './images/paris/9.jpg', './images/paris/10.jpg',
'./images/paris/11.jpg', './images/paris/12.jpg', './images/paris/13.jpg', './images/paris/14.jpg', './images/paris/15.jpg',
'./images/paris/16.jpg', './images/paris/17.jpg', './images/paris/18.jpg', './images/paris/19.jpg', './images/paris/20.jpg',
'./images/paris/21.jpg', './images/paris/22.jpg', './images/paris/23.jpg', './images/paris/24.jpg', ],
    Chicago: ['./images/chicago/1.jpg', './images/chicago/2.jpg', './images/chicago/3.jpg', './images/chicago/4.jpg',
'./images/chicago/5.jpg', './images/chicago/6.jpg', './images/chicago/7.jpg', './images/chicago/8.jpg', './images/chicago/9.jpg', ],
    SanDiego: ['./images/san_diego/1.jpg', './images/san_diego/2.jpg', './images/san_diego/3.jpg','./images/san_diego/4.jpg',
'./images/san_diego/5.jpg','./images/san_diego/6.jpg','./images/san_diego/7.jpg','./images/san_diego/8.jpg','./images/san_diego/9.jpg',
'./images/san_diego/10.jpg','./images/san_diego/11.jpg','./images/san_diego/12.jpg','./images/san_diego/13.jpg','./images/san_diego/14.jpg',
'./images/san_diego/15.jpg','./images/san_diego/16.jpg', ],

}

//load all images on window load, so there is no display lag when display image boxes
function preloader() {

    document.getElementById('page').style.display = 'block';
    document.getElementById('loading').style.display = 'none';


}

function loadPage () {

    for (var key in images) {

        images[key].forEach(value => {

            var img = new Image();
            img.src = value;

        })

    }

}

loadPage();
window.onload = preloader;


//add event listeners for each location link
for (var key in images) {

    document.getElementById(key).addEventListener('click', addDivRows.bind(this, key), true);
}

Array.from(document.getElementsByClassName('location')).forEach(tag => {

    tag.addEventListener('click', function () {
        document.getElementById('about').style.position = 'relative';
    }, true);

})

var modal = document.getElementById('modal');


function addDivRows(location) {
    //remove already loaded images from different location
    $('.imageBox').remove();

    //determine how many rows of images are necessary. There are 4 images per row
    var rowsRequired = Math.floor(images[location].length / 4);

    //determine how many images we have 'left over' that do not make a full row of images
    var individualImageBoxes = images[location].length % 4;

    var container = document.getElementById('container');

    //to determine we're going through the array of images
    var imageListIndex = 0;

    for (i = 0; i < rowsRequired; i++) {

        //create row for images
        var divNode = document.createElement('div');
        divNode.setAttribute('class', 'row');
        container.appendChild(divNode);

        //create the image 'boxes'
        for (j = 0; j < 4; j++) {

            if (i < images[location].length) {
                var box = document.createElement('img');
                box.setAttribute('class', 'col-md-3 imageBox');
                box.setAttribute('href', '#');
                box.setAttribute('src', images[location][imageListIndex]);
                box.style.opacity = '0';
                box.style.cursor = 'pointer';

                divNode.appendChild(box);

                //make sure we're going sequentially through the images
                imageListIndex++;
            }
        }
    }

    //creating images for non-full rows
    if (individualImageBoxes > 0) {

        var divNode = document.createElement('div');
        divNode.setAttribute('class', 'row');
        container.appendChild(divNode);

        for (i = images[location].length - individualImageBoxes; i < images[location].length; i++) {

            var box = document.createElement('img');
            box.setAttribute('class', 'col-md-3 imageBox');
            box.setAttribute('href', '#');
            box.setAttribute('src', images[location][i]);
            box.style.opacity = '0';
            box.style.cursor = 'pointer';

            divNode.appendChild(box);
        }

    }

    //select all images currently visible
    var imageBoxes = Array.from(document.getElementsByClassName('imageBox'));

    //nice sequential fade in effect for each image :D
    for (let i = 0; i < imageBoxes.length; i++) {
        setTimeout(function () {
            $(imageBoxes[i]).fadeTo('slow', .9)
        }, i * 110)

    }

    //create a modal for each image clicked. This will display a larger image along with a description
    imageBoxes.forEach(box => {
        box.addEventListener('click', function () {

        //remove modal content of previously clicked image
        $('.modalElement').remove();

        //nice fade in effect whoooosh
        $(modal).fadeIn('fast');

        var modalImage = document.createElement('img');
        modalImage.setAttribute('class', 'modalElement');
        console.log(box.style);
        modalImage.style.maxWidth = '100%';
        modalImage.setAttribute('src', box.src);
        document.getElementById("modal_content").appendChild(modalImage);


        // var modalText = document.createElement('p');
        // modalText.setAttribute('id', 'texting');
        // modalText.setAttribute('class', 'modalElement text-center');
        //
        //
        // modalText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor tincidunt massa at ullamcorper. Ut eget ante vel sapien ultrices consequat eget id urna. Mauris congue fermentum est, eget auctor est sodales eu. Etiam dapibus porta augue ac varius. Curabitur at purus vel enim mollis sodales. Aliquam malesuada nunc non orci auctor, in tincidunt mi lacinia. Vestibulum eget tincidunt turpis, at vulputate ipsum. Fusce vel venenatis lorem, at suscipit ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
        // document.getElementById("modal_content").appendChild(modalText);

    }, true)
})


    //hover animation + fade
    Array.from(document.getElementsByClassName('imageBox')).forEach(imageBox => {
        imageBox.addEventListener('mouseover', function () {
            $(this).fadeTo("fast", 1.0);
        }, true);
        imageBox.addEventListener('mouseout', function () {
            $(this).fadeTo("fast", 0.9);
        }, true);

    });

}

window.onclick = function (event) {
    if (event.target == modal) {
        $(modal).fadeOut('fast');
    }
}
