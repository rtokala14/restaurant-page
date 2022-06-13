function loadPage() {
    const content = document.getElementById('content');
    
    const header = document.createElement('div');
    header.id = "header";
    const title = document.createElement('h1');
    title.id = "title";
    title.textContent = "Eataly";
    header.appendChild(title);
    const tabList = document.createElement('ul',);
    tabList.id = "tab-list";
    const homeTab = document.createElement('li');
    homeTab.id = 'tab-item-home';
    homeTab.classList.add('tab-item');
    homeTab.textContent = "Home";
    tabList.appendChild(homeTab);
    const menuTab = document.createElement('li');
    menuTab.id = 'tab-item-menu';
    menuTab.classList.add('tab-item');
    menuTab.textContent = "Menu";
    tabList.appendChild(menuTab);
    const aboutTab = document.createElement('li');
    aboutTab.id = 'tab-item-about';
    aboutTab.classList.add('tab-item');
    aboutTab.textContent = "About";
    tabList.appendChild(aboutTab);
    const findTab = document.createElement('li');
    findTab.id = 'tab-item-find';
    findTab.classList.add('tab-item');
    findTab.textContent = "Find";
    tabList.appendChild(findTab);
    header.appendChild(tabList);
    content.appendChild(header);

    const main = document.createElement('div');
    main.id = 'main-content';
    const blurb = document.createElement('h2');
    blurb.id = 'main-blurb';
    blurb.textContent = "Come enjoy the best Italian food outside Italy!!";
    main.appendChild(blurb);
    content.appendChild(main);

    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.textContent = "Copyright 2022 @ rtokala14";
    content.appendChild(footer);
}

export default loadPage;