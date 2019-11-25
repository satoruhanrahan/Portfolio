/*==================================================================================== 
    Author: Alex Satoru Hanrahan
    Created: 04/11/19
    Last Edited: 06/11/19
=====================================================================================*/

$(document).ready(function () {
  // Select DOM Items
  const menuBtn = document.querySelector('.menu-btn');
  //menu
  const navItems = document.querySelectorAll('.nav-item');
  const btnLines = document.querySelectorAll('.btn-line');
  const linkLines = document.querySelectorAll('.link-line');
  const homeLink = document.querySelector('#homeLink');
  const projectsLink = document.querySelector('#projectsLink');
  const aboutMeLink = document.querySelector('#aboutMeLink');
  const contactLink = document.querySelector('#contactLink');
  const homeLine = document.querySelector('#homeLine');
  const projectsLine = document.querySelector('#projectsLine');
  const aboutMeLine = document.querySelector('#aboutMeLine');
  const contactLine = document.querySelector('#contactLine');
  //overlay menu
  const menuOverlay = document.querySelector('#menu-overlay');
  const navItems2 = document.querySelectorAll('.nav-item2');
  const homeLink2 = document.querySelector('#homeLink2');
  const projectsLink2 = document.querySelector('#projectsLink2');
  // const aboutMeLink2 = document.querySelector('#aboutMeLink2');
  // const contactLink2 = document.querySelector('#contactLink2');
  const homeLine2 = document.querySelector('#homeLine2');
  const projectsLine2 = document.querySelector('#projectsLine2');
  // const aboutMeLine2 = document.querySelector('#aboutMeLine2');
  // const contactLine2 = document.querySelector('#contactLine2');
  const lngBtn = document.querySelector('#languageBtn');
  // const engBtn = document.querySelector('#engBtn');
  // const jpnBtn = document.querySelector('#jpnBtn');
  const lngSwitch = document.querySelector('#lngSwitch');
  const webDeveloper = document.querySelector('#webDeveloper');
  const name = document.querySelector('#name');
  const alex = document.querySelector('#alex');
  const viewMyProjects = document.querySelector('#viewMyProjects');
  
  //Menu button   //make button dark if in projects section and overlay menu is hidden or closed
  if(document.scrollingElement.scrollTop > ($(window).height() / 1.0775862069) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
    btnLines.forEach(item => item.classList.add('dark'));
  } else {
    btnLines.forEach(item => item.classList.remove('dark'));
  }

  // Menu Button
  let showMenu = false;
  menuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    //open menu if closed
    if (!showMenu) {
      menuBtn.classList.add('open');
      navItems.forEach(item => item.classList.remove('close'));
      navItems2.forEach(item => item.classList.remove('close'));
      linkLines.forEach(item => item.classList.remove('close'));
      menuOverlay.classList.remove('close');
      //set current link in overlay menu
      navItems.forEach(item => item.classList.remove('current'));
      navItems2.forEach(item => item.classList.remove('current'));
      linkLines.forEach(item => item.classList.remove('current'));
      //if in home section
      if(document.scrollingElement.scrollTop < 315){
        homeLink2.classList.add('current');
        homeLine2.classList.add('current');
        homeLink.classList.add('current');
        homeLine.classList.add('current');
      }
      //else if in projects section
      else if (document.scrollingElement.scrollTop >= 315){
        projectsLink2.classList.add('current');
        projectsLine2.classList.add('current');
        projectsLink.classList.add('current');
        projectsLine.classList.add('current');
        //make button white if in project section
        // if (document.scrollingElement.scrollTop >= 583){
        //   btnLines.forEach(item => item.classList.add('dark'));
        // }
        //make buttons dark if overlay menu is open
        if(document.scrollingElement.scrollTop > ($(window).height() / 1.0775862069) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
          btnLines.forEach(item => item.classList.add('dark'));
          lngBtn.classList.add('dark');
        } else {
          btnLines.forEach(item => item.classList.remove('dark'));
          lngBtn.classList.remove('dark');
        }
        //make menu dark if open in project section
        if(document.scrollingElement.scrollTop > ($(window).height() / 1.0775862069)) {
          navItems.forEach(item => item.classList.add('dark'));
          linkLines.forEach(item => item.classList.add('dark'));
        } else {
          navItems.forEach(item => item.classList.remove('dark'));
          linkLines.forEach(item => item.classList.remove('dark'));
        }
      }
      //show language button
      lngBtn.classList.remove('close');
      // Set Menu State
      showMenu = true;
    //close menu if open
    } else {
      menuBtn.classList.remove('open');
      navItems.forEach(item => item.classList.add('close'));
      navItems2.forEach(item => item.classList.add('close'));
      linkLines.forEach(item => item.classList.add('close'));
      menuOverlay.classList.add('close');
      //if in projects section
      if (document.scrollingElement.scrollTop >= 583){
        btnLines.forEach(item => item.classList.add('dark'));
      }
      //hide language button
      lngBtn.classList.add('close');
      // Set Menu State
      showMenu = false;
    }
  }

  //language button
  let english = true;
  $("#languageBtn").on('click', function (event) {
    if(english){
      // engBtn.classList.remove('current');
      // jpnBtn.classList.add('current');
      lngSwitch.classList.add('japanese');
      english = false;
      changeToJapanese();
    }
    else{
      // engBtn.classList.add('current');
      // jpnBtn.classList.remove('current');
      lngSwitch.classList.remove('japanese');
      english = true;
      changeToEnglish();
    }
  });
  
  //change languages
  function changeToJapanese(){
    // webDeveloper.innerHTML = "ウェブデベロッパー";
    // name.innerHTML = "悟ハンラハン";
    // alex.innerHTML = "アレックス";
    viewMyProjects.innerHTML = "プロジェクト紹介";
  }
  function changeToEnglish(){
    // webDeveloper.innerHTML = "Web Developer";
    // name.innerHTML = "Satoru Hanrahan";
    // alex.innerHTML = "Alex";
    viewMyProjects.innerHTML = "View My Projects";
  }

  // Add smooth scrolling for links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //my projects header animation
  if(document.scrollingElement.scrollTop > 20){
    $("#myProjectsHeader").addClass('not-visible');
    $("#myProjectsLine").addClass('not-visible');
  }
  const callback = function (entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("not-visible");
    });
  };
  const observer = new IntersectionObserver(callback);
  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function (target) {
    observer.observe(target);
  });

  //close overlay menu after link clicked
  navItems2.forEach(function(item){
    item.onclick = function(){
      menuBtn.classList.remove('open');
      menuOverlay.classList.add('close');
      navItems2.forEach(item => item.classList.add('close'));
      linkLines.forEach(item => item.classList.add('close'));
      lngBtn.classList.add('close');
      showMenu = false;
    }
  });

  //Change menu and button colour on scroll
  window.onscroll = function() {
    let position = document.scrollingElement.scrollTop;
    //Menu button   //make menu button dark if in projects section and overlay menu is hidden or closed
    if(position > ($(window).height() / 1.0775862069) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
      btnLines.forEach(item => item.classList.add('dark'));
    } else {
      btnLines.forEach(item => item.classList.remove('dark'));
    }
    //make language button dark if in projects section and overlay menu is hidden or closed
    if(position > ($(window).height() / 1.22549019608) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
      lngBtn.classList.add('dark');
    } else {
      lngBtn.classList.remove('dark');
    }
    //contact link
    if(position > 130){
      contactLink.classList.add('dark');
      contactLine.classList.add('dark');
    } else {
      contactLink.classList.remove('dark');
      contactLine.classList.remove('dark');
    }
    //About Me Link
    if(position > 170){
      aboutMeLink.classList.add('dark');
      aboutMeLine.classList.add('dark');
    } else {
      aboutMeLink.classList.remove('dark');
      aboutMeLine.classList.remove('dark');
    }
    //Projects Link
    if(position > 220){
      projectsLink.classList.add('dark');
      projectsLine.classList.add('dark');
      projectsLink.classList.add('current');
      projectsLine.classList.add('current');
    } else {
      projectsLink.classList.remove('dark');
      projectsLine.classList.remove('dark');
      projectsLink.classList.remove('current');
      projectsLine.classList.remove('current');
    }
    //Home Link
    if(position > 270){
      homeLink.classList.add('dark');
      homeLine.classList.add('dark');
      homeLink.classList.remove('current');
      homeLine.classList.remove('current');
    } else {
      homeLink.classList.remove('dark');
      homeLine.classList.remove('dark');
      homeLink.classList.add('current');
      homeLine.classList.add('current');
    }
  };
});
