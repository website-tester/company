"use strict";

const lmnt = selector => document.querySelector(selector),
lmnts = (...selectors) => [...document.querySelectorAll(selectors)]

const body = lmnt(`body`), 
header = lmnt(`header`),
nav_bar = lmnt(`#nav_bar`),
main = lmnt(`main`),
main_sections = lmnts(`main section`)

// offsetWidth includes scrollbar width and is width
// clientWidth excludes scrollbar width
// scroll_bar_width = (+document.body.offsetWidth) - (+document.body.clientWidth)
// let set_width
// function set_max_widths () {
// 	set_width = nav_bar.style.width = main.style.width = header.style.width =
// 	nav_bar.style.maxWidth = main.style.maxWidth = 
// 	header.style.maxWidth = (+document.body.offsetWidth)+`px`
	// main_sections.forEach(section => section.maxWidth = (+document.body.clientWidth-10)+`px`)
	
	// if (body.clientWidth <991) main.classList.add('mobile_resizer')
	// else main.classList.remove('mobile_resizer')
// }
// window.onresize = set_max_widths
// set_max_widths ()
/* 
when the user scrolls down, hide the navbar
when the user scrolls up, show the navbar
when fully scrolled up, show navbar and title */
// let prev_scroll_pos = window.scrollY
// window.onscroll = () => {
// 	header.style.top = (!window.scrollY ? 0 : 
// 		nav_bar.clientHeight * (prev_scroll_pos > window.scrollY) 
// 			- header.clientHeight ) + `px`

// 	prev_scroll_pos = window.scrollY
// }



// const temp_top = header.clientHeight

// let my_interval = setInterval(function () {
// 	if (temp_top == header.clientHeight) return
// 	main.style.top = +header.clientHeight+`px`
// 	clearInterval(my_interval)
// }, 5) 

// set_max_widths ()