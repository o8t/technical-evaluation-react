# Technical Evaluation: React

_A technical evaluation to determine comfort with React and the JS ecosystem_

## Purpose

Welcome to the o8t React technical assessment! If you've made it this far, it means we're serious about your candidacy and want to make sure that we would be a good fit together (technically speaking).

The goal of this project is to assess your level of comfort with the Javascript frontend ecosystem and knowledge of software engineering best practices. This will help us understand where you stand in your professional development, giving us more information to determine if you are a good fit for our open role. This is good for both of us -- we wouldn't want you to be frustrated and unhappy if we place you in a role you are not prepared to crush. But we want to try to make this fun as well, so let's strap in!

We want to keep this short, so this will be a time-bound exercise on the honor system. We ask that you spend no more than **3 hours** in the execution of this assessment. We don't expect you to finish -- and whether you choose to emphasize breadth or depth is up to you -- so long as you implement the minimum set of features described below.

## The Assessment

### Where Our Story Begins...

The sleepy town of Appleville has seen a massive influx of clowns of late. While some of these clowns are of the happy-go-lucky variety, others are a bit more mischievous and are starting to scare some of the children at the local school. See exhibits below....

![Good Clowns](https://live.staticflickr.com/1144/748033123_fc7978316b_b.jpg)
![Bad Clowns](https://live.staticflickr.com/65535/3998720576_59601eb22a.jpg)

As a response to the clown influx, the local government has started to create a clown-tracking application. They have tasked you with building a UI where clowns can register themselves, provide some basic profile information, and upload a profile picture. They then want to build upon this basic version of the application to try to organize the clown's by posse, search by clown attributes, remove clowns from the database as they retire and... other clown-related things the Mayor dreams up.

Remember, the happiness of the town's children depends on you!

### What We Would Like You To Do

#### The Minimum Required Features

Build a self-contained UI application in React to implement at the least:

* Allows the user to create a clown entry
* Displays a list of clowns

What direction you take from there -- adding the other mayoral bucket-list features, or creative features you want to do instead -- is your decisions. The government has tasked building the application to you, not us...

However, you must:

* Use git as your version control system
* Provide a README with instructions to how to run the application
* End up in a state where the application opens in a browser
* Choose at least one external package/dependency and build it into the application. You must call out in the README your thought process behind why this library was chosen, and any considerations you gave (or would have given had you more time). You must be able to defend your decision about why you chose this library.

We prefer, but you are not required to:

* Use Typescript
* Organized, best practice commits
* Modern React APIs (aka Hooks). If you are more familiar with the older APIs that is no issue -- so long as you are using them correctly
* Describe your architecture in the README

**Spend time on the things that you find enjoyable**. If you build out a basic UI and want to spend time on testing instead of new features, go ahead. If you want to build a bunch of partially implemented features that don't cover edge cases instead of doubling down on refactor, go head. Want to implement persistence in Local Storage or a mocked out JSON server? Be our guest.

The choices you make help let us learn more about you, and hopefully make this exercise as least painful as possible.

### Where To Start

You are welcome to use whatever scaffolding you prefer to get up and running quickly (e.g. from a personal cookie cutter, framework you are familiar with) -- but we highly recommend that you use the [Create React App](https://create-react-app.dev/) framework.

A good starting invocation for that might be:

```bash
npx create-react-app my-app --template typescript
```

See the [Creact React App Getting Started Guide](https://create-react-app.dev/docs/getting-started) if you want to just use plain Javascript (acceptable, but not ideal) or use `npm` as your package manager.

### How You Might Spend Your Time

* ~2 hour on basic development
* 30 minutes on code clean up + refactor, inline-code documentation
* 30 minutes on docs -- how to run, what you would have added next, call out a cool easter egg you added, justification for choice of external dependency 

## Assessment Rubric

### What We Are Looking For

* Clarity and organization of code
* Separation of concerns -- e.g. display logic vs state/business logic
* Idiomatic React usage
* Inline documentation
* Personal flair

### What We Are Not Looking For

* The application to implement all of the features requested by us... erm, cough... the local government
* Perfection
* For you to boil the ocean -- get a working version of the application, iterate from there, and call out what you _would_ have liked to improve or work on next given more time. The README is your journal...

## Legalese...

<p style="font-size: 0.9rem;font-style: italic;"><img style="display: block;" src="https://live.staticflickr.com/1144/748033123_fc7978316b_b.jpg" alt="Happy Clown, Nice Day"><a href="https://www.flickr.com/photos/8211018@N03/748033123">"Happy Clown, Nice Day"</a><span> by <a href="https://www.flickr.com/photos/8211018@N03">David Reece</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC-SA 2.0</a><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg?image_id=af7ad08b-6491-43df-8bee-8fb5c115e868" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a></p>

<p style="font-size: 0.9rem;font-style: italic;"><img style="display: block;" src="https://live.staticflickr.com/65535/3998720576_59601eb22a.jpg" alt="Insane Clown Posse - 09/17/09 Minneapolis, MN"><a href="https://www.flickr.com/photos/98964418@N00/3998720576">"Insane Clown Posse - 09/17/09 Minneapolis, MN"</a><span> by <a href="https://www.flickr.com/photos/98964418@N00">relux.</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-SA 2.0</a><a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg?image_id=acf9fbc3-9c7c-4a0a-9564-b92832197e29" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a></p>
