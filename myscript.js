var generateColleges = function(_photo_num, _line_num, _background_color){
    // ----- Please Change ---- //
    const photo_num = _photo_num || 24;
    const line_sum = _line_num || 3;
    const background_color = _background_color || '#00c4b1';
    const cell_size = 90;
    
    // ----------------------- //
    let photo_num_per_line = parseInt(photo_num/(line_sum));
    let extra_num = photo_num % line_sum;
    let spacer_num = extra_num == 0 ? 0 : photo_num_per_line - extra_num;

    let face_list_elm = document.querySelector('.face-list');
    face_list_elm.style.display = 'flex';
    face_list_elm.style.flexWrap = 'wrap';
    face_list_elm.style.width = photo_num_per_line * cell_size + 'px';

    function getRandom( _min, _max ) {
        return Math.floor( Math.random() * (_max + 1 - _min) ) + _min;
    }

    for (let _i = 0; _i < photo_num; _i++) {
        let photo_node = document.createElement("li");

        // ---- Style of photo element
        photo_node.style.display = 'flex';
        photo_node.style.alignItems='center';
        photo_node.style.justifyContent= 'center';
        photo_node.style.overflow='hidden';
        photo_node.style.lineStyle='none';
        photo_node.style.width = cell_size + 'px';
        photo_node.style.height = cell_size + 'px';

        let face_img = document.createElement('img');
        // ---- Style of image 
        face_img.src = 'images/face-' + _i + '.png';
        face_img.style.width = (cell_size+10) +'px';

        photo_node.appendChild(face_img);
        face_list_elm.appendChild(photo_node);
    }

    let face_list_li = document.querySelectorAll('.face-list li');
    for (let _i = 0; _i < spacer_num; _i++) {
        let spacer_node = document.createElement("li");
        spacer_node.style.width = cell_size + 'px';
        spacer_node.style.height = cell_size + 'px';
        spacer_node.style.backgroundColor = background_color;
        let rand2 = Math.floor(Math.random() * ((photo_num-1)-1) +1);
        spacer_node.style.opacity = getRandom(2, 8)/10;
        face_list_elm.insertBefore(spacer_node,face_list_li[ getRandom(2, photo_num-1) ]);
    }
}


