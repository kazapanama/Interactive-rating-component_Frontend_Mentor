const rate = document.getElementById('rate'),
      result = document.getElementById('result'),
      scores = document.querySelectorAll('.rating-circle'),
      button = document.querySelector('button'),
      final = document.querySelector('.final-rate');
let current = 0;


scores.forEach((score,idx)=>{
    score.addEventListener('click',()=>{
        removeAllActive()
        score.classList.add('active')
        current = idx + 1
    })
})


button.addEventListener('click', (e)=>{
    e.preventDefault();
    if (current > 0) {
        rate.style.display = 'none';
        result.style.display = 'flex';
        final.innerText = `You selected ${current} out of 5`
    }
})


function removeAllActive(){
    scores.forEach(score=>{
        score.classList.remove('active')
    })
}

