var data = {
	module: {
		type: "HTML Fundamentals"
	},
	activities: [
		{
			title: "Introduction to HTML",
			content:
				"<p>HTML stands for HyperText Markup Language:</p><ul><li>A markup language is a computer language that defines the structure and presentation of raw text.</li><li>In HTML, the computer can interpret raw text that is wrapped in HTML elements.</li><li>HyperText is text displayed on a computer or device that provides access to other text through links, also known as hyperlinks. You probably clicked on a couple of hyperlinks on your way to this module.</li></ul><p>Learning HTML is the first step in creating websites, but even a bit of knowledge can help you inject code snippets into newsletter, blog or website templates. As you continue learning, you can layer HTML with CSS and JavaScript to create visually compelling and dynamic websites. But for now, we’re going to focus on how to add and modify basic content on a page, like text, images, and videos.</p><p>In the code editor to the right, type your name in between <<span>h1</span>> and <<span>/h1</span>>, then press Submit.</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<h1>" },
				{ id: "Closing tag", criteria: "</h1>" }
			]
		},
		{
			title: "HTML Syntax",
			content:
				"<p>A tag and the content between it is called an HTML element. It includes the following characteristics:</p><ul><li>HTML Tag — the element name, surrounded by an opening (<) and closing (>) angle bracket.</li><li>Opening Tag — the first HTML tag used to start an HTML element. The tag type is surrounded by opening and closing angle brackets.</li><li>Content — The information (text or other elements) contained between the opening and closing tags of an HTML element.</li><li>Closing tag — the second HTML tag used to end an HTML element. Closing tags have a forward slash (/) inside of them, directly after the left angle bracket.</li></ul><p>In the code editor to the right, type your current job title in between <<span>p</span>> and <<span>/p</span>>, then press Submit.</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<p>" },
				{ id: "Closing tag", criteria: "</p>" }
			]
		},
		{
			title: "HTML Hierarchy",
			content:
				"<p>HTML is organized as a collection of family tree relationships. When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element. Div elements are short for “division” or a container that divides the page into sections. These sections are very useful for grouping elements in your HTML together.</p><p>Add the paragraph below as a child of a <<span>div></span> element.</p>",
			hint: [
				{
					id: "Hint #1",
					content:
						"<p>Try the following:</p><p><<span>element</span>><<span>element></span>text content<<span>/element></span><<span>/element</<span>></p>"
				}
			],
			solution: [
				{ id: "Opening tag", criteria: "<div>" },
				{ id: "Closing tag", criteria: "</div>" }
			]
		},
		{
			title: "Attributes",
			content:
				"<p>Attributes are content added to the opening tag of an element and can be used in several different ways, from providing information to changing styling. Attributes are made up of the following two parts:<ul><li>The name of the attribute</li><li>The value of the attribute</li></ul></p><p>One commonly used attribute is the id.</p><p>Add an id attribute with the value 'introduction' to the <<span>div></span> tag</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element id='value'</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<div id='introduction'>" },
				{ id: "Closing tag", criteria: "</div>" }
			]
		},
		{
			title: "Headers",
			content:
				"<p>In HTML, there are six different headings, or heading elements. Headings can be used for a variety of purposes, like titling sections, articles, or other forms of content. The following is the list of heading elements available in HTML. They are ordered from largest to smallest in size. <ol><li><<span>h1></span> — used for main headings. All other smaller headings are used for subheadings.</li><li><<span>h2></span></li><li><<span>h3></span></li><li><<span>h4></span></li><li><<span>h5></span></li><li><<span>h6></span></li></ol></p><p>Add a new line and include a header with the smallest font size. Describe your contact information.</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<h6>" },
				{ id: "Closing tag", criteria: "</h6>" }
			]
		},
		{
			title: "Paragraphs",
			content:
				"<p>If you want to display text in HTML, you can use a paragraph. Paragraphs <p>p></span> contain a block of plain text.add <<span>p></span> opening and closing tags, and inside of the tags put the following text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum enim a cursus hendrerit. Maecenas ac odio non turpis hendrerit tempor at nec nisl.'</<span>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<p>" },
				{ id: "Closing tag", criteria: "</p>" }
			]
		},
		{
			title: "Span Containers",
			content:
				"<p>Span elements contains short pieces of text or other HTML. They are used to separate small pieces of content that are on the same line as other content.</p><p>Wrap the 'Lorem ipsum' text within an opening and closing <<span>span></span> container.</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<span>" },
				{ id: "Closing tag", criteria: "</span>" }
			]
		},
		{
			title: "Div Containers",
			content:
				"<p>Div elements are very useful for grouping elements in your HTML together. These can contain any text or other HTML elements, such as links, images, or videos. Remember to always add two spaces of indentation when you nest elements inside of <<span>div>s</span> for better readability.</p><p>Add an opening <<span>div></span> tag before the paragraph element. Place the closing <span>/div></span> tag after the paragraph that features the 'Lorem ipsum' text.</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<div>" },
				{ id: "Closing tag", criteria: "</div>" }
			]
		},
		{
			title: "Emphasizing Elements",
			content:
				"<p>The <<span>em></span> tag will generally render as italic emphasis.</p><p>In the first paragraph that starts 'Lorem ipsum', emphasize 'Lorem' using the <<span>em></span> tag.</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<em>" },
				{ id: "Closing tag", criteria: "</em>" }
			]
		},
		{
			title: "Bolding Elements",
			content:
				"<p>The <<span>strong></span> will generally render as bold emphasis.</p><p>In the first paragraph that starts 'Lorem ipsum', bold 'Lorem' using the <<span>strong></span> tag.</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<strong>" },
				{ id: "Closing tag", criteria: "</strong>" }
			]
		}
	],
	responses: []
};
