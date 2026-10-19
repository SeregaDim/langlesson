import ReactMarkdown from 'react-markdown';
import text from './nginx.md?raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import './Markdown.css';

function Nginx(){

    return (
        <>
         <p>Comand Nginx server for Linux</p>
           <div className="trambl">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{text}</ReactMarkdown>
           </div>
        </>
    );
}


export default Nginx;