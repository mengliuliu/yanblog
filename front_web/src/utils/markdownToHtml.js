
import styled from 'styled-components';
import 'github-markdown-css'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTocDoneRight from 'markdown-it-toc-done-right'

var hljs = require('highlight.js'); // https://highlightjs.org/
var string = require("string");
let navHtml = null

function legacySlugify(s) {
    return string(s).slugify().toString();
}
// Actual default values
var md = require('markdown-it')({
    html: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
        }
        return ''; // use external default escaping
    }
}).use(markdownItAnchor, { permalink: true, permalinkBefore: true, permalinkSymbol: '📎' })
    .use(markdownItTocDoneRight, {
        callback: (html, ast) => {
            navHtml = html
        }
    })

const MarkDownView = (props) => {
    const { content } = props
    var result = md.render(content.content);
    console.log(result);
    return (
        <Box>
            <div dangerouslySetInnerHTML={{ __html: result }} className='markdown-body content'></div>
            <div className="markdown-body nav" dangerouslySetInnerHTML={{ __html: navHtml }}></div>
        </Box>
    )
}

const Box = styled.div`
    margin-top: 20px;
    display: flex;
    .content{
        flex: 1;
    }
    .nav{
        width: 250px;
    }
`


export default MarkDownView;