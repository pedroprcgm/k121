
module.exports = () => {

    let tools = {};

    /*  
        Verifica loop 
        (sobrou 1 pessoa para escolher e ela ainda não foi escolhida)
    */
    tools.loop = (noChoosed, person) => {
        
        if(noChoosed.length==1 && noChoosed[0]._id == person._id){
            return true;
        }
    };
      
    
    // Escolhe (aleatoriamente) um amigo para o participante atual
    tools.chooseOne = (noChoosed, person) => {
        
        if(tools.loop(noChoosed, person)){
            return false;
        }
    
        let index = Math.floor((Math.random()*(noChoosed.length)));
        if(person._id == noChoosed[index]._id) tools.chooseOne(noChoosed, person);
        else {
            person.friend = noChoosed[index].name;
            noChoosed.splice(index, 1);
            return true;
        }
    };

    return tools;
}