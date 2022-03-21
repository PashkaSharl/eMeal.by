

const openModal = document.getElementById('open_modal')
const closeModal = document.getElementById('close_modal')
const modal = document.getElementById('modal')

openModal.addEventListener('click', function(e){
    e.preventDefault()
    modal.classList.add('active')
})

closeModal.addEventListener('click', () =>{
    modal.classList.remove('active')
})
const openModal2 = document.getElementById('open_modal2')
const closeModal2 = document.getElementById('close_modal2')
const modal2 = document.getElementById('modal2')

openModal2.addEventListener('click', function(ee){
    ee.preventDefault()
    modal2.classList.add('active2')
})

closeModal2.addEventListener('click', () =>{
    modal2.classList.remove('active2')
})


const dedLine = '2022-05-13'
  function getTimeRemaining(endTime){
    const t = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor(t/(1000*60*60*24));
    const hours = Math.floor((t/(1000*60*60))%24);
    const minutes = Math.floor((t/(1000*60))%60);
    const seconds = Math.floor((t/1000)%60);
    return{
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }
  function setClock(selector,endTime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const setinterval = setInterval(updateClock,1000);
    updateClock();
    function updateClock(){
      const t = getTimeRemaining(endTime);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
    }
  }
  setClock('.timer',dedLine)
