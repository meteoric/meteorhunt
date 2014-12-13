# Meteor Hunt

A [Product Hunt](http://www.producthunt.com/apps/ios) clone built in an attempt to clone [Ionic](http://ionicframework.com/)'s Angular directives to [Meteor Blaze](https://www.meteor.com/blaze). **VERY INCOMPLETE!**

## Why?
[Ionic](http://ionicframework.com/) is probably the most comprehensive, polished, cross-platform mobile framework available. But unfortunately a large portion of its functionality comes from Angular directives. I'm not a fan of trying to force-fit Angular into Meteor, so I wanted to see if I could rewrite Ionic specifically for Meteor. [Here's a blog post I wrote about the similarities between Angular directives and Meteor Templates](https://medium.com/space-camp/your-meteor-app-probably-doesnt-need-angular-13986a0323f6).

## Running

```
meteor --setting settings.json
```

## TODO

### Misc
* [x] SASS Framework Integration

### Angular Directives
* [ ] ActionSheet
* [ ] Backdrop
* [x] Content
  * [x] ion-content
  * [-] ion-refresher (not necessary with Meteor)
  * [x] ion-pane
* [ ] Events (use a 3rd party library?)
* [ ] Form Inputs
  * [ ] ion-checkbox
  * [ ] ion-radio
  * [ ] ion-toggle
* [ ] Gesture (use a 3rd party library?)
* [x] Headers/Footers
  * [x] ion-header-bar
  * [x] ion-footer-bar
* [ ] Keyboard
* [ ] Lists
  * [ ] ion-list
  * [ ] ion-item
  * [ ] ion-delete-button
  * [ ] ion-reorder-button
  * [ ] ion-option-button
  * [ ] collection-repeat
* [ ] Loading
* [x] Modal
* [ ] Navigation (requires iron:router integration)
  * [x] ion-nav-view
  * [x] ion-view
  * [ ] ion-nav-bar
  * [ ] ion-nav-buttons
  * [ ] ion-nav-back-button
  * [ ] nav-clear
* [ ] Platform
* [ ] Popover
* [ ] Popup
* [ ] Scroll
  * [ ] ion-scroll
  * [ ] ion-infinite-scroll
* [ ] Side Menus
  * [ ] ion-side-menus
  * [ ] ion-side-menu-content
  * [ ] ion-side-menu
  * [ ] expose-aside-when
  * [ ] menu-toggle
  * [ ] menu-close
* [ ] Slide Box
* [ ] Tabs
  * [x] ion-tabs
  * [ ] ion-tab
