import MacWindows from './MacWindows'
import githubData from "../assets/github.json"
import "../styles/github.scss"

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {

    return <div className="card">
        <img src={data.image} alt="" />
        <h3>{data.title}</h3>
        <p className='desc'>{data.description}</p>
        <div className="tags">
            {
                data.tags.map(tag =>
                    <div className="tag">{tag}</div>
                )
            }
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
    </div>
};

const Github = () => {
    return (
        <MacWindows>
            <div className="cards">
                {githubData.map(project => {
                    return <GitCard data={project} />
                })}
            </div>
        </MacWindows>
    )
}

export default Github