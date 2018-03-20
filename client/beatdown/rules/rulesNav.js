
ViewModel.share({
  rulesNav:{
    selectedSection: null,
    rulesSections: function() {
      return RulesSections.find({}, {sort: {position: 1}});
    }
  }
});

Template.beatdownRulesNav.viewmodel({
    share: ['rulesNav'],
    sectionSelected: function(section){
      return section._id == this.selectedSection();
    }, selectSection: function(section){
      this.selectedSection(section._id);
    }, onCreated: function(){
      const callbackId = setInterval(
        ()=> {
          let firstSection = RulesSections.findOne({"position": 0});
          if(firstSection){
            clearInterval(callbackId);
            this.selectSection(firstSection);
          }
        }, 100);
    }
});