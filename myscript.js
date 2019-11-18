
// ----- Please Change ---- //
const photo_num = 24;
const line_sum = 4;
const background_color = '#00c4b1';
// ----------------------- //
const photo_size = 90;

let photo_num_per_line = parseInt(photo_num/(line_sum));
let extra_num = photo_num % line_sum;
let spacer_num = extra_num == 0 ? 0 : photo_num_per_line - extra_num;

let face_list_elm = document.querySelector('.face-list');
face_list_elm.style.width = photo_num_per_line * photo_size + 'px';

function getRandom( min, max ) {
    return random = Math.floor( Math.random() * (max + 1 - min) ) + min;
}

for (let i = 0; i < photo_num; i++) {
    let photo_node = document.createElement("li");
    photo_node.style.width = photo_size + 'px';
    photo_node.style.height = photo_size + 'px';

    let face_img = document.createElement('img');
    face_img.src = 'images/face-' + i + '.png';
    photo_node.appendChild(face_img);
    face_list_elm.appendChild(photo_node);
}

let face_list_li = document.querySelectorAll('.face-list li');
for (let i = 0; i < spacer_num; i++) {
    
    let spacer_node = document.createElement("li");
    spacer_node.style.width = photo_size + 'px';
    spacer_node.style.height = photo_size + 'px';
    spacer_node.style.backgroundColor = background_color;
    let rand2 = Math.floor(Math.random() * ((photo_num-1)-1) +1);
    spacer_node.style.opacity = getRandom(2, 8)/10;
    face_list_elm.insertBefore(spacer_node,face_list_li[ getRandom(2, photo_num-1) ]);
}