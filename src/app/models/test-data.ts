import { History } from '.';
import { Book } from '.';
import { Interest } from '.';


export const testInterest: Interest = {
  user: 'test',
  topic: 'CSS'
};

export const testHistory: History = {
  user: 'test',
  book: '1',
  date: new Date()
}

export const testBooks =[
  {
      "id": "1",
      "authors": ["David Flanagan"],
      "title": "JavaScript:The Definitive Guide, 7th Edition",
      "description": "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You'll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level.",
      "publisher": "O'Reilly",
      "year": "2020",
      "isbn": "978-1491952023",
      "image": "https://learning.oreilly.com/library/cover/9781491952016/250w/",
      "category": "JavaScript",
      "ratings": [5,4],
      "reviews" : [
          {"reviewer":"anon1", "review": "Great book, very comprehensive"},
          {"reviewer":"anon2", "review": "Tells you everything you need to know about JavaScript"},
      ]
  },
  {
      "id": "2",
      "authors": ["David Herron"],
      "title": "Node.js Web Development, 5th Edition",
      "description": "Build scalable web applications using Node.js, Express.js, and the latest ECMAScript techniques, along with deploying applications with AWS and Docker with this updated fifth edition.",
      "publisher": "Packt Publishing",
      "year": "2020",
      "isbn": "978-1838987572",
      "image": "https://static.packt-cdn.com/products/9781838987572/cover/smaller",
      "category": "Full-stack",
      "ratings": [2,3,3,4,5,2,3,3,2,4,4,5,4,3,5,4,2],
      "reviews" : [
          {"reviewer":"anon", "review": "Very useful and up to date"},
      ]
  },
  {
      "id": "3",
      "authors": ["Eve Porcello", "Alex Banks"],
      "title": "Learning React: Modern Patterns for Developing React Apps",
      "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional programming is necessary.",
      "publisher": "O'Reilly",
      "year": "2020",
      "isbn": "978-1492051725",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg",
      "category": "React",
      "ratings": [3,5,4,4,2,4,4,4,5,5,1,2,4,3],
      "reviews" : [
          {"reviewer":"anon1", "review": "I read this cover to cover, it was amazing"},
          {"reviewer":"anon2", "review": "Really good book for modern React developers"},
          {"reviewer":"anon3", "review": "Upea kirja, erittäin kattava"}
      ]
  },
  {
      "id": "4",
      "authors": ["Aristeidis Bampakos", "Pablo Deeleman"],
      "title": "Learning Angular: A no-nonsense beginner's guide to building web applications with Angular 10 and TypeScript",
      "description": "Angular, loved by millions of web developers around the world, continues to be one of the top JavaScript frameworks thanks to its regular updates and new features that enable fast, cross-platform, and secure frontend web development. With Angular, you can achieve high performance using the latest web techniques and extensive integration with web tools and integrated development environments (IDEs). Updated to Angular 10, this third edition of the Learning Angular book covers new features and modern web development practices to address the current frontend web development landscape. ",
      "publisher": "Packt Publishing",
      "year": "2020",
      "isbn": "978-1839210662",
      "image": "https://m.media-amazon.com/images/I/41AM+6+dg1L.jpg",
      "category": "Angular",
      "ratings": [4,4,4,3,3,3,5,5,2,1,1,4,5,4,3,3,3,3,3,3],
      "reviews" : [
          {"reviewer":"anon", "review": "Diz tudo o que você precisa saber sobre Angular"}
      ]
  },
  {
      "id": "5",
      "authors": ["Sebastian Grebe"],
      "title": "Hands-On Full-Stack Web Development with GraphQL and React",
      "description": "React, one of the most widely used JavaScript frameworks, allows developers to build fast and scalable front end applications for any use case. GraphQL is the modern way of querying an API. It represents an alternative to REST and is the next evolution in web development. Combining these two revolutionary technologies will give you a future-proof and scalable stack you can start building your business around.",
      "publisher": "Packt Publishing",
      "year": "2019",
      "isbn": "978-1789134520",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51Upgne6t9L._SX404_BO1,204,203,200_.jpg",
      "category": "Full-stack",
      "ratings": [4,5,5,5,3,2,4,5,4,4,4,3,3,5,4,4,3,1],
      "reviews" : []
  },
  {
      "id": "6",
      "authors": ["Marc Garreau", "Will Faurot"],
      "title": "Redux in Action",
      "description": "With Redux in Action, you'll discover how to integrate Redux into your React application and development environment, write custom middleware, and optimize for performance.",
      "publisher": "Manning",
      "year": "2018",
      "isbn": "978-1617294976",
      "image": "data:image/jpeg;base64,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",
      "category": "React",
      "ratings": [4,2,4,5,2,3,3,3,5,2,2,4,5,4,3,4,4,4,2],
      "reviews" : [
          {"reviewer":"anon1", "review": "This book is the best thing ever in the entire world"},
          {"reviewer":"anon2", "review": "Ag innse dhut a h-uile dad a dh ’fheumas tu a bhith agad mu JavaScript"},
      ]
  },
  {
      "id": "7",
      "authors": ["Kyle Simpson"],
      "title": "You Don't Know JS: ES6 & Beyond",
      "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
      "publisher": "O'Reilly",
      "year": "2016",
      "isbn": "978-1491904244",
      "image": "https://images-na.ssl-images-amazon.com/images/I/410+tmN-P+L._SY344_BO1,204,203,200_.jpg",
      "category": "JavaScript",
      "ratings": [5,2,2,2,2,3,1,1,1,3,4,2,5,1,2,2,2],
      "reviews" : [
          {"reviewer":"anon1", "review": "This is good but getting a bit out of date"},
          {"reviewer":"anon2", "review": "Braw!"}
      ]
  },
  {
      "id": "8",
      "authors": ["Salvatore Loreto", "Simon Pietro Romano"],
      "title": "Real-Time Communication with WebRTC: Peer-to-Peer in the Browser",
      "description": "Deliver rich audio and video real-time communication and peer-to-peer data exchange right in the browser, without the need for proprietary plug-ins. This concise hands-on guide shows you how to use the emerging Web Real-Time Communication (WebRTC) technology to build a browser-to-browser application, piece by piece.",
      "publisher": "O'Reilly",
      "year": "2014",
      "isbn": "978-1449371876",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51+qJlWlF4L._SX379_BO1,204,203,200_.jpg",
      "category": "Real-time",
      "ratings": [5,5,5,3,3,3,5,5,5,3,3,3,5,5,3,3,3,3,5],
      "reviews" : [
          {"reviewer":"anon1", "review": "Quite old now but still a really useful guide to an important technology"},
          {"reviewer":"anon2", "review": "Makes a complex technology clear and understandable"},
          {"reviewer":"anon3", "review": "Fac universa artes patet quod facile intellegi."}
      ]
  },
  {
      "id": "9",
      "authors": ["Andrew Lombardi"],
      "title": "WebSocket",
      "description": "Until recently, creating desktop-like applications in the browser meant using inefficient Ajax or Comet technologies to communicate with the server. With this practical guide, you’ll learn how to use WebSocket, a protocol that enables the client and server to communicate with each other on a single connection simultaneously. No more asynchronous communication or long polling!.",
      "publisher": "O'Reilly",
      "year": "2015",
      "isbn": "978-1449369279",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51CzH7fxWhL._SX379_BO1,204,203,200_.jpg",
      "category": "Real-time",
      "ratings": [2,2,2,4,2,4,2,4,2,4,4,4,4,4,4,4,2,4],
      "reviews" : [
          {"reviewer":"anon", "review": "Quite good"},
      ]
  },
  {
      "id": "10",
      "authors": ["Frank Zammemetti"],
      "title": "Modern Full-Stack Development: Using TypeScript, React, Node.js, Webpack, and Docker",
      "description": "React is one of the most popular web development tools available today, and Node.js is extremely popular for server-side development.  The fact that both utilize JavaScript is a big selling point, but as developers use the language more, they begin to recognize the shortcomings, and that’s where TypeScript comes in and why it’s gaining in popularity quickly.  Add Webpack and Docker to the mix, and you’ve got a potent full development stack on which to build applications.",
      "publisher": "Apress",
      "year": "2020",
      "isbn": "978-1484257371",
      "iamge": "https://images-na.ssl-images-amazon.com/images/I/41q4NK-yIAL._SX348_BO1,204,203,200_.jpg",
      "category": "Full-stack",
      "ratings": [],
      "reviews" : [
          {"reviewer":"anon1", "review": "Very up to date and covers a lot of ground"},
          {"reviewer":"anon2", "review": "Comprehensive, but could be more clearly written"},
      ]
  },
  {
      "id": "11",
      "authors": ["Daniel Bugl"],
      "title": "Learn React Hooks: Build and refactor modern React.js applications using Hooks",
      "description": "React Hooks revolutionize how you manage state and effects in your web applications. They enable you to build simple and concise React.js applications, along with helping you avoid using wrapper components in your applications, making it easy to refactor code.",
      "publisher": "Packt Publishing",
      "year": "2019",
      "isbn": "978-1838641443",
      "category": "React",
      "image": "https://images-na.ssl-images-amazon.com/images/I/418PwFaON0L._SX403_BO1,204,203,200_.jpg",
      "ratings": [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      "reviews" : [
          {"reviewer":"anon1", "review": "Really interesting and well written"},
          {"reviewer":"anon2", "review": "I didn't get the point of this at all, I prefer to use Redux"},
          {"reviewer":"anon3", "review": "Worth reading"}
      ]
  },
  {
      "id": "12",
      "authors": ["Matt Frisbie"],
      "title": "Professional JavaScript for Web Developers",
      "description": "Professional JavaScript for Web Developers is the essential guide to next-level JavaScript development. Written for intermediate-to-advanced programmers, this book jumps right into the technical details to help you clean up your code and become a more sophisticated JavaScript developer. From JavaScript-specific object-oriented programming and inheritance, to combining JavaScript with HTML and other markup languages, expert instruction walks you through the fundamentals and beyond.",
      "publisher": "Wrox",
      "year": "2019",
      "isbn": "978-1119366447",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51F0hlXGrrL._SX397_BO1,204,203,200_.jpg",
      "category": "JavaScript",
      "ratings": [4,3,3,4,2,3,5,4,3,2,1,2,3,4,5,3,3,3],
      "reviews" : [
          {"reviewer":"anon1", "review": "Comprehensive, a really good guide to modern JavaScript"},
          {"reviewer":"anon2", "review": "I didn't get the point of this at all, I prefer to use Redux"},
          {"reviewer":"anon3", "review": "Worth reading"}
      ]
  },
  {
      "id": "13",
      "authors": ["Eve Porcello", "Alex Banks"],
      "title": "Learning GraphQL: Declarative Data Fetching for Modern Web Apps",
      "description": "GraphQL, a data query language that provides an alternative to REST and ad-hoc webservice architectures, is the most revolutionary technology for data fetching since Ajax. Just as React has changed the way web developers approach UI, GraphQL will change the way web developers work with data over HTTP.",
      "publisher": "O'Reilly",
      "year": "2018",
      "isbn": "978-1492030713",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51gkl1qtM2L._SX379_BO1,204,203,200_.jpg",
      "category": "Full-stack",
      "ratings": [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5],
      "reviews" : [
          {"reviewer":"anon", "review": "GraphQL is a really interesting technology for APIs and this book explains it very well"},
      ]
  },
  {
      "id": "14",
      "authors": ["Shama Hoque"],
      "title": "Full-Stack React Projects: Learn MERN stack development by building modern web apps using MongoDB, Express, React, and Node.js",
      "description": "Facebook's React combined with industry-tested, server-side technologies, such as Node, Express, and MongoDB, enables you to develop and deploy robust real-world full-stack web apps. This updated second edition focuses on the latest versions and conventions of the technologies in this stack, along with their new features such as Hooks in React and async/await in JavaScript. The book also explores advanced topics such as implementing real-time bidding, a web-based classroom app, and data visualization in an expense tracking app.",
      "publisher": "Packt Publishing",
      "year": "2020",
      "isbn": "978-1839215414",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51BqNmSO6uL._SX404_BO1,204,203,200_.jpg",
      "category": "Full-stack",
      "ratings": [4,4,4,4,4,4,4,4,4,4,4,4,4,1,5],
      "reviews" : [
          {"reviewer":"anon1", "review": "This is probably the worst £20 I've spent since, well . . . maybe ever. The book doesn't give any background on actually learning core concepts of any of the development stack. There's no explanation given of classes/methods commonly used in React. It gives no background on what any of the NodeJS server components are doing, what's actually happening under the hood with Webpack, etc."},
          {"reviewer":"anon2", "review": "This is a great book! "}
      ]
  },
  {
      "id": "15",
      "authors": ["Martine Dowden", "Michael Dowden"],
      "title": "Architecting CSS: The Programmer’s Guide to Effective Style Sheets",
      "description": "​Leverage various CSS features in combination with popular architectures in order to bring your style sheets back under your control. While CSS is the primary technology used for building beautiful web user interfaces, the style sheet files themselves are often quite ugly; left chaotic and unstructured through lack of a consistent architectural approach. By addressing the structure of your style sheets in the same way that you do with code, see how it is possible to create style rules that are clean and easy to read. Dig deep into CSS fundamentals and learn how to use the available selectors to build powerful rules.",
      "publisher": "Apress",
      "year": "2020",
      "isbn": "978-1484257494",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41BGtwa2bfL._SX348_BO1,204,203,200_.jpg",
      "category": "CSS",
      "ratings": [4,3,2,4,4,4,3,5,4,2,3,5,5,4,3,3,4,5,5,5,3],
      "reviews" : [
          {"reviewer":"anon1", "review": "ਹੁਸ਼ਿਆਰ"},
          {"reviewer":"anon2", "review": "Блестящий"},
          {"reviewer":"anon3", "review": "شاندار"},
          {"reviewer":"anon4", "review": "훌륭한"}
      ]
  },
  {
      "id": "16",
      "authors": ["Andrew Hoffman"],
      "title": "Web Application Security: Exploitation and Countermeasures for Modern Web Applications",
      "description": "​While many resources for network and IT security are available, detailed knowledge regarding modern web application security has been lacking-until now. This practical guide provides both offensive and defensive security concepts that software engineers can easily learn and apply. Andrew Hoffman, a senior security engineer at Salesforce, introduces three pillars of web application security: recon, offense, and defense. You'll learn methods for effectively researching and analyzing modern web applications-including those you don't have direct access to. You'll also learn how to break into web applications using the latest hacking techniques. Finally, you'll learn how to develop mitigations for use in your own web applications to protect against hackers.",
      "publisher": "O'Reilly",
      "year": "2020",
      "isbn": "978-1492053118",
      "image": "https://images-na.ssl-images-amazon.com/images/I/510FXFd+04L._SX258_BO1,204,203,200_.jpg",
      "category": "Security",
      "ratings": [5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,2,1],
      "reviews" : [
          {"reviewer":"anon1", "review": "Very detailed and informative"},
          {"reviewer":"anon2", "review": "I didn't undestand a word of this"},
      ]
  },
  {
      "id": "17",
      "authors": ["Eric Meyer", "Estelle Weyl"],
      "title": "CSS: The Definitive Guide: Visual Presentation for the Web",
      "description": "​If you're a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you. This revised edition provides a comprehensive guide to CSS implementation, along with a thorough review of the latest CSS specifications. CSS is a constantly evolving language for describing the presentation of web content on screen, printers, speech synthesizers, screen readers, and chat windows. It is used by all browsers on all screen sizes on all types of IoT devices, including phones, computers, video games, televisions, watches, kiosks, and auto consoles. ",
      "publisher": "O'Reilly",
      "year": "2020",
      "isbn": "978-1449393199",
      "image": "https://m.media-amazon.com/images/I/515X+RDM1LL.jpg",
      "category": "CSS",
      "ratings": [1,2,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4],
      "reviews" : [
          {"reviewer":"anon", "review": "A classic book and, indeed, a definitive guide"}
      ]
  },
  {
      "id": "18",
      "authors": ["Prabrath Siriwardena"],
      "title": "Advanced API Security: OAuth 2.0 and Beyond",
      "description": "Security must be an integral part of any development project. This book shares best practices in designing APIs for rock-solid security. API security has evolved since the first edition of this book, and the growth of standards has been exponential. OAuth 2.0 is the most widely adopted framework that is used as the foundation for standards, and this book shows you how to apply OAuth 2.0 to your own situation in order to secure and protect your enterprise APIs from exploitation and attack.",
      "publisher": "Apress",
      "year": "2019",
      "isbn": "978-1484220498",
      "image": "https://images-na.ssl-images-amazon.com/images/I/41sp+TsRhyL._SY344_BO1,204,203,200_.jpg",
      "category": "Security",
      "ratings": [4,4,4,3,3,3,2,2,2,1,1,1,1,1,1,1,2,2,3,5,5,5,5,5,],
      "reviews" : []
  }
]
