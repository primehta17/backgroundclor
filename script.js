let container = document.querySelector('.container');
let body = document.querySelector('body');
let hex = document.querySelector('#hexColor');
let image = document.querySelector('#imagechange');
let animal = document.querySelector('#animalchange');
let object = document.querySelector('#objectchange');

let color = ['#ba228f', '#ff0000', '#eee8aa', '#008000', '#800080', '#6a5acd', '#ff66cc', '#74c365', '#20b2aa', '#00a86b', '#191970', '#c71585', '#f56991', '#ffe5b4', '#fbab60 '];
let shapes = ['https://clipart-library.com/images/6Tp5aBGjc.png', 'https://static.vecteezy.com/system/resources/previews/019/044/760/original/glowing-circle-frame-free-png.png', 'https://tectonics.com/wp-content/uploads/2018/09/SNwrI97wQOy9jCZdnYgk_Curved-Round-Corner-Rec_F.jpg', 'https://www.pngkit.com/png/detail/270-2706865_rectangle-shape.png', 'https://pngimg.com/uploads/square/square_PNG31.png', 'https://wallpapers.com/images/hd/square-background-17ykgxx7slfzz2s7.jpg', 'https://mathmonks.com/wp-content/uploads/2020/06/Pentagon.jpg', 'https://illustoon.com/photo/9251.png', 'https://pngimg.com/uploads/triangle/triangle_PNG53.png', 'https://pngimg.com/uploads/triangle/triangle_PNG30.png'];
let animals = ['https://images.saymedia-content.com/.image/t_share/MTc2MTA2MTIyODYyNjY3MTc3/top-10-most-beautiful-animals-in-the-world.jpg',
    'https://www.pixelstalk.net/wp-content/uploads/images6/Animal-Desktop-Wallpaper.jpg', 'https://images1.fanpop.com/images/photos/1600000/Pics-from-the-zoo-animals-1674822-2560-1920.jpg', 'https://www.feedinspiration.com/wp-content/uploads/2015/04/Wild-Animal-Elephant-HD-Wallpapers-Desktop.jpg', 'https://1.bp.blogspot.com/-evHoG1vnn3E/WhqGviTUcxI/AAAAAAAAIfo/Ninvs5PkNXQOZ1Y0bJnZaNVxu31tG-uXgCLcBGAs/s1600/jethro.jpg', 'https://cdn.thewire.in/wp-content/uploads/2023/09/07154537/Lion_pose_6649531395.jpg', 'https://4.bp.blogspot.com/-RI_b4A0HGio/UiERdevj77I/AAAAAAAAAaU/9aeY8JihnXM/s1600/Giraffe-wallpapers.jpg', 'https://www.baltana.com/files/wallpapers-2/Cute-Cat-Images-07756.jpg', 'https://www.pixelstalk.net/wp-content/uploads/2016/04/Dog-HD-wallpaper-backgrounds.jpg'
];
let objects = ['https://hdqwalls.com/wallpapers/airplane-04.jpg', 'https://cdn.britannica.com/41/123141-050-E6229449/Air-New-Zealand-Boeing-747-400.jpg', 'https://www.brigglepolan.com/images/blog/5-19.jpg', 'https://www.hdwallpaper.nu/wp-content/uploads/2018/03/airbus_a380-22.jpg', 'https://i.pinimg.com/originals/76/ea/7c/76ea7ce2aef9ec91eb06a7b5abd6e33c.jpg', 'https://lh5.googleusercontent.com/-39Xp4MBKFuA/TYd4J1VGLnI/AAAAAAAAACE/nsOcdoRSQ_I/s1600/daf+cf+8x4+dump+truck.jpg', 'https://jonsmidamerica.com/wp-content/uploads/2019/10/pumpers-web.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0a/DCFD_Fire_Department_fire_truck_-_2010-09-07.jpg', 'https://pluspng.com/img-png/car-png-car-png-file-1766.png', 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/04/mini-hatch-1.jpg', 'https://content-images.carmax.com/qeontfmijmzv/MY19MKj0XutK084z874jt/9632621fd8464b5c0e54a9dee64ad4e5/tesla.jpg', 'https://cdn.britannica.com/72/146072-050-124A752E/Greyhound-bus.jpg', 'https://itdp.org/wp-content/uploads/2018/12/st-albert-electric-bus-e1544571915690.jpg'];

function randomColor() {
    return Math.floor(color.length * Math.random());
}
function randomShapes() {
    return Math.floor(shapes.length * Math.random());
}
function randomAnimals() {
    return Math.floor(animals.length * Math.random());
}
function randomObject() {
    return Math.floor(objects.length * Math.random());
}

function btnClick() {
    let backgroundcolor = color[randomColor()];
    let imagech = shapes[randomShapes()];
    let animalch = animals[randomAnimals()];
    let objchange = objects[randomObject()];
    hex.innerText = backgroundcolor;
    image.src = imagech;
    animal.src = animalch;
    object.src = objchange;
    body.style.backgroundColor = backgroundcolor;

}


container.addEventListener('click', btnClick)