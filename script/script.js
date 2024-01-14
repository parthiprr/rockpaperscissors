let score=JSON.parse(localStorage.getItem
  ('score')) || {
      wins:0,
      losses:0,
      ties:0
    };

    
    updateScoreElement();
  
  /*
  if (score===null)
  {
    score={
      wins:0,
      losses:0,
      ties:0
    };
  }
  */
 
 let isautoplaying=false;
 let intervalid;
 

 document.querySelector('.js-reset').addEventListener('click',()=>
 {
   document.querySelector('div')
   .innerHTML=`Are you sure you wanna reset 
   <button class="js-yes">yes</button> 
   <button class="js-no">No</button>`;

  
   removepop();
   

   document.querySelector('.js-yes').addEventListener('click',()=>
 {
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
  scorerest();
  document.querySelector('.container').innerHTML='';
  
  
 });
 });
  
  function removepop(){
    document.querySelector('.js-no').addEventListener('click',()=>{
      document.querySelector('.container').innerHTML='';
    });


  };
  
   
   function scorerest(){
    document.querySelector('.js-yes').addEventListener('click',()=>
    {
      
     score.wins=0;
     score.losses=0;
     score.ties=0;
     localStorage.removeItem('score');
     updateScoreElement();
     
    });
   }
 

 document.querySelector('.js-auto').addEventListener('click',()=>
 {
  autoplay();
 });

 

 function autoplay(){
  if(!isautoplaying){
   intervalid= setInterval(()=>{
      const playermove=pickcomputermove();
      playgame(playermove);
    },1000);
    isautoplaying=true;
    document.querySelector('.js-face').innerHTML='Stop playing';
  }
  else{
    clearInterval(intervalid);
    isautoplaying=false;
    document.querySelector('.js-face').innerHTML='Auto play';

  }
  
 }

 document.querySelector('.js-rock-button').addEventListener('click',()=>
 {
  playgame('rock');
 });
  
 document.querySelector('.js-paper-button').addEventListener('click',()=>
 {
  playgame('paper');
 });

 document.querySelector('.js-scissors-button').addEventListener('click',()=>
 {
  playgame('scissors');
 });

 document.body.addEventListener('keydown',()=>{

  if(event.key==='r')
  {
    playgame('rock');
  }
  else if(event.key==='p')
  {
    playgame('paper');
  }
  else if(event.key==='s')
  {
    playgame('scissors');
  }
  else if(event.key==='a')
  {
    autoplay();
  }
  else if(event.key==='Backspace')
  {
    score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
  }
 });

  function playgame(playermove){
    const computer=pickcomputermove();
    let result='';
    if (playermove==='scissors')
    {

      
      if(computer==='paper')
      {
        result='you win';
      }
      else if(computer==='rock')
      {
        result=' you loose';
      }
      else if(computer==='scissors')
      {
        result='tie!';
      }
      
        }


     else if(playermove==='paper')
     {
        
        if(computer==='paper')
        {
          result='tie';
        }
        else if(computer=='rock')
        {
          result=' you win';
        }
        else if(computer=='scissors')
        {
          result='you loose';
        }
       
  }


  else if(playermove==='rock')
  {
    
    if(computer ==='rock')
    {
      result='tie';
    }
    else if(computer ==='paper')
    {
      result='you loose'
    }
    else if(computer === 'scissors')
    {
      result='you win';
    }
    
  }
  if(result==='you win')
  {
    score.wins++;
  }
  else if(result==='you loose')
  {
    score.losses++;
  }
  else if(result==='tie')
  {
    score.ties++;
  }
  
  localStorage.setItem('score',JSON.stringify(score));
  
  document.querySelector('.js-result')
  .innerHTML=result;
  
  document.querySelector('.js-moves')
  .innerHTML=` you <img src="images/${playermove}-emoji.png" class="move-icon">
    <img src="images/${computer}-emoji.png" class="move-icon">
    computer`;
  
  updateScoreElement();
  
}

 function updateScoreElement()
 {
  document.querySelector('.js-score')
  .innerHTML=`wins:${score.wins},losses:${score.losses}
  ,ties:${score.ties}`;
 }


  function pickcomputermove(){
    const randomnumber2= Math.random();
    let computer='';
  
  if(randomnumber2 >0 && randomnumber2 <1/3)
  {
    computer='rock';
  }
  else if (randomnumber2 >1/3 && randomnumber2 <2/3)
  {
    computer='paper';
  }
  else if(randomnumber2 > 2/3 && randomnumber2 <1)
  {
    computer='scissors'
  }
    return computer;
  }