(function(){
  var sections = document.querySelectorAll('main > section'),
      currentSection;

  function init(){
    var currentIdx = 0;
    if(location.hash.slice(1) !== ''){
      currentSection = document.getElementById(location.hash.slice(1)) || sections[0];
      currentIdx = [].indexOf.call(sections, currentSection);
    }else{
      currentSection = sections[0];
    }
    currentSection.classList.add('current');
    [].forEach.call(sections, function(val,key){
      if(key > currentIdx)
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

    _updateURL();
  }

  function previous(){
    var prevSection = currentSection.previousElementSibling;
    if(prevSection){
      currentSection.className = 'next';
      prevSection.classList.add('current');
      currentSection = prevSection;
    }

    _updateURL();
  }

  function _onkeypress(e){
    if(e.keyCode == '39'){
      next();
    }else if (e.keyCode == '37') {
      previous();
    }
  }

  function _updateURL(){
    if(history.pushState) {
      history.pushState(null, null, '#' + currentSection.id);
    } else {
      location.hash = currentSection.id;
    }
  }

  init();
})();
