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
			title: "Headers",
			content:
				"<p>In HTML, there are six different headings, or heading elements. Headings can be used for a variety of purposes, like titling sections, articles, or other forms of content. The following is the list of heading elements available in HTML. They are ordered from largest to smallest in size. <ol><li><<span>h1></span> — used for main headings. All other smaller headings are used for subheadings.</li><li><<span>h2></span></li><li><<span>h3></span></li><li><<span>h4></span></li><li><<span>h5></span></li><li><<span>h6></span></li></ol></p><p>Add a new line and include a header with the smallest font size. Describe your current job title.</p>",
			hint: [{ id: "Hint #1", content: "<p>Try the following:</p><p><<span>element</span>>text content<<span>/element</span>></p>" }],
			solution: [
				{ id: "Opening tag", criteria: "<h6>" },
				{ id: "Closing tag", criteria: "</h6>" }
			]
		}
	],
	responses: []
};
