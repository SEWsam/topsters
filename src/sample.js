export default (() => {
    const cards = [];
    for (let i = 0; i < 144; i++) {
       cards.push({id: "card-" + i, name: "", src: ""});
    }
    return cards;
})();