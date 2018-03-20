import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

RulesSections = new Mongo.Collection("rulesSections");

console.log ({RulesSections: RulesSections.findOne({})});