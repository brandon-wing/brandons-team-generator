function generateHTML(employeeList) {

let html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Employee Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  </head>
  <body>
    <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Team Generator
          </p>
          <p class="subtitle">
            The members of the team are displayed below!
          </p>
        </div>
      </section>
      <section>
      <div class="columns">`
      for (let i = 0; i < employeeList.length; i++) {
        const employee = employeeList[i];
        let employeeCard =
        `<div class="column">
        <div class="card">
            <div class="card-content">
            <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="../assets/smiley.jpeg" alt="employee-avatar">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-2">${employee.getName()}</p>
              <p class="subtitle is-4">${employee.getRole()}</p>
              <p class="subtitle is-6">ID #: ${employee.getId()}</p>
              <p class="subtitle is-6">EMAIL: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>`
              if (employee.getRole() === 'Manager'){
                employeeCard += `<p class="subtitle is-6">${employee.getPhone()}`
              }
              else if (employee.getRole() === 'Engineer'){
                employeeCard += `<p class="subtitle is-6">Github: <a href="github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>`
              }
              else if (employee.getRole() === 'Intern'){
                employeeCard += `<p class="subtitle is-6">School: ${employee.getSchool()}`
              }
              employeeCard += `</div>
          </div>
        </div>
      </div>
      </div>`}

html +=
      `</div>
      </section>
  </body>
</html>`
return html;
}

module.exports = generateHTML