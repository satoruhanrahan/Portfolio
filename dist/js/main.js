/*==================================================================================== 
    Author: Alex Satoru Hanrahan
    Created: 04/11/19
    Last Edited: 06/11/19
=====================================================================================*/

$(document).ready(function () {
  //** Select DOM Items **//
  const home = document.querySelector('#home');
  const projects = document.querySelector('#projects');
  // Menu for laptops and wide screens
  const menuBtn = document.querySelector('.menu-btn');
  const lngBtn = document.querySelector('#languageBtn');
  const lngSwitch = document.querySelector('#lngSwitch');
  const btnLines = document.querySelectorAll('.btn-line');
  // Links
  const navItems = document.querySelectorAll('.nav-item');
  const homeLink = document.querySelector('#homeLink');
  const projectsLink = document.querySelector('#projectsLink');
  const aboutMeLink = document.querySelector('#aboutMeLink');
  const contactLink = document.querySelector('#contactLink');
  // Lines under links
  const linkLines = document.querySelectorAll('.link-line');
  const homeLine = document.querySelector('#homeLine');
  const projectsLine = document.querySelector('#projectsLine');
  const aboutMeLine = document.querySelector('#aboutMeLine');
  const contactLine = document.querySelector('#contactLine');
  // Link text
  const homeLinkTxt = document.querySelectorAll('.homeLinkText');
  const projectsLinkTxt = document.querySelectorAll('.projectsLinkText');
  const aboutMeLinkTxt = document.querySelectorAll('.aboutMeLinkText');
  const contactLinkTxt = document.querySelectorAll('.contactLinkText');
  //overlay menu for smaller screens
  const menuOverlay = document.querySelector('#menu-overlay');
  const navItems2 = document.querySelectorAll('.nav-item2');
  const homeLink2 = document.querySelector('#homeLink2');
  const projectsLink2 = document.querySelector('#projectsLink2');
  const aboutMeLink2 = document.querySelector('#aboutMeLink2');
  const homeLine2 = document.querySelector('#homeLine2');
  const projectsLine2 = document.querySelector('#projectsLine2');
  const aboutMeLine2 = document.querySelector('#aboutMeLine2');
  //home page
  const webDeveloper = document.querySelector('#webDeveloper');
  const name = document.querySelector('#name');
  const alex = document.querySelector('#alex');
  //projects page
  const viewMyProjects = document.querySelector('#viewMyProjects');
  const txtOpen = document.querySelectorAll('.txtOpen');
  //about me page
  const headerAboutTxt = document.querySelector('#headerAboutTxt');
  const headerMeTxt = document.querySelector('#headerMeTxt');
  const bio1 = document.querySelector('#bio1');
  const bio2 = document.querySelector('#bio2');
  const bio3 = document.querySelector('#bio3');
  const projectsHeader = document.querySelector('#myProjectsHeader');
  //contact page
  const contactHeader = document.querySelector('#contactHeader');
  const contactDescription = document.querySelector('#contactDescription');
  const infoIcon = document.querySelectorAll('.infoIcon');
  //get height of whole document
  const body = document.body,
    html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

  //** Functions **//
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
    //remove close tags to open menu
    navItems.forEach(item => item.classList.remove('close'));
    navItems2.forEach(item => item.classList.remove('close'));
    linkLines.forEach(item => item.classList.remove('close'));
    menuOverlay.classList.remove('close');
    //make current link stick out
    setCurrentLink();
    //set colors to match page and location
    setButtonColors();
    setMenuColor();
    //show language button
    lngBtn.classList.remove('close');
    // Set Menu State
    showMenu = true;
  }

  //check current page and set link for the page as current
  function setCurrentLink() {
    //remove current tag for all links
    navItems.forEach(item => item.classList.remove('current'));
    navItems2.forEach(item => item.classList.remove('current'));
    linkLines.forEach(item => item.classList.remove('current'));
    //if in home section
    if (document.scrollingElement.scrollTop < 315) 
      setHomeCurrent();
    //if in projects section
    if (document.scrollingElement.scrollTop >= 315) 
      setProjectsCurrent();
    //make about me link current if in about me page
    if (document.scrollingElement.scrollTop >= 980) 
      setAboutMeCurrent();
    //make overlay menu about me link current if in about me page
    if (document.scrollingElement.scrollTop >= 1500) 
      setOverlayAboutMeCurrent();
    //make contact link current if in contact page
    if (document.scrollingElement.scrollTop >= 1600) 
      setContactCurrent();
    //make overlay menu contact link current if in contact page
    if (document.scrollingElement.scrollTop >= 2460) 
      setOverlayContactCurrent();
  }

  //set home links as current
  function setHomeCurrent(){
    homeLink2.classList.add('current');
    homeLine2.classList.add('current');
    homeLink.classList.add('current');
    homeLine.classList.add('current');
  }

  //set project links as current
  function setProjectsCurrent(){
    projectsLink2.classList.add('current');
    projectsLine2.classList.add('current');
    projectsLink.classList.add('current');
    projectsLine.classList.add('current');
  }

  //set about me link in wide screen menu as current
  function setAboutMeCurrent(){
    projectsLine.classList.remove('current');
    projectsLink.classList.remove('current');
    aboutMeLine.classList.add('current');
    aboutMeLink.classList.add('current');
  }

  //set contact link in wide screen menu as current
  function setContactCurrent(){
    contactLine.classList.add('current');
    contactLink.classList.add('current');
    aboutMeLine.classList.remove('current');
    aboutMeLink.classList.remove('current');
  }

  //set about me link in overlay menu as current
  function setOverlayAboutMeCurrent(){
    projectsLine2.classList.remove('current');
    projectsLink2.classList.remove('current');
    aboutMeLine2.classList.add('current');
    aboutMeLink2.classList.add('current');
  }

  //set contact link in overlay menu as current
  function setOverlayContactCurrent(){
    aboutMeLine2.classList.remove('current');
    aboutMeLink2.classList.remove('current');
    contactLine2.classList.add('current');
    contactLink2.classList.add('current');
  }

  //set menu and language buttons as dark or light when opening menu 
  function setButtonColors() {
    //set buttons dark if in projects page
    setBtnDarkInProjects();
    //set buttons light if in about me page
    setBtnLightInAboutMe();
  }

  //set buttons dark if in projects page
  function setBtnDarkInProjects(){
    if (document.scrollingElement.scrollTop >= 315) {
      // make buttons light if overlay menu open
      if (($('#menu-overlay').css('visibility') == 'visible')) {
        btnLines.forEach(item => item.classList.remove('dark'));
        lngBtn.classList.remove('dark');
      } else {
        btnLines.forEach(item => item.classList.add('dark'));
        lngBtn.classList.add('dark');
      }
      // make buttons dark
      if (document.scrollingElement.scrollTop > ($(window).height() / 1.0775862069) && ($('#menu-overlay').css('visibility') != 'visible')) { // || menuOverlay.classList.contains('close')
        btnLines.forEach(item => item.classList.add('dark'));
      } else {
        btnLines.forEach(item => item.classList.remove('dark'));
        lngBtn.classList.remove('dark');
      }
    }
  }

  //set button light in about me page
  function setBtnLightInAboutMe(){
    //number for calculating position to change button in about me page
    let menuBtnAbtMePos = 0.5060728744939271;
    // if the project cards are in 2 rows
    if ($('#projects').height() > 820) {
      menuBtnAbtMePos = 0.4205921938088829;
      menuContactPos = 0.3159757330637007;
    }
    // if the 3 project cards are in a vertical row
    if ($('#projects').height() > 1000) 
      menuBtnAbtMePos = 0.3749297358066329;
    // make buttons dark if in about me page
    if (document.scrollingElement.scrollTop > ($(window).height() / menuBtnAbtMePos)) {
      btnLines.forEach(item => item.classList.remove('dark'));
      lngBtn.classList.remove('dark');
    }
  }

  //set the color of the menu when opening menu
  function setMenuColor() {
    //make menu dark if open in project section
    if (document.scrollingElement.scrollTop > ($(window).height() / 1.0775862069)) {
      navItems.forEach(item => item.classList.add('dark'));
      linkLines.forEach(item => item.classList.add('dark'));
    }
    //make menu light if open in about me section
    if (document.scrollingElement.scrollTop > ($(window).height() / 0.67)) {
      navItems.forEach(item => item.classList.remove('dark'));
      linkLines.forEach(item => item.classList.remove('dark'));
    }
    //make menu dark if open in contact section
    if (document.scrollingElement.scrollTop > ($(window).height() / 0.35919540229885055)) {
      navItems.forEach(item => item.classList.add('dark'));
      linkLines.forEach(item => item.classList.add('dark'));
    }
  }

  //closes menu
  function closeMenu() {
    menuBtn.classList.remove('open');
    navItems.forEach(item => item.classList.add('close'));
    navItems2.forEach(item => item.classList.add('close'));
    linkLines.forEach(item => item.classList.add('close'));
    menuOverlay.classList.add('close');
    //change menu btn to appropriate color depending on page
    let menuBtnAbtMePos = 0.5060728744939271;
    let menuBtnProjPos = 1.0738831615120275;
    if ($('#projects').height() > 820) 
      menuBtnAbtMePos = 0.4205921938088829;
    if ($('#projects').height() > 1000) 
      menuBtnAbtMePos = 0.375140607424072;
    //if in projects section
    if (document.scrollingElement.scrollTop >= ($(window).height() / menuBtnProjPos)) 
      btnLines.forEach(item => item.classList.add('dark'));
    //if in about me section section
    console.log($(window).height() / document.scrollingElement.scrollTop)
    if (document.scrollingElement.scrollTop >= ($(window).height() / menuBtnAbtMePos)) 
      btnLines.forEach(item => item.classList.remove('dark'));
    //hide language button
    lngBtn.classList.add('close');
    // Set Menu State
    showMenu = false;
  }

  //language button
  let english = true;
  $("#languageBtn").on('click', function (event) {
    if (english) {
      lngSwitch.classList.add('japanese');
      english = false;
      changeToJapanese();
    }
    else {
      lngSwitch.classList.remove('japanese');
      english = true;
      changeToEnglish();
    }
  });

  //change language to Japanese
  function changeToJapanese() {
    webDeveloper.innerHTML = "ウェブデベロッパー";
    name.innerHTML = "悟ハンラハン";
    alex.innerHTML = "アレックス";
    viewMyProjects.innerHTML = "プロジェクト紹介";
    txtOpen.forEach(item => item.innerHTML = "開く");
    homeLinkTxt.forEach(item => item.innerHTML = "ホーム");
    projectsLinkTxt.forEach(item => item.innerHTML = "プロジェクト");
    aboutMeLinkTxt.forEach(item => item.innerHTML = "自己紹介");
    contactLinkTxt.forEach(item => item.innerHTML = "連絡先");
    projectsHeader.innerHTML = "プロジェクト";
    headerAboutTxt.innerHTML = "自己";
    headerMeTxt.innerHTML = "紹介";
    bio1.innerHTML = "ウェブとソフトウェアの開発に興味を持って、アプリケーションを作成するのが趣味です。"
      + "スキルを向上させ、業界の最新のトレンドとテクノロジーをフォローするキャリアを期待しております。";
    bio2.innerHTML = "現在日本在住で日本で就職して生活をしたいと思っています。英語を母国語とする"
      + "ネイティブスピーカーとして、あるチームと協力し、質の高いウェブサイトとアプリケーションの制作を支援したいと考えています。";
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
    contactHeader.innerHTML = "連絡先";
    contactDescription.innerHTML = "気軽にメールまたはLinkedInでメッセージをお送りください。";
  }

  //change language to english
  function changeToEnglish() {
    webDeveloper.innerHTML = "Web Developer";
    name.innerHTML = "Satoru Hanrahan";
    alex.innerHTML = "Alex";
    viewMyProjects.innerHTML = "View My Projects";
    txtOpen.forEach(item => item.innerHTML = "Open");
    homeLinkTxt.forEach(item => item.innerHTML = "Home");
    projectsLinkTxt.forEach(item => item.innerHTML = "Projects");
    aboutMeLinkTxt.forEach(item => item.innerHTML = "About Me");
    contactLinkTxt.forEach(item => item.innerHTML = "Contact");
    projectsHeader.innerHTML = "My Projects";
    headerAboutTxt.innerHTML = "About ";
    headerMeTxt.innerHTML = "Me";
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
    contactHeader.innerHTML = "Contact";
    contactDescription.innerHTML = "Please feel free to send me a message by email or on LinkedIn.";
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

  //animation for the projects page header
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
    //numbers for calculating positions
    let menuBtnAbtMePos = 0.505;
    let lngBtnAbtMePos = 0.53648068669;
    //positions for changing menu links
    let contactLnkPos = 775;
    let abtMeLnkPos = 820;
    let projectLnkPos = 870;
    let homeLnkPos = 920;
    let contactPagePos = 1400;
    //positions for changing overlay menu links
    let contactLnkPos2 = 1650;
    let abtMeLnkPos2 = 1700;
    let projectLnkPos2 = 1740;
    let homeLnkPos2 = 1790;
    //if the project cards are in 2 rows
    if ($('#projects').height() > 650) {
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
    menuBtnAbtMePos = $(projects).height() + $(home).height() + 30;
    //Menu button 
    //make menu button light if in home section and overlay menu is hidden or closed
    if (position < ($(window).height() / 1.0775862069) && ($('#menu-overlay').css('visibility') == 'hidden' || menuOverlay.classList.contains('close'))) {
      btnLines.forEach(item => item.classList.remove('dark'));
    } else {
      btnLines.forEach(item => item.classList.add('dark'));
    }
    //make menu button light if in about me section and overlay menu is hidden or closed
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
