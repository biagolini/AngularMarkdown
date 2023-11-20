# Using Markdown in Angular

## Overview

This project is a simple Angular-based quiz application designed for educational purposes. It utilizes ngx-markdown for rendering Markdown content and Angular Material for a polished user interface.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Step 1: Project Setup

Select a directory where you want to save your project files. Open a terminal in this directory and create the base project using the Angular CLI:

```
ng new Markdown
```

### Step 2: Enter Project Directory

Navigate to the project directory:

```
cd Markdown
```

### Step 3: Install ngx-markdown

Install the ngx-markdown library:

```
npm install ngx-markdown
```

Note: During the installation in a test environment, if you encounter a dependency-related error, it may be due to ngx-markdown requiring a more recent version of Angular. In this case, update Angular using the following commands and then repeat the installation:

```
npm install -g @angular/cli
ng update @angular/core @angular/cli
```

### Step 4: Add Angular Material

Add Angular Material to your project:

```
ng add @angular/material
# Select options as follows:
Would you like to proceed? Yes
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Do not include
```

### Step 5: Import Required Modules

Import the MarkdownModule and necessary Angular Material modules in your project module. In this project, we are using the package in AppModule. Refer to the code in the src\app\app.module.ts file of this repository.

### Step 6: Develop the Component

Develop the component for this project. Work on the src\app\app.component.ts and src\app\app.component.html files.
