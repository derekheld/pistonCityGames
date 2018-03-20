import { Meteor } from 'meteor/meteor';

console.log ('SERVER');

RulesSections = new Mongo.Collection("rulesSections");

Meteor.startup(() => {
    // code to run on server at startup
});