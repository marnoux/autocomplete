
# Autocomplete | StoryTeq Assessment

## [![Live Demo](https://img.shields.io/website?label=Live-Demo&style=for-the-badge&url=https://marnoux.github.io/autocomplete/)](https://marnoux.github.io/autocomplete/)

## Project setup

Run the following in your terminal or command line
```
cd {{ A local directory }} 
git clone https://github.com/marnoux/autocomplete.git
cd autocomplete
npm install
```


 
### Run the project locally


```
npm run serve
```



From a browser; navigate to [Localhost](http://localhost:8080/#/) (Please note the attached URL is the default port, yours could differ.  See the console output for the correct URL)


*For Example:*

![localhost](https://i.imgur.com/cOIa36r.png)


### Run unit tests

```
npm test
```
*You can expect the following output:* 

![unit tests](https://i.imgur.com/iLYkPxF.png)




## Autocomplete challenge - Code examples
Build a Vue.js application that lets users search for a cities and books in a provided list.
				![enter image description here](https://i.imgur.com/D3b32rA.png)
* Capture key presses from a text input and use the current value of the input to match items in the list (shown below).
	* This was done with the [`v-model` directive for two way binding](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Books.vue#L6)
* The application should output the results under the input field as soon as you type at least 3 characters.
	* ![enter image description here](https://i.imgur.com/XUbDjHI.png)
	* This was done by following the iterator pattern, and rendering it with `v-for`
	* [Method](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Books.vue#L61-L98)
	* [Directive](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Books.vue#L23-L34)
* If you type less than 3 characters in the text field, it should not output any results. (It can show a prompt to type at least 3 characters)
	* ![enter image description here](https://i.imgur.com/WKpuVK6.png)
	* This was done with a [simple placeholder](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Books.vue#L13)
* If there are no results for the search, you should let the user know.
	* ![enter image description here](https://i.imgur.com/xWXiaks.png)
* When the page loads the search field should be selected automatically, so you can start typing (similar to when you go to https://www.google.com/)
	* ![enter image description here](https://i.imgur.com/z9S7rNP.png)
	* This was done by creating [this method](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Cities.vue#L87-L90) and running it on the [created()](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Cities.vue#L92-L95) lifecycle hook
* Use some type of data store to store the results that your components will consume.
	* [Store](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/store/index.js)
		* [Books Module](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/store/modules/books.js)
		* [Cities Module](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/store/modules/cities.js)
* You can use any approach for getting the store state into your components. The **important part is that you use one or more stores to store your datasets and query results.**
	* I created [getters](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/store/modules/books.js#L41-L45) for each module and I demonstrated 2 ways of using them in the components
		* 1.) Using [computed properties](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Cities.vue#L48-L52)
		* 2.) [Accessing the store directly via the getters](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Books.vue#L66)
* There should be two autocompletes on the final page, one for the `cities` and one for `books`. The `books` autocomplete should show primarily the book title and secondarily the author for every matched result.
	* ![enter image description here](https://i.imgur.com/uKmqhYd.png)
* Include at least three unit tests. You can select the units of code to test based on what you find most important. You are free to use any testing framework of choice.
	* I wrote [10 basic tests in 6 test suites](https://github.com/marnoux/autocomplete/tree/c6ff5d5f5ca46209437707513f81c7ff51679b12/tests/unit) using the jest framework with `vue/test-utils`
	* ![enter image description here](https://i.imgur.com/9AU9U8B.png)
* For the `cities` autocomplete, search through this list for approximate matches. For example, if the user enters `san`, it should match `san`, `santiago`, `san francisco`, `santa rosa`, etc. If they enter `sant`, it should only match `santiago` and `santa rosa`.
	* ![enter image description here](https://i.imgur.com/UuRLYKV.png)
	* ![enter image description here](https://i.imgur.com/2coor7D.png)
	* This was done by utilizing the [startsWith()](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Cities.vue#L59-L61) String method
* For the `books` autocomplete, search through the list of `book.title`s. For example, if the user enters `don` it should show a suggestion for 'Don Quixote'.
	* ![enter image description here](https://i.imgur.com/DqQrGdW.png)
	* This was done by utilizing the [match()](https://github.com/marnoux/autocomplete/blob/c6ff5d5f5ca46209437707513f81c7ff51679b12/src/components/Books.vue#L67) Array method to populated a new array with the filtered values and returning the new array
	* If no matching titles are found,  a fallback check will occur which matches books on the author name
		* ![enter image description here](https://i.imgur.com/Twi3qzX.png)

### Thank you for your time! 
I hope you had as much fun reviewing the project as I had coding it!
