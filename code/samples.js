import theme from '../theme'

export const badHtmlStructure = (
`<html>
  <body>
    <div class='header'>Header</div>
    <div class='sidebar'>Sidebar</div>
    <div class='body'>
      <div class='section'>
        Section 1
      </div>
      <div class='section'>
        Section 2
      </div>
    </div>
    <div class='footer'>Footer</div>
  </body>
</html>`
)

export const goodHtmlStructure = (
`<html>
  <body>
    <header>Header</header>
    <aside>Sidebar</aside>
    <main>
      <section>Section 1</section>
      <section>Section 2</section>
    </main>
    <footer>Footer</footer>
  </body>
</html>`
)

export const htmlPage = (
`<div style='color:rgba(0,0,0,.6)'>
  <div style='height: 10vh;background:${theme.primary.color};'>Header</div>
  <div style='display:flex;flex-direction:row;width:100%;height:80vh'>
    <div style='width:25%;height:100%;background:${theme.primary.medium}'>Sidebar</div>
    <div style='width:75%;background:${theme.primary.extraLight}'>
      <div style='background:rgba(0,0,0,.1);margin: 2vw;'>Section 1</div>
      <div style='background:rgba(0,0,0,.1);margin: 2vw;'>Section 2</div>
    </div>
  </div>
  <div style='height:10vh;background:${theme.primary.dark}'>Footer</div>
</div>`
)

export const badInputs = (
`<form>
  <div>
    <label>First name:</label>
    <input type='text' />
  </div>
  <div>
    <label>Last name:</label>
    <input type='text' />
  </div>
</form>`
)

export const goodInputs = (
`<form>
  <div>
    <label for='firstName'>
      First name:
    </label>
    <input id='firstName' type='text' />
  </div>
  <div>
    <label for='lastName'>
      Last name:
    </label>
    <input id='lastName' type='text' />
  </div>
</form>`
)

export const inputPage = (
`<form style='color:black; font-size: 40px; padding-top:10vh;'>
  <div style='display:flex;align-items:center;justify-content:center;'>
    <label style='margin-right:3vh;'>First name:</label>
    <input type='text' style='width:15vw;height:4vh;border:3px solid #999;border-radius:6px;font-size:24px;' />
  </div>
  <div style='display:flex;align-items:center;justify-content:center;'>
    <label style='margin-right:3vh;'>Last name:</label>
    <input type='text' style='width:15vw;height:4vh;border:3px solid #999;border-radius:6px;font-size:24px;' />
  </div>
</form>`
)

export const badButtons = (
`<form>
  ...
  <div onClick={this.submitForm}>
    Submit
  </div>
</form>`
)

export const badButtonsPage = (
`<div style='color:black; font-size: 40px; padding-top:10vh;'>
  <style>
    #button{
      border-radius: 1vh;
      font-size: 3vh;
      margin-top: 4vh;
      background:${theme.primary.color};
      cursor: pointer;
      user-select: none;
    }
    #button:hover{
      background: ${theme.primary.extraLight};
    }
    #button:active{
      background: ${theme.primary.color};
    }
  </style>
  <div style='display:flex;align-items:center;justify-content:center;'>
    <label style='margin-right:3vh;'>First name:</label>
    <input type='text' style='width:15vw;height:4vh;border:3px solid #999;border-radius:6px;font-size:24px;' />
  </div>
  <div style='display:flex;align-items:center;justify-content:center;'>
    <label style='margin-right:3vh;'>Last name:</label>
    <input type='text' style='width:15vw;height:4vh;border:3px solid #999;border-radius:6px;font-size:24px;' />
  </div>
  <div style='display:flex;justify-content:center;width:100%;align-items:center'>
    <div id='button' style='padding:.2vh 3vh;'>Submit</div>
  </div>
</div>`
)

export const goodButtons = (
`<form>
  ...
  <button onClick={this.submitForm}>
    Submit
  </button>
</form>`
)

export const goodButtonsPage = (
`<div style='color:black; font-size: 40px; padding-top:10vh;'>
  <style>
    #button{
      border-radius: 1vh;
      font-size: 3vh;
      margin-top: 4vh;
      background:${theme.primary.color};
      cursor: pointer;
      user-select: none;
      border: none;
      font-family: ${theme.font};
    }
    #button:hover{
      background: ${theme.primary.extraLight};
    }
    #button:active{
      background: ${theme.primary.color};
    }
  </style>
  <div style='display:flex;align-items:center;justify-content:center;'>
    <label style='margin-right:3vh;'>First name:</label>
    <input type='text' style='width:15vw;height:4vh;border:3px solid #999;border-radius:6px;font-size:24px;' />
  </div>
  <div style='display:flex;align-items:center;justify-content:center;'>
    <label style='margin-right:3vh;'>Last name:</label>
    <input type='text' style='width:15vw;height:4vh;border:3px solid #999;border-radius:6px;font-size:24px;' />
  </div>
  <div style='display:flex;justify-content:center;width:100%;align-items:center'>
    <button id='button' style='padding:.2vh 3vh;'>Submit</button>
  </div>
</div>`
)

export const badLinks = (
`<body>
  ...
  <button onClick={() => {
    window.location.href = '/cool-page.html'
  }}>
    Check it out here
  </button>
</body>`
)

export const goodLinks = (
`<body>
  ...
  <a href='/cool-page.html'>
    Check it out here
  </a>
</body>`
)

export const linksPage = (
`<div style='color:black; font-size: 40px; padding-top:10vh;'>
  <style>
    #button{
      border-radius: 1vh;
      font-size: 3vh;
      margin-top: 4vh;
      background:${theme.primary.color};
      cursor: pointer;
      user-select: none;
      border: none;
      font-family: ${theme.font};
    }
    #button:hover{
      background: ${theme.primary.extraLight};
    }
    #button:active{
      background: ${theme.primary.color};
    }
  </style>
  <h4>We've got something cool</h4>
  <div style='display:flex;justify-content:center;width:100%;align-items:center'>
    <button id='button' style='padding:.2vh 3vh;'>Check it out here</button>
  </div>
</div>`
)
