/*==================================================================================== 
    Author: Alex Satoru Hanrahan
    Created: 04/11/19
    Last Edited: 06/11/19
=====================================================================================*/

$(document).ready(function () {
  // Select DOM Items
  const home = document.querySelector('#home');
  const projects = document.querySelector('#projects');
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
  const aboutMeLink2 = document.querySelector('#aboutMeLink2');
  // const contactLink2 = document.querySelector('#contactLink2');
  const homeLine2 = document.querySelector('#homeLine2');
  const projectsLine2 = document.querySelector('#projectsLine2');
  const aboutMeLine2 = document.querySelector('#aboutMeLine2');
  // const contactLine2 = document.querySelector('#contactLine2');
  const lngBtn = document.querySelector('#languageBtn');
  // const engBtn = document.querySelector('#engBtn');
  // const jpnBtn = document.querySelector('#jpnBtn');
  const lngSwitch = document.querySelector('#lngSwitch');
  const webDeveloper = document.querySelector('#webDeveloper');
  const name = document.querySelector('#name');
  const alex = document.querySelector('#alex');
  const viewMyProjects = document.querySelector('#viewMyProjects');
  const projectsSection = document.querySelector('#projects');
  const bio1 = document.querySelector('#bio1');
  const bio2 = document.querySelector('#bio2');
  const bio3 = document.querySelector('#bio3');
  const infoIcon = document.querySelectorAll('.infoIcon');
  //get height of whole document
  const body = document.body,
      html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

  // Menu Button
  let showMenu = false;
  menuBtn.addEventListener('click', toggleMenu);

  //Open or close menu when menu button clicked
  function toggleMenu() {
    //open menu if closed
    if (!showMenu) {
      displayMenu();
      //close menu if open
    } else {
      closeMenu();
    }
  }

  //Opens menu
  function displayMenu() {
    //add open tag
    menuBtn.classList.add('open');
    //remove close tag
    navItems.forEach(item => item.classList.remove('close'));
    navItems2.forEach(item => item.classList.remove('close'));
    linkLines.forEach(item => item.classList.remove('close'));
    menuOverlay.classList.remove('close');
    //set current link in overlay menu
    navItems.forEach(item => item.classList.remove('current'));
    navItems2.forEach(item => item.classList.remove('current'));
    linkLines.forEach(item => item.classList.remove('current'));
    //if in home section
    if (document.scrollingElement.scrollTop < 315) {
      homeLink2.classList.add('current');
      homeLine2.classList.add('current');
      homeLink.classList.add('current');
      homeLine.classList.add('current');
    }
    //else if in projects section
    else if (document.scrollingElement.scrollTop >= 315) {
      projectsLink2.classList.add('current');
      projectsLine2.classList.add('current');
      projectsLink.classList.add('current');
      projectsLine.classList.add('current');
      // make buttons light if overlay menu open
      if (($('#menu-overlay').css('visibility') == 'visible')) {
        btnLines.forEach(item => item.classList.remove('dark'));
        lngBtn.classList.remove('dark');
      } else {
        btnLines.forEach(item => item.classList.add('dark'));
        lngBtn.classList.add('dark');
      }
      // make buttons dark if in projects section
      if (document.scrollingElement.scrollTop > ($(window).height() / 1.0775862069) && ($('#menu-overlay').css('visibility') != 'visible')) { // || menuOverlay.classList.contains('close')
        btnLines.forEach(item => item.classList.add('dark'));
      } else {
        btnLines.forEach(item => item.classList.remove('dark'));
        lngBtn.classList.remove('dark');
      }

      //change menu btn to appropriate color depending on page
      let menuBtnAbtMePos = 0.5060728744939271;
      let menuContactPos = 0.35919540229885055;
      if ($('#projects').height() > 820) {
        menuBtnAbtMePos = 0.4205921938088829;
        menuContactPos = 0.3159757330637007;
      }
      if ($('#projects').height() > 1000) {
        menuBtnAbtMePos = 0.3561253561253561;
      }
      if (document.scrollingElement.scrollTop >= ($(window).height() / menuBtnAbtMePos)) {
        btnLines.forEach(item => item.classList.add('dark'));
        lngBtn.classList.add('dark');
      }
      if (document.scrollingElement.scrollTop > ($(window).height() / menuBtnAbtMePos)) {
        btnLines.forEach(item => item.classList.remove('dark'));
        lngBtn.classList.remove('dark');
      }
      //make menu dark if open in project section
      if (document.scrollingElement.scrollTop > ($(window).height() / 1.0775862069)) {
        navItems.forEach(item => item.classList.add('dark'));
        linkLines.forEach(item => item.classList.add('dark'));
      } else {
        navItems.forEach(item => item.classList.remove('dark'));
        linkLines.forEach(item => item.classList.remove('dark'));
      }
      //make menu light if open in about me section
      if (document.scrollingElement.scrollTop > ($(window).height() / 0.67)) {
        navItems.forEach(item => item.classList.remove('dark'));
        linkLines.forEach(item => item.classList.remove('dark'));
      } else {
        navItems.forEach(item => item.classList.add('dark'));
        linkLines.forEach(item => item.classList.add('dark'));
      }
      //make menu dark if open in contact section
      if (document.scrollingElement.scrollTop > ($(window).height() / menuContactPos)) {
        navItems.forEach(item => item.classList.add('dark'));
        linkLines.forEach(item => item.classList.add('dark'));
      }
    }
    //make about me link current if in about me page
    if (document.scrollingElement.scrollTop >= 980) {
      projectsLine.classList.remove('current');
      projectsLink.classList.remove('current');
      aboutMeLine.classList.add('current');
      aboutMeLink.classList.add('current');
    }
    //make contact link current if in contact page
    if (document.scrollingElement.scrollTop >= 1600) {
      contactLine.classList.add('current');
      contactLink.classList.add('current');
      aboutMeLine.classList.remove('current');
      aboutMeLink.classList.remove('current');
    }
    //make overlay menu about me link current if in about me page
    if (document.scrollingElement.scrollTop >= 1500) {
      projectsLine2.classList.remove('current');
      projectsLink2.classList.remove('current');
      aboutMeLine2.classList.add('current');
      aboutMeLink2.classList.add('current');
    }
    //make overlay menu contact link current if in contact page
    if (document.scrollingElement.scrollTop >= 2460) {
      aboutMeLine2.classList.remove('current');
      aboutMeLink2.classList.remove('current');
      contactLine2.classList.add('current');
      contactLink2.classList.add('current');
    }
    //show language button
    lngBtn.classList.remove('close');
    // Set Menu State
    showMenu = true;
  }

  function closeMenu() {
    menuBtn.classList.remove('open');
    navItems.forEach(item => item.classList.add('close'));
    navItems2.forEach(item => item.classList.add('close'));
    linkLines.forEach(item => item.classList.add('close'));
    menuOverlay.classList.add('close');
    //change menu btn to appropriate color depending on page
    let menuBtnAbtMePos = 0.5060728744939271;
    let menuBtnProjPos = 1.0738831615120275;
    // console.log($(window).height() / 1.0738831615120275)
    if ($('#projects').height() > 820) {
      menuBtnAbtMePos = 0.4205921938088829;
    }
    if ($('#projects').height() > 1000) {
      menuBtnAbtMePos = 0.3561253561253561;
    }
    //if in projects section
    if (document.scrollingElement.scrollTop >= ($(window).height() / menuBtnProjPos)) {
      btnLines.forEach(item => item.classList.add('dark'));
    }
    //if in about me section section
    if (document.scrollingElement.scrollTop >= ($(window).height() / menuBtnAbtMePos)) {
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

  //language button
  let english = true;
  $("#languageBtn").on('click', function (event) {
    if (english) {
      // engBtn.classList.remove('current');
      // jpnBtn.classList.add('current');
      lngSwitch.classList.add('japanese');
      english = false;
      changeToJapanese();
    }
    else {
      // engBtn.classList.add('current');
      // jpnBtn.classList.remove('current');
      lngSwitch.classList.remove('japanese');
      english = true;
      changeToEnglish();
    }
  });

  //change languages
  function changeToJapanese() {
    // webDeveloper.innerHTML = "ウェブデベロッパー";
    // name.innerHTML = "悟ハンラハン";
    // alex.innerHTML = "アレックス";
    viewMyProjects.innerHTML = "プロジェクト紹介";
    bio1.innerHTML = "ウェブとソフトウェアの開発に興味を持って、アプリケーションを作成するのが趣味である。"
      + "スキルを向上させ、業界の最新のトレンドとテクノロジーをフォローするキャリアを期待しています。";
    bio2.innerHTML = "現在日本在住で日本で就職して生活をしたいと思っている。英語を母国語とする"
      + "ネイティブスピーカーとして、あるチームと協力し、質の高いウェブサイトとアプリケーションの制作を支援したいと考えている。";
    bio3.innerHTML = "<span class=\"qualTitle\">資格:</span></br>"
      + "<span class=\"qualItem\">ウーロンゴング大学コンピューターサイエンス学士　卒業</span>"
      + "<span class=\"qualItem\">日本語能力試験N2　取得</span></br>"
      + "<span class=\"qualTitle\">経験のある言語やテクノロジー: </span></br>"
      + "<span class=\"qualItem\">PHP</span>　"
      + "<span class=\"qualItem\">MySQL</span>　"
      + "<span class=\"qualItem\">Nodejs</span>　"
      + "<span class=\"qualItem\">MongoDB</span>　"
      + "<span class=\"qualItem\">Vue</span>　"
      + "<span class=\"qualItem\">Express</span>　"
      + "<span class=\"qualItem\">Sass</span>　"
      + "<span class=\"qualItem\">JQuery</span>　"
      + "<span class=\"qualItem\">Materialize CSS</span>　";
  }
  function changeToEnglish() {
    // webDeveloper.innerHTML = "Web Developer";
    // name.innerHTML = "Satoru Hanrahan";
    // alex.innerHTML = "Alex";
    viewMyProjects.innerHTML = "View My Projects";
    bio1.innerHTML = "Passionate about web and software development, I enjoy creating web applications and am looking "
      + "forward to a career of improving my skills and following the latest trends and technologies of the industry.";
    bio2.innerHTML = "I am currently located in Japan where I am planning to work and live. As a native english"
      + "　speaker with proficiency in Japanese, I hope to collaborate with people and help produce good quality websites. ";
    bio3.innerHTML = "<span class=\"qualTitle\">Qualifications:</span></br>"
      + "<span class=\"qualItem\">Bachelor Of Computer Science</span>"
      + "<span class=\"qualItem\">Japanese Proficiency Language Certificate N2</span></br>"
      + "<span class=\"qualTitle\">Experience working with: </span></br>"
      + "<span class=\"qualItem\">PHP</span>"
      + "<span class=\"qualItem\">MySQL</span>"
      + "<span class=\"qualItem\">Nodejs</span>"
      + "<span class=\"qualItem\">MongoDB</span>"
      + "<span class=\"qualItem\">Vue</span>"
      + "<span class=\"qualItem\">Express</span>"
      + "<span class=\"qualItem\">Sass</span>"
      + "<span class=\"qualItem\">JQuery</span>"
      + "<span class=\"qualItem\">Materialize CSS</span>";
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
  if (document.scrollingElement.scrollTop > 20) {
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
  navItems2.forEach(function (item) {
    item.onclick = function () {
      menuBtn.classList.remove('open');
      menuOverlay.classList.add('close');
      navItems2.forEach(item => item.classList.add('close'));
      linkLines.forEach(item => item.classList.add('close'));
      lngBtn.classList.add('close');
      showMenu = false;
    }
  });

  //Change menu and button colour on scroll
  window.onscroll = function () {
    let position = document.scrollingElement.scrollTop;
    let menuBtnAbtMePos = 0.505;
    let lngBtnAbtMePos = 0.53648068669;
    let contactLnkPos = 775;
    let abtMeLnkPos = 820;
    let projectLnkPos = 870;
    let homeLnkPos = 920;
    //positions for changing links in contact page
    let contactPagePos = 1400;
    let contactLnkPos2 = 1650;
    let abtMeLnkPos2 = 1700;
    let projectLnkPos2 = 1740;
    let homeLnkPos2 = 1790;
    if ($('#projects').height() > 650) {
      menuBtnAbtMePos = 0.42087542087;
      lngBtnAbtMePos = 0.44326241134;
      contactLnkPos = 1025;
      abtMeLnkPos = 1070;
      projectLnkPos = 1125;
      homeLnkPos = 1170;
      contactPagePos = 1650;
      contactLnkPos2 = 1900;
      abtMeLnkPos2 = 1950;
      projectLnkPos2 = 1990;
      homeLnkPos2 = 2040;
    }
    // console.log(position)
    console.log($(projects).height() + $(home).height())
    console.log(position)
    // if ($('#projects').height() > 1000) {
      // if(window.innerWidth < 307)
      //   menuBtnAbtMePos = 0.36023054755043227;
      // else
        // menuBtnAbtMePos = 0.3561253561253561;
      // menuBtnAbtMePos = 0.3659233847913093;
      // menuBtnAbtMePos = 0.35551763367463024;
      // menuBtnAbtMePos = 0.3608545034642032;
    // }
    menuBtnAbtMePos = $(projects).height() + $(home).height() + 30;
    //Menu button 
    //make menu button light if in home section and overlay menu is hidden or closed
    if (position < ($(window).height() / 1.0775862069) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
      btnLines.forEach(item => item.classList.remove('dark'));
    } else {
      btnLines.forEach(item => item.classList.add('dark'));
    }
    //make menu button light if in about me section and overlay menu is hidden or closed ********
    
    // if (position > ($(window).height() / menuBtnAbtMePos) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
    //   btnLines.forEach(item => item.classList.remove('dark'));
    // }
    if (position > menuBtnAbtMePos && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
      btnLines.forEach(item => item.classList.remove('dark'));
    }

    //language button
    //make language button dark if in projects section and overlay menu is hidden or closed
    if (position > ($(window).height() / 1.22549019608) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
      lngBtn.classList.add('dark');
    } else {
      lngBtn.classList.remove('dark');
    }
    //make language button light if in about me section and overlay menu is hidden or closed
    if (position > ($(window).height() / lngBtnAbtMePos) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
      lngBtn.classList.remove('dark');
    }

    //Change color of menu links in projects section and update current
    //contact link
    if (position > 130) {
      if (position > contactLnkPos) {
        contactLink.classList.remove('dark');
        contactLine.classList.remove('dark');
      }
      else {
        contactLink.classList.add('dark');
        contactLine.classList.add('dark');
      }
    } else {
      contactLink.classList.remove('dark');
      contactLine.classList.remove('dark');
    }
    //About Me Link
    if (position > 170) {
      if (position > abtMeLnkPos) {
        aboutMeLink.classList.remove('dark');
        aboutMeLine.classList.remove('dark');
      }
      else {
        aboutMeLink.classList.add('dark');
        aboutMeLine.classList.add('dark');
      }
    } else {
      aboutMeLink.classList.remove('dark');
      aboutMeLine.classList.remove('dark');
    }
    //Projects Link
    if (position > 220) {
      if (position > projectLnkPos) {
        projectsLink.classList.remove('dark');
        projectsLine.classList.remove('dark');
      }
      else {
        projectsLink.classList.add('dark');
        projectsLine.classList.add('dark');
        projectsLink.classList.add('current');
        projectsLine.classList.add('current');
      }
    } else {
      projectsLink.classList.remove('dark');
      projectsLine.classList.remove('dark');
      projectsLink.classList.remove('current');
      projectsLine.classList.remove('current');
    }
    //Home Link
    if (position > 270) {
      if (position > homeLnkPos) {
        homeLink.classList.remove('dark');
        homeLine.classList.remove('dark');
      }
      else {
        homeLink.classList.add('dark');
        homeLine.classList.add('dark');
        homeLink.classList.remove('current');
        homeLine.classList.remove('current');
      }
    } else {
      homeLink.classList.remove('dark');
      homeLine.classList.remove('dark');
      homeLink.classList.add('current');
      homeLine.classList.add('current');
    }

    //Update current link in about me section
    if (position > abtMeLnkPos) {
      projectsLine.classList.remove('current');
      projectsLink.classList.remove('current');
      aboutMeLine.classList.add('current');
      aboutMeLink.classList.add('current');
    }
    else {
      aboutMeLine.classList.remove('current');
      aboutMeLink.classList.remove('current');
    }

    //Update current link in contact section
    if (position > contactPagePos) {
      aboutMeLine.classList.remove('current');
      aboutMeLink.classList.remove('current');
      contactLine.classList.add('current');
      contactLink.classList.add('current');
    }
    else {
      contactLine.classList.remove('current');
      contactLink.classList.remove('current');
    }

    //make menu links dark in contacts page
    if (position > contactLnkPos2) {
      contactLine.classList.add('dark');
      contactLink.classList.add('dark');
    }
    if (position > abtMeLnkPos2) {
      aboutMeLine.classList.add('dark');
      aboutMeLink.classList.add('dark');
    }
    if (position > projectLnkPos2) {
      projectsLine.classList.add('dark');
      projectsLink.classList.add('dark');
    }
    if (position > homeLnkPos2) {
      homeLine.classList.add('dark');
      homeLink.classList.add('dark');
    }
    //Contact info animation
    if ((position + $(window).height()) == height)
      infoIcon.forEach(item => item.classList.add('move'));
    else
      infoIcon.forEach(item => item.classList.remove('move'));
  };
});
