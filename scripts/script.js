



/*

*************** TABLE OF CONTENTS *********************

1.    : ACCORDION FUNCTIONS
1.1   : ACCORDION TOGGLES
1.1A  : OUTER ACCORDION TOGGLE 
1.1B  : INNER ACCORDION TOGGLE 
1.2   : ACCORDION EXPAND COLLAPSE FUNCTIONS
1.2A  : ACCORDION COLLAPSE FUNCTIONS
1.2B  : ACCORDION EXPAND FUNCTIONS
1.3   : PANEL BUTTONS
1.3A  : OPEN PANEL BUTTONS
1.3B  : CLOSE PANEL BUTTONS


2.    : SCROLLING / SIDE NAVIGATION


*/




// 1.1   : ACCORDION TOGGLES ===========================================================================================



// 1.1A  : ---------------------------------------------------------------------OUTER ACCORDION TOGGLE 



function attachOuterAccordionToggle() {
  document.querySelectorAll('.panel-heading').forEach(btn => {
    btn.addEventListener('click', () => {
      const innerPanels = btn.nextElementSibling;
      const collapsed = isCollapsed(innerPanels);
      const innerNav = innerPanels.children[0];
      closeCarets();
      showNavControl(innerNav);

      if (collapsed) {
        const panels = document.querySelectorAll('.inner-panels');
        collapsePanels(panels);
        setPanelButtonClosed();
        expandPanel(innerPanels);
        btn.classList.add('open');
        expandFirstInnerAccordion(innerPanels);
        openCaret(innerPanels);

        
        


      } else {
        collapsePanel(innerPanels);
        hideNavControl();
        btn.classList.remove('open');
      }
    });
  });
}



// 1.1A  : ----------------------------------------------------------------------------------------END







// 1.1B  : ---------------------------------------------------------------------INNER ACCORDION TOGGLE

function attachInnerAccordionToggle() {
  document.querySelectorAll('.inner-heading').forEach(btn => {
    btn.addEventListener('click', () => {
      const innerContent = btn.nextElementSibling;
      const collapsed = isCollapsed(innerContent);

      hideNavControl();
      closeCarets();
           

      
      if (collapsed) {
        showNavControl(btn);
        const content = document.querySelectorAll('.inner-content');
        btn.querySelector('.inner-panel-caret').classList.remove('closed');
        // closeCarets(btn);
        collapsePanels(content);
        setInnerButtonClosed();
        expandPanel(innerContent);
        btn.classList.add('open');
        scrollAll(getScrollPosition());
        openCaret(btn);
      } else {

        closeCarets();
        collapsePanel(innerContent);
        hideNavControl();
      }
    });
  });
}

// 1.1B  : ----------------------------------------------------------------------------------------END

// 1.1   :========================================================================================================== END























// 1.2   : ACCORDION EXPAND COLLAPSE FUNCTIONS ==================================================================================






// 1.2A   : --------------------------------------------------------------ACCORDION COLLAPSE FUNCTIONS

function isCollapsed(el) {
  return el.classList.contains('collapsed');
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


function closeCarets(){
  document.querySelectorAll('.inner-panel-caret').forEach(el =>{
          el.classList.remove('open');
          el.classList.add('closed');
        });
}


// 1.2A   : ---------------------------------------------------------------------------------------END







// 1.2B   : --------------------------------------------------------------ACCORDION EXPAND FUNCTIONS
function isExpanded(el) {
  return el.classList.contains('open');
}


function expandPanel(el) {
  el.classList.remove('collapsed');
  el.classList.add('open');
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


function openCaret(parent){
   parent.querySelector('.inner-panel-caret').classList.add('open');
}


// 1.2B   : ---------------------------------------------------------------------------------------END















// 1.2   :========================================================================================================== END









// 1.3   : ACCORDION BUTTONS ===========================================================================================





// 1.3A  : ---------------------------------------------------------------------CLOSE ACCORDION BUTTONS

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

// 1.3A  : ----------------------------------------------------------------------------------------END





// 1.3B  : ---------------------------------------------------------------------OPEN ACCORDION BUTTONS

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
// 1.3B  : ----------------------------------------------------------------------------------------END



// 1.3   :========================================================================================================== END
// =============================================== SECTION 1 END =========================================================








// 2.1   : SCROLLER AND SIDE NAVIGATION  ==================================================================================

// 2.1A  : --------------------------------------------------------------GET AND SET SCROLLER POSITION
let savedScrollPosition = 0;

function setScrollPosition(scrollPoint) {
  savedScrollPosition = scrollPoint;
}

function getScrollPosition() {
  return savedScrollPosition;
}


function goToPosition(scrollValue) {
  scrollAll(scrollValue);
}
// 2.1A  : ----------------------------------------------------------------------------------------END







// 2.1B  : ---------------------------------------------------------------------SCROLLER EVENT HANDLER
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
// 2.1B  : ----------------------------------------------------------------------------------------END






// 2.1C  : ---------------------------------------------------------------------SCROLL ALL TABLES
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
// 2.1C  : ----------------------------------------------------------------------------------------END



// 2.1   :========================================================================================================== END






// 2.2   : SIDE NAV BUTTONS  ===========================================================================================



// 2.2A  : ---------------------------------------------------------------------HIDE AND SHOW SIDE SCROLL BUTTONS
function hideNavControl(){
  x = document.querySelectorAll('.nav-control');
        x.forEach(el =>{
          el.classList.add('hidden');
        });
}

function showNavControl(parent){
parent.querySelector('.nav-control').classList.remove('hidden')
}
// 2.2A  : ----------------------------------------------------------------------------------------END








// 2.2B  : -------------------------------------------------------------------------------NAVIGATE LEFT
function clickLeftArrow(event){
  if (savedScrollPosition > 0){
    savedScrollPosition -= 260;
    goToPosition(savedScrollPosition)
  }
    event.stopPropagation();
}
// 2.2B  : ----------------------------------------------------------------------------------------END




// 2.2C  : ------------------------------------------------------------------------------NAVIGATE RIGHT
function clickRightArrow(event){
  if (savedScrollPosition < 4680){
    savedScrollPosition += 260;
    goToPosition(savedScrollPosition)
  }
  event.stopPropagation();
}
// 2.2C  : ----------------------------------------------------------------------------------------END




// 2.2D  : ---------------------------------------------------------------------SIDE NAV EVENT HANDLER

function addScrollButtons(){
 document.querySelectorAll('.go-left').forEach(el => {
  el.addEventListener('click', clickLeftArrow);
});

document.querySelectorAll('.go-right').forEach(el => {
  el.addEventListener('click', clickRightArrow);});
}



// 2.2E  : ----------------------------------------------------------------------------------------END



// 2.2   ================================================================================== : SIDE NAV BUTTONS END


// =============================================== SECTION 2 ENDS =========================================================








// =============================================== SECTION 3 BEGINS =========================================================

// 3.1   : SIDE BAR BUTTONS ===========================================================================================

// 3.1A  : ------------------------------------------------------------- SIDE BAR BUTTON EVENT HANDLER

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

// 3.1A  : ----------------------------------------------------------------------------------------END


// 3.1   :========================================================================================================== END

// =============================================== SECTION 3 ENDS =========================================================





// =============================================== SECTION 4 BEGINS =======================================================
// 4.1   : OVERLAY =====================================================================================================


// 4.1A  : ---------------------------------------------------------------------OVERLAY


function getElementHeight(innerPanels) {
  return innerPanels.offsetHeight;
}


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

// 4.1A  : ----------------------------------------------------------------------------------------END


// 4.1   :========================================================================================================== END
// =============================================== SECTION 4 ENDS =========================================================



// =============================================== SECTION 5 BEGINS =======================================================
// 5.1   : MODAL =====================================================================================================


// 5.1A  : ---------------------------------------------------------------------MODAL


function showModal(title, bodyText) {
  const modalHTML = `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-box">
        <button class="modal-close" id="modal-close">&times;</button>
        <div class="modal-header">${title}</div>
        <div class="modal-body">${bodyText}</div>
      </div>
    </div>
  `;

  const container = document.getElementById('modal-container');
  container.innerHTML = modalHTML;

  // Close button
  document.getElementById('modal-close').addEventListener('click', () => {
    container.innerHTML = '';
  });

  // Close modal when clicking outside the box
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
      container.innerHTML = '';
    }
  });
}


function attachModalTriggers() {

  document.querySelectorAll('.data-item').forEach(cell => {
    cell.addEventListener('click', () => {

    const key = cell.id;
    const deets = window.tableDeets[key];
    console.log(key);
    console.log(deets);
    
    if (!deets) {
      showModal('Unknown Field', 'No details available.');
      return;
    }


     const title = key.replace(/_/g, ' ').toUpperCase();  // Or use `deets.label` if it exists
const body = `
  <div><p><strong>Dymax Settings:</strong> ${deets.default_settings || 'N/A'}</p></div>
  <div><p><strong>Usage:</strong> ${deets.usage || 'N/A'}</p></div>
  <div><p><strong>Notes:</strong> ${deets.notes || 'N/A'}</p></div>
  <div><p><strong>Data Type:</strong> ${deets.type || 'N/A'}</p></div>
  <div><p><strong>Owner:</strong> ${deets.group || 'N/A'}</p></div>
  <div><p><strong>Change Request Required:</strong> ${deets.tooltip || 'N/A'}</p></div>
  <div><p><strong>Request Change:</strong> 
    ${deets.required ? `<a href="${deets.required}" target="_blank" rel="noopener noreferrer">Submit Request</a>` : 'N/A'}
  </p></div>
`;


    showModal(title, body);



     



    });
  });



  
}



// 5.1   :========================================================================================================== END
// =============================================== SECTION 5 ENDS =========================================================





// ================================================ DOM READY ==============================================================
// document.addEventListener('DOMContentLoaded', () => {
//   build();
//   attachOuterAccordionToggle();
//   attachInnerAccordionToggle();
//   attachScroller();
//   attachButtonControls();
//   enableOverlayScrollBehavior();
//   addScrollButtons();
//   // getDeets();
// });


document.addEventListener('DOMContentLoaded', () => {
  build();
  attachOuterAccordionToggle();
  attachInnerAccordionToggle();
  attachScroller();
  attachButtonControls();
  enableOverlayScrollBehavior();
  addScrollButtons();
  attachModalTriggers(); // <- Add this
});









/*
ideas
Button to control table veiw. focused view (limit column view to desired column )or at a glance(where table is expanded for genral scrolling)

remove scroll bar and add chevron left and right toggles to move columns at specific intervals. 

try to improve overlay positioning, it flashes visable and then moves causing a weird artifact effect. 

have the ability to open muiltiple inner pannels at once under a top level acordion. make sub accordion headings sticky when y scrolling.  

*/






// NOT USED


// async function startCollapsing(el) {
//   const elHeight = getElementHeight(el);
//   el.style.height = `${elHeight}px`;
//   // console.log(`${elHeight}px`);
//   await new Promise(resolve => setTimeout(resolve, 50));
//   el.classList.remove('open');
//   el.classList.add('collapsing');
// }




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

