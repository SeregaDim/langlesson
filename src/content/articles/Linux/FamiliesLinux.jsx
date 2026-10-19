import ReactMarkdown from 'react-markdown';
import text from '../KnowingLinux/families-linux.md?raw';
import '../Markdown.css';


function FamiliesLinux(){

    return (
        <>
    <div className="section-desc">
       <ReactMarkdown>{text}</ReactMarkdown>
    </div>
        </>
    )
}

export default FamiliesLinux;