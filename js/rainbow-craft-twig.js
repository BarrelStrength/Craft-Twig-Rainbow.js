/**
* Twig patterns, with support for Craft CMS tags
*
* @author Barrel Strength Design
* @version 0.3.0
*/
Rainbow.extend('twig', [

	// Embedded HTML Syntax
	{
		'name': 'source.html.embedded',
		'matches': {
			2: {
				'language': 'html'
			}
		},
		'pattern': /(&lt;)([\s\S]*?)(\/?\??&gt;)/gm
	},

	// Embedded CSS Syntax
	{
		'name': 'source.css.embedded',
		'matches': {
			1: {
				'matches': {
					1: 'support.tag.style',
					2: [
							{
								'name': 'entity.tag.style',
								'pattern': /^style/g
							},
							{
								'name': 'string',
								'pattern': /('|")(.*?)(\1)/g
							},
							{
								'name': 'entity.tag.style.attribute',
								'pattern': /(\w+)/g
							}
					],
					3: 'support.tag.style'
				},
				'pattern': /(&lt;\/?)(style.*?)(&gt;)/g
			},
			2: {
				 'language': 'css'
			},
			3: 'support.tag.style',
			4: 'entity.tag.style',
			5: 'support.tag.style'
		},
		'pattern': /(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm
	},

	// Embedded Javascript Syntax
	{
		'name': 'source.js.embedded',
		'matches': {
			1: {
				'matches': {
					1: 'support.tag.script',
					2: [
							{
								'name': 'entity.tag.script',
								'pattern': /^script/g
							},
							{
								'name': 'string',
								'pattern': /('|")(.*?)(\1)/g
							},
							{
								'name': 'entity.tag.script.attribute',
								'pattern': /(\w+)/g
							}
					],
					3: 'support.tag.script'
				},
				'pattern': /(&lt;\/?)(script.*?)(&gt;)/g
			},
			2: {
				'language': 'javascript'
			},
			3: 'support.tag.script',
			4: 'entity.tag.script',
			5: 'support.tag.script'
		},
		'pattern': /(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm
	},

	// Comment
	{
		'name': 'comment.twig',
		'pattern': /\{#[\S\s]*?#\}/g
	},

	// Action and Output Tags
	{
	 'matches': {
			1: 'support.tag.open',
			2: 'support.tag.close'
	 },
	 'pattern': /(\{\%|\{\{)|(\}\}|\%\})/g
	},

	// Strings
	{
		'matches': {
			1: 'string.quote',
			2: 'string.value',
			3: 'string.quote'
		},
		'pattern': /('|")(.*?)(\1)/g
	},

	// Numbers and Units
	{
		'matches': {
			1: 'constant.numeric',
			2: 'keyword.unit'
		},
		'pattern': /(\d+)(px|em|cm|s|%)?/g
	},

	// Constants 
	{	
		'matches': {
			1: 'constant.language'
		},
		'pattern': /\s(true|false|null|none)(?=\s)/ig
	},

	// Operators 
	{	
		'matches': {
			1: 'support.operator.comparison', // (?:(?:!|=)=|(?:s|n))
			2: 'support.operator.arithmetic', // Arithmetic (This breaks highlighting when adding '%')
			3: 'support.operator.assignment',
			4: 'support.operator.logical',
			5: 'support.operator.special',
			6: 'support.operator.range'
		},
		'pattern': /\s(\=\=|\!\=|\<|\>|\<\=|\>\=|\=\=\=|starts with|ends with|matches)(?=\s)|\s((?:\+|\-|\*|\/|%|\*\*))(?=\s)|\s((?:\=|~))(?=\s)|\s((?:and|or|not|\(\)|b-and|b-xor|b-or|\?|\:))(?=\s)|\s(in|is)(?=\s)|\d(\.\.)\d/ig
	},

	// Parameters
	{	
		'matches': {
			1: 'support.parameter'
		},
		'pattern': /\s([a-zA-Z]+)(?=\s?\:)/g
	},

	// Filters
	{	
		'matches': {
			1: 'support.filter',
			2: 'support.filter'
		},
		'pattern': /\s?(\|)\s?([a-zA-Z_]+)(?=\s)?/g
	},

	// Functions
	{	
		'matches': {
			1: 'support.function'
		},
		'pattern': /\s([a-zA-Z]+)(?=\()/g
	},

	// Tags
	{	
		'matches': {
			1: 'support.tag-name',
			2: 'support.tag-name'
		},
		'pattern': /\s((?:end)?(?:autoescape|do|embed|extends|filter|flush|for|from|if|import|include|macro|sandbox|set|spaceless|use|verbatim|exit|header|includeCss|includeCssFile|includeHiResCss|includeJs|includeJsFile|nav|paginate|redirect|requireLogin|requirePermission|switch))(?=\s)|\s((?:end)?block(?!\sin))(?=\s)/g
	}


], true);