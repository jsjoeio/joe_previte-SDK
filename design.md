# Design

## Process
The first thing I did was look for similar SDKs as inspiration. Once I found one I liked, I wrote the `README.md` first to practice Readme-Driven-Development.

Then I took a TDD approach and built the SDK from scratch starting with a similar repository I had to save me time writing the boilerplate.

### Tradeoffs

I wanted to work quickly to get the basic requirements met. This means there are a lot of improvements that could be made such as: 

- JSDoc strings on class with more documentation
- more error handling and friendly messages to improve the DX
- logging for troublshooting
- limitations with the underlying API that aren't documented

### What I would do for v2?

First thing I would do is some user-testing to see if the API feels intuitive. I would reach out to someone from the Twitter dev community and send them a link to the repo and ask them to try it. If they can't do it in 2mins or less, then I'd focus on that first.

Next, I would refactor the tests to be more deterministic - right now they call the API directly which means network failures could lead to false negatives. 

Lastly, I would add an `/examples` directory to the root with examples for using this SDK in common frameworks like React, Svelte and Vue. 

See real usage here: https://stackblitz.com/edit/nextjs-2bp8n9?file=pages/index.js