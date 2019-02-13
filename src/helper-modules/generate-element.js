module.exports.createLinkLI = (data) => {
    let a = document.createElement('a');
    let h4 = document.createElement('h4');
    a.href=series.id;
    a.key=sereis.id;
    a.setAttribute('class', 'list-group-item');
    h4.textContent=series.name;
    h4.setAttribute('class', 'text-center list-group-item-header');
    return a.appendChild(h4);
};