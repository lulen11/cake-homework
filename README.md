Hi Pedro, Hi Roger, Hi Nick 👋🏼

This is a homework interview task provided by Cake Equity for your open Frontend Developer role 💫  A [Next.js](https://nextjs.org) app bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


####  Look at it live: 

Visit the deployed version of the project here: [https://cake-homework.vercel.app/](https://cake-homework.vercel.app/) 🎉 


####  Or look at it locally:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project. 🎉

 .


## My thought process

I chose to create a simple Next.js app with the App Router due to its efficiency, scalability and maintainability features like layouts and nested routing.

**Some of the reasoning behind my configuration choices:** 

* Instead of working with TypeScript, I chose JavaScript for this project because I’m more familiar with it—I knew I would be building basic features, and I wanted to be efficient for this small task. I am familiar with Typescript (see a recent project I’ve built with TypeScript [here](https://github.com/lulen11/airtime-website)) but I knew it would slow me down being strict. 

* I used ESLint configuration. I'm very familiar with ESLint config and it makes me a faster developer. Setting a standard and automating my formatting. 

* Styling choices:  I’m also very familiar with Tailwind CSS but again, I’m faster without it. I prefer to use SCSS and to set up my projects with CSS modules. More on that below.

* Defined routes using App Router because it’s simply more familiar to me having used this set up in my last few projects. I also am familiar with the pages directory but now it feels like a legacy option. I prefer the layouts, nested routing and the organisation for scalability.

To finalise the initial setup, I created a git repository, initialised git in my project and linked the two. I made my first commit on main, then branched off to `development` to show you how I would normally work on a development branch (or a feature branch) to collaborate and secure version control. 

From there, I set up the foundational styles for the Cake brand—setting up colour and typography variables, among other essentials. I spent a bit of time laying these foundations which I was happy to do because I wanted the code to be clean & well-structured from the start. I appreciate consistent and efficient workflows and wanted to demonstrate my workflow as scalable and adaptable for future needs.

The components are all setup individually and with CSS modules. This component-based architecture allows the work to be clean, organised and adaptable to be reused and easily maintained across the project. 
 
 .
 
### Part 1 & 2 Complete:

✅ Toggle Switch to turn dark/light mode on/off  
✅ Button to show modal  
✅ Modal that on success toggles the dark/light mode _(A two-step modal, where the first has a "Next" button and different title/description, and the second triggers the theme)_  
✅ Creative treat  
✅ Slider component    
✅ Entirely responsive


 .
 
### Some notable points about the components: 

* I placed the Theme Context component in the root layout so that this theme switch would affect the entire project. I believe there could be cleaner & more efficient ways to apply different themes to an app. Perhaps like using a design system  where you could separately manage all your theme styles and then switch your project theme with a single variable. This method could give more control over where themes are applied and allow for easier maintenance and consistency across the app.
  
* SVGs: Usually would import SVG dynamically - either making them react components or serve them as external assets for reusability, maintainability, and scalability across the project.
  * I wanted a solution that’s lightweight, clean, and able to be manipulated for interactions and motion.
  * For this task, ended up adding the logo SVG inline into its own Logo component without creating it as a React component (to avoid dependency bloat and for speed on this task) but if I was working in your lovely team, I would rather keep it organised somewhere where other icons and vectors are managed - perhaps in a design system that is imported in.
  
* The modal is set up to be two-step, and imports a surprise treat 🍰 component which reflects my personality and attention to detail.
  
* Where they’re not SVGs, I like using the Next.js <Image> component for optimising images, to make use of lazy loading, but most of all I like that it forces me to put in alt tags - I believe accessibility to be very important in web & app development.
  
* To rapidly build ‘Part 2’, I researched sliding and swiping open-source components. I wanted to leverage a lightweight and well-maintained package to create a responsive slider component with built-in swiping functionality. Leaning on this library ensures good UX and optimal performance. By using Swiper, I was able to focus on tailoring the visuals and user interactions without reinventing the wheel, resulting in a scalable and maintainable solution.
  
* I didn't include the correct arrow icons in the Slider component to save on time. Assuming in the future, these might be imported from a Cake Design Library or icon library.
  
* There's one more hidden treat to show a slither of personality—see if you can find it!

 .
 
---


 
I hope you enjoy exploring the project! 🎉 Looking forward to discussing with you.

Cheers,
Lara

