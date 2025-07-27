


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
