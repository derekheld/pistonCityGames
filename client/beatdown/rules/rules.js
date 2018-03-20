Template.beatdownRules.viewmodel({
    share: ['rulesNav'],
    rulesInSection: function(){
      return Rules.find({section: this.selectedSection()}, {sort: {position: 1}});
    }
});
