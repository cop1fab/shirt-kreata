let shirt = document.querySelector('.second');
const patterns = document.querySelectorAll('.take');
const image = document.createElement('img');
for(const pattern of patterns){
     pattern.addEventListener('dragend', (event)=>{
        dragDrop(event.target.getAttribute('src'));
     })
}

function dragDrop(element){
    image.setAttribute('src', element);
    shirt.appendChild(image);

}

