/*==================================================================================== 
    Author: Alex Satoru Hanrahan
    Created: 04/11/19
    Last Edited: 06/11/19
=====================================================================================*/
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelectorAll('.nav-item');
const navItems2 = document.querySelectorAll('.nav-item2');
const linkLines = document.querySelectorAll('.link-line');
const menuOverlay = document.querySelector('#menu-overlay');
const homeLink2 = document.querySelector('#homeLink2');
const projectsLink2 = document.querySelector('#projectsLink2');
const aboutMeLink2 = document.querySelector('#aboutMeLink2');
const homeLine2 = document.querySelector('#homeLine2');
const projectsLine2 = document.querySelector('#projectsLine2');
const aboutMeLine2 = document.querySelector('#aboutMeLine2');
const lngBtn = document.querySelector('#languageBtn');
let showMenu = false;
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
        // // make button white if in project section
        // if (document.scrollingElement.scrollTop >= 583){
        //   btnLines.forEach(item => item.classList.add('dark'));
        // }
        // make buttons light if overlay menu open
        if(($('#menu-overlay').css('visibility') == 'visible')) { // || menuOverlay.classList.contains('close')
          btnLines.forEach(item => item.classList.remove('dark'));
          lngBtn.classList.remove('dark');
        } else {
          btnLines.forEach(item => item.classList.add('dark'));
          lngBtn.classList.add('dark');
        }
        // make buttons dark if in projects section
        if(document.scrollingElement.scrollTop > ($(window).height() / 1.0775862069) && ($('#menu-overlay').css('visibility') != 'visible')) { // || menuOverlay.classList.contains('close')
          btnLines.forEach(item => item.classList.add('dark'));
          lngBtn.classList.add('dark');
        } else {
          btnLines.forEach(item => item.classList.remove('dark'));
          lngBtn.classList.remove('dark');
        }

        //change menu btn to appropriate color depending on page
        let menuBtnAbtMePos = 0.5060728744939271;
        if($('#projects').height() > 820){
          menuBtnAbtMePos = 0.4205921938088829;
        }
        if($('#projects').height() > 1000){
          menuBtnAbtMePos = 0.3561253561253561;
        }
        if (document.scrollingElement.scrollTop >= ($(window).height() / menuBtnAbtMePos)){
          btnLines.forEach(item => item.classList.add('dark'));
          lngBtn.classList.add('dark');
        }
        if (document.scrollingElement.scrollTop > ($(window).height() / menuBtnAbtMePos)){
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
        //make menu light if open in about me section
        if(document.scrollingElement.scrollTop > ($(window).height() / 0.67)) {
          navItems.forEach(item => item.classList.remove('dark'));
          linkLines.forEach(item => item.classList.remove('dark'));
        } else {
          navItems.forEach(item => item.classList.add('dark'));
          linkLines.forEach(item => item.classList.add('dark'));
        }
      }
      //make overlay menu about me link current if in about me page
      if (document.scrollingElement.scrollTop >= 1500){
        projectsLine2.classList.remove('current');
        projectsLink2.classList.remove('current');
        aboutMeLine2.classList.add('current');
        aboutMeLink2.classList.add('current');
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
      //change menu btn to appropriate color depending on page
      let menuBtnAbtMePos = 0.5060728744939271;
      let menuBtnProjPos = 1.0738831615120275;
      // console.log($(window).height() / 1.0738831615120275)
      if($('#projects').height() > 820){
        menuBtnAbtMePos = 0.4205921938088829;
      }
      if($('#projects').height() > 1000){
        menuBtnAbtMePos = 0.3561253561253561;
      }
      //if in projects section
      if (document.scrollingElement.scrollTop >= ($(window).height() / menuBtnProjPos)){
        btnLines.forEach(item => item.classList.add('dark'));
      }
      //if in about me section section
      if (document.scrollingElement.scrollTop >= ($(window).height() / menuBtnAbtMePos)){
        btnLines.forEach(item => item.classList.remove('dark'));
      }
      // if (document.scrollingElement.scrollTop > ($(window).height() / menuBtnAbtMePos)){
      //   btnLines.forEach(item => item.classList.remove('dark'));
      // }
      //hide language button
      lngBtn.classList.add('close');
      // Set Menu State
      showMenu = false;
    }
  }