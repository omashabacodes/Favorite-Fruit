//Selectors

//select the first Select element
const sweetSour = document.querySelector('.firstSelect');

//select the first Div inside SelectorBox
const firstDiv = document.querySelector('.firstDiv');

//select the second Div inside SelectorBox to create Color select inside
const fruitColors = document.querySelector('.secondDiv');

//select the third Div inside SelectorBox to create Seasonal select inside
const seasonalAllSeason = document.querySelector('.thirdDiv');

//select the fourth Div inside SelectorBox to create Seed select inside
const seedNoseed = document.querySelector('.fourthDiv');

//select the fifth Div inside SelectorBox to create SecondColar select inside
const secondFruitColors = document.querySelector('.fifthDiv');

//select the first select to delete it
const removeFirstSelect = document.getElementById('firstselect');

//select the original question to delete it
const removeSelectorText = document.getElementById('selectortext');

//Evenet Listeners

sweetSour.addEventListener('change', firstQuestion);
fruitColors.addEventListener('change', secondQuestionOne);
seasonalAllSeason.addEventListener('change', secondQuestionTwo);
seedNoseed.addEventListener('change', thirdQuestionOne);
secondFruitColors.addEventListener('change', thirdQuestionTwo);

//Functions

//after fist selection, create new options
function firstQuestion(e) {
    
    //sweet was chosen
    switch (e.target.value) {
        case "sweet":
            //add new select 
            const secondQuestionPart1 = document.createElement('select');
            //add class and Id to the new select 
            secondQuestionPart1.className = 'secondSelectPart1';
            secondQuestionPart1.id = 'secondselectpart1';
            //append new select to the original Div 
            fruitColors.appendChild(secondQuestionPart1);
            //add Orange and Yellow options to the new select
            secondQuestionPart1.innerHTML = '<option selected>Pick</option> <option value="orange">Orange</option> <option value="yellow">Yellow</option>';
            //remove sweet and sour select
            removeFirstSelect.remove();
            //change original text of p for the new question
            document.getElementById('selectortext').textContent = "Now pick between Orange and Yellow:";
            break;
        //tart was chosen
        case "sour":
            //add new select
            const secondQuestionPart2 = document.createElement('select');
            //add class  and Id to the new select
            secondQuestionPart2.className = 'secondSelectPart2';
            secondQuestionPart2.id = 'secondselectpart2'
            //append new select to the original Div
            seasonalAllSeason.appendChild(secondQuestionPart2);
            //add Peal or No peal options to the new select
            secondQuestionPart2.innerHTML = "<option selected>Pick</option> <option value='allseason'>All-season</option> <option value='seasonal'> Seasonal</option>";
            //remove sweet and sour select
            removeFirstSelect.remove();
            document.getElementById('selectortext').textContent = "Now pick All-season or Seasonal:";
            break;
    }
};

function secondQuestionOne(e) {

    switch (e.target.value) {
        case "orange":
            //add new select
            const thirdQuestionPart1 = document.createElement('select');
            //add class and Id to the new select
            thirdQuestionPart1.classList.add('thirdQuestionPart1');
            thirdQuestionPart1.id = 'thirdquestionpart1';
            //append new select to the original Div
            seedNoseed.appendChild(thirdQuestionPart1);
            thirdQuestionPart1.innerHTML = "<option selected>Pick</option> <option value='noseedorange'>One/No Seed</option> <option value='seedorange'>Multiple Seeds</option>";
            const removeSecondSelectPart1 = document.getElementById('secondselectpart1');
            removeSecondSelectPart1.remove();
            document.getElementById('selectortext').textContent = "Now pick One/No Seed or Multiple Seeds:";
            break;
        case "yellow":
            const thirdQuestionPart2 = document.createElement('select');
            thirdQuestionPart2.classList.add('thirdQuestionPart2');
            thirdQuestionPart2.id = 'thirdquestionpart2';
            seedNoseed.appendChild(thirdQuestionPart2);
            thirdQuestionPart2.innerHTML = "<option selected>Pick</option> <option value='noseedyellow'>One/No Seed</option> <option value='seedyellow'>Multiple Seeds</option>";
            const removeSecondSelectPart2 = document.getElementById('secondselectpart1');
            removeSecondSelectPart2.remove();
            document.getElementById('selectortext').textContent = "Now pick One/No Seed or Multiple Seeds:";
            break;
    }
};

function secondQuestionTwo(e) {

    switch (e.target.value) {
        case "allseason":
            const thirdQuestionPart3 = document.createElement('select');
            thirdQuestionPart3.classList.add('thirdQuestionPart3');
            thirdQuestionPart3.id = 'thirdquestionpart3';
            secondFruitColors.appendChild(thirdQuestionPart3);
            thirdQuestionPart3.innerHTML = '<option selected>Pick</option> <option value="allseasonred">Red</option> <option value="allseasongreen">Green</option>';
            const removeSecondSelectPart3 = document.getElementById('secondselectpart2');
            removeSecondSelectPart3.remove();
            document.getElementById('selectortext').textContent = "Now pick Red or Green:";
            break;
        case "seasonal":
            const thirdQuestionPart4 = document.createElement('select');
            thirdQuestionPart4.classList.add('thirdQuestionPart4');
            thirdQuestionPart4.id = 'thirdquestionpart4';
            secondFruitColors.appendChild(thirdQuestionPart4);
            thirdQuestionPart4.innerHTML = '<option selected>Pick</option> <option value="seasonalorange">Orange</option> <option value="seasonalyellow">Yellow</option>';
            const removeSecondSelectPart4 = document.getElementById('secondselectpart2');
            removeSecondSelectPart4.remove();
            document.getElementById('selectortext').textContent = "Now pick Orange or Yellow:";
            break;
    }
};

function thirdQuestionOne(e) {
    const finalDiv = document.createElement('div');
    finalDiv.className = 'fruitPic';
    firstDiv.appendChild(finalDiv);

    //picture of papaya
    if (e.target.value === 'seedorange') {
        finalDiv.innerHTML = '<img src="https://tinyurl.com/yytgkekw">'
            + '</img><p class="bottomText">PAPAYA IS YOUR FAVOURITE FRUIT!</p>';
        const removeThirdSelectPart1 = document.getElementById('thirdquestionpart1');
        removeThirdSelectPart1.remove();
        removeSelectorText.remove();
    //picture of melon
    } else if (e.target.value === 'seedyellow') {
        finalDiv.innerHTML = '<img src="https://tinyurl.com/y5ad6nwb">'
            + '</img><p class="bottomText">HONEYDEW MELON IS YOUR FAVOURITE FRUIT!</p>';
        const removeThirdSelectPart2 = document.getElementById('thirdquestionpart2');
        removeThirdSelectPart2.remove();
        removeSelectorText.remove();
    //picture of mango
    } else if (e.target.value === 'noseedorange') {
        finalDiv.innerHTML = '<img src="https://tinyurl.com/y2f8asne">'
            + '</img><p class="bottomText">MANGO IS YOUR FAVOURITE FRUIT!</p>';
        const removeThirdSelectPart3 = document.getElementById('thirdquestionpart1');
        removeThirdSelectPart3.remove();
        removeSelectorText.remove();
    //picture of banana
    } else if (e.target.value === 'noseedyellow') {
        finalDiv.innerHTML = '<img src="https://tinyurl.com/y5bk4wj9">'
            + '</img><p class="bottomText">BANANA IS YOUR FAVOURITE FRUIT!</p>';
        const removeThirdSelectPart4 = document.getElementById('thirdquestionpart2');
        removeThirdSelectPart4.remove();
        removeSelectorText.remove();
    } else {
        return
    }
};

function thirdQuestionTwo(e) {
    const finalDivTwo = document.createElement('div');
    finalDivTwo.className = 'fruitPic';
    firstDiv.appendChild(finalDivTwo);

    //picture of lime
    if (e.target.value === 'allseasongreen') {
        finalDivTwo.innerHTML = '<img src="https://tinyurl.com/y2exyrpv"></img>'
            + '<p class="bottomText">LIME IS YOUR FAVOURITE FRUIT!</p>';
        const removeThirdSelectPart1 = document.getElementById('thirdquestionpart3');
        removeThirdSelectPart1.remove();
        removeSelectorText.remove();
    //picture of cranberry
    } else if (e.target.value === 'allseasonred') {
        finalDivTwo.innerHTML = '<img src="https://tinyurl.com/yyv6e2th"></img>'
            + '<p class="bottomText">CRANBERRY IS YOUR FAVOURITE FRUIT!</p>';
        const removeThirdSelectPart2 = document.getElementById('thirdquestionpart3');
        removeThirdSelectPart2.remove();
        removeSelectorText.remove();
    //picture of grapefruit    
    } else if (e.target.value === 'seasonalorange') {
        finalDivTwo.innerHTML = '<img src="https://tinyurl.com/y2uorekf"></img>'
            + '<p class="bottomText">GRAPEFRUIT IS YOUR FAVOURITE FRUIT!</p>';
        const removeThirdSelectPart3 = document.getElementById('thirdquestionpart4');
        removeThirdSelectPart3.remove();
        removeSelectorText.remove();
    //picture of passionfruit
    } else if (e.target.value === 'seasonalyellow') {
        finalDivTwo.innerHTML = '<img src="https://tinyurl.com/yxakcu2q"></img>'
            + '<p class="bottomText">PASSIONFRUIT IS YOUR FAVOURITE FRUIT!</p>';
        const removeThirdSelectPart4 = document.getElementById('thirdquestionpart4');
        removeThirdSelectPart4.remove();
        removeSelectorText.remove();
    } else {
        return
    }
};