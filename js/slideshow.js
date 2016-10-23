(function(){
  var sections = document.querySelectorAll('main > section'),
      currentSection;

  function init(){
    currentSection = sections[0];
    currentSection.classList.add('current');
    sections.forEach(function(val,key){
      if(key > 0)
        val.classList.add('next');
    });

    document.addEventListener('keyup', _onkeypress);
    document.getElementById('prevSlide').addEventListener('click', previous);
    document.getElementById('nextSlide').addEventListener('click', next);

    // Hightlight code
    hljs.initHighlightingOnLoad();
  }

  function next(){
    var nextSection = currentSection.nextElementSibling;
    if(nextSection){
      currentSection.classList.remove('current');
      nextSection.className = 'current';
      currentSection = nextSection;
    }
    var audio = currentSection.getElementsByTagName('audio');
    if(audio.length > 0){
      setTimeout(function(){
        audio[0].play();
      },1000);
    }
  }

  function previous(){
    var prevSection = currentSection.previousElementSibling;
    if(prevSection){
      currentSection.className = 'next';
      prevSection.classList.add('current');
      currentSection = prevSection;
    }
  }

  function _onkeypress(e){
    if(e.keyCode == '39'){
      next();
    }else if (e.keyCode == '37') {
      previous();
    }
  }

  init();
})();
