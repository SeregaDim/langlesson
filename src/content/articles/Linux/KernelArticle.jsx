import ReactMarkdown from 'react-markdown';
import text from '../KnowingLinux/kernel.md?raw';
import UbuntuCard from './UbuntuCard';
import DebianCard from './DebianCard';
import FedoraCard from './FedoraCard';
import '../Markdown.css';


function KernelArticle(){

    return (
        <>
    <div className="section-desc">
       <ReactMarkdown>{text}</ReactMarkdown>
    </div>
        <UbuntuCard />
        <DebianCard />
        <FedoraCard />
        </>
    )
}

export default KernelArticle;