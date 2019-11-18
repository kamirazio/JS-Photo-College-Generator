
var createColleague = function(_photo_num, _line_sum, _background_color, _photo_size){

    // ----- Default variable by accoding to your preference---- //
    const photo_num = _photo_num || 40;
    const line_sum =  _line_sum || 4;
    const background_color = _background_color || '#00c4b1';
    const photo_size =  _photo_size || 90;
    // ----------------------- //

    let photo_num_per_line = parseInt(photo_num/(line_sum));
    let extra_num = photo_num % line_sum;
    let spacer_num = extra_num == 0 ? 0 : photo_num_per_line - extra_num;

    let face_list_elm = document.querySelector('.face-list');
    face_list_elm.style.width = photo_num_per_line * photo_size + 'px';

    function getRandom( _min, _max ) {
        return random = Math.floor( Math.random() * (_max + 1 - _min) ) + _min;
    }

    function testImageUrl(_url) {
        return new Promise(function(resolve, reject) {
            var image = new Image();
            image.addEventListener('load', resolve);
            image.addEventListener('error', reject);
            image.src = _url;
        });
    }

    function detectFailImgPoint(_i){
        console.log(_i+':fail');
    }
    
    function createImgElement(_e){
        let photo_node = document.createElement("li");
        photo_node.style.width = photo_size + 'px';
        photo_node.style.height = photo_size + 'px'; 
        _e.target.style.width = photo_size + 10;
        photo_node.appendChild(_e.target);
        face_list_elm.appendChild(photo_node);
    }

    for (let _i = 0; _i < photo_num; _i++) {
        // let photo_node = document.createElement("li");
        // photo_node.style.width = photo_size + 'px';
        // photo_node.style.height = photo_size + 'px';

        
        var img_url = 'images/face-' + _i + '.png'; 
        testImageUrl(img_url).then(function imageLoaded(_e) {
            createImgElement(_e);
            return;
        }).catch(function imageFailed(e) {
            var img_url = 'images/face-' + _i + '.jpg';
            testImageUrl(img_url).then(function imageLoaded(_e) {
                createImgElement(_e.srcElement.src);
            }).catch(function imageFailed(e) {
                detectFailImgPoint(_i);
            });
        });
        
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

}

createColleague();