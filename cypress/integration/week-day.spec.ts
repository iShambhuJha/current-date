describe('Week Day',()=>{
    it('Should visit week-day page', ()=>{
        cy.visit('http://localhost:4200/week-day');
    });
    it('Days should be visible', ()=>{
        cy.get('.day').should('be.visible');
    });
    it('Should verify todays day as current day-SHOULD PASS', ()=>{
      var date = new Date();
      var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      cy.get('.circle-higlight>span').should('contain',days[date.getDay()]);
    });
    it('Should verify todays day as current day-SHOULD FAIL', ()=>{
      var date = new Date();
      var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      cy.get('.circle>span').should('contain',days[date.getDay()]);
    });
});
