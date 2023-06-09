const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', (event)=> {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    
});

item.addEventListener('dragend', (event)=> {
    event.target.classList.remove('hold', 'hide')
});

for(placeholder of placeholders) {
    placeholder.addEventListener('dragover',(event) => {
        event.preventDefault();
    });
    placeholder.addEventListener('dragenter',(event) => {
        event.target.classList.add('hovered');
    })
    placeholder.addEventListener('dragleave', (event) => {
        event.target.classList.remove('hovered');
    })
    placeholder.addEventListener('drop',(event) => {
        event.target.classList.remove('hovered');
        event.target.append(item);
    })
}