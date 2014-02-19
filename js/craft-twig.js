/**
* Twig Patterns
*
* @author Barrel Strength Design
* @version 0.3.0
*/
Rainbow.extend('twig', [
	{
	 'name': 'source.html.embedded',
	 'matches': {
	     2: {
	         'language': 'html'
	     }
	 },
	 'pattern': /(&lt;)([\s\S]*?)(\/?\??&gt;)/gm
	},
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
	{
	 'name': 'comment.twig',
	 'pattern': /\{#[\S\s]*?#\}/g
	},
	{
	 'matches': {
	     1: 'support.tag.open',
	     2: 'support.tag.close'
	 },
	 'pattern': /(\{\%|\{\{)|(\}\}|\%\})/g
	},
	{
		'name': 'support.tag',
		'matches': {
			1: 'support.tag.open',
			2: {
			    'matches': {
			        1: 'support.tag-name',
			        2: {
			            'matches': {
			            		1: {
			            			'matches': {
			            				1: 'support.tag.open',
			            				2: {
			            				    'matches': {
			            				      1 : 'support.attribute',
			            				      2 : 'string.value',
			            				      3 : 'support.attribute',
			            				      4 : 'constant.numeric' 
			            				    },
			            				    'pattern': /([a-zA-Z]*):|(['"].*?['"])|((\|)(abs|batch|capitalize|convert_encoding|date|date_modify|default|escape|first|format|join|json_encode|keys|last|length|lower|merge|nl2br|number_format|raw|replace|reverse|round|slice|sort|split|striptags|title|trim|upper|url_encode|t|translate))|(\d+)/g
			            				},
			            				3: 'support.tag.close',
			            			},
			            			'pattern': /(\{)([\S\s]*?)(\})/g
			            		},
			                2: 'support.tag-name'
			            },
			            'pattern': /(\{[\S\s]*?\})|\b(in|is)\b/g
			        },
			    },
			    'pattern': /((?:end)?(?:autoescape|block|do|embed|extends|filter|flush|for|from|if|import|include|macro|sandbox|set|spaceless|use|verbatim))([\S\s]*)/g
			},
	    3: 'support.tag.close'
  	},
    'pattern': /(\{\%)([\S\s]*?)(\%\})/g
		// 'matches': {
		//   1: 'support.tag.open',
		//   2: 'support.tag-name',
		//   6: 'support.tag.close'
		// },
		// 'pattern': /(\{\%){1} ((end)?(autoescape|block|do|embed|extends|filter|flush|for|from|if|import|include|macro|sandbox|set|spaceless|use|verbatim))(.*?|[\S\s]*?)(\%\}){1}/g
	},
	{
	 'matches': {
	     1: 'support.attribute',
	     2: 'support.attribute'
	 },
	 'pattern': /(\|)(abs|batch|capitalize|convert_encoding|date|date_modify|default|escape|first|format|join|json_encode|keys|last|length|lower|merge|nl2br|number_format|raw|replace|reverse|round|slice|sort|split|striptags|title|trim|upper|url_encode|t|translate)/gi
	},
	{
	 'matches': {
	     1: 'string.quote',
	     2: 'string.value',
	     3: 'string.quote'
	 },
	 'pattern': /('|")(.*?)(\1)/g
	},
	{
	 'matches': {
	     1: 'constant.numeric',
	     2: 'keyword.unit'
	 },
	 'pattern': /(\d+)(px|em|cm|s|%)?/g
	},
	// {
	//     'matches': {
	//         1: 'support.operator'
	//     },
	//     'pattern': /\{\% (in|is|and|or|not|\(\)|b-and|b-xor|b-or|\+|-|\/|\%|*|**|==|!=|<|>|>=|<=|===|starts with|ends with|matches|\.\.|~|\.|\[\]|\?\:).*?\%\}/g
	// },
], true);
