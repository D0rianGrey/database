Cypress.Server.defaults({
    delay: 500,
    force404: false,
    ignore: (xhr) => {

        return true;
    }
})
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
