if (choice === "0" || choice === null) {
    break;
} else if (choice === "1") {
    if (inventory.includes("мачете") && inventory.includes("аптечка") && inventory.includes("противогаз")) {
        alert("Вы надели противогаз, использовали аптечку в бою и нанесли сокрушительный удар мачете!\n\n ТОЛСТЯК ПОВЕРЖЕН! ВЫ ПОБЕДИЛИ!");
        const medkitIndex = inventory.indexOf("аптечка");
        if (medkitIndex !== -1) {
            inventory.splice(medkitIndex, 1);
            alert("Вы израсходовали аптечку в бою.");
        }
        break; 
        
    } else {
        alert("Вам не хватило снаряжения!\n\nВЫ ПОГИБЛИ.");
        break; 
    }
else if (!inventory.includes"противогаз")){
    alert("Вы бросились в атаку,но ядовитые споры заполнили легкие. Вы задохнулись....")
}    
else if (!inventory.includes"мачете")){
    alert("У вас нет оружия. Вы пытались отбиться руками, но это вам не помогло...")
} 
else if (!inventory.includes"аптечка")){
    alert("По вам сильно прилетело от Толстяка, но без аптечки вы истекли кровью...")
    break;
}  
} else if (choice === "2") {
    alert("Вы отступаете в безопасное место, чтобы подготовиться лучше.");
    room = "перекресток";
} else {
    alert("Такого действия нет.");
}
}