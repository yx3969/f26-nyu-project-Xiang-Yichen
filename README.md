## **Instructions**

### **Step-by-Step: Getting Set Up**


**1\. Click the green "Use this template" button**

This creates a brand new repository under your own GitHub account, pre-loaded with the starting files.

**2\. Name your repository**

Use this naming convention:

`nyu-f26-lastname-firstname`

**3\. Click "Create repository from template"**

GitHub copies the files and takes you to your new repo page.

**4\. Click the green "Code" button → "Create Codespace"**

**5\. Wait about 15 minutes while it boots up**

This is normal. Codespaces is spinning up a virtual computer for you in the cloud, installing dependencies, and opening VS Code in your browser. Grab a sip of water while it loads.

**6\. You're ready**

When the browser tab opens to VS Code, open the `style.css` file in the file explorer on the left. The base styles are already written for you, and each rule has **STEP** comments showing where the grid properties go. That's your starting point — we'll type the grid code together in class, one step at a time.

---

## **GitHub Codespaces — A Brief Guide**

### **What Is It?**

Codespaces is a development environment that runs entirely in your browser. Instead of installing software on your own computer, you get a virtual computer in the cloud — pre-configured and ready to code — that you access through a web browser. Microsoft (which owns GitHub) hosts it.

### **What It Saves Us From**

Normally, getting a development environment set up requires installing and configuring a bunch of tools:

* A code editor (VS Code)  
* A terminal (command line)  
* Git (version control)  
* Node.js, Python, or whatever runtime the project needs  
* Extensions, themes, settings

Each one of these can break in unique ways depending on your operating system, your computer's permissions, or just bad luck. **Codespaces eliminates all of that.** You click one button and you're in a fully working environment. No "it works on my machine" problems.

### **How It Works (High Level)**

1. A project lives in a GitHub repository.  
2. You click the green **Code** button and select **Open with Codespaces**.  
3. GitHub spins up a lightweight virtual machine running Linux, installs the project's dependencies automatically, and opens a browser-based version of VS Code.  
4. You code, save, and commit just like you would on your local machine.  
5. When you're done, you stop the Codespace. Next time you come back, everything is exactly where you left it.

The environment is defined by a file called `devcontainer.json` (or `.devcontainer/`) in the repository. It's like a recipe that tells GitHub "this project needs X, Y, and Z."

### **The Catch: It's Slow to Start (And Why)**

A cold start takes **1–3 minutes**. Here's why:

* **A new virtual machine has to boot.** Codespaces isn't "running" until you open it. There's no always-on computer — one is created for you on demand. That means spinning up an OS from scratch.  
* **Your dependencies install.** If the project requires packages or libraries, Codespaces runs the install process when it starts. This is the same `npm install` or `pip install` you'd run locally — it just happens automatically.  
* **Extensions and settings sync.** VS Code loads your extensions, themes, and preferences from your GitHub account.

**Once it's running, it's fast.** The delay is only on the first launch of the day (or after you've manually stopped the Codespace). If you keep it open between sessions, there's no wait.

### **Tips**

* **Don't close your Codespace mid-session.** Just leave the tab open. If you close it, stop the Codespace from the GitHub dashboard so it doesn't eat into your monthly usage hours.  
* **Your work is saved automatically.** Even if the Codespace stops, the files are stored on GitHub. You won't lose anything.  
* **You get a fixed number of free hours per month** through the GitHub Student Developer Pack. A cold start uses some of those hours just booting up, so it's worth keeping one Codespace alive while you're actively working.  
* **If you need to work offline,** you can always install VS Code and Git locally instead but it does take some set up — Codespaces is a convenience, not a requirement.

## ------------------------------------------------------------------------------

## **Weekly Update - Oct. 24**

### **What I changed this week**

This week, I converted the project from static HTML to dynamically generating content using JavaScript. Previously, the reflection steps were directly written in HTML as an independent "article" element. I replaced these repeated blocks with a HTML container and moved the content of the reflection steps into a JavaScript array.

### **What type of data I am displaying**

The dynamic data in my project represents the reflection steps (5 Items = 5 Steps) in my AI learning tool. Each item in the array contains information such as:
* **Step title**
* **Reflection question**
* **Example user answer**

### **How the JavaScript creates the HTML**
I integrated all the reflection steps into a JavaScript array instead of writing them one by one in HTML. Next, I used “document.getElementById()” to find the area on the page where I wanted to display these steps.

Then, I used the "forEach()" method, the program will go through these reflection steps one by one. For each step, JavaScript creates the corresponding HTML element, fills in the question and answer text, and places all the content in the container. This makes the page easier to update because I can modify or add reflection steps in the array without rewriting the same HTML structure.

### **Any challenges I encountered**
1. One challenge I encountered was that initially, the dynamically generated reflection steps were not displayed on the page. After trying, I found that `<script src="script.js"></script>` cannot be placed in the `<head></head>` section. At that time, JavaScript started to execute before the browser had finished reading `<div id="steps-container">`, resulting in "document.getElementById("steps-container")" being unable to find the container. I solved this problem by moving the `<script>` tag to the bottom of the `<body></body>` to ensure that the HTML was loaded before the JavaScript was executed.

2. Furthermore, in HTML, I previously had doubts about the differences between the outer `<section>` and the inner container `<div>`. Later, I learned that `<section>` represents the entire reflection area, while the inner `<div id="steps-container">` is the specific element pointed to by JavaScript when inserting generated content.

3. Another difficulty lies in the fact that I was once unsure whether it was necessary to add the class name "Class" to the elements dynamically generated by JavaScript before adding styles to them. I understand that this is not always necessary. For example, I can use a selector like `#steps-container article` in CSS to uniformly set the style of all dynamically created `<article>` elements.

### **Next Week**
Next week, in accordance with the corresponding assignment requirements, I plan to optimize the layout and interaction of the "Reflection Steps" to make the page effect closer to my high-fidelity prototype image. And in the "head" section, it is not arranged vertically but horizontally. Meanwhile, I will explore how to build a responsive presentation for mobile devices.

### **Mockup**
**My latest Figma/mockup link:**
[Yichen's Project](https://www.figma.com/design/SNMPC9HrIMjS0UH0I9JDuw/Yichen-Xiang_LandingPage?node-id=0-1&t=PwpFvl7QvtSgscJT-1)


## ------------------------------------------------------------------------------
### **Structure Audit — [Oct. 26]**

**Fixed today:**
- I checked the page against the mockup, verifying the HTML structure, block order, title, font, color and JavaScript. During the audit process, I did not find any missing sections or major problems during the audit.

- The semantic elements should be placed on the outside. For instance, I placed the `<header>` and `<footer>` sections within the `<body>` and did not wrap them with `<section>`.

- I updated my CSS colors to use variables in `:root` instead of repeating hex values throughout the stylesheet. For example, I stored `#A587E9` as `--primary` and now use `var(--primary)` wherever that purple is needed. This makes the colors easier to update and keeps the stylesheet more consistent.

- I also reviewed my spacing and changed values that did not follow my 8px spacing scale. For example, I changed `12px` padding to `16px`.

**Still missing:**
- No major structural issues found during this audit.

**One thing I learned**
- I learned that CSS variables make it easier to manage repeated colors. Instead of changing the same hex value in several places, I can change the value once in `:root`, and every element using that variable updates automatically.

## ------------------------------------------------------------------------------
## **Weekly Update - Nov. 1 - Layout with CSS Grid**

### **What I changed this week**
This week, I focused on making the webpage layout closer to my Figma desktop mockup by using CSS Grid, Flexbox, and a responsive breakpoint.

I added Grid to the overall page structure and used a three-column grid for the reflection-step cards on desktop. I kept the reminder, previous chat, CTA, and footer mostly in normal flow because they are single-column sections.

I used Flexbox in the header to arrange the Back link, title, and Hint button in one horizontal row. I also used Flexbox to center the “Complete My Check” button.

I added a media query so the reflection-step cards stack into one column on smaller screens and display in multiple columns on desktop. I also adjusted the page width, spacing, card alignment, border radius, and margins so the webpage looks closer to my original Figma mockup.

### **Any challenges I encountered**
One challenge was deciding when to use Grid and when to use Flexbox. I learned that Grid works better for the reflection-step cards because they need rows and columns, while Flexbox works better for elements that are arranged along one direction, such as the header and CTA.

I also learned how responsive layout changes can be controlled with a media query so the same page works at both mobile and desktop widths.

### **Next Week**
Next, I want to continue refining the responsive layout and improve smaller visual details so the webpage matches the Figma mockup more closely.