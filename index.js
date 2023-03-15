function saturdayFun(hobby='roller-skate') {
        return `This Saturday, I want to ${hobby}!`;
 }
function mondayWork (work = 'go to the office') {
        return `This Monday, I will ${work}.`
}
function wrapAdjective(art='*'){
        return function(par='special') {
                return `You are ${art}${par}${art}!`
        }
}
wrapAdjective("||")("a dedicated programmer")
