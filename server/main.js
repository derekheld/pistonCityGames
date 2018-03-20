import { Meteor } from 'meteor/meteor';

RulesSections = new Mongo.Collection("rulesSections");
Rules = new Mongo.Collection("rules");

Meteor.startup(() => {
    // code to run on server at startup
});