const data = document.querySelector('.data');
function addNewField(){
    const input_tags = data.getElementsByTagName('input')
    const newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('class', 'input_Field');
    newField.setAttribute('size', 50);
    newField.setAttribute('placeholder', 'Another Field');
    data.appendChild(newField);
    if(input_tags.length>=2){
        document.getElementById('remove').style.visibility = "visible";
    }
}

function removeField(){
    const input_tags = data.getElementsByTagName('input')
    if(input_tags.length>=2){
        data.removeChild(input_tags[(input_tags.length)-1]);
        if(input_tags.length<2){
            document.getElementById('remove').style.visibility = "hidden";
        }
    }
}