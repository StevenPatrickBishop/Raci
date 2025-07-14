

// ACCORDION HELPERS
function isCollapsed(el) {
  return el.classList.contains('collapsed');
}

async function startCollapsing(el) {
  const elHeight = getElementHeight(el);
  el.style.height = `${elHeight}px`;
  // console.log(`${elHeight}px`);
  await new Promise(resolve => setTimeout(resolve, 50));
  el.classList.remove('open');
  el.classList.add('collapsing');
}

function collapsePanel(el) {
  el.classList.remove('collapsing', 'open');
  el.classList.add('collapsed');
}

function collapsePanels(panels) {
  panels.forEach(panel => {
    panel.classList.remove('collapsing', 'open');
    panel.classList.add('collapsed');
  });
}

function expandPanel(el) {
  el.classList.remove('collapsed');
  el.classList.add('open');
}

function setPanelButtonClosed() {
  document.querySelectorAll('.panel-heading').forEach(btn => {
    btn.classList.remove('open');
  });
}

function setInnerButtonClosed() {
  document.querySelectorAll('.inner-heading').forEach(btn => {
    btn.classList.remove('open');
  });
}

function getElementHeight(innerPanels) {
  return innerPanels.offsetHeight;
}

function expandFirstInnerAccordion(innerPanels) {
  const firstInnerPanel = innerPanels.querySelector('.inner-panel');
  if (!firstInnerPanel) return;

  const heading = firstInnerPanel.querySelector('.inner-heading');
  const content = firstInnerPanel.querySelector('.inner-content');

  if (heading && content) {
    heading.classList.add('open');
    content.classList.remove('collapsed');
    content.classList.add('open');
    moveOverlay();
    updateOverlayHeight();
  }
}

// ACCORDION TOGGLES
function attachOuterAccordionToggle() {
  document.querySelectorAll('.panel-heading').forEach(btn => {
    btn.addEventListener('click', () => {
      const innerPanels = btn.nextElementSibling;
      const collapsed = isCollapsed(innerPanels);
      const innerNav = innerPanels.children[0]

      showNavControl(innerNav);

      if (collapsed) {
        const panels = document.querySelectorAll('.inner-panels');
        collapsePanels(panels);
        setPanelButtonClosed();
        expandPanel(innerPanels);
        btn.classList.add('open');
        expandFirstInnerAccordion(innerPanels);

        


      } else {
        collapsePanel(innerPanels);
        hideNavControl();
        btn.classList.remove('open');
      }
    });
  });
}


function hideNavControl(){
  x = document.querySelectorAll('.nav-control');
        x.forEach(el =>{
          el.classList.add('hidden');
        });
}


function showNavControl(parent){
parent.querySelector('.nav-control').classList.remove('hidden')
}



function closeCarets(parent){
  console.log('made it')
  parent.querySelectorAll('.inner-panel-caret').forEach(el =>{
          el.classList.remove('open');
          el.classList.add('closed');
 console.log(el.classList)
        });
}


function openCaret(parent){
   parent.querySelector('.inner-panel-caret').classList.add('open');
}

function attachInnerAccordionToggle() {
  document.querySelectorAll('.inner-heading').forEach(btn => {
    btn.addEventListener('click', () => {
      const innerContent = btn.nextElementSibling;
      const collapsed = isCollapsed(innerContent);

      hideNavControl();
      showNavControl(btn);

      // closeCarets(btn);
      // openCaret(btn);



      console.log(btn.querySelector('.inner-panel-caret'));
      

      
      if (collapsed) {
        const content = document.querySelectorAll('.inner-content');
        btn.querySelector('.inner-panel-caret').classList.remove('closed');
        closeCarets(btn);
        collapsePanels(content);
        setInnerButtonClosed();
        expandPanel(innerContent);
        btn.classList.add('open');
        scrollAll(getScrollPosition());
        closeCarets(btn);
        openCaret(btn);
      } else {


     

closeCarets(btn);

        collapsePanel(innerContent);

        hideNavControl();
      }
    });
  });
}





// BUILDERS
function build() {
  const innerHeadings = Object.values(raciStructure);
  const outerPanelsContainer = document.createElement('div');
  outerPanelsContainer.classList = 'panels';
  document.querySelector('main').append(outerPanelsContainer);
  const panels = document.querySelector('.panels');

  Object.keys(raciStructure).forEach((el, index) => {
    // Create panel
    const newPanel = makePanel(index);
    panels.append(newPanel.panel);
    const currentPanel = document.querySelector(newPanel.id);

    // Create panel heading
    const newHeading = makePanelHeading(index);
    newHeading.heading.innerHTML = `<h2>${el}</h2>`;
    currentPanel.append(newHeading.heading);

    // Create inner panel group
    const newPanelGroup = makeInnerPanelGroup(index);
    currentPanel.append(newPanelGroup.group);
    const currentGroup = document.querySelector(newPanelGroup.id);

    // Create inner panels and content
    const innerPanels = Object.keys(raciStructure[el]);
    const innerPanelDataModelValues = Object.values(raciStructure[el]);
    innerPanels.forEach((subEl, index) => {
      const newInnerPanel = makeInnerPanel(innerPanelDataModelValues[index]);
      currentGroup.append(newInnerPanel.innerPanel);

      const newInnerPanelHeading = makeInnerPanelHeading(subEl, index);
      newInnerPanel.innerPanel.append(newInnerPanelHeading);

      const innerContentWrap = makeInnerPanelContent(innerPanelDataModelValues[index]);
      newInnerPanel.innerPanel.append(innerContentWrap);
    });
  });
}







function makeScrollableTable(dataArray) {
  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.classList.add('scroller');
  return table;
}




function createTableHeadersFromDataModelKeys(data,padCols) {
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');

  data.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key;
    th.id = key.toLowerCase().replace(/\s+/g, '_');
    headRow.append(th);
  });

  // Padding columns
  for (let i = 0; i < padCols; i++) {
    const padTh = document.createElement('th');
    padTh.classList.add('pad-col');
    headRow.append(padTh);
  }

  thead.append(headRow);
  return thead;
}




function createTableBodyFromDataModel(dataArray,padCols) {
  const tbody = document.createElement('tbody');

  dataArray.forEach(rowObj => {
    const row = document.createElement('tr');

    Object.keys(dataArray[0]).forEach(key => {
      const td = document.createElement('td');
      td.textContent = rowObj[key] ?? '';
      td.classList.add('data-item');
      td.id = key.toLowerCase().replace(/\s+/g, '_') +
              `_${rowObj['FIELD'].toLowerCase().replace(/\s+/g, '_')}`;
      row.append(td);
    });

    // Padding columns
    for (let i = 0; i < padCols; i++) {
      const padTd = document.createElement('td');
      padTd.classList.add('pad-col');
      row.append(padTd);
    }

    tbody.append(row);
  });

  return tbody;
}


function assembleInnerPanelTables(dataArray) {
  const padCols = 3;
  const table = makeScrollableTable(dataArray);
  const tableHeader = createTableHeadersFromDataModelKeys(Object.keys(dataArray[0]),padCols);
  const tableBody = createTableBodyFromDataModel(dataArray,padCols);

  table.append(tableHeader);
  table.append(tableBody);

  return table;
}























// BUILDER HELPERS
function makeInnerPanelContent(dataKey) {
  const innerContent = document.createElement('div');
  innerContent.className = 'inner-content scroller collapsed';
  const tableData = window[dataKey];
  const table = assembleInnerPanelTables(tableData);

  const overlay = document.createElement('div');
  overlay.className = 'column-overlay';
  innerContent.append(overlay);
  innerContent.append(table);
  return innerContent;
}

// function makeInnerPanelHeading(subEl, index) {
//   const innerPanelHeading = document.createElement('div');
//   innerPanelHeading.className = 'inner-heading';
//   const heading = document.createElement('h3');
//   heading.innerHTML = `${subEl}`;
//   innerPanelHeading.append(heading);
//   return innerPanelHeading;
// }








function makePanel(index) {
  const panel = document.createElement('div');
  panel.classList = 'panel';
  panel.id = `panel-${index}`;
  return {
    panel,
    id: `#${panel.id}`
  };
}


function makePanelHeading(index) {
  const panelHeading = document.createElement('div');
  panelHeading.classList = 'panel-heading';
  panelHeading.id = `panel-heading-${index}`;
  return {
    heading: panelHeading,
    id: `#${panelHeading.id}`
  };
}


function makeInnerPanelGroup(index) {
  const innerPanelGroup = document.createElement('div');
  innerPanelGroup.className = 'inner-panels collapsed';
  innerPanelGroup.id = `inner-panels-${index}`;
  return {
    group: innerPanelGroup,
    id: `#${innerPanelGroup.id}`
  };
}



function makeInnerPanel(value) {
  const innerPanel = document.createElement('div');
  innerPanel.className = 'inner-panel';
  innerPanel.id = value;
  return {
    innerPanel,
    id: `#${innerPanel.id}`
  };
}




function openDefaultPanel(scrollValue) {
  const panelHeading = document.querySelector('#panel-heading-0');
  const innerPanels0 = document.querySelector('#inner-panels-0');
  panelHeading.classList.add('open');
  innerPanels0.classList.remove('collapsed');
  innerPanels0.classList.add('open');
  console.log(innerPanels0);
  
  innerPanels0.querySelector('.nav-control').classList.remove('hidden');
  openCaret(innerPanels0);
  const basic = document.querySelector('#branch_info_basic');
  const heading = basic.firstElementChild;
  const content = heading.nextElementSibling;

  heading.classList.add('open');
  content.classList.add('open');
  content.classList.remove('collapsed');
  goToPosition(scrollValue);
}

function goToPosition(scrollValue) {
  scrollAll(scrollValue);
}




// ==================================================================================


function makeInnerPanelHeading(subEl, index) {

  //maybe use this, don't forget to use dataset.attrabuteName
  // childElementMapping =subEl.toLowerCase().replace(/\s+/g, '_').replace(/:/g, '');




  const innerPanelHeading = document.createElement('div');
  innerPanelHeading.className = 'inner-heading';


 
 





  // Heading text
  const heading = document.createElement('h3');
  heading.textContent = subEl;
  innerPanelHeading.appendChild(heading);



  // Controls container
  const controls = document.createElement('div');
  controls.className = 'inner-controls';

  

  


  // Expand/Collapse carot
  const expandCollapse = document.createElement('div');
  expandCollapse.className = 'expand-collapse collapsed';
  expandCollapse.innerHTML = `<div  class="inner-panel-caret closed">
    <img src="images/caret.svg">
         </div>`;
  





  // Navigation control
  const navControl = document.createElement('div');
  navControl.className = 'nav-control hidden';

  const goLeft = document.createElement('div');
  goLeft.className = 'go-left';
  goLeft.innerHTML = `<!-- Left chevron SVG --> 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="2 0 16 14">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 7l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"/>
    </svg>`;

  const goRight = document.createElement('div');
  goRight.className = 'go-right';
  goRight.innerHTML = `<!-- Right chevron SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="-2 0 16 14">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L9.293 7 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>`;



  // Assemble the nav controls
  navControl.appendChild(goLeft);
  navControl.appendChild(goRight);

  // Add both control sections to the flex container
  controls.appendChild(expandCollapse);
  controls.appendChild(navControl);

  // Add controls to the header
  innerPanelHeading.appendChild(controls);

  return innerPanelHeading;
}




// ==================================================================================














// SCROLLER
let savedScrollPosition = 0;

function attachScroller() {
  const scrollers = document.querySelectorAll('.scroller');
  scrollers.forEach(scroller => {
    scroller.addEventListener('scroll', () => {
      const scrollPoint = scroller.scrollLeft;
      setScrollPosition(scrollPoint);
      scrollers.forEach(s => s.scrollLeft = scrollPoint);
    });
  });
}

function setScrollPosition(scrollPoint) {
  savedScrollPosition = scrollPoint;
}

function getScrollPosition() {
  return savedScrollPosition;
}

function scrollAll(savedScrollPosition) {
  document.querySelectorAll('.scroller').forEach(el => {
    el.scrollTo({
      left: savedScrollPosition,
      behavior: 'auto'
    });
    moveOverlay();
    updateOverlayHeight();
  });
}




























// BUTTON NAV
function attachButtonControls() {
  document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
      const scrollValue = button.dataset.scroll;
      const dataValue = button.dataset.value;
      savedScrollPosition = Number(scrollValue);


      const hasOpenInnerHeading = document.querySelectorAll('.inner-heading.open').length > 0;
      const hasOpenInnerPanel = document.querySelectorAll('.inner-panels.open').length > 0;

      if (hasOpenInnerHeading) {
        if (hasOpenInnerPanel) {
          goToPosition(scrollValue);
        } else {
          document.querySelectorAll('.inner-heading').forEach(el => el.classList.remove('open'));
          document.querySelectorAll('.inner-content').forEach(el => {
            el.classList.remove('open');
            el.classList.add('collapsed');
          });
          openDefaultPanel(scrollValue);
        }
      } else {
        document.querySelectorAll('.panel-heading').forEach(el => el.classList.remove('open'));
        document.querySelectorAll('.inner-panels').forEach(el => {
          el.classList.remove('open');
          el.classList.add('collapsed');
        });
        openDefaultPanel(scrollValue);
      }
    });
  });
}















// OVERLAY MASK
function enableOverlayScrollBehavior() {
  document.querySelectorAll('.inner-content').forEach(el => {
    let scrollTimer;
    el.addEventListener('scroll', () => {
      el.classList.add('scrolling');
      moveOverlay(savedScrollPosition);

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        el.classList.remove('scrolling');
      }, 400);
    });
  });
}

function updateOverlayHeight() {
  const openContent = document.querySelector('.inner-content.scroller.open');
  if (!openContent) return;

  const overlay = openContent.firstChild;
  const table = overlay.nextSibling;
  if (table && overlay) {
    requestAnimationFrame(() => {
      const tableHeight = table.offsetHeight;
      overlay.style.height = `${tableHeight}px`;
    });
  }
}

function moveOverlay() {
  const defaultValue = 520;
  const position = savedScrollPosition + defaultValue;
  document.querySelectorAll('.column-overlay').forEach(el => {
    el.style.left = `${position}px`;
  });
}




















// LEFT AND RIGHT NAV BUTTONS

function clickLeftArrow(event){
  if (savedScrollPosition > 0){
    savedScrollPosition -= 260;
    goToPosition(savedScrollPosition)
  }
    event.stopPropagation();
}


function clickRightArrow(event){
  if (savedScrollPosition < 4680){
    savedScrollPosition += 260;
    goToPosition(savedScrollPosition)
  }
  event.stopPropagation();
}



function addScrollButtons(){
 document.querySelectorAll('.go-left').forEach(el => {
  el.addEventListener('click', clickLeftArrow);
});

document.querySelectorAll('.go-right').forEach(el => {
  el.addEventListener('click', clickRightArrow);});
}









// function getDeets(){
// let tables = document.querySelectorAll(".scroller");
// tables.forEach(table => {
//   // x = table.querySelectorAll('td[id]');
//   console.log(x);
//   x.forEach(el =>{
//     el.addEventListener('click', ()=>{
//       console.log(window.tabelDeets[el.id]);
//     });
//   });
// });
// }








// DOM READY
document.addEventListener('DOMContentLoaded', () => {
  build();
  attachOuterAccordionToggle();
  attachInnerAccordionToggle();
  attachScroller();
  attachButtonControls();
  enableOverlayScrollBehavior();
  addScrollButtons();
  // getDeets();
});





/*
ideas
Button to control table veiw. focused view (limit column view to desired column )or at a glance(where table is expanded for genral scrolling)

remove scroll bar and add chevron left and right toggles to move columns at specific intervals. 

try to improve overlay positioning, it flashes visable and then moves causing a weird artifact effect. 

have the ability to open muiltiple inner pannels at once under a top level acordion. make sub accordion headings sticky when y scrolling.  

*/
